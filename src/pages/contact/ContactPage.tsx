import type { JSX } from "react";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import "./ContactPage.css";

export function ContactPage(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" className="contact-page">
        <section className="contact-page-hero section-shell">
          <div className="contact-page-hero-grid">
            <div>
              <p className="eyebrow">Contact</p>

              <h1 id="hero-title" className="hero-title">
                Have something worth
                <br />
                <em>building together?</em>
              </h1>

              <p className="contact-page-intro">
                I’m always open to meaningful product work, interesting
                engineering problems, and conversations with thoughtful people.
              </p>
            </div>

            <aside className="contact-availability-card">
              <p className="eyebrow">Current focus</p>
              <strong>
                Frontend, full-stack, and product-focused engineering work.
              </strong>
              <p>Based in Stockholm, Sweden.</p>
              <a href="mailto:mehmoodulhaq14@gmail.com">
                Send an email <span aria-hidden="true">↗</span>
              </a>
            </aside>
          </div>
        </section>

        <section className="contact-page-details section-shell">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2>Let’s start a conversation.</h2>
            <p>
              The easiest way to reach me is email. For a quick hello, LinkedIn
              and phone work well too.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:mehmoodulhaq14@gmail.com">
              <span>Email</span>
              <span>
                <strong>mehmoodulhaq14@gmail.com</strong>
                <small>Best for opportunities, ideas, and a proper hello</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mehmood-ul-haq"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <span>
                <strong>Mehmood Ul Haq</strong>
                <small>Connect and keep in touch</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>

            <a href="tel:+46764388438">
              <span>Phone</span>
              <span>
                <strong>+46 76 438 8438</strong>
                <small>For a quick chat</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
