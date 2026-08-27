import { useEffect, useRef, useState, type JSX } from "react";
import {
  projects,
  additionalProjects,
  type Project,
  type AdditionalProject,
} from "../../content/portfolio";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import "./WorkPage.css";

type SelectedProject =
  | {
      type: "main";
      project: Project;
    }
  | {
      type: "additional";
      project: AdditionalProject;
    };

function ProjectModal({
  selected,
  onClose,
}: {
  selected: SelectedProject;
  onClose: () => void;
}): JSX.Element {
  const { project } = selected;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>

        <div className="project-modal-heading">
          <p className="project-company">{project.company}</p>

          {selected.type === "main" && (
            <p className="eyebrow">{selected.project.kind}</p>
          )}

          <h2 id="project-modal-title">{project.name}</h2>

          <p className="project-modal-summary">{project.details.overview}</p>
        </div>

        <div className="project-modal-sections">
          <section>
            <p className="eyebrow">What I worked on</p>

            <ul className="project-modal-list">
              {project.details.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <p className="eyebrow">Engineering challenges</p>

            <ul className="project-modal-list">
              {project.details.challenges.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {selected.type === "main" && (
            <section>
              <p className="eyebrow">Architecture</p>

              <p className="project-modal-copy">
                {selected.project.details.architecture}
              </p>
            </section>
          )}
        </div>

        {selected.type === "main" ? (
          <ul
            className="technology-list project-modal-technologies"
            aria-label={`Technologies used for ${selected.project.name}`}
          >
            {selected.project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : (
          <p className="project-modal-stack">{selected.project.technologies}</p>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project;
  onViewDetails: (project: Project) => void;
}): JSX.Element {
  return (
    <article className="project-card">
      <div className="project-index" aria-hidden="true">
        {project.number}
      </div>

      <div className="project-main">
        <p className="project-company">{project.company}</p>

        <p className="eyebrow">{project.kind}</p>

        <h3>{project.name}</h3>

        <p className="project-summary">{project.summary}</p>

        <dl className="project-details">
          <div>
            <dt>Contribution</dt>
            <dd>{project.contribution}</dd>
          </div>

          <div>
            <dt>Engineering approach</dt>
            <dd>{project.approach}</dd>
          </div>

          <div>
            <dt>Result</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>

        <ul
          className="technology-list"
          aria-label={`Technologies used for ${project.name}`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <button
          type="button"
          className="project-view-button"
          onClick={() => onViewDetails(project)}
        >
          View more details
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  );
}

export function WorkPage(): JSX.Element {
  const [selectedProject, setSelectedProject] =
    useState<SelectedProject | null>(null);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" className="work-page">
        <section className="work-page-hero section-shell">
          <p className="eyebrow">Selected work</p>

          <h1 id="hero-title" className="hero-title">
            Engineering stories,
            <br />
            <em>not feature lists.</em>
          </h1>

          <p className="work-page-intro">
            A selection of products and systems I’ve worked on, with a focus on
            the problems, constraints, and engineering decisions behind them.
          </p>
        </section>

        <section className="work-page-projects section-shell">
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                project={project}
                onViewDetails={(project) =>
                  setSelectedProject({
                    type: "main",
                    project,
                  })
                }
              />
            ))}
          </div>
        </section>

        <section className="work-page-additional section-shell">
          <div>
            <p className="eyebrow">Additional engineering work</p>

            <h2 className="hero-title">
              More systems with <br />
              <em>meaningful constraints.</em>
            </h2>
          </div>

          <div className="additional-project-list">
            {additionalProjects.map((project) => (
              <article key={project.name} className="additional-project">
                <p>{project.company}</p>

                <h4>{project.name}</h4>

                <p>{project.description}</p>

                <span>{project.technologies}</span>

                <button
                  type="button"
                  className="additional-project-view-button"
                  onClick={() =>
                    setSelectedProject({
                      type: "additional",
                      project,
                    })
                  }
                >
                  More details
                  <span aria-hidden="true">↗</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="work-page-note section-shell">
          <p>
            Project descriptions are intentionally generalized to respect
            client, company, and user confidentiality.
          </p>
        </section>
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          selected={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
