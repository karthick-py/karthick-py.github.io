import React from "react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__inner">
        <h2 className="section__title">Work Experience</h2>
        <p className="section__sub">5+ years in operations, quality engineering, and team leadership</p>
        <div className="timeline">
          {experience.map((job, idx) => (
            <div key={idx} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <h3 className="timeline__role">{job.role}</h3>
                <span className="timeline__company">{job.company}</span>
                <span className="timeline__period">
                  {job.period} · {job.location}
                </span>
                <ul className="timeline__points">
                  {job.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
