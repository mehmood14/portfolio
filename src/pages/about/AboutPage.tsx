import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import "./AboutPage.css";

export function AboutPage(): JSX.Element {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <main id="main" className="about-person-page">
        <section className="about-person-hero section-shell">
          <div className="about-person-hero-content">
            <div className="about-person-hero-copy">
              <p className="eyebrow">About me</p>

              <h1 id="hero-title" className="hero-title">
                A little about the person
                <br />
                <em>behind the code.</em>
              </h1>

              <div className="about-person-intro">
                <p>
                  I'm Mehmood, a software engineer based in Stockholm and
                  originally from Pakistan.
                </p>

                <p>
                  I spend a lot of my time thinking about technology and
                  building products, but I don't want work to be the only thing
                  that defines me.
                </p>
              </div>
            </div>

            <figure className="about-person-portrait">
              <img
                src="/images/mehmood.webp"
                alt="Mehmood"
                width="720"
                height="900"
              />
              <figcaption>
                <span aria-hidden="true">●</span>
                Stockholm, Sweden
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="about-person-story section-shell">
          <div className="about-person-story-heading">
            <p className="eyebrow">Beyond the code</p>

            <h2 className="hero-title">
              When I'm not
              <br />
              <em>coding.</em>
            </h2>
          </div>

          <div className="about-personal-life">
            <article>
              <span aria-hidden="true">☕</span>
              <div>
                <h3>Coffee, people & bad jokes</h3>
                <p>
                  I’m happiest when a quick coffee turns into a conversation —
                  about work, life, or something completely random.
                </p>
              </div>
            </article>

            <article>
              <span aria-hidden="true">🪂</span>
              <div>
                <h3>A bit of adrenaline</h3>
                <p>
                  I like trying things that nudge me out of my comfort zone.
                  Skydiving last year definitely did that.
                </p>
              </div>
            </article>

            <article>
              <span aria-hidden="true">✈</span>
              <div>
                <h3>Curiosity, one trip at a time</h3>
                <p>
                  New places, food, and perspectives always give me something
                  new to take home. Moving from Pakistan to Sweden has been the
                  biggest adventure so far.
                </p>
              </div>
            </article>

            <article>
              <span aria-hidden="true">◒</span>
              <div>
                <h3>I usually bring my drone</h3>
                <p>
                  I enjoy seeing familiar places from a different angle and
                  turning those moments into photos and videos.
                </p>
              </div>
            </article>

            <article>
              <span aria-hidden="true">↗</span>
              <div>
                <h3>I like being useful</h3>
                <p>
                  If I can help a teammate, friend, or someone I’ve just met,
                  I’m usually happy to jump in.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="about-colleagues section-shell">
          <div className="about-colleagues-heading">
            <p className="eyebrow">From people I've worked with</p>

            <h2 className="hero-title">
              How colleagues
              <br />
              <em>describe me.</em>
            </h2>
          </div>

          <div className="colleague-quotes">
            <blockquote className="colleague-quote">
              <p>
                “Mehmood is patient, agile and has a positive attitude in his
                work and collaborations. He is always open to feedback and
                strives to constantly improve.”
              </p>

              <footer>
                <strong>Alex</strong>
                <span>Engineering Manager · Hive Streaming</span>
              </footer>
            </blockquote>

            <blockquote className="colleague-quote">
              <p>
                “He’s self-driven, not afraid to try new things, and approaches
                unfamiliar problems with curiosity and a willingness to figure
                things out. Once he takes something on, you can trust him to
                drive it forward.”
              </p>

              <footer>
                <strong>Hanna Blad</strong>
                <span>Product Manager · Hive Streaming</span>
              </footer>
            </blockquote>

            <blockquote className="colleague-quote">
              <p>
                “What stood out to me was his eagerness to learn and take
                ownership. He was comfortable picking up new challenges, working
                independently to get things done, and asking the right questions
                when collaboration was needed.”
              </p>

              <footer>
                <strong>Achilleas Stefanidis</strong>
                <span>Engineering Teammate · Hive Streaming</span>
              </footer>
            </blockquote>

            <blockquote className="colleague-quote">
              <p>
                “I was consistently impressed with the quality of his work, but
                what I found amazing was how quickly he could produce results.
                He naturally iterates on work and improves the implementation as
                new changes come in.”
              </p>

              <footer>
                <strong>Morgan Bell</strong>
                <span>Former Manager · Furhat Robotics</span>
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="about-person-bottom section-shell">
          <p className="eyebrow">That's me</p>

          <h2 className="hero-title">
            Curious about the <br />
            <em>work side?</em>
          </h2>

          <Link className="button button-primary" to="/work">
            See my work <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
