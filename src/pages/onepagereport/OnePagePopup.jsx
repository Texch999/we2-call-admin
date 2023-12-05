import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ReferalNetTable from "./ReferalNetTable";
import UlshareTable from "./UlshareTable";
import MFRCTotalTable from "./MFRCTotalTable";
import moment from "moment";

function OnePagePopup(props) {
  const {
    showReportPopup,
    setShowReportPopup,
    showOnepageReportData,
    selectedClientData,
  } = props;
  const handleReportClose = () => {
    setShowReportPopup(false);
  };
  const [mfrcInputs, setMfrcInputs] = useState(true);
  const [ulsharereportInputs, setUlShareReportInputs] = useState(false);
  const [referalNetInputs, setReferalNetInputs] = useState(false);
  console.log(
    showOnepageReportData,
    "................showOnepageReportData............"
  );
  const induvisualClientData =
    showOnepageReportData &&
    showOnepageReportData?.length > 0 &&
    showOnepageReportData?.map((client) => {
      const netCommission = +client?.fancyEntryResult?.clientCommission
        ? +client?.clientComission - +client?.clientFancyComission
        : client?.clientComission;
      const totalAmountAfterCommission =
        parseFloat(+client?.amount || 0) +
        parseFloat(+client?.clientComission || 0);
      return {
        cNameMatchPL: (
          <div>
            <div>{`${client?.team1} vs ${client?.team2}`}</div>

            <div>{moment(+client?.matchTimeStamp).format("DD-MM-YYYY")}</div>
          </div>
        ),
        matchPl: (
          <div
            className={
              +client?.matchEntryResult?.amount >= 0 ? "clr-green" : "clr-red"
            }
          >
            {client?.matchEntryResult?.amount}
          </div>
        ),
        fancyPL: (
          <div
            className={
              +client?.fancyEntryResult?.amount >= 0 ? "clr-green" : "clr-red"
            }
          >
            {+client?.fancyEntryResult?.amount}
          </div>
        ),
        mfComm: (
          <div className={+netCommission >= 0 ? "clr-green" : "clr-red"}>
            {+netCommission}
          </div>
        ),
        roleComm: (
          <div
            className={
              +client?.fancyEntryResult?.clientCommission >= 0
                ? "clr-green"
                : "clr-red"
            }
          >
            {client?.fancyEntryResult?.clientCommission}
          </div>
        ),
        masterProfitloss: (
          <div
            className={
              +totalAmountAfterCommission >= 0 ? "clr-green" : "clr-red"
            }
          >
            {totalAmountAfterCommission}
          </div>
        ),
      };
    });
  const firstReferralNetData =
    showOnepageReportData &&
    showOnepageReportData?.length > 0 &&
    showOnepageReportData?.map((client) => {
      const netCommission = +client?.fancyEntryResult?.referralComission
        ? +client?.referralComission - +client?.referralFancyComission
        : client?.referralComission;
      const netRef =
        netCommission + +client?.fancyEntryResult?.referralComission;
      return {
        cNameMatchPL: (
          <div>
            <div>{`${client?.team1} vs ${client?.team2}`}</div>
            <div>{moment(+client?.matchTimeStamp).format("DD-MM-YYYY")}</div>
          </div>
        ),
        matchPL: (
          <div
            className={
              +client?.matchEntryResult?.amount >= 0 ? "clr-green" : "clr-red"
            }
          >
            {client?.matchEntryResult?.amount}
          </div>
        ),
        fancyPL: (
          <div
            className={
              +client?.fancyEntryResult?.amount >= 0 ? "clr-green" : "clr-red"
            }
          >
            {+client?.fancyEntryResult?.amount}
          </div>
        ),
        mfComm: (
          <div className={+netCommission >= 0 ? "clr-green" : "clr-red"}>
            {netCommission}
          </div>
        ),
        roleComm: (
          <div
            className={
              +client?.fancyEntryResult?.referralComission >= 0
                ? "clr-green"
                : "clr-red"
            }
          >
            {client?.fancyEntryResult?.referralComission}
          </div>
        ),
        masterProfitloss: (
          <div className={+netRef >= 0 ? "clr-green" : "clr-red"}>{netRef}</div>
        ),
      };
    });
  const totalFancyPl =
    showOnepageReportData &&
    showOnepageReportData?.length > 0 &&
    showOnepageReportData?.reduce(
      (acc, obj) => acc + (+obj?.fancyEntryResult?.amount || 0),
      0
    );
  const totalMfComm =
    showOnepageReportData &&
    showOnepageReportData?.length > 0 &&
    showOnepageReportData?.reduce(
      (acc, obj) =>
        acc +
        (+(+obj?.fancyEntryResult?.clientCommission
          ? +obj?.clientComission - +obj?.clientFancyComission
          : obj?.clientComission) || 0),
      0
    );
  const totalRoleComm =
    showOnepageReportData &&
    showOnepageReportData?.length > 0 &&
    showOnepageReportData?.reduce(
      (acc, obj) => acc + (+obj?.fancyEntryResult?.clientCommission || 0),
      0
    );
  const totalMasterPL =
    showOnepageReportData &&
    showOnepageReportData?.length > 0 &&
    showOnepageReportData?.reduce(
      (acc, obj) =>
        acc +
        (+parseFloat(+obj?.amount || 0) +
          parseFloat(+obj?.clientComission || 0) || 0),
      0
    );
  const handleMfrcInputs = () => {
    setMfrcInputs(true);
    setUlShareReportInputs(false);
    setReferalNetInputs(false);
  };
  const handleUlshareReportInputs = () => {
    setMfrcInputs(false);
    setUlShareReportInputs(true);
    setReferalNetInputs(false);
  };

  const handleReferalReportInputs = () => {
    setMfrcInputs(false);
    setUlShareReportInputs(false);
    setReferalNetInputs(true);
  };

  // console.log(selectedClientData, "...........selectedClientData");
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="lg"
        show={showReportPopup}
        onHide={handleReportClose}
        centered
        className="match-share-modal mt-5 w-100 close-btn z-index"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="p-3">
          <div className="w-100">
            <div>
              <div className="row">
                <div className="col-3">
                  <div className="match-date-button rounded-pill small-font text-center p-1 ">
                    ClientName :
                    <span className="medium-font clr-yellow ms-1">
                      {selectedClientData?.client}
                    </span>
                  </div>
                </div>
                <div className="col-3">
                  <div className="match-date-button rounded-pill small-font text-center p-1 ">
                    Date : 31/07/2023
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-start mt-2 mb-2">
              <div className="w-50 d-flex justify-content-end">
                <div
                  className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-2 ms-1 me-1 ${
                    mfrcInputs ? "yellow-border" : ""
                  }`}
                  onClick={() => handleMfrcInputs()}
                >
                  <div className="medium-font">
                    User
                    <br />
                    Match+Fancy+M Comm & F Comm / Rolling Comm
                  </div>
                </div>
              </div>
              <div className="w-50 d-flex justify-content-end">
                <div
                  className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-2 ms-1 me-1 ${
                    referalNetInputs ? "yellow-border" : ""
                  }`}
                  onClick={() => handleReferalReportInputs()}
                >
                  <div className="medium-font">
                    Referal Net
                    <br />
                    Match+Fancy+M Comm & F Comm / Rolling Comm
                  </div>
                </div>
              </div>
            </div>
          </div>
          {mfrcInputs && (
            <MFRCTotalTable
              induvisualClientData={induvisualClientData}
              totalFancyPl={totalFancyPl}
              totalMfComm={totalMfComm}
              totalRoleComm={totalRoleComm}
              totalMasterPL={totalMasterPL}
            />
          )}
          {referalNetInputs && (
            <ReferalNetTable
              firstReferralNetData={firstReferralNetData}
              totalFancyPl={totalFancyPl}
              totalMfComm={totalMfComm}
              totalRoleComm={totalRoleComm}
              totalMasterPL={totalMasterPL}
            />
          )}
          {/* {ulsharereportInputs && <UlshareTable />} */}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default OnePagePopup;
