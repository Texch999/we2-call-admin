import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PiArrowCircleRightBold } from "react-icons/pi";
import ClientPLTable from "./ClientPLTable";
import RfplTable from "./RfplTable";
import ClientTableFS from "./ClientTableFS";
import ULShareTableFS from "./ULShareTableFS";
import ReferalTableFS from "./ReferalTableFS";

function FinancialPopupStatement(props) {
  const { showFinancialModal, setShowFinancialModal } = props;
  const handleFinancialModalClose = () => {
    setShowFinancialModal(false);
  };
  const [clientInputs, setClientInputs] = useState(true);
  const [ulshareInputs, setUlShareInputs] = useState(false);
  const [referalInputs, setReferalInputs] = useState(false);

  const handleClientInputs = () => {
    setClientInputs(true);
    setUlShareInputs(false);
    setReferalInputs(false);
  };
  const handleUlshareInputs = () => {
    setClientInputs(false);
    setUlShareInputs(true);
    setReferalInputs(false);
  };

  const handleReferalInputs = () => {
    setClientInputs(false);
    setUlShareInputs(false);
    setReferalInputs(true);
  };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showFinancialModal}
        onHide={handleFinancialModalClose}
        centered
        className="match-share-modal w-100"
      >
        <Modal.Header>
          <div className="w-100">
            <div>
              <div className="mt-2 mb-1">
                <div>Match Name : IND vs SL</div>
              </div>
              <div className="w-25 mt-1 mb-1">
                <div className="match-date-button rounded-pill small-font text-center p-1 ">
                  Date : 31/07/2023
                </div>
              </div>
            </div>
            <div className="w-50 d-flex justify-content-start mt-2 mb-1">
              <div className="w-50 d-flex justify-content-end">
                <div
                  className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-2 ms-1 me-1 ${
                    clientInputs ? "yellow-btn" : ""
                  }`}
                  onClick={() => handleClientInputs()}
                >
                  <div className="medium-font">Client</div>
                </div>
              </div>
              <div className="w-50 d-flex justify-content-end">
                <div
                  className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-2 ms-1 me-1 ${
                    referalInputs ? "yellow-btn" : ""
                  }`}
                  onClick={() => handleReferalInputs()}
                >
                  <div className="medium-font">Referal</div>
                </div>
              </div>
              <div className="w-50 d-flex justify-content-end">
                <div
                  className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-2 ms-1 me-1 ${
                    ulshareInputs ? "yellow-btn" : ""
                  }`}
                  onClick={() => handleUlshareInputs()}
                >
                  <div className="medium-font">UL Share</div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-3">
          {clientInputs && <ClientTableFS />}
          {ulshareInputs && <ULShareTableFS />}
          {referalInputs && <ReferalTableFS />}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default FinancialPopupStatement;
