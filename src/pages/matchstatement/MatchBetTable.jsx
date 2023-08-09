import { Col, Row } from "antd";
import React, { useState } from "react";

function MatchBetTable() {
  const SETTELMENT_DETAILS = [
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "E",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      sno: "5",
      rate: "1.5",
      team: "IND",
      name: "Animesh",
      pe: "P",
      date: "31/07/2023",
      time: "18:44:00 PM",
      winteam: "India",
      amount: "500000.00",
      pl: "500000.00",
    },
  ];
  return (
    <div>
      {" "}
      <div className="table-border p-0 mt-10">
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={2}>
              <div className="font-12 fw-600">S No</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Rate</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Team</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Name</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">P/E</div>
            </Col>
            <Col span={3}>
              <div className="font-12 fw-600">Date</div>
            </Col>
            <Col span={3}>
              <div className="font-12 fw-600">Time</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Win Team</div>
            </Col>
            <Col span={3}>
              <div className="font-12 fw-600">Amount</div>
            </Col>
            <Col span={3}>
              <div className="font-12 fw-600">P/L</div>
            </Col>
          </Row>
        </div>
        <div className="meeting-content h-25vh">
          {SETTELMENT_DETAILS?.map((item, index) => (
            <div className="upcoming-meetings-content" key={index}>
              <Row>
                <Col span={2}>
                  <div className="font-12 fw-600">{item.sno}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 ">{item.rate}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 ">{item.team}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 ">{item.name}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 ">{item.pe}</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600">{item.date}</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600">{item.time}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 clr-green">{item.winteam}</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600">{item.amount}</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600 clr-green">{item.pl}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={20}>
              <div className="font-12 fw-600 flex-flex-end">TOTAL</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600 clr-green flex-center">
                1000000.00
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MatchBetTable;
