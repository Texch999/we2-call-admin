import { useState } from "react";
import SubmitPopup from "../popups/SubmitPopup";
import Select from "react-select";

function FancyEntryInput() {
  const [submitPopup, setSubmitPopup] = useState(false);
  const [overs, setOvers] = useState([]);
  const [select, setSelect] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState();

  const optionList = [
    { value: "srikanth", label: "srikanth" },
    { value: "ranjith", label: "ranjith" },
  ];
  const handleSelect = (data) => {
    setSelectedOptions(data);
  };
  const handleSubmitPopupOpen = () => {
    setSubmitPopup(true);
  };
  const handleOvers = (e) => {
    setOvers(e.target.value);
  };

  const handleSelectOvers = (e) => {
    setOvers([...overs, e.target.value]);
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
        <div className="col-1">
          <div>
            <div className="medium-font">Overs</div>
            <div className="custom-select medium-font btn-bg">
              <input
                className="w-70 custom-select medium-font btn-bg  all-none p-2"
                value={overs || []}
                name="overs"
                onChange={(e) => handleOvers(e)}
              ></input>
              <select
                name="overs"
                className="w-30 custom-select medium-font btn-bg all-none p-2"
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
              type="number"
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
          {/* <div>
            <div className="medium-font">Client Name</div>
            <select className="w-100 custom-select medium-font btn-bg rounded all-none p-2">
              <option>Client Name</option>
              <option>Name 1</option>
              <option>Name 2</option>
            </select>
          </div> */}
          <div>
            <div className="medium-font">Client Name</div>
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
