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
    <div className="p-4">
      <div className="xx-large-font mt-2 mb-4 font-weight-bold">
        Match Statement
      </div>
      <div className="d-flex flex-row w-35 justify-content-between">
        {reportList.map((value, index) => {
          return (
            <div
              key={index}
              className={
                activeStatementIndex === index
                  ? "d-flex justify-content-center align-items-center match-statement-button medium-font ml-2 mr-2"
                  : "d-flex justify-content-center align-items-center statement-deactive-button medium-font ml-2 mr-2"
              }
              onClick={() => handleStatementSelect(index)}
            >
              {value}
            </div>
          );
        })}
      </div>
      {activeStatementIndex === 0 && <Statement />}
      {activeStatementIndex === 1 && <FinancialStatement />}
    </div>
  );
}

export default MatchStatement;
