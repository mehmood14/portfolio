import type { JSX } from "react";
import "./Footer.css";

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
        <div className="footer-introduction">
          <p className="eyebrow">Let’s build with intent</p>

          <h2 className="hero-title">
            Have a complex problem
            <br />
            worth making <em>clearer?</em>
          </h2>
        </div>

        <div className="footer-contact-card">
          <p>Start a conversation</p>

          <a href="mailto:mehmoodulhaq14@gmail.com">
            <span>mehmoodulhaq14@gmail.com</span>
            <Arrow />
          </a>

          <dl>
            <div>
              <dt>Based in</dt>
              <dd>Stockholm, Sweden</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Product engineering</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="footer-bottom section-shell">
        <div className="footer-signature">
          <span aria-hidden="true">
            MUH<span>.</span>
          </span>
          <p>© 2026 Mehmood ul Haq</p>
        </div>

        <nav aria-label="Footer navigation">
          <a
            href="https://www.linkedin.com/in/mehmood-ul-haq"
            {...externalLinkProps}
          >
            LinkedIn <Arrow />
          </a>

          <a href="tel:+46764388438">+46 76 438 8438</a>
        </nav>
      </div>
    </footer>
  );
}
