import React, { useState } from "react";
import CallHistory from "./CallHistory";
import CallSettelment from "./CallSettelment";
import CallStatement from "./CallStatement";
import { Button } from "react-bootstrap";

function CallReports() {
  const callReportList = ["Call History", "Call Settelment", "Call Statement"];
  const [activeCallReport, setActiveCallReport] = useState("Call History");
  const handleCallReport = (report) => {
    setActiveCallReport(report);
  };
  return (
    <div>
      <div className="p-4">
        {/* <h5 className="meetings-heading mb-3">Call Reports</h5> */}
        <div className="mb-3 d-flex justify-content-end">
          {callReportList.map((report, index) => (
            <Button
              key={index}
              className={`me-2 admin-reports-button ${
                report === activeCallReport ? "active-report-button" : ""
              }`}
              onClick={() => handleCallReport(report)}
            >
              {report}
            </Button>
          ))}
        </div>
        <div className="hr-line mt-4"></div>
        {activeCallReport === "Call History" ? (
          <CallHistory />
        ) : activeCallReport === "Call Settelment" ? (
          <CallSettelment />
        ) : (
          <CallStatement />
        )}
      </div>
    </div>
  );
}

export default CallReports;
