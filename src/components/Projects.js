import React from "react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="section__inner">
        <h2 className="section__title">Projects</h2>
        <p className="section__sub">Hands-on project built during Python Full Stack training</p>
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link"
                >
                  View on GitHub →
                </a>
              </div>
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <ul className="project-card__points">
                {project.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
