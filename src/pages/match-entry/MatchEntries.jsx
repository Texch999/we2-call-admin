import { PiArrowCircleDownBold, PiArrowCircleRightBold } from "react-icons/pi";
import MatchEntryInput from "./MatchEntryInput";
import MatchResultInput from "./MatchResultInput";
import { useState } from "react";
import { useHistory } from "react-router";

function MatchEntries({
  setStatus,
  selectedMatch,
  matchAccountData,
  selectedMatchEntry,
  setAfterDeclare,
}) {
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
            className={`cursor-pointer match-entry-btn w-45 d-flex align-items-center justify-content-around rounded-pill p-1 ${
              matchEntryInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleMatchEntry()}
          >
            <div className="medium-font">Match Entry</div>
            <PiArrowCircleDownBold className="d-flex" />
          </div>
          <div
            className={`cursor-pointer match-entry-btn w-45 d-flex align-items-center justify-content-around rounded-pill p-1 ${
              matchResultInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleMatchResult()}
          >
            <div className="medium-font">Match Result</div>
            <PiArrowCircleDownBold className="d-flex" />
          </div>
        </div>
        <div className="w-50 d-flex justify-content-end">
          <digit
            className="cursor-pointer w-25 match-entry-btn d-flex align-items-center justify-content-around rounded-pill p-1"
            onClick={() => history.push("/fancy-entry")}
          >
            <div className="medium-font">Fancy Entry</div>
            <PiArrowCircleRightBold className="d-flex" />
          </digit>
        </div>
      </div>
      <hr className="hr-line" />
      {matchEntryInputs && (
        <MatchEntryInput
          setStatus={setStatus}
          selectedMatch={selectedMatch}
          selectedMatchEntry={selectedMatchEntry}
          registered_match_id={matchAccountData?.registered_match_id}
        />
      )}
      {matchResultInputs && (
        <MatchResultInput
          selectedMatch={selectedMatch}
          selectedMatchEntry={selectedMatchEntry}
          setAfterDeclare={setAfterDeclare}
          registered_match_id={matchAccountData?.registered_match_id}
        />
      )}
    </div>
  );
}

export default MatchEntries;
