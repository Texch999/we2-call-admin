import { useEffect, useState } from "react";
import SubmitPopup from "../popups/SubmitPopup";
import {
  CREATE_MATCH_ENTRY,
  GET_OFFLINE_CLIENTS,
  UPDATE_MATCH_ENTRY,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import Select from "react-select";

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
  const [selectedOptions, setSelectedOptions] = useState();

  const optionList = existingUsers?.map((item) => {
    return { value: item?.client_id, label: item?.client_name };
  });
  const handleSelect = (data) => {
    setSelectedOptions(data);
  };

  const handleMatchEntryInputDataChange = (e) => {
    setMatchEntryInputData({
      ...matchEntryInputData,
      [e.target.name]: e.target.value,
    });
  };

  const resetFields = () => {
    console.log("testing");
    setMatchEntryInputData({});
    setSelectedOptions("");
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

  const handleMatchSubmitPopup = async () => {
    if (
      !matchEntryInputData?.rate ||
      !matchEntryInputData?.team ||
      !matchEntryInputData?.amount ||
      !matchEntryInputData?.playEat ||
      !selectedOptions?.label
    ) {
      return setError("Please Enter Required Fields");
    }
    setIsProcessing(true);
    setError("");
    await call(CREATE_MATCH_ENTRY, {
      ...selectedMatch,
      rate: matchEntryInputData?.rate,
      team: matchEntryInputData?.team,
      amount: matchEntryInputData?.amount,
      pe: matchEntryInputData?.playEat,
      client_id: selectedOptions?.value,
      client_name: selectedOptions?.label,
      account_role,
      registered_match_id: registered_match_id,
    })
      .then((res) => {
        setIsProcessing(false);
        console.log("inside response", res.data);

        if (res.data.statusCode === 200) {
          setStatus((prev) => !prev);
          setMatchSubmitPopup(true);
          // setMatchEntryInputData({});
          console.log("inside response");
          resetFields();
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

  const handleMatchEntryUpdate = async () => {
    if (
      !matchEntryInputData?.rate ||
      !matchEntryInputData?.team ||
      !matchEntryInputData?.amount ||
      !matchEntryInputData?.playEat ||
      !selectedOptions?.label
    ) {
      return setError("Please Enter Required Fields");
    }
    setIsProcessing(true);
    setError("");
    await call(UPDATE_MATCH_ENTRY, {
      rate: matchEntryInputData?.rate,
      team: matchEntryInputData?.team,
      amount: matchEntryInputData?.amount,
      pe: matchEntryInputData?.playEat,
      client_id: selectedOptions?.value,
      client_name: selectedOptions?.label,
      register_id,
      account_role,
      registered_match_id,
      match_entry_id: selectedMatchEntry?.match_entry_id,
    })
      .then((res) => {
        setIsProcessing(false);
        if (res.data.statusCode === 200) {
          setStatus((prev) => !prev);
          setMatchSubmitPopup(true);
          setTimeout(() => {
            setMatchSubmitPopup(false);
          }, 1000);
          // setMatchEntryInputData({});
          resetFields();
        } else {
          setError("Something Went Wrong");
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
      setSelectedOptions({
        label: selectedMatchEntry?.client_name,
        value: selectedMatchEntry?.client_id,
      });
      setMatchEntryInputData(selectedMatchEntry);
    }
  }, [selectedMatchEntry]);

  console.log("matchEntryInputData--->", matchEntryInputData);
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
              defaultValue={1}
              value={matchEntryInputData?.rate || ""}
              onChange={(e) => handleMatchEntryInputDataChange(e)}
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Enter Team</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="team"
              id="team"
              onChange={(e) => handleMatchEntryInputDataChange(e)}
            >
              {/* <option>Enter Team</option> */}
              <option value={selectedMatch.team1 || ""}>
                {selectedMatch?.team1}
              </option>
              <option value={selectedMatch.team2 || ""}>
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
              value={matchEntryInputData?.amount || ""}
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
              {/* <option>Select</option> */}
              <option value="p">P</option>
              <option value="e">E</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Client Name</div>
            {/* <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="client_id"
              id="clientName"
              onChange={(e) => handleMatchEntryInputDataChange(e)}
            >
              <option>Client Name</option>
              {existingUsers?.length >= 0 &&
                existingUsers?.map((item, index) => (
                  <option value={item?.client_id} key={index}>
                    {item?.client_name}
                  </option>
                ))}
            </select> */}
            <Select
              className="w-100"
              options={optionList}
              placeholder="Client Name"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
            />
          </div>
        </div>
        <div className="col d-flex align-items-end">
          <div
            className="cursor-pointer w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold"
            onClick={() =>
              Object.keys(selectedMatchEntry).length === 0
                ? handleMatchSubmitPopup()
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
        header={"Your Successfully Submitted Match Entry"}
      />
    </div>
  );
}

export default MatchEntryInput;
