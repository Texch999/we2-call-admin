import { useEffect, useState } from "react";
import SubmitPopup from "../popups/SubmitPopup";
import {
  CREATE_MATCH_ENTRY,
  GET_OFFLINE_CLIENTS,
  UPDATE_MATCH_ENTRY,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function MatchEntryInput({
  setStatus,
  selectedMatch,
  selectedMatchEntry,
  registered_match_id,
}) {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [matchSubmitPopup, setMatchSubmitPopup] = useState(false);
  const [matchEntryInputData, setMatchEntryInputData] = useState({});
  const [existingUsers, setExistingUsers] = useState([]);
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleMatchEntryInputDataChange = (e) => {
    setMatchEntryInputData({
      ...matchEntryInputData,
      [e.target.name]: e.target.value,
    });
  };

  const getAllClientsData = async () => {
    call(GET_OFFLINE_CLIENTS, { register_id, account_role })
      .then((res) => {
        if (res.status === 200) {
          let temp = res?.data?.data;
          setExistingUsers(temp);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAllClientsData();
    };
    fetchData();
  }, []);

  const handleMatchSubmitPopup = async (matchEntryInputData) => {
    if (
      !matchEntryInputData?.rate ||
      !matchEntryInputData?.team ||
      !matchEntryInputData?.amount ||
      !matchEntryInputData?.playAndEat ||
      !matchEntryInputData?.clientName
    ) {
      setError("Please Enter Required Fields");
    }
    setIsProcessing(true);
    setError("");
    await call(CREATE_MATCH_ENTRY, {
      ...selectedMatch,
      // ...matchEntryInputData,
      rate: matchEntryInputData?.rate,
      team: matchEntryInputData?.team,
      amount: matchEntryInputData?.amount,
      pe: matchEntryInputData?.playAndEat,
      client_name: matchEntryInputData?.clientName,
      account_role,
      registered_match_id: registered_match_id,
    })
      .then((res) => {
        setIsProcessing(false);
        if (res.data.statusCode === 200) {
          setStatus((prev) => !prev);
          setMatchSubmitPopup(true);
          setMatchEntryInputData({});
          setTimeout(() => {
            setMatchSubmitPopup(false);
          }, 1000);
          setError("");
        } else {
          setError(
            res?.data?.message ? res?.data?.message : "Something Went Wrong"
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setError("Something Went Wrong");
        console.log(err);
      });
  };

  useEffect(() => {
    if (selectedMatchEntry) {
      setMatchEntryInputData(selectedMatchEntry);
    }
  }, [selectedMatchEntry]);

  const handleMatchEntryUpdate = () => {
    console.log("HELLOOOO");
  };

  return (
    <div className="match-position-bg rounded-bottom p-3">
      <div className="row">
        <div className="col-1">
          <div>
            <div className="medium-font">Rate</div>
            <input
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Rate"
              type="number"
              name="rate"
              id="rate"
              value={matchEntryInputData[matchEntryInputData?.rate || "1"]}
              onChange={(e) => handleMatchEntryInputDataChange(e)}
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Team</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="team"
              id="team"
              onChange={(e) => handleMatchEntryInputDataChange(e)}
            >
              <option>Enter Team</option>
              <option value={selectedMatch.team1}>
                {selectedMatch?.team1}
              </option>
              <option value={selectedMatch.team2}>
                {selectedMatch?.team2}
              </option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Amount</div>
            <input
              className="w-100 medium-font btn-bg rounded all-none p-2"
              type="number"
              placeholder="Amount"
              name="amount"
              id="amount"
              value={matchEntryInputData[matchEntryInputData?.amount || ""]}
              onChange={(e) => handleMatchEntryInputDataChange(e)}
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">P/E</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="playEat"
              id="playEat"
              onChange={(e) => handleMatchEntryInputDataChange(e)}
            >
              <option>Select</option>
              <option value="p">P</option>
              <option value="e">E</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Client Name</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="clientName"
              id="clientName"
              onChange={(e) => handleMatchEntryInputDataChange(e)}
            >
              <option>Client Name</option>
              {existingUsers?.length >= 0 &&
                existingUsers?.map((item, index) => (
                  <option value={item?.client_name} key={index}>
                    {item?.client_name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="col d-flex align-items-end">
          <div
            className="w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold"
            onClick={(matchEntryInputData) =>
              Object.keys(selectedMatchEntry).length === 0
                ? handleMatchSubmitPopup(matchEntryInputData)
                : handleMatchEntryUpdate()
            }
            disabled={!selectedMatch?.match_id || isProcessing}
          >
            Submit
          </div>
        </div>
        {error && (
          <div className="clr-red small-font text-center mt-2">{error}</div>
        )}
      </div>
      <SubmitPopup
        state={matchSubmitPopup}
        setState={setMatchSubmitPopup}
        header={"Are You Sure You Want To Submit This Match Entry"}
      />
    </div>
  );
}

export default MatchEntryInput;
