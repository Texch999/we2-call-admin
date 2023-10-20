import { useState } from "react";
import MatchTable from "../match-entry/MatchTable";
import { PiArrowCircleDownBold } from "react-icons/pi";
import FancyRiskRunningSharePopup from "../fancy-popups/FancyRiskRunningSharePopup";
import FancyRiskRunningCommPopup from "../fancy-popups/FancyRiskRunningCommPopup";

function FancyRiskRunningTable({ riskRunningData }) {
  const [fancyRiskCommPopup, setFancyRiskCommPopup] = useState(false);
  const [fancyRiskSharePopup, setFancyRiskSharePopup] = useState(false);
  const handleFancyRiskCommPopupOpen = () => {
    setFancyRiskCommPopup(true);
  };
  const handleFancyRiskSharePopupOpen = () => {
    setFancyRiskSharePopup(true);
  };
  const FANCY_RISK_RUNNING_DATA =
    riskRunningData &&
    Object.keys(riskRunningData)?.map((key) => {
      let {
        amount,
        clientCommission,
        clientShare,
        referalShare,
        referralComission,
        // totalLossOrProfit,
        upperLevalShare,
        ulComm,
      } = riskRunningData[key];
      return {
        header: key,
        amount: parseFloat(amount).toFixed(2) || 0,
        cPosition: (
          parseFloat(clientCommission || 0) + parseFloat(clientShare || 0)
        ).toFixed(2),
        rfPosition: (
          parseFloat(referalShare || 0) + parseFloat(referralComission || 0)
        ).toFixed(2),
        ursPosition: (
          parseFloat(upperLevalShare || 0) + parseFloat(ulComm || 0)
        ).toFixed(2),
        // Risk Runninng Share Comm Popup Data
        clientShare: parseFloat(clientShare || 0),
        rfShare: parseFloat(referalShare || 0),
        clientComm: parseFloat(clientCommission || 0),
        rfComm: parseFloat(referralComission || 0),
      };
    });

  // const FANCY_RISK_RUNNING_DATA = [
  //   {
  //     header: "50 Runs",
  //     amount: 50000000,
  //     cPosition: 50000000,
  //     rfPosition: 50000000,
  //     ursPosition: 50000000,
  //   },
  // ];
  const FANCY_CLIENT_HEADER_DATA = [
    { header: "RUNS", field: "header" },
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
          <div
            className="cursor-pointer share-bg rounded-pill d-flex align-items-center justify-content-around p-1"
            onClick={() => handleFancyRiskSharePopupOpen()}
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
            onClick={() => handleFancyRiskCommPopupOpen()}
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
          data={FANCY_RISK_RUNNING_DATA || []}
          columns={FANCY_CLIENT_HEADER_DATA}
        />
      </div>
      <FancyRiskRunningSharePopup
        state={fancyRiskSharePopup}
        setState={setFancyRiskSharePopup}
        data={FANCY_RISK_RUNNING_DATA}
      />
      <FancyRiskRunningCommPopup
        state={fancyRiskCommPopup}
        setState={setFancyRiskCommPopup}
        data={FANCY_RISK_RUNNING_DATA}
      />
    </div>
  );
}

export default FancyRiskRunningTable;
