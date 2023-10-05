import { useState } from "react";
import SubmitPopup from "../popups/SubmitPopup";
import {
  CREATE_MATCH_ENTRY,
  GET_OFFLINE_CLIENTS,
  UPDATE_MATCH_ENTRY,
} from "../../config/endpoints";

function MatchEntryInput({
  setStatus,
  selectedMatch,
  selectedMatchEntry,
  registered_match_id,
}) {
  const [submitPopup, setSubmitPopup] = useState(false);
  const [rate, setRate] = useState("");
  const [amount, setAmount] = useState("");
  const [enterTeam, setEnterTeam] = useState("");
  const [playAndEat, setPlayAndEat] = useState("");
  const [enterClient, setEnterClient] = useState("");

  const handleSubmitPopupOpen = () => {
    setSubmitPopup(true);
  };
  return (
    <div className="match-position-bg rounded-bottom p-3">
      <div className="row">
        <div className="col-1">
          <div>
            <div className="medium-font">S.No:</div>
            <input
              type="number"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Enter"
            />
          </div>
        </div>
        <div className="col-1">
          <div>
            <div className="medium-font">Rate</div>
            <input
              type="number"
              defaultValue={1}
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Rate"
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Team</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Enter Team</option>
              <option>IND</option>
              <option>PAK</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Amount</div>
            <input
              type="number"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Amount"
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">P/E</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Select</option>
              <option>P</option>
              <option>E</option>
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
        header={"Are You Sure You Want To Submit This Match Entry"}
      />
    </div>
  );
}

export default MatchEntryInput;
