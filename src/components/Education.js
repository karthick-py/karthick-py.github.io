import React from "react";
import { education, certification } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="section__inner">
        <h2 className="section__title">Education</h2>
        <p className="section__sub"> </p>
        <div className="edu-grid">
          {education.map((edu) => (
            <div key={edu.degree} className="edu-card">
              <div className="edu-card__left">
                <p className="edu-card__degree">{edu.degree}</p>
                <p className="edu-card__institution">{edu.institution}</p>
              </div>
              <div className="edu-card__right">
                <span className="edu-card__year">{edu.year}</span>
                <span className="edu-card__score">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="cert-card">
          <span className="cert-card__icon">🎓</span>
          <div>
            <p className="cert-card__name">{certification.name}</p>
            <p className="cert-card__issuer">{certification.issuer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
