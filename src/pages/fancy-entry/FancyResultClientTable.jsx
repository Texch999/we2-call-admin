import { useState } from "react";
import FancyResultNameSharePopup from "../fancy-popups/FancyResultNameSharePopup";
import MatchTable from "../match-entry/MatchTable";
import { PiArrowCircleDownBold } from "react-icons/pi";
import FancyResultCommPopup from "../fancy-popups/FancyResultCommPopup";

function FancyResultClientTable({ profitLossData, selectedMatch }) {
  const [fancyResultSharePopup, setFancyResultSharePopup] = useState(false);
  const [fancyResultCommPopup, setFancyResultCommPopup] = useState(false);

  const handleFancyResultSharePopupOpen = () => {
    setFancyResultSharePopup(true);
  };
  const handleFancyResultSharePopupClose = () => {
    setFancyResultSharePopup(false);
  };
  const handleFancyResultCommPopupOpen = () => {
    setFancyResultCommPopup(true);
  };
  const handleFancyResultCommPopupClose = () => {
    setFancyResultCommPopup(false);
  };

  const FANCY_CLIENT_TABLE_DATA =
    profitLossData &&
    Object.keys(profitLossData)?.map((key) => {
      let {
        amount,
        clientCommission,
        clientShare,
        referalShare,
        referralComission,
        totalLossOrProfit,
        upperLevalShare,
      } = profitLossData[key];
      return {
        header: key,
        grossPL: parseFloat(amount),
        cNet:
          parseFloat(amount) +
          (parseFloat(clientCommission) + parseFloat(clientShare)),
        rfNet: parseFloat(referalShare) + parseFloat(referralComission) || 0,
        netPL: parseFloat(totalLossOrProfit),
        // FancyPopupsData
        clientShare: parseFloat(clientShare),
        rfShare: parseFloat(referalShare),
        clientComm: parseFloat(clientCommission),
        rfComm: parseFloat(referralComission),
      };
    });

  const FANCY_CLIENT_HEADER_DATA = [
    { header: "CLIENT NAME", field: "header" },
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
            Fancy Result P/L -{" "}
            <span className="yellow-clr">
              {selectedMatch?.team1} vs {selectedMatch?.team2}
            </span>
          </div>
        </div>
        <div className="col">
          <div
            className="cursor-pointer share-bg rounded-pill d-flex align-items-center justify-content-around p-1"
            onClick={() => handleFancyResultSharePopupOpen()}
          >
            <div className="medium-font">Share</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="cursor-pointer share-bg rounded-pill d-flex align-items-center justify-content-around p-1"
            onClick={() => handleFancyResultCommPopupOpen()}
          >
            <div className="medium-font">Comm</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <MatchTable
          data={FANCY_CLIENT_TABLE_DATA || []}
          columns={FANCY_CLIENT_HEADER_DATA}
        />
      </div>
      <FancyResultNameSharePopup
        selectedMatch={selectedMatch}
        clientShareData={FANCY_CLIENT_TABLE_DATA}
        fancyResultSharePopup={fancyResultSharePopup}
        handleFancyResultSharePopupClose={handleFancyResultSharePopupClose}
      />
      <FancyResultCommPopup
        selectedMatch={selectedMatch}
        clientCommData={FANCY_CLIENT_TABLE_DATA}
        fancyResultCommPopup={fancyResultCommPopup}
        handleFancyResultCommPopupClose={handleFancyResultCommPopupClose}
      />
    </div>
  );
}

export default FancyResultClientTable;
