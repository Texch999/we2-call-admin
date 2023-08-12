import { Col, Grid, Row } from "antd";
import React from "react";
import { AiOutlineDown, AiOutlineDownCircle } from "react-icons/ai";
import { PiPencilLineBold } from "react-icons/pi";

function UpcomingAndSummary() {
  const tableContent = [
    {
      adminRole: "UL",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "SriAgent",
      status: "Join",
    },
    {
      adminRole: "Sri-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "NotStarted",
    },
    {
      adminRole: "Sai-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "Join",
    },
    {
      adminRole: "Sri-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "Join",
    },
    {
      adminRole: "UL",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "SriAgent",
      status: "Join",
    },
    {
      adminRole: "Sri-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "NotStarted",
    },
    {
      adminRole: "Sai-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "Join",
    },
    {
      adminRole: "Sri-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "Join",
    },
    {
      adminRole: "UL",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "SriAgent",
      status: "Join",
    },
    {
      adminRole: "Sri-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "NotStarted",
    },
    {
      adminRole: "Sai-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "Join",
    },
    {
      adminRole: "Sri-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "Join",
    },
    {
      adminRole: "UL",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "SriAgent",
      status: "Join",
    },
    {
      adminRole: "Sri-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "NotStarted",
    },
    {
      adminRole: "Sai-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "Join",
    },
    {
      adminRole: "Sri-Agent",
      eventName: "Newzelend vs South Africa Oneday 23-06-2023, 12:52:00 PM",
      userName: "Sri+15",
      status: "Join",
    },
  ];
  const SummaryData = [
    {
      userRole: "Active Users",
      usersNumber: "00",
    },
    {
      userRole: "Active Agents",
      usersNumber: "00",
    },
    {
      userRole: "Turn Over",
      usersNumber: "00.00",
    },
    {
      userRole: "Profit/Loss",
      usersNumber: "00",
    },
    {
      userRole: "Total Bets",
      usersNumber: "00",
    },
  ];
  return (
    <Row className="upcoming-main-container flex-space-between">
      <div className="w-49 upcoming-container">
        <div className="w-90 flex-space-between m-20">
          <div className="live-heading">Live/Upcoming Meetings</div>
          <div className="see-all flex-aline-center">
            See All
            <AiOutlineDownCircle className="ml-5" />
          </div>
        </div>
        <Row className="w-90 m-20 live-table-head">
          <Col className="table-text" span={6}>
            Adimin
          </Col>
          <Col className="table-text" span={9}>
            User Name
          </Col>
          <Col className="table-text" span={5}>
            User
          </Col>
          <Col className="table-text" span={4}>
            {" "}
            Status
          </Col>
        </Row>
        <div className="w-100 table-scroll">
          {tableContent.map((item, index) => {
            return (
              <Row className="w-90 m-20 live-table-content">
                <Col className="table-text" span={4}>
                  {item.adminRole}
                </Col>
                <Col className="table-text" span={10}>
                  {item.eventName}
                </Col>
                <Col span={5} className="ml-10 table-text">
                  {item.userName}
                  {index !== 0 ? (
                    <PiPencilLineBold className="pencil-icon" />
                  ) : null}
                </Col>
                <Col span={4} className="join-button flex-center table-text">
                  {" "}
                  {item.status}
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
      <div className="w-49 upcoming-container">
        <div className="w-90 flex-space-between m-20">
          <div className="live-heading">Summary</div>
          <div className="see-all flex-aline-center">
            Taday
            <AiOutlineDownCircle className="ml-5" />
          </div>
        </div>
        {SummaryData.map((item, index) => {
          return (
            <Row className="w-90 m-20 live-table-head flex-space-between">
              <Col span={6} className="ml-10 table-text">
                {item.userRole}
              </Col>
              <Col span={2} className="table-text"> {item.usersNumber}</Col>
            </Row>
          );
        })}
      </div>
    </Row>
  );
}

export default UpcomingAndSummary;
