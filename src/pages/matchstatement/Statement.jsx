import React, { useState } from "react";
import { Modal, Col, Row } from "antd";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import "./styles.css";
import StatementIndividualModal from "./StatementIndividualModal";

function Statement() {
  const SETTELMENT_DETAILS = [
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
  ];
  const [openStatementIndividualPopup, setOpenStatementIndividualPopup] =
    useState(false);
  const handleStatementrIndividualPopup = () => {
    setOpenStatementIndividualPopup(true);
  };
  return (
    <>
      <div className="flex-row flex-space-around w-100 mb-20">
        <div className="flex-row w-20 ">
          <div className="font-16 flex-start mb-5">From</div>
          <div className="calendar-button w-80">
            <div className="font-12">Start Date</div>
            <input
              className="login-inputs "
              style={{ opacity: "0" }}
              type="date"
            ></input>
            <FaCalendarAlt className="font-24 fw-600 clr-yellow"></FaCalendarAlt>
          </div>
        </div>
        <div className="flex-row w-20">
          <div className="font-16 flex-start mb-5">To</div>
          <div className="calendar-button w-80">
            <input className="login-inputs " type="date"></input>
            <FaCalendarAlt className="font-24 fw-600 clr-yellow"></FaCalendarAlt>
          </div>
        </div>
        <div className="flex-row w-20">
          <div className="font-16 flex-start mb-5">Series Name</div>
          <div className="calendar-button w-80 flex-space-around">
            <div className="font-12">Series Name</div>
            <RiArrowDropDownLine
              style={{ color: "white", fontSize: "30px" }}
            ></RiArrowDropDownLine>
          </div>
        </div>
        <div className="flex-row w-25">
          <div className="font-16 flex-start mb-5">Match Name</div>
          <div className="calendar-button w-80 flex-space-around">
            <div className="font-12">Match Name</div>
            <RiArrowDropDownLine
              style={{ color: "white", fontSize: "30px" }}
            ></RiArrowDropDownLine>
          </div>
        </div>
        <div className="flex-row w-20">
          <div className="font-16 flex-start mb-5">Fancy</div>
          <div className="calendar-button w-80 flex-space-around">
            <div className="font-12">Fancy</div>
            <RiArrowDropDownLine
              style={{ color: "white", fontSize: "30px" }}
            ></RiArrowDropDownLine>
          </div>
        </div>
        <div className="flex-row w-30">
          <div className="font-16 flex-start mb-5">Client Name</div>
          <div className="calendar-button w-80 flex-space-around">
            <div className="font-12">Enter Client</div>
            <RiArrowDropDownLine
              style={{ color: "white", fontSize: "30px" }}
            ></RiArrowDropDownLine>
          </div>
        </div>
        <button className="submit-btn w-15 h-50p mt-15">Verify</button>
      </div>
      <div className="hr-line mt-10 mb-10"></div>
      <div className="table-border p-0">
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={5}>
              <div className="font-12 fw-600">DATE & TIME</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600">SERIES NAME</div>
            </Col>
            <Col span={3}>
              <div className="font-12 fw-600">TEAM NAME</div>
            </Col>
            <Col span={3}>
              <div className="font-12 fw-600">MATCH PLACE</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600">WIN TEAM</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600">P/L</div>
            </Col>
            <Col span={1}>
              <div className="font-12 fw-600"></div>
            </Col>
          </Row>
        </div>
        <div className="meeting-content">
          {SETTELMENT_DETAILS?.map((item, index) => (
            <div className="upcoming-meetings-content" key={index}>
              <Row>
                <Col span={5}>
                  <div className="font-12 fw-600">{item.datetime}</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600">{item.series}</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600">{item.team}</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600">{item.matchplace}</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600 clr-green">{item.winteam}</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600 clr-green">{item.pl}</div>
                </Col>
                <Col span={1}>
                  <AiFillEdit
                    className="font-30 fw-600 clr-yellow"
                    onClick={() => handleStatementrIndividualPopup()}
                  ></AiFillEdit>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={19}>
              <div className="font-12 fw-600 flex-start">TOTAL</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">50000000000</div>
            </Col>
          </Row>
        </div>
      </div>
      <StatementIndividualModal
        openStatementIndividualPopup={openStatementIndividualPopup}
        setOpenStatementIndividualPopup={setOpenStatementIndividualPopup}
      />
    </>
  );
}

export default Statement;
