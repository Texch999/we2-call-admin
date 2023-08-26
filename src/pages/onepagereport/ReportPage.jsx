import React, { useState } from "react";
import OnePageReport from "./OnePageReport";
import IndiviudalPLReport from "./IndiviudalPLReport";
import { Button } from "react-bootstrap";

function ReportPage() {
  const reportList = ["One Page Report", "Individual P/L Report"];
  const [activeReport, setActiveReport] = useState("Statement");
  const handleReport = (report) => {
    setActiveReport(report);
  };
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">One Page Report</h5>
      {/* <div className="d-flex flex-row w-25 justify-content-between">
        {reportList.map((value, index) => {
          return (
            <div
              key={index}
              className={
                activeReportIndex === index
                  ? "d-flex justify-content-center align-items-center match-statement-button medium-font ml-2 mr-2 rounded"
                  : "d-flex justify-content-center align-items-center statement-deactive-button medium-font ml-2 mr-2 rounded"
              }
              onClick={() => handleReportSelect(index)}
            >
              {value}
            </div>
          );
        })}
      </div> */}
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
      <div className="hr-line mt-4"></div>
      {activeReport === "One Page Report" ? (
        <OnePageReport />
      ) : (
        <IndiviudalPLReport />
      )}
    </div>
  );
}

export default ReportPage;
