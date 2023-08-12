import { Col, Row } from "antd";
import React from "react";
import { AiOutlineDownCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

function TopWinners() {
  const winnerData = [
    {
      userRole: "sri",
      usersNumber: "00",
    },
    {
      userRole: "Lokesh",
      usersNumber: "00",
    },
    {
      userRole: "Jayanth",
      usersNumber: "00",
    },
    {
      userRole: "Lokesh",
      usersNumber: "00",
    },
    {
      userRole: "Ranjith",
      usersNumber: "00",
    },
  ];
  return (
    <Row className="upcoming-main-container flex-space-between">
      <div className="w-49 upcoming-container">
        <div className="w-90 flex-space-between m-20">
          <div className="live-heading">Top Winners</div>
          <div className="see-all w-15 flex-aline-center">
            <input className="search-input" placeholder="Search" />
            <BiSearch />
          </div>
          <div className="see-all flex-aline-center">
            Taday
            <AiOutlineDownCircle className="ml-5" />
          </div>
        </div>
        {winnerData.map((item, index) => {
          return (
            <Row className="w-90 m-20 live-table-head flex-space-between">
              <Col span={6} className="ml-10 table-text">
                {item.userRole}
              </Col>
              <Col span={2} className="table-text">
                {" "}
                {item.usersNumber}
              </Col>
            </Row>
          );
        })}
      </div>
      <div className="w-49 upcoming-container">
        <div className="w-90 flex-space-between m-20">
          <div className="live-heading">Top Loosers</div>
          <div className="see-all w-15 flex-aline-center">
            <input className="search-input" placeholder="Search" />
            <BiSearch />
          </div>
          <div className="see-all flex-aline-center">
            Taday
            <AiOutlineDownCircle className="ml-5" />
          </div>
        </div>
        {winnerData.map((item, index) => {
          return (
            <Row className="w-90 m-20 live-table-head flex-space-between">
              <Col span={6} className="ml-10 table-text">
                {item.userRole}
              </Col>
              <Col span={2} className="table-text">
                {" "}
                {item.usersNumber}
              </Col>
            </Row>
          );
        })}
      </div>
    </Row>
  );
}

export default TopWinners;
