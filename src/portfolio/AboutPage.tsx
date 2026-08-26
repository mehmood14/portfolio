// src/portfolio/AboutPage.tsx

import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function AboutPage(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" className="about-person-page">
        <section className="about-person-hero section-shell">
          <p className="eyebrow">About me</p>

          <h1>
            A little about the person
            <br />
            <em>behind the code.</em>
          </h1>

          <div className="about-person-intro">
            <p>
              I'm Mehmood, a software engineer based in Stockholm and originally
              from Pakistan.
            </p>

            <p>
              I spend a lot of my time thinking about technology and building
              products, but I don't want work to be the only thing that defines
              me.
            </p>
          </div>
        </section>

        <section className="about-person-story section-shell">
          <div>
            <p className="eyebrow">Outside work</p>
          </div>

          <div>
            <p>
              I'm naturally curious and enjoy learning about things even when
              they have nothing to do with software.
            </p>

            <p>
              I like exploring new places, experiencing different cultures,
              having good conversations, and spending time with people I care
              about.
            </p>

            <p>
              Moving from Pakistan to Sweden has also been a big part of my
              story. Living in different environments has taught me to stay
              open-minded, adapt, and appreciate different ways of looking at
              life.
            </p>

            <p>
              In general, I enjoy a simple life: meaningful work, good people,
              new experiences, and always having something new to learn.
            </p>
          </div>
        </section>

        <section className="about-person-bottom section-shell">
          <p className="eyebrow">That's me</p>

          <h2>Curious about the work side?</h2>

          <Link className="button button-primary" to="/">
            See my work <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
