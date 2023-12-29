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
    individualReportReferralData,
    individualReportClientData,
    netPLInduvisualClient,
    individualReportULShareData,
    individualReportPlatformCommData,
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
  const register_id = localStorage?.getItem("register_id");
  const creator_id = localStorage?.getItem("creator_id");
  const account_role = localStorage?.getItem("account_role");

  const getIndivisualMatchReport = async () => {
    await call(GET_INDUVISUAL_MATCH_REPORT, {
      register_id,
      client_id: clientId || refClientId,
    })
      .then((res) => {
        setIndivisualMatchReportData([
          ...res?.data?.data?.topLosers,
          ...res?.data?.data?.topWinners,
        ]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (clientId || refClientId) {
      getIndivisualMatchReport();
    }
  }, [clientId, refClientId]);

  const totalClientPl =
    clientData &&
    clientData?.length > 0 &&
    clientData?.reduce(
      (acc, obj) => acc + (+obj?.amount?.props?.children || 0),
      0
    );
  const totalInduvisualReportClientData =
    individualReportClientData &&
    individualReportClientData?.length > 0 &&
    individualReportClientData?.reduce(
      (acc, obj) => acc + (+obj?.amount?.props?.children || 0),
      0
    );
  const totalUrsNet =
    clientData &&
    clientData?.length > 0 &&
    clientData?.reduce(
      (acc, obj) => acc + (+obj?.ULnetPL?.props?.children || 0),
      0
    );
  const totalUlShareNet =
    clientData &&
    clientData?.length > 0 &&
    clientData?.reduce(
      (acc, obj) => acc + (+obj?.afterAllSharePL?.props?.children || 0),
      0
    );
  const totalUrsPlPlatform =
    clientData &&
    clientData?.length > 0 &&
    clientData?.reduce(
      (acc, obj) => acc + (+obj?.netPL?.props?.children || 0),
      0
    );
  const totalPlatform =
    clientData &&
    clientData?.length > 0 &&
    clientData?.reduce(
      (acc, obj) =>
        acc + (+obj?.individualReportPlatformComm?.props?.children || 0),
      0
    );
  return (
    <div>
      <hr />
      <div className="mb-2">
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
          clientData={clientData}
          individualRefferralData={individualRefferralData}
          indReportReferralData={indReportReferralData}
          individualReportReferralData={individualReportReferralData}
          totalClientPl={totalClientPl}
        />
      )}
      {activeReport === "U/L Share" && (
        <ULShareIndPlData
          individualReportULShareData={individualReportULShareData}
          totalUlShareNet={totalUlShareNet}
          totalUrsPlPlatform={totalUrsPlPlatform}
        />
      )}
      {activeReport === "Platform Comm P/L" && (
        <PlatformCommPL
          individualReportPlatformCommData={individualReportPlatformCommData}
          totalUlShareNet={totalUlShareNet}
          totalPlatform={totalPlatform}
        />
      )}
    </div>
  );
}

export default IndiviudalPLReport;
