import React from "react";
import { profile } from "../data/portfolio";

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__avatar">K</div>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">
          {profile.title} <span className="hero__sep">·</span> {profile.subtitle}
        </p>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__actions">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary"
          >
            GitHub
          </a>
          <button
            className="btn btn--outline"
            onClick={() => scrollTo("#contact")}
          >
            Contact Me
          </button>
        </div>
        <div className="hero__meta">
          <span>📍 {profile.location}</span>
          <span>✉ {profile.email}</span>
        </div>
      </div>
    </section>
  );
}
