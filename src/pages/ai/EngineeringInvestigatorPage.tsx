import { useState, type FormEvent, type JSX } from "react";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import "./AiPage.css";

export type InvestigationResult = {
  summary: string;
  probableCause: string;
  confidence: number;
  evidence: string[];
  recommendations: string[];
};

type InvestigationStatus = "idle" | "loading" | "complete" | "error";
type StageStatus = "pending" | "active" | "complete";
type InvestigationStage =
  "deployments" | "metrics" | "logs" | "code" | "findings";
type StreamEvent =
  | { type: "tool_started"; tool: string }
  | { type: "tool_completed"; tool: string }
  | { type: "completed"; result: InvestigationResult }
  | { type: "error"; message: string };

const investigationStages = [
  { id: "deployments", label: "Checking deployments" },
  { id: "metrics", label: "Inspecting metrics" },
  { id: "logs", label: "Reviewing logs" },
  { id: "code", label: "Inspecting code changes" },
  { id: "findings", label: "Producing findings" },
] as const;

const initialStageStatuses: Record<InvestigationStage, StageStatus> = {
  deployments: "pending",
  metrics: "pending",
  logs: "pending",
  code: "pending",
  findings: "pending",
};

function InvestigationFindings({
  result,
  status,
  error,
}: {
  result: InvestigationResult | null;
  status: InvestigationStatus;
  error: string | null;
}): JSX.Element {
  if (!result) {
    const message =
      status === "loading"
        ? "Reviewing available signals"
        : status === "error"
          ? "Investigation unavailable"
          : "Ready for an investigation";
    const detail =
      status === "loading"
        ? "The agent is gathering evidence. Findings will appear when the request is complete."
        : (error ??
          "Findings will appear here after the investigator has reviewed the available signals.");

    return (
      <div className="ai-findings-empty" aria-live="polite">
        <span aria-hidden="true">◇</span>
        <div>
          <p>{message}</p>
          <small>{detail}</small>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-findings-content" aria-live="polite">
      <section className="ai-finding ai-finding--summary">
        <p className="eyebrow">Summary</p>
        <p>{result.summary}</p>
      </section>
      <section className="ai-finding ai-finding--cause">
        <p className="eyebrow">Probable cause</p>
        <p>{result.probableCause}</p>
        <span className="ai-confidence">{result.confidence}% confidence</span>
      </section>
      <section className="ai-finding">
        <p className="eyebrow">Evidence</p>
        <ul>
          {result.evidence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="ai-finding">
        <p className="eyebrow">Recommendations</p>
        <ol>
          {result.recommendations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "string")
  );
}

function isInvestigationResult(value: unknown): value is InvestigationResult {
  if (!value || typeof value !== "object") return false;

  const result = value as Record<string, unknown>;
  return (
    typeof result.summary === "string" &&
    typeof result.probableCause === "string" &&
    typeof result.confidence === "number" &&
    Number.isFinite(result.confidence) &&
    isStringArray(result.evidence) &&
    isStringArray(result.recommendations)
  );
}

function getErrorMessage(payload: unknown, status: number): string {
  if (payload && typeof payload === "object") {
    const message = (payload as Record<string, unknown>).message;
    if (typeof message === "string" && message.trim()) return message;
  }
  return `The investigator returned an error (${status}). Please try again.`;
}

function isValidGitHubRepository(value: string): boolean {
  const repository = value.trim().replace(/\/$/, "");
  const repositoryPattern = /^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+(?:\.git)?$/;

  if (repositoryPattern.test(repository)) return true;

  try {
    const url = new URL(repository);
    const path = url.pathname.replace(/^\//, "").replace(/\/$/, "");

    return (
      (url.hostname === "github.com" || url.hostname === "www.github.com") &&
      repositoryPattern.test(path)
    );
  } catch {
    return false;
  }
}

function getInvestigationApiUrl(): string {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl) {
    throw new Error(
      "The investigator API URL is not configured. Set VITE_API_URL and try again.",
    );
  }

  return `${apiUrl.replace(/\/$/, "")}/api/investigations/stream`;
}

function getStageForTool(tool: string): InvestigationStage | null {
  const normalizedTool = tool.toLowerCase();

  if (normalizedTool.includes("deploy")) return "deployments";
  if (normalizedTool.includes("metric")) return "metrics";
  if (normalizedTool.includes("log")) return "logs";
  if (normalizedTool.includes("code") || normalizedTool.includes("commit")) {
    return "code";
  }

  return null;
}

function parseStreamEvent(rawEvent: string): StreamEvent | null {
  const data = rawEvent
    .split(/\r?\n/)
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trimStart())
    .join("\n");
  const payloadText = data || rawEvent.trim();

  if (!payloadText) return null;

  try {
    const payload: unknown = JSON.parse(payloadText);

    if (!payload || typeof payload !== "object") return null;

    const event = payload as Record<string, unknown>;

    if (
      (event.type === "tool_started" || event.type === "tool_completed") &&
      typeof event.tool === "string"
    ) {
      return { type: event.type, tool: event.tool };
    }

    if (event.type === "completed" && isInvestigationResult(event.result)) {
      return { type: "completed", result: event.result };
    }

    if (event.type === "error" && typeof event.message === "string") {
      return { type: "error", message: event.message };
    }
  } catch {
    return null;
  }

  return null;
}

export function EngineeringInvestigatorPage(): JSX.Element {
  const [repository, setRepository] = useState("");
  const [prompt, setPrompt] = useState(
    "Investigate why orders-api latency increased after the latest deployment.",
  );
  const [result, setResult] = useState<InvestigationResult | null>(null);
  const [status, setStatus] = useState<InvestigationStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [stageStatuses, setStageStatuses] = useState(initialStageStatuses);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const repositoryValue = repository.trim();
    const message = prompt.trim();

    if (!isValidGitHubRepository(repositoryValue)) {
      setValidationError(
        "Enter a GitHub repository as owner/repository or a github.com URL.",
      );
      return;
    }

    if (!message) {
      setValidationError(
        "Describe the engineering issue you want to investigate.",
      );
      return;
    }

    setResult(null);
    setError(null);
    setValidationError(null);
    setStatus("loading");
    setStageStatuses({ ...initialStageStatuses, deployments: "active" });

    try {
      const response = await fetch(getInvestigationApiUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repository: repositoryValue, message }),
      });
      if (!response.ok) {
        const payload: unknown = await response.json().catch(() => null);
        throw new Error(getErrorMessage(payload, response.status));
      }

      const reader = response.body?.getReader();

      if (!reader) {
        throw new Error(
          "The investigator did not return a readable event stream. Please try again.",
        );
      }

      const decoder = new TextDecoder();
      let buffer = "";
      let receivedResult = false;

      const processEvent = (rawEvent: string) => {
        const streamEvent = parseStreamEvent(rawEvent);

        if (!streamEvent) return;

        if (streamEvent.type === "tool_started") {
          const stage = getStageForTool(streamEvent.tool);
          if (stage) {
            setStageStatuses((current) => {
              const next = { ...current };

              for (const stageId of Object.keys(next) as InvestigationStage[]) {
                if (next[stageId] === "active") {
                  next[stageId] = "pending";
                }
              }

              next[stage] = "active";
              return next;
            });
          }
          return;
        }

        if (streamEvent.type === "tool_completed") {
          const stage = getStageForTool(streamEvent.tool);
          if (stage) {
            setStageStatuses((current) => {
              const next = { ...current, [stage]: "complete" };
              const evidenceStages: InvestigationStage[] = [
                "deployments",
                "metrics",
                "logs",
                "code",
              ];

              if (
                evidenceStages.every(
                  (evidenceStage) => next[evidenceStage] === "complete",
                )
              ) {
                next.findings = "active";
              }

              return next;
            });
          }
          return;
        }

        if (streamEvent.type === "error") {
          throw new Error(streamEvent.message);
        }

        receivedResult = true;
        setResult(streamEvent.result);
        setStageStatuses({
          deployments: "complete",
          metrics: "complete",
          logs: "complete",
          code: "complete",
          findings: "complete",
        });
        setStatus("complete");
      };

      while (true) {
        const { value, done } = await reader.read();
        buffer += decoder.decode(value, { stream: !done });

        const events = buffer.split(/\r?\n\r?\n/);
        buffer = events.pop() ?? "";
        events.forEach(processEvent);

        if (done) break;
      }

      if (buffer.trim()) processEvent(buffer);
      reader.releaseLock();

      if (!receivedResult) {
        throw new Error(
          "The investigator stream ended before returning findings. Please try again.",
        );
      }
    } catch (requestError) {
      setStatus("error");
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The investigator could not be reached. Please try again.",
      );
    }
  };

  const statusLabel =
    status === "loading"
      ? "Investigation in progress"
      : status === "complete"
        ? "Findings ready"
        : status === "error"
          ? "Connection error"
          : "Awaiting agent";
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" className="ai-page">
        <section
          className="ai-page-hero section-shell"
          aria-labelledby="hero-title"
        >
          <p className="eyebrow">AI Lab / Engineering Investigator</p>
          <h1 id="hero-title" className="hero-title ai-page-title">
            AI Engineering <em>Investigator</em>
          </h1>
          <div className="ai-page-hero-detail">
            <p>
              An AI engineering investigation agent that helps analyze incidents
              after a deployment. You give it a GitHub repository and describe
              the problem. The agent gathers evidence using different tools,
              looks at the actual recent commits and code changes, compares them
              with deployment, metrics, and log data, and then gives you a
              probable cause, supporting evidence, recommendations, and a
              confidence score.
            </p>
            <p className="ai-technology-line">
              Google ADK <span aria-hidden="true">·</span> Gemini{" "}
              <span aria-hidden="true">·</span> TypeScript{" "}
              <span aria-hidden="true">·</span> React
            </p>
          </div>
        </section>
        <section
          className="ai-workspace section-shell"
          aria-labelledby="investigation-title"
        >
          <div className="ai-workspace-heading">
            <p className="eyebrow">Start an investigation</p>
            <h2 id="investigation-title">Give the agent a signal to follow.</h2>
          </div>
          <form
            className="ai-investigation-form"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="ai-repository-field">
              <label htmlFor="investigation-repository">
                GitHub repository
              </label>
              <input
                id="investigation-repository"
                name="investigation-repository"
                type="text"
                value={repository}
                onChange={(event) => setRepository(event.target.value)}
                placeholder="mehmood14/ai-engineering-investigator"
                aria-describedby="repository-help"
                aria-invalid={validationError !== null}
                required
              />
              <small id="repository-help">
                Use owner/repository or a full GitHub repository URL.
              </small>
            </div>
            <div className="ai-prompt-label-row">
              <label htmlFor="investigation-prompt">
                What should I investigate?
              </label>
            </div>
            <textarea
              id="investigation-prompt"
              name="investigation-prompt"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              rows={4}
              required
              aria-invalid={validationError !== null}
            />
            <p className="ai-demo-note">
              Demo telemetry uses simulated deployments, metrics, and logs.
              GitHub code analysis uses real repository data.
            </p>
            {validationError && (
              <p className="ai-form-error" role="alert">
                {validationError}
              </p>
            )}
            <div className="ai-form-footer">
              <div className="ai-agent-connection">
                <p>Connected to the local Google ADK investigator.</p>
                <span className={`ai-status ai-status--${status}`}>
                  {statusLabel}
                </span>
              </div>
              <div className="ai-form-actions">
                <button
                  className="button button-primary"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Investigating…" : "Investigate"}{" "}
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
            {status !== "idle" && (
              <ol
                className="ai-investigation-timeline"
                aria-label="Investigation progress"
              >
                {investigationStages.map((stage, index) => (
                  <li
                    key={stage.id}
                    className={`ai-activity-stage ai-activity-stage--${stageStatuses[stage.id]}`}
                    aria-label={`${stage.label}: ${stageStatuses[stage.id]}`}
                  >
                    <span className="ai-stage-marker" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="ai-stage-copy">
                      <span className="ai-stage-label">{stage.label}</span>
                      <span className="ai-stage-state" aria-hidden="true">
                        {stageStatuses[stage.id] === "complete" ? "✓" : null}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </form>
        </section>
        <section
          className="ai-results section-shell"
          aria-label="Investigation findings"
        >
          <InvestigationFindings
            result={result}
            status={status}
            error={error}
          />
        </section>
        <section
          className="ai-agent-progress section-shell"
          aria-labelledby="agent-progress-title"
        >
          <div className="ai-agent-progress-heading">
            <p className="eyebrow">Agent progress</p>
            <h2 id="agent-progress-title">
              Real repository evidence, with more signals to connect.
            </h2>
          </div>

          <div className="ai-agent-progress-grid">
            <section className="ai-agent-progress-item ai-agent-progress-item--done">
              <p className="eyebrow">
                <span className="ai-progress-check" aria-hidden="true">
                  ✓
                </span>
                Done
              </p>
              <p>
                Real GitHub integration — repositories, commits, changed files,
                and commit diffs.
              </p>
            </section>

            <section className="ai-agent-progress-item">
              <p className="eyebrow">Remaining</p>
              <ul>
                <li>Real deployments → GitHub Actions</li>
                <li>
                  Real metrics → Prometheus, OpenTelemetry, and similar sources
                </li>
                <li>Real logs → a logging or observability source</li>
              </ul>
            </section>
          </div>

          <p className="ai-agent-progress-note">
            Then the agent can investigate incidents using{" "}
            <strong>fully real evidence</strong>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
