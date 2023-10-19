import { useEffect, useState } from "react";
import SubmitPopup from "../popups/SubmitPopup";
import Select from "react-select";
import {
  FANCY_ENTRY_DATA,
  GET_OFFLINE_CLIENTS,
  UPDATE_FANCY_ENTRY,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function FancyEntryInput({
  selectedMatch,
  registered_match_id,
  selectedMatchEntry,
  setStatus,
  setSelectedMatchEntry,
  setMatchOver,
  getRiskRunningData,
  getFancyProfitLoss,
  profitLossData = {},
}) {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [fancyEntryInputData, setFancyInputEntryData] = useState({});
  const [over, setOver] = useState("");
  const [submitPopup, setSubmitPopup] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState();
  const [existingUsers, setExistingUsers] = useState([]);
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const optionList = existingUsers?.map((item) => {
    return { value: item?.client_id, label: item?.client_name };
  });
  const handleClientSelect = (data) => {
    setSelectedOptions(data);
  };
  const handleOvers = (e) => {
    setOver(e.target.value);
  };
  const handleSelectOvers = (e) => {
    setOver([...over, e.target.value]);
  };
  const handleFancyEntryInputDataChange = (e) => {
    setFancyInputEntryData({
      ...fancyEntryInputData,
      [e.target.name]: e.target.value,
    });
  };

  const getAllClientsData = async () => {
    await call(GET_OFFLINE_CLIENTS, { register_id, account_role })
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

  const resetFields = () => {
    setOver("");
    selectedOptions("");
    fancyEntryInputData({});
  };

  const handleFancyEntrySubmit = async () => {
    if (
      !fancyEntryInputData?.innings ||
      !over ||
      !fancyEntryInputData?.team ||
      !fancyEntryInputData?.amount ||
      !fancyEntryInputData?.yN ||
      !selectedOptions?.label
    ) {
      return setError("Please Enter Required Fields");
    }
    setIsProcessing(true);
    setError("");
    await call(FANCY_ENTRY_DATA, {
      ...selectedMatch,
      registered_match_id,
      register_id,
      account_role,
      innings: fancyEntryInputData?.innings,
      rate: 1,
      over: over[0],
      team: fancyEntryInputData?.team,
      amount: fancyEntryInputData?.amount,
      runs: fancyEntryInputData?.runs,
      yN: fancyEntryInputData?.yN,
      client_id: selectedOptions?.value,
      client_name: selectedOptions?.label,
    })
      .then((res) => {
        setError("");
        setIsProcessing(false);
        if (res?.data?.statusCode === 200) {
          setStatus((prev) => !prev);
          setSubmitPopup(true);
          setTimeout(() => {
            setSubmitPopup(false);
          }, 1000);
          getRiskRunningData();
          getFancyProfitLoss();
          resetFields();
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

  const handleFancyEntryUpdate = async () => {
    if (
      !fancyEntryInputData?.innings ||
      !over ||
      !fancyEntryInputData?.team ||
      !fancyEntryInputData?.amount ||
      !fancyEntryInputData?.yN ||
      !selectedOptions?.label
    ) {
      return setError("Please Enter Required Fields");
    }
    setIsProcessing(true);
    setError("");
    await call(UPDATE_FANCY_ENTRY, {
      ...selectedMatch,
      ...selectedMatchEntry,
      registered_match_id,
      register_id,
      account_role,
      innings: fancyEntryInputData?.innings,
      rate: 1,
      over: over[0],
      team: fancyEntryInputData?.team,
      amount: fancyEntryInputData?.amount,
      runs: fancyEntryInputData?.runs,
      yN: fancyEntryInputData?.yN,
      client_id: selectedOptions?.value,
      client_name: selectedOptions?.label,
      fancy_entry_id: selectedMatchEntry?.fancy_entry_id,
    })
      .then((res) => {
        setIsProcessing(false);
        if (res?.data?.statusCode === 200) {
          setStatus((prev) => !prev);
          setSubmitPopup(true);
          setTimeout(() => {
            setSubmitPopup(false);
          }, 1000);
          setSelectedMatchEntry("");
          getRiskRunningData();
          getFancyProfitLoss();
          resetFields();
          setError("");
        } else {
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
    if (selectedMatchEntry) {
      setSelectedOptions({
        label: selectedMatchEntry?.client_name,
        value: selectedMatchEntry?.client_id,
      });
      setOver(selectedMatchEntry?.over);
      setFancyInputEntryData(selectedMatchEntry);
    }
  }, [selectedMatchEntry]);

  return (
    <div className="match-position-bg rounded-bottom p-3">
      <div className="row">
        <div className="col-1">
          <div>
            <div className="medium-font">Inn</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="innings"
              id="innings"
              value={fancyEntryInputData?.innings || ""}
              onChange={(e) => handleFancyEntryInputDataChange(e)}
            >
              <option>Select</option>
              <option value="1">1st Inn</option>
              <option value="2">2nd Inn</option>
            </select>
          </div>
        </div>
        <div className="col-1">
          <div>
            <div className="medium-font">Rate</div>
            <input
              type="number"
              defaultValue={1}
              className="w-100 medium-font btn-bg rounded all-none p-2"
              disabled
            />
          </div>
        </div>
        <div className="col-1">
          <div>
            <div className="medium-font">Overs</div>
            <div className="custom-select medium-font btn-bg rounded">
              <input
                className="w-70 custom-select medium-font btn-bg  all-none p-2 rounded"
                placeholder="Over"
                value={over || []}
                name="over"
                onChange={(e) => handleOvers(e)}
              ></input>
              <select
                name="over"
                value={over || ""}
                className="w-30 custom-select medium-font btn-bg all-none p-2 rounded"
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
            <div className="medium-font">Team</div>
            <select
              type="text"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Team"
              name="team"
              value={fancyEntryInputData?.team || ""}
              onChange={(e) => handleFancyEntryInputDataChange(e)}
            >
              <option>Select Team</option>
              <option value={selectedMatch?.team1}>
                {selectedMatch?.team1}
              </option>
              <option value={selectedMatch?.team2}>
                {selectedMatch?.team2}
              </option>
            </select>
          </div>
        </div>
        <div className="col-1">
          <div>
            <div className="medium-font">Runs</div>
            <input
              type="number"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Runs"
              name="runs"
              id="runs"
              value={fancyEntryInputData?.runs || ""}
              onChange={(e) => handleFancyEntryInputDataChange(e)}
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Amount</div>
            <input
              type="number"
              className="w-100 medium-font btn-bg rounded all-none p-2"
              placeholder="Amount"
              name="amount"
              id="amoumt"
              value={fancyEntryInputData?.amount || ""}
              onChange={(e) => handleFancyEntryInputDataChange(e)}
            />
          </div>
        </div>
        <div className="col-1">
          <div>
            <div className="medium-font">Y/N</div>
            <select
              className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
              name="yN"
              value={fancyEntryInputData?.yN}
              onChange={(e) => handleFancyEntryInputDataChange(e)}
            >
              <option>Select</option>
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Client Name</div>
            <Select
              className="w-100"
              options={optionList}
              placeholder="Client Name"
              value={selectedOptions}
              onChange={handleClientSelect}
              isSearchable={true}
            />
          </div>
        </div>
        <div className="col d-flex align-items-end">
          <div
            className="cursor-pointer w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold"
            onClick={() =>
              Object.keys(selectedMatchEntry).length === 0
                ? handleFancyEntrySubmit()
                : handleFancyEntryUpdate()
            }
            disabled={!selectedMatch?.match_id || isProcessing}
            // onClick={() => hs()}
          >
            {isProcessing
              ? "Processing..."
              : Object.keys(selectedMatchEntry).length === 0
              ? "Submit"
              : "Update"}
          </div>
        </div>
        {error && (
          <div className="clr-red small-font text-center mt-2">{error}</div>
        )}
      </div>
      <SubmitPopup
        state={submitPopup}
        setState={setSubmitPopup}
        header={"Your Successfully Submitted Fancy Entry"}
      />
    </div>
  );
}

export default FancyEntryInput;
