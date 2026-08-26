// src/portfolio/HomePage.tsx

import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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

            <h1 id="hero-title">
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

              <Link className="button button-secondary" to="/contact">
                Get in touch
              </Link>

              <a
                className="button button-secondary"
                href="/downloads/MEHMOOD_RESUME.pdf"
                download="MEHMOOD_RESUME.pdf"
              >
                Résumé <DownloadIcon />
              </a>

              <a
                className="button button-secondary"
                href="/downloads/MEHMOOD_PORTFOLIO.pdf"
                download="MEHMOOD_PORTFOLIO.pdf"
              >
                Portfolio <DownloadIcon />
              </a>
            </div>
          </div>

          <aside className="hero-aside" aria-label="Engineering principles">
            <p className="aside-label">How I work</p>

            <ol>
              <li>
                <span>01</span>
                Make complexity clear
              </li>

              <li>
                <span>02</span>
                Build for the long term
              </li>

              <li>
                <span>03</span>
                Keep things simple
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
