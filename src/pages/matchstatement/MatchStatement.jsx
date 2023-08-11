import React, { useState } from "react";
import Statement from "./Statement";
import FinancialStatement from "./FinancialStatement";

function MatchStatement() {
  const reportList = ["Statement", "Financial Statement"];
  const [activeStatementIndex, setActiveStatementIndex] = useState(0);
  const handleStatementSelect = (value) => {
    setActiveStatementIndex(value);
  };

  return (
    <div className="homepage relative-position">
      <div>
        <div className="font-30 flex-start fw-600 mt-20">Match Statement</div>
        <div className="flex-start flex-row w-60 mt-20 mb-10">
          {reportList.map((value, index) => {
            return (
              <div
                key={index}
                className={
                  activeStatementIndex === index
                    ? "active-button flex-center w-20 h-40p font-12 clr-green mt-5 mb-5 clr-black fw-600 ml-10 mr-10"
                    : "deactive-button flex-center w-20 h-40p font-12 clr-yelow mt-5 mb-5 clr-white fw-600 ml-10 mr-10"
                }
                onClick={() => handleStatementSelect(index)}
              >
                {value}
              </div>
            );
          })}
        </div>
        <div className="hr-line mt-5 mb-5"></div>
        {activeStatementIndex === 0 && <Statement />}
        {activeStatementIndex === 1 && <FinancialStatement />}
      </div>
 
    </div>
  );
}

export default MatchStatement;
