import React from "react";
import "./Experiences.css";

import exp1 from "./exp1.avif";
import exp2 from "./exp2.avif";
import exp3 from "./exp3.avif";
import exp4 from "./exp4.avif";
import exp5 from "./exp5.avif";
import exp6 from "./exp6.avif";

const experiences = [
  {
    title: "CHAMPAGNE BREAKFAST IN THE BOUGAINVILLEA GARDEN",
    img: exp1,
  },
  {
    title: "HISTORICAL WALK",
    img: exp2,
  },
  {
    title: "RIDE WAVES",
    img: exp3,
  },
  {
    title: "WATCH TOWER DINING",
    img: exp4,
  },
  {
    title: "SUNDOWNERS AT ALSIGARH",
    img: exp5,
  },
  {
    title: "THE MANGROVES ON CANVAS",
    img: exp6,
  },
];

const Experiences = () => {
  return (
    <div className="exp-page">
      <p className="head">EXPERIENCES</p>

      
      <p>
        Discover an exquisite collection of experiences—romantic escapes, family
        delights, bold adventures and signature indulgences.
      </p>

      {/* GRID */}
      <div className="exp-grid">
        {experiences.map((exp, index) => (
          <div className="exp-card" key={index}>
            <img src={exp.img} alt={exp.title} />
            <h3>{exp.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
