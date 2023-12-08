import React, {useState } from "react";
import Statement from "./Statement";
import { Button } from "react-bootstrap";


function MatchStatement() {
  const reportList = ["Statement", "Financial Statement"];
  const [activeReport, setActiveReport] = useState("Statement");
  const handleReport = (report) => {
    setActiveReport(report);
  };

  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Match Statement</h5>
      <div className="mb-3">
        {/* {reportList.map((report, index) => (
          <Button
            key={index}
            className={`me-2 admin-reports-button ${
              report === activeReport ? "active-report-button" : ""
            }`}
            onClick={() => handleReport(report)}
          >
            {report}
          </Button>
        ))} */}
        <Button className="me-2 admin-reports-button active-report-button">
          Statement
        </Button>
      </div>
      {/* {activeReport === "Statement" ? (
        <Statement
          statementPayload={statementPayload}
          setStatementPayload={setStatementPayload}
          financialStatementData={financialStatementData}
        />
      ) : (
        <FinancialStatement financialStatementData={financialStatementData} />
      )} */}
      <Statement />
    </div>
  );
}

export default MatchStatement;
