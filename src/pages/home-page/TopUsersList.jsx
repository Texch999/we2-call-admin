import React from "react";
import { AiOutlineRight } from "react-icons/ai";

function TopUsersList() {
  const summaryContent = [
    {
      users: "Active Users",
      count: "00",
    },
    {
      users: "Active Agents",
      count: "00",
    },
    {
      users: "Turn Over",
      count: "00",
    },
    {
      users: "Profit/Loss",
      count: "00",
    },
    {
      users: "Total Bets",
      count: "00",
    },
  ];
  return (
    <div className="row meet-box-height ">
      <div className="col-6 p-2 ">
        <div className="meetings-container p-3">
          <div className="row  align-center mb-3">
            <h5 className="col-9 meetings-heading">Top Winners</h5>
            <div className="col-3 d-flex">
              <h6 className="meetings-heading">See All</h6>
              <AiOutlineRight />
            </div>
          </div>
          {summaryContent.map((item, index) => {
            return (
              <div key={index} className="w-100 summary-line d-flex">
                <h6 className="meetings-heading">{item.users}</h6>
                <h6 className="meetings-heading">{item.count}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-6 p-2 ">
        <div className="meetings-container p-3">
          <div className="row  align-center mb-3">
            <h5 className="col-9 meetings-heading">Top Lossers</h5>
            <div className="col-3 d-flex">
              <h6 className="meetings-heading">See All</h6>
              <AiOutlineRight />
            </div>
          </div>
          {summaryContent.map((item, index) => {
            return (
              <div key={index} className="w-100 summary-line d-flex">
                <h6 className="meetings-heading">{item.users}</h6>
                <h6 className="meetings-heading">{item.count}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopUsersList;
