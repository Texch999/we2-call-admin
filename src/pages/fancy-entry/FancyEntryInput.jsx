import { useState } from "react";
import SubmitPopup from "../popups/SubmitPopup";

function FancyEntryInput() {
  const [submitPopup, setSubmitPopup] = useState(false);
  const handleSubmitPopupOpen = () => {
    setSubmitPopup(true);
  };
  return (
    <div className="match-position-bg rounded-bottom p-3">
      <div className="row">
        <div className="col-1">
          <div>
            <div className="medium-font">Inn</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Select</option>
              <option>1st Inn</option>
              <option>2nd Inn</option>
            </select>
          </div>
        </div>
        <div className="col-1">
          <div>
            <div className="medium-font">S.No:</div>
            <input
              type="text"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Enter"
            />
          </div>
        </div>
        <div className="col-1">
          <div>
            <div className="medium-font">Rate</div>
            <input
              type="text"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Rate"
            />
          </div>
        </div>
        <div className="col-1">
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
            <div className="medium-font">Team</div>
            <input
              type="text"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Team"
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Amount</div>
            <input
              type="text"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Amount"
            />
          </div>
        </div>
        <div className="col-1">
          <div>
            <div className="medium-font">Y/N</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Select</option>
              <option>Y</option>
              <option>N</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Client Name</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Client Name</option>
              <option>Name 1</option>
              <option>Name 2</option>
            </select>
          </div>
        </div>
        <div className="col d-flex align-items-end">
          <div
            className="w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold"
            onClick={() => handleSubmitPopupOpen()}
          >
            Submit
          </div>
        </div>
      </div>
      <SubmitPopup
        state={submitPopup}
        setState={setSubmitPopup}
        header={"Are You Sure You Want To Submit This Fancy Entry"}
      />
    </div>
  );
}

export default FancyEntryInput;
