import { useState } from "react";
import MatchDeclarationPopup from "../match-popups/MatchDeclarationPopup";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

function FancyResultInput() {
  const [fancyDeclarationPopup, setFancyDeclarationPopup] = useState(false);
  const [fancySubmitPopup, setFancySubmitPopup] = useState(false);
  const handleFancyDeclarationPopupOpen = () => {
    setFancyDeclarationPopup(true);
  };
  const handleFancySubmitPopupOpen = () => {
    setFancySubmitPopup(true);
    setFancyDeclarationPopup(false);
  };
  return (
    <div className="match-position-bg rounded-bottom p-3">
      <div className="row w-75">
        <div className="col-2">
          <div>
            <div className="medium-font">Inn</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Select</option>
              <option>1st Inn</option>
              <option>2nd Inn</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Overs</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Select</option>
              <option>10 Overs</option>
              <option>20 Overs</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Result Runs</div>
            <input
              type="number"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Result Runs"
            />
          </div>
        </div>
        <div className="col d-flex align-items-end">
          <div
            className="cursor-pointer w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold"
            onClick={() => handleFancyDeclarationPopupOpen()}
          >
            Fancy Declaration
          </div>
        </div>
      </div>
      <MatchDeclarationPopup
        header={"Are You Sure You Want to Declare 10th Over +50 Runs Session?"}
        amount={"+100000"}
        state={fancyDeclarationPopup}
        setState={setFancyDeclarationPopup}
        handleSubmitPopupOpen={handleFancySubmitPopupOpen}
      />
      <MatchSubmitPopup
        header={"You Are Successfully Submited IND 10th Over Session"}
        state={fancySubmitPopup}
        setState={setFancySubmitPopup}
      />
    </div>
  );
}

export default FancyResultInput;
