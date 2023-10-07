import { PiArrowCircleDownBold, PiArrowCircleRightBold } from "react-icons/pi";
import { useState } from "react";
import FancyEntryInput from "./FancyEntryInput";
import FancyResultInput from "./FancyResultInput";
import { useHistory } from "react-router";

function FancyEntries() {
  const history = useHistory();
  const [fancyEntryInputs, setFancyEntryInputs] = useState(true);
  const [fancyResultInputs, setFancyResultInputs] = useState(false);
  const handleFancyEntry = () => {
    setFancyEntryInputs(true);
    setFancyResultInputs(false);
  };
  const handleMancyResult = () => {
    setFancyEntryInputs(false);
    setFancyResultInputs(true);
  };
  return (
    <div className="p-3">
      <div className="p-3 rounded-top match-position-bg w-100 d-flex align-items-center justify-content-between">
        <div className="w-25 d-flex justify-content-between">
          <div
            className={`cursor-pointer match-entry-btn w-45 d-flex align-items-center justify-content-around rounded-pill p-1 ${
              fancyEntryInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleFancyEntry()}
          >
            <div className="medium-font">Fancy Entry</div>
            <PiArrowCircleDownBold className="d-flex" />
          </div>
          <div
            className={`cursor-pointer match-entry-btn w-45 d-flex align-items-center justify-content-around rounded-pill p-1 ${
              fancyResultInputs ? "yellow-btn" : ""
            }`}
            onClick={() => handleMancyResult()}
          >
            <div className="medium-font">Fancy Result</div>
            <PiArrowCircleDownBold className="d-flex" />
          </div>
        </div>
        <div className="w-50 d-flex justify-content-end">
          <div
            className="cursor-pointer w-25 match-entry-btn d-flex align-items-center justify-content-around rounded-pill p-1"
            onClick={() => history.push("/match-entry")}
          >
            <div className="medium-font">Match Entry</div>
            <PiArrowCircleRightBold className="d-flex" />
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      {fancyEntryInputs && <FancyEntryInput />}
      {fancyResultInputs && <FancyResultInput />}
    </div>
  );
}

export default FancyEntries;
