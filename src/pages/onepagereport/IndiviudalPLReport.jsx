import React, { useState } from "react";
import ClientIndPL from "./ClientIndPL";
import ULShareIndPlData from "./ULShareIndPlData";
import PlatformCommPL from "./PlatformCommPL";
import { Button } from "react-bootstrap";
import ReferalIndPl from "./ReferalIndPl";

function IndiviudalPLReport() {
  const reportList = ["Client", "Referal", "U/L Share", "Platform Comm P/L"];
  const [activeReport, setActiveReport] = useState("Client");
  const handleReport = (report) => {
    setActiveReport(report);
  };
  return (
    <div>
        <hr/>
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
    
      {activeReport === "Client" && <ClientIndPL />}
      {activeReport === "Referal" && <ReferalIndPl />}
      {activeReport === "U/L Share" && <ULShareIndPlData />}
      {activeReport === "Platform Comm P/L" && <PlatformCommPL />}
    </div>
  );
}

export default IndiviudalPLReport;
