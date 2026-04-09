import React, { useState } from "react";
import "./Hotels.css";
import myImage from "./hotels.avif";
import img1 from "./hotel1.avif";
import img2 from "./hotel2.avif";
import img3 from "./hotel3.avif";
import img4 from "./hotel4.avif";
import img5 from "./hotel5.avif";

const hotels = [
  {
    name: "Aurelia Palace, Jaipur",
    type: "Palace",
    location: "Jaipur",
    desc: "A royal heritage experience with timeless luxury.",
    img: img1,
    rooms: [
      { type: "Deluxe Room", price: "₹8,000/night" },
      { type: "Suite", price: "₹15,000/night" },
      { type: "Royal Suite", price: "₹25,000/night" },
    ],
  },
  {
    name: "Aurelia Beach Resort, Goa",
    type: "Resort",
    location: "Goa",
    desc: "Experience serenity with oceanfront luxury stays.",
    img: img2,
    rooms: [
      { type: "Sea View Room", price: "₹10,000/night" },
      { type: "Villa", price: "₹20,000/night" },
    ],
  },
  {
    name: "Aurelia City Centre, Mumbai",
    type: "City",
    location: "Mumbai",
    desc: "Modern elegance in the heart of the city.",
    img: img3,
    rooms: [
      { type: "Standard Room", price: "₹6,000/night" },
      { type: "Executive Suite", price: "₹12,000/night" },
    ],
  },
  {
    name: "Baghvan, Pench National Park",
    type: "Resort",
    location: "Pench",
    desc: "Luxury lodges and thrilling safaris await.",
    img: img4,
    rooms: [
      { type: "Luxury Tent", price: "₹18,000/night" },
      { type: "Safari Suite", price: "₹28,000/night" },
    ],
  },
  {
    name: "Banjaar Tola, Kanha National Park",
    type: "Resort",
    location: "Kanha",
    desc: "Panoramic wilderness views and elegant stays.",
    img: img5,
    rooms: [
      { type: "Tent Suite", price: "₹20,000/night" },
      { type: "Grand Tent", price: "₹30,000/night" },
    ],
  },
];

const Hotels = ({ setPage }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [openIndex, setOpenIndex] = useState("");

  const filteredHotels = hotels.filter((hotel) => {
    return (
      hotel.location.toLowerCase().includes(search.toLowerCase()) &&
      (type === "" || hotel.type === type)
    );
  });

  return (
    <div className="hotels-page">
      <img src={myImage} alt="hotel" className="img" />

      <div className="hotels-hero">
        <h1>Explore Grand Horizon</h1>
        <center>
          <div className="hotelsintro">
            From a luxury urban sanctum to the halls of royalty...
          </div>
        </center>
      </div>

      <div className="filterbar">
        <input
          type="text"
          placeholder="Destination / City"
          onChange={(e) => setSearch(e.target.value)}
          className="inputbox"
        />

        <select onChange={(e) => setType(e.target.value)} className="options">
          <option value="">Hotel Type</option>
          <option value="Resort">Resort</option>
          <option value="City">City</option>
          <option value="Palace">Palace</option>
        </select>
      </div>

      <div className="hotel-grid">
        {filteredHotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.img} alt={hotel.name} />

            <div className="hotel-overlay">
              <h3>{hotel.name}</h3>
              <p>{hotel.desc}</p>

              <div className="hotel-buttons">
                <button className="book-btn" onClick={() => setPage("booking")}>
                  BOOK NOW
                </button>

                <button
                  className="more"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  MORE →
                </button>
              </div>

              {openIndex === index && (
                <div className="room-details">
                  {hotel.rooms.map((room, i) => (
                    <div key={i} className="room-item">
                      <span>{room.type}</span>
                      <span>{room.price}</span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
