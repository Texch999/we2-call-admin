import { PiArrowCircleDownBold, PiArrowCircleRightBold } from "react-icons/pi";
import MatchEntryInput from "./MatchEntryInput";
import MatchResultInput from "./MatchResultInput";
import { useState } from "react";
import { useHistory } from "react-router";

function MatchEntries() {
  const history = useHistory();
  const [matchEntryInputs, setMatchEntryInputs] = useState(true);
  const [matchResultInputs, setMatchResultInputs] = useState(false);
  const handleMatchEntry = () => {
    setMatchEntryInputs(true);
    setMatchResultInputs(false);
  };
  const handleMatchResult = () => {
    setMatchEntryInputs(false);
    setMatchResultInputs(true);
  };
  return (
    <div className="p-3">
      <div className="p-3 rounded-top match-position-bg w-100 d-flex align-items-center justify-content-between">
        <div className="w-25 d-flex justify-content-between">
          <div
            className={`match-entry-btn w-45 d-flex align-items-center justify-content-around rounded-pill p-1 ${
              matchEntryInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleMatchEntry()}
          >
            <div className="medium-font">Match Entry</div>
            <PiArrowCircleDownBold className="d-flex" />
          </div>
          <div
            className={`match-entry-btn w-45 d-flex align-items-center justify-content-around rounded-pill p-1 ${
              matchResultInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleMatchResult()}
          >
            <div className="medium-font">Match Result</div>
            <PiArrowCircleDownBold className="d-flex" />
          </div>
        </div>
        <div className="w-50 d-flex justify-content-end">
          <div
            className="w-25 match-entry-btn d-flex align-items-center justify-content-around rounded-pill p-1"
            onClick={() => history.push("/fancy-entry")}
          >
            <div className="medium-font">Fancy Entry</div>
            <PiArrowCircleRightBold className="d-flex" />
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      {matchEntryInputs && <MatchEntryInput />}
      {matchResultInputs && <MatchResultInput />}
    </div>
  );
}

export default MatchEntries;
