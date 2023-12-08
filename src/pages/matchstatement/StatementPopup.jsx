import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PiArrowCircleRightBold } from "react-icons/pi";
import ClientPLTable from "./ClientPLTable";
import RfplTable from "./RfplTable";
import moment from "moment";
import { call } from "../../config/axios";
import { GET_STATEMENT_BY_MATCH_ID } from "../../config/endpoints";
import { useEffect } from "react";

function   StatementPopup(props) {
  const { showModal, setShowModal, popupData, matchDetails, winTeam } = props;
  let register_id = localStorage?.getItem("register_id");
  const [isrProcessing, setIsProcessing] = useState();
  const handleClose = () => setShowModal(false);
  const [clientInputs, setClientInputs] = useState(true);
  const [rfplInputs, setRfplInputs] = useState(false);
  const [onePageData, setOnePageData] = useState([]);
  const handleRfplResult = () => {
    setClientInputs(false);
    setRfplInputs(true);
  };
  const handleClientEntry = () => {
    setClientInputs(true);
    setRfplInputs(false);
  };

  const getStatementByMatchIdData = async () => {
    setIsProcessing(true);
    await call(GET_STATEMENT_BY_MATCH_ID, {
      register_id,
      registered_match_id: popupData,
    })
      .then((res) => {
        setIsProcessing(false);
        setOnePageData(res?.data?.data?.client_object);
      })
      .catch((err) => {
        setIsProcessing(false);
        console.log(err);
      });
  };
  useEffect(() => {
    getStatementByMatchIdData();
  }, [popupData]);

  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="xl"
        show={showModal}
        onHide={handleClose}
        centered
        className="z-index match-share-modal w-100 close-btn"
      >
        <Modal.Header closeButton>
          <div className="w-100">
            <div className="p-2 rounded-top w-100 d-flex align-items-center justify-content-between">
              <div className="w-50 d-flex">
                <div className="small-font match-date-button p-1 rounded-pill ms-1 me-1">
                  Match :
                  <span className="clr-yellow px-2">
                    {matchDetails?.match_name}
                  </span>
                </div>
                <div className="small-font match-date-button p-1 rounded-pill ms-1 me-1">
                  Date :
                  <span className="clr-yellow px-2">
                    {moment(+matchDetails?.matchTimeStamp).format("DD-MM-YYYY")}
                  </span>
                </div>
              </div>
              <div className="w-50 d-flex justify-content-around">
                <div className="w-50 d-flex justify-content-end">
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
                <div className="w-50 d-flex justify-content-center">
                  <div
                    className={`match-entry-btn w-50 d-flex align-items-center justify-content-around rounded-pill p-1 ${
                      rfplInputs ? "yellow-btn" : ""
                    }`}
                    onClick={() => handleRfplResult()}
                  >
                    <div className="medium-font">RF P/L</div>
                    <PiArrowCircleRightBold className="d-flex" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-3">
          {clientInputs && (
            <ClientPLTable
              onePageData={onePageData}
              winTeam={winTeam}
              matchDetails={matchDetails}
            />
          )}
          {rfplInputs && (
            <RfplTable
              onePageData={onePageData}
              winTeam={winTeam}
              matchDetails={matchDetails}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StatementPopup;
