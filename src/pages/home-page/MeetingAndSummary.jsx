import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import Table from "./Table";

function MeetingAndSummary() {
  const data = [
    {
      admin: "UL",
      event: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      user: "Sri-Agent",
      status: "Join",
    },
    {
      admin: "UL",
      event: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      user: "Sri-Agent",
      status: "Join",
    },
    {
      admin: "UL",
      event: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      user: "Sri-Agent",
      status: "Not-Started",
    },
  ];

  const columns = [
    { header: "Admin", field: "admin" },
    { header: "Event Name", field: "event" },
    { header: "User", field: "user" },
    { header: "Status", field: "status" },
  ];

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
      <div className="col-6 p-2">
        <div className="meetings-container ">
          <div className="row p-3 align-center">
            <h5 className="col-9 meetings-heading">Live/Upcoming Meetings</h5>
            <div className="col-3 d-flex">
              <h6 className="meetings-heading">See All</h6>
              <AiOutlineRight />
            </div>
          </div>
          <Table data={data} columns={columns} />
        </div>
      </div>
      <div className="col-6 p-2">
        <div className="meetings-container p-3">
          <div className="row  align-center mb-3">
            <h5 className="col-9 meetings-heading">Summary</h5>
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

export default MeetingAndSummary;
