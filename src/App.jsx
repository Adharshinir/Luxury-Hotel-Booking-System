import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Hotels from "./components/Hotels";
import Booking from "./components/Booking";
import Experiences from "./components/Experiences";
import Events from "./components/Events";
import Food from "./components/Food";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <>
          <Home />
        </>
      )}

      {page === "hotels" && <Hotels setPage={setPage} />}
      {page === "booking" && <Booking />}
      {page === "experiences" && <Experiences />}
      {page === "events" && <Events />}
      {page === "food" && <Food />}
    </div>
  );
}

export default App;
