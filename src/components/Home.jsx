import React from "react";
import myImage from "./taj.avif";
import rest1 from "./res1.jpeg";
import rest2 from "./res2.jpg";
import rest3 from "./res3.png";
import fac1 from "./fac1.jpeg";
import fac2 from "./fac2.webp";
import fac3 from "./fac3.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <section className="open">
      <img src={myImage} alt="hotel" className="img" />
      <h1>GRAND HORIZON </h1>
      <center>
        <p>INDIA'S PRIDE, WORLD'S STRONGEST</p>
      </center>
      <center>
        <div className="para">
          Grand Horizon has yet again been recognised as World’s Strongest Hotel
          Brand and India’s Strongest Brand, across sectors, by Brand Finance
          2025 Reports
        </div>
      </center>
      <div className="restline">
        <p className="rest">Our Restaurants</p>
        <div className="resimages">
          <img src={rest1} alt="hotel" className="img1" />
          <img src={rest2} alt="hotel" className="img1" />
          <img src={rest3} alt="hotel" className="img1" />
        </div>
      </div>

      <div className="restline">
        <p className="rest">Facilities</p>
        <div className="resimages">
          <img src={fac1} alt="hotel" className="img1" />
          <img src={fac2} alt="hotel" className="img1" />
          <img src={fac3} alt="hotel" className="img1" />
        </div>
      </div>
    </section>
  );
};

export default Home;
