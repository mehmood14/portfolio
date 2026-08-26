// src/portfolio/WorkPage.tsx

import { useEffect, useState, type JSX } from "react";
import {
  projects,
  additionalProjects,
  type Project,
  type AdditionalProject,
} from "./data";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
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
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
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

          <h1>
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

            <h2>More systems with meaningful constraints.</h2>
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
