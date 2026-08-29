import type { JSX } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../../components/layout/Footer";
import { Header } from "../../components/layout/Header";
import "./AboutPage.css";

type PersonalIconName = "coffee" | "parachute" | "plane" | "drone" | "help";

function PersonalIcon({ name }: { name: PersonalIconName }): JSX.Element {
  const svgProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "coffee":
      return (
        <svg {...svgProps}>
          <title>Coffee cup</title>
          <path d="M5 9h11v5.5A3.5 3.5 0 0 1 12.5 18h-4A3.5 3.5 0 0 1 5 14.5Z" />
          <path d="M16 10.5h1.2a2.3 2.3 0 0 1 0 4.5H16" />
          <path d="M8.5 5.5c0 1 .8 1.1.8 2.1M12 5.5c0 1 .8 1.1.8 2.1" />
          <path d="M4 20h14" />
        </svg>
      );
    case "parachute":
      return (
        <svg {...svgProps}>
          <title>Parachute</title>
          <path d="M4 11a8 8 0 0 1 16 0Z" />
          <path d="m4 11 8 9 8-9M8 11l4 9 4-9M12 3v8" />
        </svg>
      );
    case "plane":
      return (
        <svg {...svgProps}>
          <title>Paper plane</title>
          <path d="m3 13 18-8-5.5 15-3.1-6.1Z" />
          <path d="m12.4 13.9 3.8-3.8M9.5 16.8l1.2 3.2 1.7-4.4" />
        </svg>
      );
    case "drone":
      return (
        <svg {...svgProps}>
          <title>Drone</title>
          <path d="M8 10h8v4H8zM12 10V7M7 7h2M15 7h2M12 14v3M7 17h2M15 17h2" />
          <circle cx="6" cy="7" r="2" />
          <circle cx="18" cy="7" r="2" />
          <circle cx="6" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
        </svg>
      );
    case "help":
      return (
        <svg {...svgProps}>
          <title>Helping hand</title>
          <path d="M7 12.5 10 15l7-7" />
          <path d="M4 12.5 7.5 16a3 3 0 0 0 4.2 0l6.8-6.8a2.1 2.1 0 0 0-3-3L12 9.7" />
          <path d="m4.5 9.5 2-2a2.1 2.1 0 0 1 3 0L12 10" />
        </svg>
      );
  }
}

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
              <span>
                <PersonalIcon name="coffee" />
              </span>
              <div>
                <h3>Coffee, people & bad jokes</h3>
                <p>
                  I’m happiest when a quick coffee turns into a conversation —
                  about work, life, or something completely random.
                </p>
              </div>
            </article>

            <article>
              <span>
                <PersonalIcon name="parachute" />
              </span>
              <div>
                <h3>A bit of adrenaline</h3>
                <p>
                  I like trying things that nudge me out of my comfort zone.
                  Skydiving last year definitely did that.
                </p>
              </div>
            </article>

            <article>
              <span>
                <PersonalIcon name="plane" />
              </span>
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
              <span>
                <PersonalIcon name="drone" />
              </span>
              <div>
                <h3>I usually bring my drone</h3>
                <p>
                  I enjoy seeing familiar places from a different angle and
                  turning those moments into photos and videos.
                </p>
              </div>
            </article>

            <article>
              <span>
                <PersonalIcon name="help" />
              </span>
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

        <section
          className="about-team-moment section-shell"
          aria-labelledby="team-moment-title"
        >
          <div className="team-moment-heading">
            <p className="eyebrow">The teams behind the work</p>

            <div>
              <h2 id="team-moment-title" className="hero-title">
                The people behind the <em>work I’m proud of.</em>
              </h2>
              <p>
                A few snapshots from the teams where I learned, built, and
                shipped together.
              </p>
            </div>
          </div>

          <div className="team-company team-company-first">
            <div className="team-company-heading">
              <p className="company-name">Hive Streaming</p>
              <p>
                Hive felt like a place where people cared deeply about the
                product and still made time for each other. I valued how open,
                supportive, and genuinely fun the team was to be part of.
              </p>
            </div>

            <div className="hive-gallery">
              <figure className="team-photo hive-team-photo">
                <img
                  src="/images/hive3.jpg"
                  alt="Hive Streaming teammates at a team dinner"
                  width="1720"
                  height="1255"
                  loading="lazy"
                />
                <figcaption>Hive Streaming team dinner</figcaption>
              </figure>

              <figure className="team-photo hive-event-photo">
                <img
                  src="/images/hive1.jpg"
                  alt="Hive Streaming teammates at an escape-room team event"
                  width="4032"
                  height="2268"
                  loading="lazy"
                />
                <figcaption>Escape-room team event</figcaption>
              </figure>

              <figure className="team-photo hive-taskforce-photo">
                <img
                  src="/images/hive2.jpg"
                  alt="Video Analytics Taskforce team illustration featuring Hive Streaming teammates"
                  width="1450"
                  height="1388"
                  loading="lazy"
                />
                <figcaption>Video Analytics taskforce</figcaption>
              </figure>
            </div>
          </div>

          <div className="team-company">
            <div className="team-company-heading">
              <p className="company-name">Hypertype</p>
              <p>
                Hypertype gave me the energy of a small team figuring things out
                together: moving quickly, sharing feedback honestly, and
                learning by shipping.
              </p>
            </div>

            <div className="team-gallery">
              <figure className="team-photo team-photo-primary">
                <img
                  src="/images/hypertype1.jpeg"
                  alt="The Hypertype team sharing a meal in the Stockholm office"
                  width="4032"
                  height="3024"
                  loading="lazy"
                />
                <figcaption>Hypertype team · Stockholm</figcaption>
              </figure>

              <figure className="team-photo team-photo-secondary">
                <img
                  src="/images/hypertype.jpeg"
                  alt="Hypertype teammates discussing work around their desks"
                  width="3024"
                  height="4032"
                  loading="lazy"
                />
                <figcaption>A working session at Hypertype</figcaption>
              </figure>
            </div>
          </div>

          <div className="team-company team-company-furhat">
            <div className="team-company-heading">
              <p className="company-name">Furhat Robotics</p>
              <p>
                Furhat felt wonderfully imaginative: ambitious people working on
                something genuinely unusual, with enough trust and playfulness
                to experiment in the open.
              </p>
            </div>

            <div className="furhat-gallery">
              <figure className="team-photo furhat-team-photo">
                <img
                  src="/images/furhat2.jpg"
                  alt="The Furhat Robotics team sharing a meal together"
                  width="3088"
                  height="2316"
                  loading="lazy"
                />
                <figcaption>Furhat Robotics team · Stockholm</figcaption>
              </figure>

              <figure className="team-photo furhat-social-photo">
                <img
                  src="/images/furhat1.jpg"
                  alt="Furhat Robotics teammates at a laser-tag team event"
                  width="4032"
                  height="3024"
                  loading="lazy"
                />
                <figcaption>Team night out</figcaption>
              </figure>

              <figure className="team-photo furhat-robot-photo">
                <img
                  src="/images/furhat3.jpg"
                  alt="A Furhat conversational robot wearing a black cap"
                  width="960"
                  height="1484"
                  loading="lazy"
                />
                <figcaption>Meet Furhat</figcaption>
              </figure>
            </div>
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
                <strong>Alexandros Gkogkas</strong>
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
                <span>Senior Data Engineer · Hive Streaming teammate</span>
              </footer>
            </blockquote>

            <blockquote className="colleague-quote">
              <p>
                Mehmood brought a high standard of UI work to a new product
                launch and moved quickly from early versions to stronger
                implementations. He communicated clearly, contributed
                thoughtfully to the team, and was a dependable teammate.
              </p>

              <footer>
                <strong>
                  <a
                    href="https://www.linkedin.com/in/morgan-bell-7731234/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Morgan Bell
                  </a>
                </strong>
                <span>Former Manager · Furhat Robotics</span>
              </footer>
            </blockquote>

            <blockquote className="colleague-quote">
              <p>
                Mehmood is self-motivated, takes full ownership of his work, and
                can be trusted to deliver on his commitments. He is a reliable
                developer to have on a challenging project.
              </p>

              <footer>
                <strong>
                  <a
                    href="https://www.linkedin.com/in/elbasan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Elbasan Kadrija
                  </a>
                </strong>
                <span>Senior Software Engineer · Hive Streaming teammate</span>
              </footer>
            </blockquote>

            <blockquote className="colleague-quote">
              <p>
                He combined strong Node.js, Angular, and SQL skills with
                adaptable problem-solving and effective teamwork, consistently
                delivering high-quality full-stack solutions.
              </p>

              <footer>
                <strong>
                  <a
                    href="https://www.linkedin.com/in/mohammad-kashif-69a48519b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mohammad Kashif
                  </a>
                </strong>
                <span>Senior Software Engineer · Mercurial Minds teammate</span>
              </footer>
            </blockquote>

            <blockquote className="colleague-quote">
              <p>
                Mehmood quickly became a dependable full-stack teammate,
                exceeding expectations through his productivity, growth, and
                reliability.
              </p>

              <footer>
                <strong>
                  <a
                    href="https://www.linkedin.com/in/harisqurashi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Haris Qureshi
                  </a>
                </strong>
                <span>Mentor · Mercurial Minds</span>
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
