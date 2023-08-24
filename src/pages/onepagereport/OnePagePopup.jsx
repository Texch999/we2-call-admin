import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import ReferalNetTable from "./ReferalNetTable";
import UlshareTable from "./UlshareTable";
import MFRCTotalTable from "./MFRCTotalTable";

function OnePagePopup(props) {
  const { showReportPopup, setShowReportPopup } = props;
  const handleReportClose = () => {
    setShowReportPopup(false);
  };
  const [mfrcInputs, setMfrcInputs] = useState(true);
  const [ulsharereportInputs, setUlShareReportInputs] = useState(false);
  const [referalNetInputs, setReferalNetInputs] = useState(false);

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
        className="match-share-modal w-100"
      >
        <Modal.Header>
          <div className="w-100">
            <div>
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
                    mfrcInputs ? "yellow-btn" : ""
                  }`}
                  onClick={() => handleMfrcInputs()}
                >
                  <div className="medium-font">
                    Match+Fancy+Referal Comm = Total
                  </div>
                </div>
              </div>
              <div className="w-25 d-flex justify-content-end">
                <div
                  className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-2 ms-1 me-1 ${
                    referalNetInputs ? "yellow-btn" : ""
                  }`}
                  onClick={() => handleReferalReportInputs()}
                >
                  <div className="medium-font">Referal Net</div>
                </div>
              </div>
              <div className="w-25 d-flex justify-content-end">
                <div
                  className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-2 ms-1 me-1 ${
                    ulsharereportInputs ? "yellow-btn" : ""
                  }`}
                  onClick={() => handleUlshareReportInputs()}
                >
                  <div className="medium-font">UL Share</div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-3">
          {mfrcInputs && <MFRCTotalTable />}
          {referalNetInputs && <ReferalNetTable />}
          {ulsharereportInputs && <UlshareTable />}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default OnePagePopup;
