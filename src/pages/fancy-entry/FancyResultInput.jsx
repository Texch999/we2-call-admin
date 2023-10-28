import React, { useState, useEffect } from "react";
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
    setMatchInnings,
    profitLossData = {},
  } = props;

  const register_id = localStorage?.getItem("register_id");
  const creator_id = localStorage?.getItem("creator_id");
  const account_role = localStorage?.getItem("account_role");

  const [fancyResultInputData, setFancyResultInputData] = useState({});
  const [confirmDeclaration, setConfirmDeclaration] = useState(false);
  const [error, setError] = useState("");
  const [afterConfirm, setAfterConfirm] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  let selectedInnings = fancyResultInputData?.innings;

  const handleFancyResultInputDataChange = (e) => {
    setFancyResultInputData({
      ...fancyResultInputData,
      [e.target.name]: e.target.value,
    });
    setMatchInnings(fancyResultInputData?.innings);
  };

  const handleConfirmDeclaration = () => {
    if (
      !fancyResultInputData?.innings ||
      !fancyResultInputData?.over ||
      !fancyResultInputData?.team ||
      !fancyResultInputData?.runs
    ) {
      setError("Please Enter Required Fields");
    } else {
      setConfirmDeclaration(true);
    }
  };
  const handleFancyDeclaration = async () => {
    setConfirmDeclaration(false);
    setIsProcessing(true);
    setAfterConfirm(true);
    setError("");
    await call(FANCY_DECLARATION, {
      registered_match_id,
      register_id,
      over: fancyResultInputData?.over,
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
          }, 1000);
          setFancyResultInputData({})
        } else {
          setConfirmDeclaration(false);
          setError(
            res?.data?.message ? res?.data?.message : "Something Went Wrong"
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setError(`something wen't wrong`);
        console.log(err);
      });
  };

  useEffect(() => {
    setFancyResultInputData(selectedMatchEntry);
  }, [selectedMatchEntry]);

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
              <option value="1">First</option>
              <option value="2">Second</option>
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
                value={fancyResultInputData?.over || []}
                name="over"
                onChange={(e) => handleFancyResultInputDataChange(e)}
              ></input>
              <select
                name="over"
                className="w-10 custom-select medium-font btn-bg all-none p-2 rounded"
                onChange={(e) => handleFancyResultInputDataChange(e)}
              >
                {(selectedInnings === "2"
                  ? selectedMatch?.game_object?.second_innings_fancy_overs
                  : selectedMatch?.game_object?.first_innings_fancy_overs
                )
                  ?.filter(
                    (i) =>
                      Object.keys(profitLossData)?.length === 0 ||
                      !Object.keys(profitLossData)?.includes(`${i}`)
                  )
                  ?.map((over) => (
                    <option value={over}>{over}</option>
                  ))}
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
      <MatchDeclarationPopup
        header={`Are You Sure You Want to Declare ${fancyResultInputData?.over}th Over ${fancyResultInputData?.runs} Runs Session?`}
        // amount={"+100000"}
        state={confirmDeclaration}
        setState={setConfirmDeclaration}
        handleSubmitPopupOpen={handleFancyDeclaration}
      />
      <MatchSubmitPopup
        header={isProcessing ? "Declaring..." : "Fancy declared successfully"}
        isProcessing={isProcessing}
        error={error}
        state={afterConfirm}
        setState={setAfterConfirm}
      />
    </div>
  );
}

export default FancyResultInput;
