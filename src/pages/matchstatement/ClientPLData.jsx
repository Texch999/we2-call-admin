import React, { useState } from "react";
import MatchBetTable from "./MatchBetTable";
import FancyBetTable from "./FancyBetTable";

function ClientPLData() {
  const [matchBetInputs, setMatchBetInputs] = useState(true);
  const [fancyBetInputs, setFancyBetInputs] = useState(false);
  const handleMatchBet = () => {
    setFancyBetInputs(false);
    setMatchBetInputs(true);
  };

  const handleFancyBet = () => {
    setFancyBetInputs(true);
    setMatchBetInputs(false);
  };
  return (
    <div>
      <div className="medium-font mt-3 mb-2">Client Name : Animesh</div>
      <div className="w-50 d-flex justify-content-start mt-2 mb-3">
        <div className="w-25 d-flex justify-content-end">
          <div
            className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-1 ms-1 me-1 ${
              matchBetInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleMatchBet()}
          >
            <div className="medium-font">Match Bet</div>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-end">
          <div
            className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-1 ms-1 me-1 ${
              fancyBetInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleFancyBet()}
          >
            <div className="medium-font">Fancy Bet</div>
          </div>
        </div>
      </div>
      {matchBetInputs && <MatchBetTable />}
      {fancyBetInputs && <FancyBetTable />}
    </div>
  );
}

export default ClientPLData;
