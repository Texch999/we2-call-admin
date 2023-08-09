import React, { useState } from "react";
import "./styles.css";
import MatchBetTable from "./MatchBetTable";
import FancyBetTable from "./FancyBetTable";

function ClientTableData() {
  const clientList = ["Match Bet", "Fancy Bet"];
  const [activeClientIndex, setActiveClientIndex] = useState(0);
  const handleClientActionSelect = (value) => {
    setActiveClientIndex(value);
  };
  return (
    <div>
      <div className="font-18 flex-start fw-600 p-10">Client Name : Animesh</div>
      <div className="flex-start flex-row w-60 mb-10">
        {clientList.map((value, index) => {
          return (
            <div
              key={index}
              className={
                activeClientIndex === index
                  ? "deactive-button  flex-center w-20 h-40p font-14 clr-green mt-5 mb-5 clr-white yellow-border fw-600 ml-10 mr-10"
                  : "deactive-button flex-center w-20 h-40p font-14 clr-yelow mt-5 mb-5 clr-white fw-600 ml-10 mr-10"
              }
              onClick={() => handleClientActionSelect(index)}
            >
              {value}
            </div>
          );
        })}
      </div>
      {activeClientIndex === 0 && <MatchBetTable />}
      {activeClientIndex === 1 && <FancyBetTable />}
    </div>
  );
}

export default ClientTableData;
