// src/portfolio/ContactPage.tsx

import type { JSX } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function ContactPage(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" className="contact-page">
        <section className="contact-page-hero section-shell">
          <p className="eyebrow">Contact</p>

          <h1>
            Have something worth
            <br />
            <em>building together?</em>
          </h1>

          <p className="contact-page-intro">
            I’m always open to meaningful product work, interesting engineering
            problems, and conversations with thoughtful people.
          </p>
        </section>

        <section className="contact-page-details section-shell">
          <div>
            <p className="eyebrow">Get in touch</p>
          </div>

          <div className="contact-links">
            <a href="mailto:mehmoodulhaq14@gmail.com">
              <span>Email</span>
              <strong>mehmoodulhaq14@gmail.com</strong>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mehmood-ul-haq"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Mehmood ul Haq</strong>
              <span aria-hidden="true">↗</span>
            </a>

            <a href="tel:+46764388438">
              <span>Phone</span>
              <strong>+46 76 438 8438</strong>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
