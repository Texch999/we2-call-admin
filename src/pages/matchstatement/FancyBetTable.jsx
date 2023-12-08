import React, { useState } from "react";
import FancyFirstInnings from "./FancyFirstInnings";
import FancySecondInnings from "./FancySecondInnings";

function FancyBetTable({ winTeam, matchDetails, selectedClientID }) {
  const [fancyFirstInputs, setFancyFirstInputs] = useState(true);
  const [fancySecondInputs, setFancySecondInputs] = useState(false);
  const handleFancyFirstInputs = () => {
    setFancySecondInputs(false);
    setFancyFirstInputs(true);
  };

  const handleFancySecondInputs = () => {
    setFancySecondInputs(true);
    setFancyFirstInputs(false);
  };
  return (
    <div>
      <div className="w-50 d-flex justify-content-start mt-2 mb-3">
        <div className="w-25 d-flex justify-content-start">
          <div
            className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-1 ms-1 me-1 ${
              fancyFirstInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleFancyFirstInputs()}
          >
            <div className="small-font">1st Innings</div>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-start">
          <div
            className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-1 ms-1 me-1 ${
              fancySecondInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleFancySecondInputs()}
          >
            <div className="small-font">2nd Innings</div>
          </div>
        </div>
      </div>
      {fancyFirstInputs && (
        <FancyFirstInnings
          winTeam={winTeam}
          matchDetails={matchDetails}
          selectedClientID={selectedClientID}
        />
      )}
      {fancySecondInputs && (
        <FancySecondInnings
          winTeam={winTeam}
          matchDetails={matchDetails}
          selectedClientID={selectedClientID}
        />
      )}
    </div>
  );
}

export default FancyBetTable;
