import MatchTable from "../match-entry/MatchTable";
import { PiArrowCircleDownBold } from "react-icons/pi";

function FancyRiskRunningTable() {
  const FANCY_CLIENT_TABLE_DATA = [
    {
      runs: "50 Runs",
      amount: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      runs: "50 Runs",
      amount: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      runs: "50 Runs",
      amount: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      runs: "50 Runs",
      amount: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      runs: "50 Runs",
      amount: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
  ];
  const FANCY_CLIENT_HEADER_DATA = [
    { header: "RUNS", field: "runs" },
    { header: "AMOUNT", field: "amount" },
    { header: "C POSITION", field: "cPosition" },
    { header: "RF POSITION", field: "rfPosition" },
    { header: "URS POSITION", field: "ursPosition" },
  ];
  return (
    <div className="w-50 p-3">
      <div className="row d-flex align-items-center match-position-bg p-2 rounded m-1">
        <div className="col-sm-4 col-lg-6">
          <div className="medium-font">Risk Running Position P/L</div>
        </div>
        <div className="col">
          <div className="share-bg rounded-pill d-flex align-items-center justify-content-between p-1">
            <div className="medium-font">Share</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="share-bg rounded-pill d-flex align-items-center justify-content-between p-1">
            <div className="medium-font">Comm</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <MatchTable
          data={FANCY_CLIENT_TABLE_DATA}
          columns={FANCY_CLIENT_HEADER_DATA}
        />
      </div>
    </div>
  );
}

export default FancyRiskRunningTable;
