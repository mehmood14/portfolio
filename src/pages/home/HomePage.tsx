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
              experiences and AI tools that make engineering work clearer.
            </p>
          </div>

          <div className="hero-actions-panel">
            <div className="hero-personal-glance">
              <div className="hero-personal-copy">
                <p className="hero-personal-kicker">People &amp; moments</p>
                <h3 className="hero-title hero-personal-title">
                  There’s more to a <em>good teammate</em> than a tech stack.
                </h3>
              </div>

              <div className="hero-sparkles" aria-hidden="true">
                <span>✦</span>
                <span>☻</span>
                <span>✧</span>
              </div>

              <div className="hero-personal-tiles">
                <Link
                  to="/about"
                  className="hero-personal-tile"
                  aria-label="See more about my time with the Hypertype team"
                >
                  <img src="/images/hypertype1.jpeg" alt="" loading="lazy" />
                  <span>Hypertype</span>
                </Link>
                <Link
                  to="/about"
                  className="hero-personal-tile"
                  aria-label="See more about my time with the Hive Streaming team"
                >
                  <img src="/images/hive3.jpg" alt="" loading="lazy" />
                  <span>Hive</span>
                </Link>
                <Link
                  to="/about"
                  className="hero-personal-tile"
                  aria-label="See more about my time with the Furhat Robotics team"
                >
                  <img src="/images/furhat2.jpg" alt="" loading="lazy" />
                  <span>Furhat</span>
                </Link>
              </div>

              <Link className="hero-about-link" to="/about">
                Learn More About Me <Arrow />
              </Link>
            </div>

            <div className="hero-actions-suite">
              <p className="hero-suite-label">Work &amp; credentials</p>
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
                  </span>

                  <Arrow />
                </a>
              </div>

              <nav className="hero-resources" aria-label="Downloads">
                <a
                  href="/downloads/MEHMOOD_RESUME.pdf"
                  download="MEHMOOD_RESUME.pdf"
                >
                  Résumé
                  <DownloadIcon />
                </a>
                <a
                  href="/downloads/MEHMOOD_PROJECTS_PORTFOLIO.pdf"
                  download="MEHMOOD_PROJECTS_PORTFOLIO.pdf"
                >
                  Projects Portfolio
                  <DownloadIcon />
                </a>
              </nav>
            </div>
          </div>
        </section>

        <section className="home-links section-shell">
          <Link to="/ai" className="home-link-card home-link-card--ai">
            <span className="eyebrow">AI Lab</span>
            <h2>AI Engineering Lab</h2>
            <Arrow />
          </Link>

          <Link to="/work" className="home-link-card">
            <span className="eyebrow">Work</span>
            <h2>Project Case Studies</h2>
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

        <section
          id="principles"
          className="principles section-shell"
          aria-labelledby="principles-title"
        >
          <div className="principles-heading">
            <p className="eyebrow">My vision</p>
            <div>
              <h2 className="hero-title">
                Good products should feel <em>easy to use</em>, and easy to
                improve.
              </h2>
            </div>
          </div>

          <ol className="principles-list">
            <li>
              <span>01</span>
              <div>
                <strong>
                  Understand the problem before choosing the solution
                </strong>
                <p>
                  Clarify the user and business problem, constraints, and
                  expected outcome before deciding on architecture or
                  technology.
                </p>
              </div>
            </li>

            <li>
              <span>02</span>
              <div>
                <strong>Prefer simple solutions first</strong>
                <p>
                  Avoid abstractions, dependencies, or state-management
                  complexity until the problem actually requires them.
                  Complexity should have a reason.
                </p>
              </div>
            </li>

            <li>
              <span>03</span>
              <div>
                <strong>Make trade-offs explicit</strong>
                <p>
                  There is rarely one universally correct technical solution. I
                  want to understand what we’re optimizing for and what we’re
                  sacrificing.
                </p>
              </div>
            </li>

            <li>
              <span>04</span>
              <div>
                <strong>Keep clear ownership and boundaries</strong>
                <p>
                  Components, services, APIs, and state should have
                  understandable responsibilities. If one piece starts doing too
                  much, that’s usually a signal to reconsider the boundary.
                </p>
              </div>
            </li>

            <li>
              <span>05</span>
              <div>
                <strong>Build quality into delivery</strong>
                <p>
                  Think about testing, error states, edge cases, accessibility,
                  observability, and failure modes while implementing, rather
                  than treating them as cleanup afterward.
                </p>
              </div>
            </li>

            <li>
              <span>06</span>
              <div>
                <strong>Improve incrementally</strong>
                <p>
                  I generally prefer safe, measurable improvements over
                  unnecessary rewrites. Existing systems have constraints, and
                  good engineering means improving them without destabilizing
                  the product.
                </p>
              </div>
            </li>
          </ol>
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
