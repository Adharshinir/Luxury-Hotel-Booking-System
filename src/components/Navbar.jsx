import React from "react";
import "./Navbar.css";

const Navbar = ({ setPage }) => {
  return (
    <div className="topbar">
      <div className="innerleft">
        <div className="hotelname">Grand Horizon</div>
      </div>

      <div className="ele" onClick={() => setPage("hotels")}>
        Hotels
      </div>

      <div className="ele" onClick={() => setPage("experiences")}>
        Experiences
      </div>
      <div className="ele" onClick={() => setPage("events")}>
        Events
      </div>
      <div className="ele" onClick={() => setPage("food")}>
        Dining
      </div>

      <div className="innerright"></div>
    </div>
  );
};

export default Navbar;
