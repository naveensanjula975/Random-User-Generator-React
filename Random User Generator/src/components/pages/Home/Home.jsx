import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const FEATURES = [
  {
    icon: "🎲",
    title: "Random Profiles",
    desc: "Fetch rich, realistic user profiles instantly from the Random User API with a single click.",
  },
  {
    icon: "🌍",
    title: "Global Data",
    desc: "Explore users from dozens of countries with localised names, cities, and profile photos.",
  },
  {
    icon: "⚡",
    title: "Live Updates",
    desc: "Dynamically add new users to your directory in real time without refreshing the page.",
  },
  {
    icon: "🔍",
    title: "Search & Filter",
    desc: "Quickly find users by name, city, or email with the built-in search functionality.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    desc: "Fully optimised for desktop, tablet, and mobile — looks great on any device.",
  },
  {
    icon: "♿",
    title: "Accessible",
    desc: "Built with WCAG guidelines in mind — keyboard navigable and screen reader friendly.",
  },
];

const PREVIEW_AVATARS = [
  "https://randomuser.me/api/portraits/med/men/75.jpg",
  "https://randomuser.me/api/portraits/med/women/44.jpg",
  "https://randomuser.me/api/portraits/med/men/32.jpg",
  "https://randomuser.me/api/portraits/med/women/68.jpg",
  "https://randomuser.me/api/portraits/med/men/18.jpg",
];

function Home() {
  return (
    <div className="home-page">
      {/* ── Hero ── */}
      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="home-hero__eyebrow">
            <span className="badge badge-accent">✨ Powered by randomuser.me</span>
          </div>

          <h1 id="hero-heading" className="home-hero__title">
            Explore a World of{" "}
            <span className="gradient-text">Random People</span>
          </h1>

          <p className="home-hero__subtitle">
            Discover, browse, and interact with randomly generated user profiles
            from around the globe. Fresh data, beautiful cards, live updates.
          </p>

          <div className="home-hero__actions">
            <Link to="/namelist" className="btn btn-primary btn-lg" id="hero-cta-primary">
              <span>👥</span> Browse Users
            </Link>
            <Link to="/about" className="btn btn-ghost btn-lg" id="hero-cta-secondary">
              Learn More
            </Link>
          </div>

          {/* Avatar preview stack */}
          <div className="home-hero__avatars" aria-label="Sample user avatars">
            <div className="home-hero__avatar-stack">
              {PREVIEW_AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Sample user ${i + 1}`}
                  className="home-hero__avatar-img"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="home-hero__avatar-label">
              <strong>500M+</strong> profiles available
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="home-stats" aria-label="App statistics">
        <div className="container">
          <div className="home-stats__grid">
            <div className="home-stats__item">
              <div className="home-stats__number">∞</div>
              <div className="home-stats__label">Unique Profiles</div>
            </div>
            <div className="home-stats__item">
              <div className="home-stats__number">50+</div>
              <div className="home-stats__label">Nationalities</div>
            </div>
            <div className="home-stats__item">
              <div className="home-stats__number">0ms</div>
              <div className="home-stats__label">Setup Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="home-features" aria-labelledby="features-heading">
        <div className="container">
          <div className="home-features__header">
            <h2 id="features-heading" className="home-features__title">
              Everything you need
            </h2>
            <p className="home-features__subtitle">
              A fully-featured people directory built with React, hooks, and modern best practices.
            </p>
          </div>

          <div className="home-features__grid" role="list">
            {FEATURES.map((f) => (
              <article key={f.title} className="feature-card" role="listitem">
                <div className="feature-card__icon-wrap" aria-hidden="true">
                  {f.icon}
                </div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="container">
        <div className="home-cta" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="home-cta__title">
            Ready to explore?
          </h2>
          <p className="home-cta__desc">
            Jump straight into the user directory and start discovering people from around the world.
          </p>
          <Link to="/namelist" className="btn btn-primary btn-lg" id="cta-browse-btn">
            <span>🚀</span> Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
