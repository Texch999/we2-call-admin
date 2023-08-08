import React, { useState } from "react";
import "./styles.css";
import PageReport from "./PageReport";
import IndividualPLReport from "./IndividualPLReport";
import OnePagePopup from "./OnePagePopup";

function OnePageReport() {
  const reportList = ["One Page Report", "Individual P/L Report"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleReportSelect = (value) => {
    setActiveIndex(value);
  };

  return (
    <div className="we-2-call-homepage h-100vh">
      <div>
        <div className="font-30 flex-start fw-600">One Page Report</div>
        <div className="flex-start flex-row w-60 mt-20 mb-10">
          {reportList.map((value, index) => {
            return (
              <div
                key={index}
                className={
                  activeIndex === index
                    ? "active-button flex-center w-40 h-50p font-14 clr-green mt-5 mb-5 clr-black fw-600 ml-10 mr-10"
                    : "deactive-button flex-center w-40 h-50p font-14 clr-yelow mt-5 mb-5 clr-white fw-600 ml-10 mr-10"
                }
                onClick={() => handleReportSelect(index)}
              >
                {value}
              </div>
            );
          })}
        </div>
        {activeIndex === 0 && <PageReport />}
        {activeIndex === 1 && <IndividualPLReport />}
      </div>
  

    </div>
  );
}

export default OnePageReport;
