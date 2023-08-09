import React, { useState } from "react";
import "./styles.css";
import FancyFirstTable from "./FancyFirstTable";
import FancySecondTable from "./FancySecondTable";

function FancyBetTable() {
  const inningsList = ["Fancy 1st Innings", "Fancy 2nd Innings"];
  const [activeInningsIndex, setActiveInningsIndex] = useState(0);
  const handleReportSelect = (value) => {
    setActiveInningsIndex(value);
  };
  return (
    <div>
      <div className="flex-start flex-row w-60 mt-20 mb-10">
        {inningsList.map((value, index) => {
          return (
            <div
              key={index}
              className={
                activeInningsIndex === index
                  ? "active-button flex-center w-20 h-30p font-10 clr-green mt-5 mb-5 clr-black fw-600 ml-10 mr-10"
                  : "deactive-button flex-center w-20 h-30p font-10 clr-yelow mt-5 mb-5 clr-white fw-600 ml-10 mr-10"
              }
              onClick={() => setActiveInningsIndex(index)}
            >
              {value}
            </div>
          );
        })}
      </div>
      {activeInningsIndex === 0 && <FancyFirstTable />}
      {activeInningsIndex === 1 && <FancySecondTable />}
    </div>
  );
}

export default FancyBetTable;
