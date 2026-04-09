import React from "react";
import "./Events.css";

import eve1 from "./eve1.avif";
import eve2 from "./eve2.avif";
import eve3 from "./eve3.avif";

const events = [
  {
    title: "CONFERENCES",
    img: eve1,
  },
  {
    title: "PARTIES",
    img: eve2,
  },
  {
    title: "TIMELESS WEDDINGS",
    img: eve3,
  },
];

const Events = () => {
  return (
    <div className="exp-page">
      <p className="head">EVENTS</p>

      <p>
        Discover an exquisite collection of experiences—romantic escapes, family
        delights, bold adventures and signature indulgences.
      </p>

      {/* GRID */}
      <div className="exp-grid">
        {events.map((eve, index) => (
          <div className="exp-card" key={index}>
            <img src={eve.img} alt={eve.title} />
            <h3>{eve.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
