import { Modal, Col, Row } from "antd";
import React, { useState } from "react";
import { BiUpArrowCircle, BiDownArrowCircle } from "react-icons/bi";
function FancyFirstTable() {
  const SETTELMENT_DETAILS = [
    {
      Sno: "5",
      over: "6",
      team: "IND",
      runs: "100",
      name: "Animesh",
      yorn: "Y",
      date: "31/07/23",
      time: "18:44:00PM",
      result: "102",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      Sno: "4",
      over: "6",
      team: "IND",
      runs: "100",
      name: "Animesh",
      yorn: "N",
      date: "31/07/23",
      time: "18:44:00PM",
      result: "102",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      Sno: "3",
      over: "6",
      team: "IND",
      runs: "100",
      name: "Animesh",
      yorn: "Y",
      date: "31/07/23",
      time: "18:44:00PM",
      result: "102",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      Sno: "2",
      over: "6",
      team: "IND",
      runs: "100",
      name: "Animesh",
      yorn: "Y",
      date: "31/07/23",
      time: "18:44:00PM",
      result: "102",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      Sno: "1",
      over: "6",
      team: "IND",
      runs: "100",
      name: "Animesh",
      yorn: "Y",
      date: "31/07/23",
      time: "18:44:00PM",
      result: "102",
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
              <div className="font-12 fw-600">Over</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Team</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Runs</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Name</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Y/N</div>
            </Col>
            <Col span={3}>
              <div className="font-12 fw-600">Date</div>
            </Col>
            <Col span={3}>
              <div className="font-12 fw-600">Time</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Result</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">Amount</div>
            </Col>
            <Col span={2}>
              <div className="font-12 fw-600">P/L</div>
            </Col>
          </Row>
        </div>
        <div className="meeting-content h-25vh">
          {SETTELMENT_DETAILS?.map((item, index) => (
            <div className="upcoming-meetings-content" key={index}>
              <Row>
                <Col span={2}>
                  <div className="font-12 fw-600">{item.Sno}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 ">{item.over}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 ">{item.team}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 ">{item.runs}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 ">{item.name}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600">{item.yorn}</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600">{item.date}</div>
                </Col>
                <Col span={3}>
                  <div className="font-12 fw-600">{item.time}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 clr-green">{item.result}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600">{item.amount}</div>
                </Col>
                <Col span={2}>
                  <div className="font-12 fw-600 clr-green clr-green">{item.pl}</div>
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
              <div className="font-12 fw-600 clr-green flex-center">1000000.00</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default FancyFirstTable;
