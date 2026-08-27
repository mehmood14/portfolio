import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import "./HomePage.css";

function Arrow(): JSX.Element {
  return <span aria-hidden="true">↗</span>;
}

function DownloadIcon(): JSX.Element {
  return <span aria-hidden="true">↓</span>;
}

export function HomePage(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              Software Engineer · Frontend Focus · Stockholm, Sweden
            </p>

            <h1 id="hero-title" className="hero-title">
              I turn complex product systems into <em>clear, reliable</em>{" "}
              experiences.
            </h1>

            <p className="hero-intro">
              Software engineer focused on thoughtful, maintainable product
              experiences.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/work">
                View work <Arrow />
              </Link>

              <a
                className="hero-linkedin"
                href="https://www.linkedin.com/in/mehmood-ul-haq"
                target="_blank"
                rel="noreferrer"
              >
                <span className="linkedin-mark" aria-hidden="true">
                  <span>i</span>
                  <span>n</span>
                </span>

                <span className="hero-linkedin-copy">
                  <small>Connect on LinkedIn</small>
                  <strong>Follow my professional journey</strong>
                </span>

                <Arrow />
              </a>
            </div>

            <div className="hero-resources" aria-label="Contact and downloads">
              <a
                href="/downloads/MEHMOOD_RESUME.pdf"
                download="MEHMOOD_RESUME.pdf"
              >
                Résumé <DownloadIcon />
              </a>
              <a
                href="/downloads/MEHMOOD_PORTFOLIO.pdf"
                download="MEHMOOD_PORTFOLIO.pdf"
              >
                Portfolio <DownloadIcon />
              </a>
            </div>
          </div>

          <aside className="hero-aside" aria-label="Engineering principles">
            <div className="hero-aside-heading">
              <p className="aside-label">How I like to work</p>
              <h2>
                Good products should feel easy to use, and easy to improve.
              </h2>
            </div>

            <ol>
              <li>
                <span>01</span>
                <div>
                  <strong>Make things easier to follow</strong>
                  <p>
                    When a product has a lot going on, I try to give people a
                    clear next step.
                  </p>
                </div>
              </li>

              <li>
                <span>02</span>
                <div>
                  <strong>Don’t hide the messy bits</strong>
                  <p>
                    Loading, empty, and error states are part of the experience
                    too.
                  </p>
                </div>
              </li>

              <li>
                <span>03</span>
                <div>
                  <strong>Leave it better than I found it</strong>
                  <p>
                    Clear code and sensible boundaries make the next change less
                    stressful.
                  </p>
                </div>
              </li>
            </ol>
          </aside>
        </section>

        <section className="home-links section-shell">
          <Link to="/work" className="home-link-card">
            <span className="eyebrow">Work</span>
            <h2>Selected projects</h2>
            <Arrow />
          </Link>

          <Link to="/experience" className="home-link-card">
            <span className="eyebrow">Experience</span>
            <h2>My journey</h2>
            <Arrow />
          </Link>

          <Link to="/about" className="home-link-card">
            <span className="eyebrow">About</span>
            <h2>Beyond the code</h2>
            <Arrow />
          </Link>
        </section>

        <section className="confidentiality-note section-shell">
          <p className="eyebrow">A note on confidentiality</p>

          <p>
            The work shown here is intentionally generalized. I’ve kept client,
            customer, internal system, and sensitive product details private
            while still sharing the problems I worked on, the engineering
            decisions I made, and the impact of the work.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
