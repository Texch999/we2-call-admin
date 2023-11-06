import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ReferalNetTable from "./ReferalNetTable";
import UlshareTable from "./UlshareTable";
import MFRCTotalTable from "./MFRCTotalTable";
import moment from "moment";

function OnePagePopup(props) {
  const { showReportPopup, setShowReportPopup, showOnepageReportData } = props;
  const handleReportClose = () => {
    setShowReportPopup(false);
  };
  const [mfrcInputs, setMfrcInputs] = useState(true);
  const [ulsharereportInputs, setUlShareReportInputs] = useState(false);
  const [referalNetInputs, setReferalNetInputs] = useState(false);

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
              +client?.matchEntryResult?.amount >= 0
                ? "approved-color"
                : "red-clr"
            }
          >
            // {client?.matchEntryResult?.amount}
            1000
          </div>
        ),
        fancyPL: (
          <div
            className={
              +client?.fancyEntryResult?.amount >= 0
                ? "approved-color"
                : "red-clr"
            }
          >
            {+client?.fancyEntryResult?.amount}
          </div>
        ),
        mfComm: (
          <div className={+netCommission >= 0 ? "approved-color" : "red-clr"}>
            {+netCommission}
          </div>
        ),
        roleComm: (
          <div
            className={
              +client?.fancyEntryResult?.clientCommission >= 0
                ? "approved-color"
                : "red-clr"
            }
          >
            {client?.fancyEntryResult?.clientCommission}
          </div>
        ),
        masterProfitloss: (
          <div
            className={
              +totalAmountAfterCommission >= 0 ? "approved-color" : "red-clr"
            }
          >
            {totalAmountAfterCommission}
          </div>
        ),
      };
    });

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
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="lg"
        show={showReportPopup}
        onHide={handleReportClose}
        centered
        className="match-share-modal mt-5 w-100 close-btn"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="p-3">
          <div className="w-100">
            <div>
              <div className="w-25 mt-2 mb-1">
                <div className="match-date-button rounded-pill small-font text-center p-1 ">
                  ClientName:
                </div>
              </div>
              <div className="w-25 mt-2 mb-1">
                <div className="match-date-button rounded-pill small-font text-center p-1 ">
                  Date : 31/07/2023
                </div>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-start mt-4 mb-1">
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
            <MFRCTotalTable induvisualClientData={induvisualClientData} />
          )}
          {referalNetInputs && (
            <ReferalNetTable induvisualClientData={induvisualClientData} />
          )}
          {/* {ulsharereportInputs && <UlshareTable />} */}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default OnePagePopup;
