import { useState } from "react";
import { MATCH_DECLARATION } from "../../config/endpoints";
import { call } from "../../config/axios";
import MatchDeclarationPopup from "../match-popups/MatchDeclarationPopup";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

function MatchResultInput({
  registered_match_id,
  selectedMatch,
  selectedMatchEntry,
  setAfterDeclare,
}) {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");
  const [matchSubmitPopup, setMatchSubmitPopup] = useState(false);
  const [matchResultInputData, setMatchResultInputData] = useState({});
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [matchSubmitSuccessPopup, setMatchSubmitSuccessPopup] = useState(false);
  const handleMatchSubmitSuccessPopupOpen = () => {
    setMatchSubmitSuccessPopup(true);
    setMatchSubmitPopup(false);
  };

  const handleMatchResultInputDataChange = (e) => {
    setMatchResultInputData({
      ...matchResultInputData,
      [e.target.name]: e.target.value,
    });
  };
  const handleMatchDeclarePopupOpen = async () => {
    if ((!matchResultInputData?.team, !matchResultInputData?.declarestatus)) {
      return setError("Please Enter Required Fields");
    }
    setIsProcessing(true);
    setError("");
    await call(MATCH_DECLARATION, {
      registered_match_id: registered_match_id,
      register_id,
      account_role,
      sport_name: matchResultInputData?.sport_name,
      series_name: matchResultInputData?.series_name,
      team: matchResultInputData?.team,
      declarestatus: matchResultInputData?.declarestatus,
    })
      .then((res) => {
        setIsProcessing(false);
        if (res.data.statusCode === 200) {
          setMatchSubmitPopup(true);
          // setTimeout(() => {
          //   setMatchSubmitPopup(false);
          // }, 1000);
          setAfterDeclare((prev) => !prev);
          setError("");
        } else {
          setError(
            res?.data?.message ? res?.data?.message : `Something Went Wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setError(`Something Went Wrong`);
        console.log(err);
      });
  };
  const handleMatchDeclarePopupClose = () => {
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
              name="sport_name"
              id="sport_name"
              value={selectedMatch?.sport_name || "Sports Name"}
              onChange={(e) => handleMatchResultInputDataChange(e)}
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
              name="series_name"
              id="series_name"
              value={selectedMatch?.series_name || "Series Name"}
              onChange={(e) => handleMatchResultInputDataChange(e)}
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Win Team</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="team"
              id="team"
              value={matchResultInputData?.team}
              onChange={(e) => handleMatchResultInputDataChange(e)}
            >
              <option value="">Select</option>
              <option value={selectedMatch?.team1 || ""}>
                {selectedMatch?.team1}
              </option>
              <option value={selectedMatch?.team2 || ""}>
                {selectedMatch?.team2}
              </option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Result Type</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="declarestatus"
              id="declarestatus"
              value={matchResultInputData?.declarestatus}
              onChange={(e) => handleMatchResultInputDataChange(e)}
            >
              <option value="">Select</option>
              <option value="result">Result</option>
              <option value="cancel">Cancel</option>
              <option value="draw">Draw</option>
              <option value="abondoned">Abandoned</option>
            </select>
          </div>
        </div>
        <div className="col d-flex align-items-end">
          <button
            className="cursor-pointer w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold"
            onClick={() => handleMatchDeclarePopupOpen()}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Result Declaration"}
          </button>
        </div>
        {error && (
          <div className="clr-red text-center medium-font">{error}</div>
        )}
      </div>
      <MatchDeclarationPopup
        header={"Are You Sure You Want Declare The Match"}
        amount={"1000000"}
        state={matchSubmitPopup}
        setState={setMatchSubmitPopup}
        handleMatchDeclarePopupClose={handleMatchDeclarePopupClose}
        handleMatchSubmitSuccessPopupOpen={handleMatchSubmitSuccessPopupOpen}
      />
      <MatchSubmitPopup
        header={"You Are Successfully Submited Your Match to Win IND"}
        state={matchSubmitSuccessPopup}
        setState={setMatchSubmitSuccessPopup}
      />
    </div>
  );
}

export default MatchResultInput;
