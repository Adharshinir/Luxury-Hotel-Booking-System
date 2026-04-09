import React from "react";

const Branches = () => {
  const branches = ["Mumbai", "Delhi", "Chennai", "Bangalore"];

  return (
    <section>
      <h2>Our Branches</h2>
      <ul>
        {branches.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </section>
  );
};

export default Branches;
