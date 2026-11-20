import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import Project from "./Project";
import ThemeToggle from "./ThemeToggle";

const featured = {
  name: "Style AI",
  kind: "iOS app",
  year: "2026",
  blurb:
    "An AI-powered hairstyle recommendation app, built with React Native and Firebase.",
  link: "https://apps.apple.com/us/app/style-ai-hairstyle-recs/id6748979028",
  icon: "/images/style-ai-icon.jpg",
  shots: [
    "/images/style-ai-1.jpg",
    "/images/style-ai-2.jpg",
    "/images/style-ai-3.jpg",
  ],
};

const projects = [
  {
    name: "Generative Blocks",
    kind: "Generative art",
    link: "https://arshn77.github.io/generative-blocks/",
    img: "/images/gen_blocks.png",
  },
  {
    name: "Asteroid Game",
    kind: "Browser game",
    link: "https://arshn77.github.io/asteroid-game/",
    img: "/images/asteroid.png",
  },
  {
    name: "iTunes Artist Search",
    kind: "Web app",
    link: "https://arshn77.github.io/artist-search/",
    img: "/images/itunes-logo.png",
  },
];

function App() {
  return (
    <>
      <div className="page">
        <header className="topbar">
          <span className="topbar-note">Portfolio</span>
          <ThemeToggle />
        </header>

        <section className="intro">
          <h1>
            Arshia<span className="dot">.</span>
          </h1>
          <p>
            Software engineer building full-stack web and mobile apps.
          </p>
        </section>

        <section className="featured" aria-labelledby="featured-title">
          <div className="featured-copy">
            <div className="label">
              <span>01</span>
              <span>Latest</span>
            </div>
            <div className="featured-head">
              <img className="app-icon" src={featured.icon} alt="" />
              <div>
                <h2 id="featured-title">{featured.name}</h2>
                <p className="meta">
                  {featured.kind} · {featured.year}
                </p>
              </div>
            </div>
            <p className="blurb">{featured.blurb}</p>
            <a
              className="button"
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on the App Store <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="shots">
            {featured.shots.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`${featured.name} screenshot ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section className="work" aria-labelledby="work-title">
          <h2 id="work-title" className="section-title">
            Earlier work
          </h2>
          <ol className="project-list">
            {projects.map((p, i) => (
              <Project key={p.name} index={i + 2} {...p} />
            ))}
          </ol>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
      <Analytics />
    </>
  );
}

export default App;
