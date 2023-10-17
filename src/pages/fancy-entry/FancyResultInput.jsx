import { useState } from "react";
import MatchDeclarationPopup from "../match-popups/MatchDeclarationPopup";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

function FancyResultInput(props) {
  const {
    registered_match_id,
    selectedMatch,
    setStatus,
    selectedMatchEntry,
    getFancyProfitLoss,
    setSelectedMatchEntry,
  } = props;
  const [fancyDeclarationPopup, setFancyDeclarationPopup] = useState(false);
  const [fancySubmitPopup, setFancySubmitPopup] = useState(false);
  const [over, setOver] = useState("");
  const [fancyResultInputData, setFancyResultInputData] = useState({});

  const handleOvers = (e) => {
    setOver(e.target.value);
  };
  const handleSelectOvers = (e) => {
    setOver([...over, e.target.value]);
  };

  const handleFancyResultInputDataChange = (e) => {
    setFancyResultInputData({
      ...fancyResultInputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFancyDeclarationPopupOpen = () => {
    setFancyDeclarationPopup(true);
  };
  const handleFancySubmitPopupOpen = () => {
    setFancySubmitPopup(true);
    setFancyDeclarationPopup(false);
  };
  console.log("FANCY-->", fancyResultInputData);
  return (
    <div className="match-position-bg rounded-bottom p-3">
      <div className="row">
        <div className="col-2">
          <div>
            <div className="medium-font">Inn</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="innings"
              onChange={(e) => handleFancyResultInputDataChange(e)}
            >
              <option value="">Select</option>
              <option value="1">1st Inn</option>
              <option value="2">2nd Inn</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Overs</div>
            <div className="custom-select medium-font btn-bg rounded">
              <input
                className="w-90 custom-select medium-font btn-bg  all-none p-2 rounded"
                placeholder="Over"
                value={over || []}
                name="over"
                onChange={(e) => handleOvers(e)}
              ></input>
              <select
                name="over"
                value={over || ""}
                className="w-10 custom-select medium-font btn-bg all-none p-2 rounded"
                onChange={(e) => handleSelectOvers(e)}
              >
                <option>Select</option>
                <option value="10">10 Overs</option>
                <option value="20">20 Overs</option>
                <option value="30">30 Overs</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Result Runs</div>
            <input
              type="number"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Result Runs"
              name="runs"
              value={fancyResultInputData?.runs || ""}
              onChange={(e) => handleFancyResultInputDataChange(e)}
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Enter Team</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="team"
              value={fancyResultInputData?.team || ""}
              onChange={(e) => handleFancyResultInputDataChange(e)}
            >
              <option value="">Select</option>
              <option value={selectedMatch?.team1}>
                {selectedMatch?.team1}
              </option>
              <option value={selectedMatch?.team2}>
                {selectedMatch?.team2}
              </option>
            </select>
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
