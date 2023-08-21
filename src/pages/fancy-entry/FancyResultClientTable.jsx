import MatchTable from "../match-entry/MatchTable";
import { PiArrowCircleDownBold } from "react-icons/pi";

function FancyResultClientTable() {
  const FANCY_CLIENT_TABLE_DATA = [
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cNet: -50000000,
      rfNet: -50000000,
      netPL: 50000000,
    },
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
  ];
  const FANCY_CLIENT_HEADER_DATA = [
    { header: "CLIENT NAME", field: "clientName" },
    { header: "GROSS PL", field: "grossPL" },
    { header: "C NET", field: "cNet" },
    { header: "RF NET", field: "rfNet" },
    { header: "NET P/L", field: "netPL" },
  ];
  return (
    <div className="w-50 p-3">
      <div className="row d-flex align-items-center match-position-bg p-2 rounded m-1">
        <div className="col-sm-4 col-lg-6">
          <div className="medium-font">
            Fancy Result P/L - <span className="yellow-clr">IND vs PAK</span>
          </div>
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

export default FancyResultClientTable;
