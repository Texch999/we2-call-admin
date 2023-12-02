import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PiArrowCircleRightBold } from "react-icons/pi";
import ClientPLTable from "./ClientPLTable";
import RfplTable from "./RfplTable";
import moment from "moment";
import { useParams } from "react-router";
import { call } from "../../config/axios";
import {
  GET_ACCOUNT_MATCHES_DATA,
  GET_MATCH_ENTRY_DETAILS,
  GET_STATEMENT_BY_MATCH_ID,
} from "../../config/endpoints";
import { useEffect } from "react";

function StatementPopup(props) {
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

  const clientMatchStatementData =
    onePageData &&
    onePageData?.length > 0 &&
    onePageData?.map((report) => {
      clientPL = onePageData.reduce(
        (acc, obj) => acc + (+obj?.clientNet || 0),
        0
      );
      matchPL = onePageData.reduce(
        (acc, obj) => acc + (+obj?.totalLossOrProfit || 0),
        0
      );
      const amount = report?.matchEntryResult?.amount;
      return {
        name: <div>{report?.client_name}</div>,
        masterProfitLoss: (
          <div className={`${amount >= 0 ? "clr-green" : "clr-red"}`}>
            {amount}
          </div>
        ),
        share: (
          <div>
            Share
            <div
              className={`${
                report?.clientShare >= 0 ? "clr-green" : "clr-red"
              }`}
            >
              {report?.clientShare}
            </div>
          </div>
        ),
        fancyProfitLoss: (
          <div className="flex-center">
            <div
              className={
                report?.fancyEntryResult?.amount >= 0 ? "clr-green" : "clr-red"
              }
            >
              {report?.fancyEntryResult?.amount}
            </div>
          </div>
        ),
        fancyReferralComm: (
          <div
            className={`${
              report?.clientComission >= 0 ? "clr-green" : "clr-red"
            }`}
          >
            {report?.clientComission}
          </div>
        ),
        amount: (
          <div
            className={`${report?.clientNet >= 0 ? "clr-green" : "clr-red"}`}
          >
            {report?.clientNet}
          </div>
        ),
        client_id: report?.client_id,
        client_name: report?.client_name,
      };
    });

  const referralFinancialStatementAllData =
    onePageData &&
    onePageData?.length > 0 &&
    onePageData?.map((report) => {
      const amount = report?.matchEntryResult?.amount;
      refPL = onePageData.reduce(
        (acc, obj) => acc + (+obj?.referalNet || 0),
        0
      );
      return {
        masterProfitLoss: (
          <div
            className="settlemt-statement-client-data"
            onClick={() =>
              handleClientMatch(report?.client_id, report?.client_name)
            }
          >
            <div>{report?.client_name}</div>
            <div className={`${amount >= 0 ? "green-clr" : "red-clr"}`}>
              {amount}
            </div>
            Rf Share
            <div
              className={`${
                report?.referalShare >= 0 ? "green-clr" : "red-clr"
              }`}
            >
              {report?.referalShare}
            </div>
          </div>
        ),
        fancyProfitLoss: (
          <div className="flex-center">
            <div
              className={
                report?.fancyEntryResult?.amount >= 0 ? "green-clr" : "red-clr"
              }
            >
              {report?.fancyEntryResult?.amount}
            </div>
          </div>
        ),
        fancyReferralComm: (
          <div
            className={`${
              report?.referralComission >= 0 ? "green-clr" : "red-clr"
            }`}
          >
            {report?.referralComission}
          </div>
        ),
        amount: (
          <div
            className={`${report?.referalNet >= 0 ? "green-clr" : "red-clr"}`}
          >
            {report?.referalNet}
          </div>
        ),
        client_id: report?.client_id,
        client_name: report?.client_name,
      };
    });

  console.log(onePageData, "onePageData");
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
                <div className="w-25 small-font clr-yellow match-date-button p-1 rounded-pill ms-1 me-1">
                  Match : {matchDetails?.match_name}
                </div>
                <div className="w-50 small-font clr-yellow match-date-button p-1 rounded-pill ms-1 me-1">
                  Date :
                  {moment(+matchDetails?.matchTimeStamp).format("DD-MM-YYYY")}
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
            <ClientPLTable
              winTeam={winTeam}
              matchDetails={matchDetails}
              clientMatchStatementData={clientMatchStatementData}
            />
          )}
          {rfplInputs && (
            <RfplTable
              winTeam={winTeam}
              matchDetails={matchDetails}
              referralFinancialStatementAllData={
                referralFinancialStatementAllData
              }
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StatementPopup;
