import React, { useState } from "react";
import ClientIndPL from "./ClientIndPL";
import ULShareIndPlData from "./ULShareIndPlData";
import PlatformCommPL from "./PlatformCommPL";
import { Button } from "react-bootstrap";
import ReferalIndPl from "./ReferalIndPl";

function IndiviudalPLReport(props) {
  const { ONE_PAGE_REPORT_DETAILS } = props;
  const reportList = ["Client", "Referal", "U/L Share", "Platform Comm P/L"];
  const [activeReport, setActiveReport] = useState("Client");
  const handleReport = (report) => {
    setActiveReport(report);
  };
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
        <ClientIndPL ONE_PAGE_REPORT_DETAILS={ONE_PAGE_REPORT_DETAILS} />
      )}
      {activeReport === "Referal" && (
        <ReferalIndPl ONE_PAGE_REPORT_DETAILS={ONE_PAGE_REPORT_DETAILS} />
      )}
      {activeReport === "U/L Share" && (
        <ULShareIndPlData ONE_PAGE_REPORT_DETAILS={ONE_PAGE_REPORT_DETAILS} />
      )}
      {activeReport === "Platform Comm P/L" && (
        <PlatformCommPL ONE_PAGE_REPORT_DETAILS={ONE_PAGE_REPORT_DETAILS} />
      )}
    </div>
  );
}

export default IndiviudalPLReport;
