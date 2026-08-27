import type { JSX } from "react";
import { Link } from "react-router-dom";
import { experience } from "../../content/portfolio";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import "./ExperiencePage.css";

export function ExperiencePage(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" className="experience-page">
        <section className="experience-page-hero section-shell">
          <p className="eyebrow">Experience</p>

          <h1 id="hero-title" className="hero-title">
            5+ years of building,
            <br />
            <em>learning & shipping.</em>
          </h1>

          <p className="experience-page-intro">
            Over the years, I’ve worked across frontend engineering, product
            development, backend integrations, and technical ownership.
          </p>
        </section>

        <section className="experience-page-list section-shell">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="experience-page-item"
            >
              <p className="experience-page-period">{item.period}</p>

              <div>
                <h2>{item.role}</h2>

                <p className="experience-page-company">{item.company}</p>

                <p className="experience-page-description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </section>

        <section className="experience-page-bottom section-shell">
          <p className="eyebrow">Selected work</p>

          <h2>Want to see what I’ve built?</h2>

          <Link className="button button-primary" to="/work">
            View selected work
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
