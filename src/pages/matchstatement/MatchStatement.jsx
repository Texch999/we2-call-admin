import React, { useState } from "react";
import Statement from "./Statement";
import FinancialStatement from "./FinancialStatement";
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
      {/* <div className="d-flex flex-row w-25 justify-content-between">
        {reportList.map((value, index) => {
          return (
            <div
              key={index}
              className={
                activeStatementIndex === index
                  ? "d-flex justify-content-center align-items-center match-statement-button rounded medium-font ml-2 mr-2"
                  : "d-flex justify-content-center align-items-center statement-deactive-button medium-font ml-2 mr-2"
              }
              onClick={() => handleStatementSelect(index)}
            >
              {value}
            </div>
          );
        })}
      </div> */}
      {activeReport==="Statement"?<Statement />:<FinancialStatement />}
      {/* {activeReport === 0 && }
      {activeReport === 1 && } */}
    </div>
  );
}

export default MatchStatement;
