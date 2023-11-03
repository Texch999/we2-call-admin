import React, { useState } from "react";
import ClientIndPL from "./ClientIndPL";
import ULShareIndPlData from "./ULShareIndPlData";
import PlatformCommPL from "./PlatformCommPL";
import { Button } from "react-bootstrap";
import ReferalIndPl from "./ReferalIndPl";
import {
  GET_INDUVISUAL_MATCH_REPORT,
  GET_INDUVISUAL_REFERRAL_BY,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect } from "react";

function IndiviudalPLReport(props) {
  const {
    refData,
    individualReportClientData,
    onePageReportdata1,
    netPLInduvisualClient,
    individualReportULShareData,
    clientData,
    clientId,
    refClientId,
    clientName,
    setIndivisualMatchReportData,
    individualRefferralData,
    indReportReferralData,
  } = props;
  const reportList = ["Client", "Referal", "U/L Share", "Platform Comm P/L"];
  const [activeReport, setActiveReport] = useState("Client");
  const handleReport = (report) => {
    setActiveReport(report);
  };

  console.log(clientId, "clientIdSangram");

  const register_id = localStorage?.getItem("register_id");
  const creator_id = localStorage?.getItem("creator_id");
  const account_role = localStorage?.getItem("account_role");

  const [clientsData, setClientsData] = useState([]);
  const getIndivisualMatchReport = async () => {
    await call(GET_INDUVISUAL_MATCH_REPORT, {
      register_id,
      client_id: clientId || refClientId,
    })
      .then((res) => {
        // console.log("res?.data?.data",[...res?.data?.data?.topLosers, ...res?.data?.data?.topWinners])
        setIndivisualMatchReportData([
          ...res?.data?.data?.topLosers,
          ...res?.data?.data?.topWinners,
        ]);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(() => {
  //   if (clientId || refClientId) {
  //     getIndivisualMatchReport();
  //   }
  // }, [clientId, refClientId]);

  // useEffect(() => {
  //   if (refId) {
  //     getIndividualPLRefferal();
  //   }
  // }, [refId]);

  return (
    <div>
      <hr />
      <div className="mb-3">
        {reportList.map((report, index) => (
          <Button
            key={index}
            className={`me-2 admin-reports-button ${
              report === activeReport ? "active-report-button" : ""
            }`}
            onClick={() => handleReport(report)}
          >
            {report}
          </Button>
        ))}
      </div>

      {activeReport === "Client" && (
        <ClientIndPL
          clientData={clientData}
          clientName={clientName}
          individualReportClientData={individualReportClientData}
          netPLInduvisualClient={netPLInduvisualClient}
        />
      )}
      {activeReport === "Referal" && (
        <ReferalIndPl
          refData={refData}
          clientId={clientId}
          refClientId={refClientId}
          individualRefferralData={individualRefferralData}
          indReportReferralData={indReportReferralData}
        />
      )}
      {activeReport === "U/L Share" && (
        <ULShareIndPlData
          individualReportULShareData={individualReportULShareData}
        />
      )}
      {activeReport === "Platform Comm P/L" && (
        <PlatformCommPL onePageReportdata1={onePageReportdata1} />
      )}
    </div>
  );
}

export default IndiviudalPLReport;
