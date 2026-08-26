// src/portfolio/components/Footer.tsx

import type { JSX } from "react";

function Arrow(): JSX.Element {
  return <span aria-hidden="true">↗</span>;
}

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

export function Footer(): JSX.Element {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top section-shell">
        <p className="eyebrow">Available for meaningful product work</p>

        <h2>
          Have a complex problem
          <br />
          worth making <em>clearer?</em>
        </h2>

        <a
          className="button button-light"
          href="mailto:mehmoodulhaq14@gmail.com"
        >
          mehmoodulhaq14@gmail.com <Arrow />
        </a>
      </div>

      <div className="footer-bottom section-shell">
        <p>© 2026 Mehmood ul Haq</p>

        <div>
          <a
            href="https://www.linkedin.com/in/mehmood-ul-haq"
            {...externalLinkProps}
          >
            LinkedIn <Arrow />
          </a>

          <a href="tel:+46764388438">+46 76 438 8438</a>
        </div>
      </div>
    </footer>
  );
}
