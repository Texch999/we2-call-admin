import React, { useState } from "react";
import OnePageReport from "./OnePageReport";
import IndiviudalPLReport from "./IndiviudalPLReport";

function ReportPage() {
  const reportList = ["One Page Report", "Individual P/L Report"];
  const [activeReportIndex, setActiveReportIndex] = useState(0);
  const handleReportSelect = (value) => {
    setActiveReportIndex(value);
  };
  return (
    <div className="p-4">
      <div className="xx-large-font mt-2 mb-4 font-weight-bold">
        One Page Report
      </div>
      <div className="d-flex flex-row w-25 justify-content-between">
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
      </div>
      <div className="hr-line mt-4"></div>
      {activeReportIndex === 0 && <OnePageReport />}
      {activeReportIndex === 1 && <IndiviudalPLReport />}
    </div>
  );
}

export default ReportPage;
