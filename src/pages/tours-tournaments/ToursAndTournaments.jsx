import React from "react";
import "./style.css";
import TakeTour from "./TakeTour";
import Football from "./Football";
import Entertainment from "./Entertainment";

function ToursAndTournaments() {
  return (
    <div className="pl-1rem tours-main">
      <TakeTour />
      <Football />
      <Entertainment />
    </div>
  );
}

export default ToursAndTournaments;
