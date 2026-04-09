import React from "react";
import "./Food.css";

import food1 from "./food1.avif";
import food2 from "./food2.webp";
import food3 from "./food3.jpg";

const buffets = [
  {
    title: "Breakfast Buffet",
    price: "₹999 per person",
    img: food1,
    items: ["Continental", "South Indian", "Fresh Juices", "Bakery"],
  },
  {
    title: "Lunch Buffet",
    price: "₹1499 per person",
    img: food2,
    items: ["North Indian", "Chinese", "Salads", "Desserts"],
  },
  {
    title: "Dinner Buffet",
    price: "₹1999 per person",
    img: food3,
    items: ["Live Counters", "Grill", "Seafood", "Premium Desserts"],
  },
];

const Food = () => {
  return (
    <div className="food-page">
      {/* HERO */}
      <div className="food-hero">
        <h1>DINING EXPERIENCES</h1>
      </div>

      {/* INTRO */}
      <div className="food-intro">
        <h2>EXQUISITE BUFFETS</h2>
        <p>
          Indulge in world-class culinary experiences crafted by our master
          chefs.
        </p>
      </div>

      {/* BUFFET CARDS */}
      <div className="food-grid">
        {buffets.map((buffet, index) => (
          <div className="food-card" key={index}>
            <img src={buffet.img} alt={buffet.title} />

            <div className="food-overlay">
              <h3>{buffet.title}</h3>
              <p className="price">{buffet.price}</p>

              <ul>
                {buffet.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
