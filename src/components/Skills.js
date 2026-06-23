import React from "react";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <h2 className="section__title">Technical Skills</h2>
        <p className="section__sub">Technologies and tools I have learned and practiced</p>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h4 className="skill-card__category">{group.category}</h4>
              <div className="skill-card__tags">
                {group.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
