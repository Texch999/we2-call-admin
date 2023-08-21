function MatchEntryInput() {
  return (
    <div className="match-position-bg rounded-bottom p-3">
      <div className="row">
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
        <div className="col">
          <div>
            <div className="medium-font">Team</div>
            <input
              type="text"
              className="medium-font btn-bg rounded all-none p-2"
              placeholder="Team"
            />
          </div>
        </div>
        <div className="col">
          <div>
            <div className="medium-font">Amount</div>
            <input
              type="text"
              className="medium-font btn-bg rounded all-none p-2"
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
          <div className="w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchEntryInput;
