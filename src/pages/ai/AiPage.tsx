import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import "./AiPage.css";

type Agent =
  | {
      description: string;
      href: string;
      name: string;
      stack: string;
      status: "available";
    }
  | {
      description: string;
      name: string;
      stack: string;
      status: "upcoming";
    };

const agents: readonly Agent[] = [
  {
    description:
      "Correlate deployments, metrics, logs, and code changes to investigate engineering incidents.",
    href: "/ai/engineering-investigator",
    name: "Engineering Investigator",
    stack: "Google ADK · Gemini · TypeScript · React",
    status: "available",
  },
  {
    description:
      "Review pull requests with repository context, focused feedback, and clear suggestions for safer changes.",
    name: "Code Review Agent",
    stack: "GitHub · Gemini · TypeScript · React",
    status: "upcoming",
  },
];

export function AiPage(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" className="ai-lab-page">
        <section
          className="ai-lab-hero section-shell"
          aria-labelledby="hero-title"
        >
          <p className="eyebrow">AI Lab</p>
          <h1 id="hero-title" className="hero-title ai-lab-title">
            Purpose-built agents for <em>engineering work.</em>
          </h1>
          <div className="ai-lab-hero-detail">
            <p>
              A growing collection of focused AI tools designed to make complex
              engineering work more observable, explainable, and actionable.
            </p>
          </div>
        </section>

        <section
          className="ai-agent-directory section-shell"
          aria-labelledby="agents-title"
        >
          <div className="ai-agent-directory-heading">
            <p className="eyebrow">Available agents</p>
            <h2 id="agents-title">Choose an agent to begin.</h2>
          </div>

          <div className="ai-agent-grid">
            {agents.map((agent, index) => {
              const cardContent = (
                <>
                  <span className="ai-agent-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="ai-agent-status">
                      <span aria-hidden="true" />
                      {agent.status === "available"
                        ? "Available now"
                        : "Coming soon"}
                    </p>
                    <h3>{agent.name}</h3>
                    <p>{agent.description}</p>
                    <span className="ai-agent-stack">{agent.stack}</span>
                  </div>
                  <span className="ai-agent-action">
                    {agent.status === "available"
                      ? "Open agent"
                      : "In development"}
                    {agent.status === "available" && (
                      <span aria-hidden="true">↗</span>
                    )}
                  </span>
                </>
              );

              return agent.status === "available" ? (
                <Link
                  key={agent.href}
                  className="ai-agent-card"
                  to={agent.href}
                >
                  {cardContent}
                </Link>
              ) : (
                <article
                  key={agent.name}
                  className="ai-agent-card ai-agent-card--upcoming"
                >
                  {cardContent}
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
