import { useState } from "react";
import MatchDeclarationPopup from "../match-popups/MatchDeclarationPopup";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
function MatchResultInput() {
  const [matchSubmitPopup, setMatchSubmitPopup] = useState(false);
  const [submitPopup, setSubmitPopup] = useState(false);
  const handleMatchSubmitPopupOpen = () => {
    setMatchSubmitPopup(true);
  };
  const handleSubmitPopupOpen = () => {
    setSubmitPopup(true);
    setMatchSubmitPopup(false);
  };
  return (
    <div className="match-position-bg rounded-bottom p-3">
      <div className="row">
        <div className="col">
          <div>
            <div className="medium-font">Sports Name</div>
            <input
              type="text"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Sports Name"
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Series Name</div>
            <input
              type="text"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Series Name"
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Win Team</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Select</option>
              <option>Team 1</option>
              <option>Team 2</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Result Type</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Select</option>
              <option>Win</option>
              <option>Loss</option>
              <option>Draw</option>
            </select>
          </div>
        </div>
        <div className="col d-flex align-items-end">
          <div
            className="w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold"
            onClick={() => handleMatchSubmitPopupOpen()}
          >
            Result Declaration
          </div>
        </div>
      </div>
      <MatchDeclarationPopup
        header={"Are You Sure You Want Match to Win India?"}
        amount={"+100000"}
        state={matchSubmitPopup}
        setState={setMatchSubmitPopup}
        handleSubmitPopupOpen={handleSubmitPopupOpen}
      />
      <MatchSubmitPopup
        header={"You Are Successfully Submited Your Match to Win IND"}
        state={submitPopup}
        setState={setSubmitPopup}
      />
    </div>
  );
}

export default MatchResultInput;
