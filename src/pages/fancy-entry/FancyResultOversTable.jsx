import { useState } from "react";
import MatchTable from "../match-entry/MatchTable";
import { PiArrowCircleDownBold } from "react-icons/pi";
import FancyResultSharePopup from "../fancy-popups/FancyResultSharePopup";
import FancyResultOversCommPopup from "../fancy-popups/FancyResultOversCommPopup";

function FancyResultOversTable({ profitLossData, selectedMatch }) {
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

  const FANCY_OVERS_TABLE_DATA =
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
        key: key,
        header: `${key} Overs`,
        grossPL: parseFloat(amount).toFixed(2),
        cNet:
          (
            parseFloat(amount) +
            (parseFloat(clientCommission) + parseFloat(clientShare))
          ).toFixed(2) || 0,
        rfNet:
          (parseFloat(referalShare) + parseFloat(referralComission)).toFixed(
            2
          ) || 0,
        netPL: parseFloat(totalLossOrProfit).toFixed(2),
        upperLevalShare: parseFloat(upperLevalShare),
        //FancyOversPopupData
        clientShare: parseFloat(clientShare),
        rfShare: parseFloat(referalShare),
        clientComm: parseFloat(clientCommission),
        rfComm: parseFloat(referralComission),
      };
    });
  // const FANCY_OVERS_TABLE_DATA = [
  //   {
  //     header: "10 Overs",
  //     grossPL: 50000000,
  //     cNet: 50000000,
  //     rfNet: 50000000,
  //     netPL: 50000000,
  //   },
  // ];
  const FANCY_OVERS_HEADER_DATA = [
    { header: "OVERS", field: "header" },
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
            onClick={() => handleFancyResultCommPopupOpen()}
          >
            <div className="medium-font">Comm</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
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
      </div>
      <div className="mt-3">
        <MatchTable
          data={FANCY_OVERS_TABLE_DATA || []}
          columns={FANCY_OVERS_HEADER_DATA}
        />
      </div>
      <FancyResultSharePopup
        selectedMatch={selectedMatch}
        oversShareData={FANCY_OVERS_TABLE_DATA}
        fancyResultSharePopup={fancyResultSharePopup}
        handleFancyResultSharePopupClose={handleFancyResultSharePopupClose}
      />
      <FancyResultOversCommPopup
        selectedMatch={selectedMatch}
        oversCommData={FANCY_OVERS_TABLE_DATA}
        state={fancyResultCommPopup}
        setState={setFancyResultCommPopup}
      />
    </div>
  );
}

export default FancyResultOversTable;
