import { Link } from "react-router-dom";
import type { JSX } from "react";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import "./NotFoundPage.css";

export function NotFoundPage(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" className="not-found-page">
        <section className="not-found-content section-shell">
          <p className="eyebrow">404</p>
          <h1>
            This route doesn’t
            <br />
            <em>lead anywhere.</em>
          </h1>
          <p>
            Return home or explore a selection of engineering work and the
            decisions behind it.
          </p>
          <div className="not-found-actions">
            <Link className="button button-primary" to="/">
              Go home
            </Link>
            <Link className="button button-secondary" to="/work">
              Explore work <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
