import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkin: "",
    checkout: "",
    room: "Deluxe",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Confirmed!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="booking-page">
      <p>Book Your Stay</p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <label className="headline">Check-in Date</label>
        <input type="date" name="checkin" onChange={handleChange} required />

        <label className="headline">Check-out Date</label>
        <input type="date" name="checkout" onChange={handleChange} required />

        <select name="room" onChange={handleChange}>
          <option value="Deluxe">Deluxe Room</option>
          <option value="Suite">Suite</option>
          <option value="Presidential">Presidential Suite</option>
        </select>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
