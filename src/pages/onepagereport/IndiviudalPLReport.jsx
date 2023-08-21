import React, { useState } from "react";

function IndiviudalPLReport() {
  const reportList = ["Client", "Referal","U/L Share","Platform Comm P/L"];
  const [activeReportIndex, setActiveReportIndex] = useState(0);
  const handleReportSelect = (value) => {
    setActiveReportIndex(value);
  };
  return (
    <div className="p-4">
      <div className="d-flex flex-row w-35 justify-content-between">
        {reportList.map((value, index) => {
          return (
            <div
              key={index}
              className={
                activeReportIndex === index
                  ? "d-flex justify-content-center align-items-center match-statement-button medium-font ml-2 mr-2"
                  : "d-flex justify-content-center align-items-center statement-deactive-button medium-font ml-2 mr-2"
              }
              onClick={() => handleReportSelect(index)}
            >
              {value}
            </div>
          );
        })}
      </div>
            {/* {activeReportIndex === 0 && <OnePageReport />}
      {activeReportIndex === 1 && <IndiviudalPLReport />} */}
    </div>
  );
}

export default IndiviudalPLReport;
