import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { PiArrowCircleRightBold } from "react-icons/pi";
import ClientPLTable from "./ClientPLTable";
import RfplTable from "./RfplTable";
import { GET_STATEMENT_BY_MATCH_ID } from "../../config/endpoints";
import { call } from "../../config/axios";
import moment from "moment";

function StatementPopup(props) {
  const register_id = localStorage?.getItem("register_id");
  const { showModal, setShowModal, selectedMatch, setSelctedMatch, onePageData} = props;
  const [clientInputs, setClientInputs] = useState(true);
  const [rfplInputs, setRfplInputs] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  // console.log("selected match", selectedMatch)
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
        onHide={()=>{
          setShowModal(false)
          setSelctedMatch("")
        }}
        centered
        className="match-share-modal w-100 close-btn"
      >
        <Modal.Header closeButton>
          <div className="w-100">
            <div className="p-2 rounded-top w-100 d-flex align-items-center justify-content-between">
              <div className="w-25 d-flex justify-content-between">
                <div>
                  <div className="w-100 small-font clr-yellow match-date-button p-1 rounded-pill ms-1 me-1">
                    Match : {selectedMatch?.match_name}
                  </div>
                </div>
                <div>
                  <div className="w-100 small-font clr-yellow match-date-button p-1 rounded-pill ms-1 me-1">
                    Date :{" "}
                    {moment(+selectedMatch?.matchTimeStamp).format(
                      "DD-MM-YYYY"
                    )}
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
          {clientInputs && (
            <ClientPLTable data={onePageData} selectedMatch={selectedMatch} />
          )}
          {rfplInputs && (
            <RfplTable data={onePageData} selectedMatch={selectedMatch} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StatementPopup;
