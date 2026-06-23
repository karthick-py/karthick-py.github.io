import React from "react";
import { profile } from "../data/portfolio";

const contacts = [
  { icon: "✉", label: profile.email, href: `mailto:${profile.email}` },
  { icon: "🐙", label: profile.githubLabel, href: profile.github },
  { icon: "📍", label: profile.location, href: null },
  { icon: "📞", label: profile.phone, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section__inner">
        <h2 className="section__title">Get In Touch</h2>
        <p className="section__sub">
          Open to entry-level Python Developer roles in Chennai
        </p>
        <div className="contact-grid">
          {contacts.map((c) =>
            c.href ? (
              <a key={c.label} href={c.href} className="contact-card" target="_blank" rel="noreferrer">
                <span className="contact-card__icon">{c.icon}</span>
                <span className="contact-card__label">{c.label}</span>
              </a>
            ) : (
              <div key={c.label} className="contact-card">
                <span className="contact-card__icon">{c.icon}</span>
                <span className="contact-card__label">{c.label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
