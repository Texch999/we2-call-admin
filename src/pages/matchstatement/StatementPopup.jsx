import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PiArrowCircleRightBold } from "react-icons/pi";
import ClientPLTable from "./ClientPLTable";
import RfplTable from "./RfplTable";

function StatementPopup(props) {
  const { showModal, setShowModal } = props;
  const handleClose = () => setShowModal(false);
  const [clientInputs, setClientInputs] = useState(true);
  const [rfplInputs, setRfplInputs] = useState(false);
  const handleRfplResult = () => {
    setClientInputs(false);
    setRfplInputs(true);
  };

  const handleClientEntry = () => {
    setClientInputs(true);
    setRfplInputs(false);
  };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="xl"
        show={showModal}
        onHide={handleClose}
        centered
        className="match-share-modal w-100 close-btn"
      >
        <Modal.Header closeButton>
          <div className="w-100">
            <div className="p-2 rounded-top w-100 d-flex align-items-center justify-content-between">
              <div className="w-25 d-flex justify-content-between">
                <div>
                  <div className="w-100 small-font clr-yellow match-date-button p-1 rounded-pill ms-1 me-1">
                    Match : IND vs SL
                  </div>
                </div>
                <div>
                  <div className="w-100 small-font clr-yellow match-date-button p-1 rounded-pill ms-1 me-1">
                    Date : 31/07/2023
                  </div>
                </div>
              </div>
              <div className="w-50 d-flex justify-content-end">
                <div className="w-100 d-flex justify-content-end">
                  <div
                    className={`match-entry-btn w-50 d-flex align-items-center justify-content-around rounded-pill p-1 ${
                      clientInputs ? "yellow-btn" : ""
                    }`}
                    onClick={() => handleClientEntry()}
                  >
                    <div className="medium-font">Client P/L</div>
                    <PiArrowCircleRightBold className="d-flex" />
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-end">
                  <div
                    className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded-pill p-1 ${
                      rfplInputs ? "yellow-btn" : ""
                    }`}
                    onClick={() => handleRfplResult()}
                  >
                    <div className="medium-font">Rf P/L</div>
                    <PiArrowCircleRightBold className="d-flex" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-3">
          {clientInputs && <ClientPLTable />}
          {rfplInputs && <RfplTable />}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StatementPopup;
