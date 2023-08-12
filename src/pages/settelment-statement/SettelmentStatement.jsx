import React from "react";
import "./styles.css";
import { Col, Row } from "antd";

function SettelmentStatement() {
  const UPCOMING_SETTELMENT_DETAILS = [
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
  ];
  return (
    <div className="homepage">
      <div className="main-div">
        <div className="meetings-container">
          <div className="font-24 fw-600 flex-start mb-10 mt-20">
            Settelment Statement
          </div>
        </div>
        <div className="p-15">
          <div className="table-border">
            <div className="upcoming-meetings-heading">
              <Row>
                <Col span={4}>
                  <div className="font-12 fw-600">DATE & TIME</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600">CLIENT NAME/ROLE</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600">MODE OF PAYMENT</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600">TILL DAY BALANCE</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600">SETTELED AMOUNT</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600">BALANCE</div>
                </Col>
              </Row>
            </div>
            <div className="meeting-content">
              {UPCOMING_SETTELMENT_DETAILS?.map((item, index) => (
                <div className="upcoming-meetings-content" key={index}>
                  <Row>
                    <Col span={4}>
                      <div className="font-12 fw-600">{item.DateTime}</div>
                    </Col>
                    <Col span={4}>
                      <div className="font-12 fw-600">{item.ClientName}</div>
                    </Col>
                    <Col span={4}>
                      <div className="font-12 fw-600">{item.ModeofPayment}</div>
                    </Col>
                    <Col span={4}>
                      <div className="font-12 fw-600">{item.dayBalance}</div>
                    </Col>
                    <Col span={4}>
                      <div className="font-12 fw-600">{item.SettledAmount}</div>
                    </Col>
                    <Col span={4}>
                      <div className="font-12 fw-600 clr-green">
                        {item.Balance}
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
            <div className="upcoming-meetings-heading">
              <Row>
                <Col span={12}>
                  <div className="font-12 fw-600 flex-start">TOTAL</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600 clr-green">50000000000</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600 clr-green">50000000000</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600 clr-green">50000000000</div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettelmentStatement;
