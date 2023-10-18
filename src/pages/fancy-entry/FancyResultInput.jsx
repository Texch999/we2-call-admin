import { useEffect, useState } from "react";
import MatchDeclarationPopup from "../match-popups/MatchDeclarationPopup";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
import { FANCY_DECLARATION } from "../../config/endpoints";
import { call } from "../../config/axios";

function FancyResultInput(props) {
  const {
    registered_match_id,
    selectedMatch,
    setStatus,
    selectedMatchEntry,
    getFancyProfitLoss,
    setSelectedMatchEntry,
  } = props;

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [fancyDeclarationPopup, setFancyDeclarationPopup] = useState(false);
  const [fancySubmitPopup, setFancySubmitPopup] = useState(false);
  const [over, setOver] = useState("");
  const [fancyResultInputData, setFancyResultInputData] = useState({});
  const [confirmDeclaration, setConfirmDeclaration] = useState(false);
  const [error, setError] = useState("");
  const [afterConfirm, setAfterConfirm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

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
  const handleConfirmDeclaration = async () => {
    if (
      !over ||
      !fancyResultInputData?.innings ||
      !fancyResultInputData?.team ||
      !fancyResultInputData?.runs
    ) {
      return setError("Please Enter Required Fields");
    }
    setConfirmDeclaration(true);
  };

  const handleFancyDeclaration = async () => {
    setConfirmDeclaration(false);
    setIsProcessing(true);
    setAfterConfirm(true);
    setError("");
    await call(FANCY_DECLARATION, {
      registered_match_id,
      register_id,
      over: over[0],
      innings: fancyResultInputData?.innings,
      runs: fancyResultInputData?.runs,
      team: fancyResultInputData?.team,
    })
      .then((res) => {
        setIsProcessing(false);
        if (res?.data?.statusCode === 200) {
          setConfirmDeclaration(false);
          setStatus((prev) => !prev);
          getFancyProfitLoss();
          setTimeout(() => {
            setAfterConfirm(false);
          }, 2000);
        } else {
          setConfirmDeclaration(false);
          setError(
            res?.data?.message ? res?.data?.message : "Something Went Wrong"
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setError(`Something Went Wrong`);
        console.log(err);
      });
  };

  useEffect(() => {
    setOver(selectedMatchEntry?.over);
    setFancyResultInputData(selectedMatch);
  }, [selectedMatchEntry]);
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
            onClick={() => handleConfirmDeclaration()}
            disabled={isProcessing}
          >
            {isProcessing ? "Declaring..." : "Fancy Declaration"}
          </div>
        </div>
        {error && (
          <div className="clr-red small-font text-center mt-2">{error}</div>
        )}
      </div>
      {confirmDeclaration && (
        <MatchDeclarationPopup
          header={`Are You Sure You Want to Declare ${over}th Over ${fancyResultInputData?.runs} Runs Session?`}
          // amount={"+100000"}
          state={confirmDeclaration}
          setState={setConfirmDeclaration}
          handleSubmitPopupOpen={handleFancyDeclaration}
        />
      )}
      {afterConfirm && (
        <MatchSubmitPopup
          header={isProcessing ? "Declaring..." : "Fancy declared successfully"}
          isProcessing={isProcessing}
          error={error}
          state={afterConfirm}
          setState={setAfterConfirm}
        />
      )}
    </div>
  );
}

export default FancyResultInput;
