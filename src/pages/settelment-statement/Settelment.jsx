import React from "react";
import "./styles.css";
import { Col, Row } from "antd";
import { FiFileText } from "react-icons/fi";
function Settelment() {
  const SETTELMENT_DETAILS = [
    {
      ClientName: "Animesh",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Sri23465",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Srinivash",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Jayanta",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Animesh",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Sri23465",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Srinivash",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Jayanta",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Animesh",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Sri23465",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Srinivash",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Jayanta",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Animesh",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Sri23465",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Srinivash",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Jayanta",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
  ];
  return (
    <div className="we-2-call-homepage h-100vh">
      <div className="main-div">
        <div className="meetings-container flex-column">
          <div className="font-30 fw-600 flex-start mb-20 p-10">Settelment</div>
          <div className="font-18 fw-600 flex-start mb-10 p-5">
            Account Summary
          </div>
        </div>
        <div className="flex-row flex-space-around w-50 mb-20">
          <div className="details-btn w-30 h-7vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-16">Total Amount</div>
            <div className="clr-yellow">1000000.00</div>
          </div>
          <div className="details-btn w-30 h-7vh br-10 flex-space-around flex-column align-baseline p-5  mr-10 ml-10">
            <div className="font-16">Total Settled Bal C/D</div>
            <div className="clr-yellow">1000000.00</div>
          </div>
          <div className="details-btn w-30 h-7vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-16">Total Balance</div>
            <div className="clr-yellow">1000000.00</div>
          </div>
        </div>
        <div className="table-border p-0">
          <div className="upcoming-meetings-heading">
            <Row>
              <Col span={4}>
                <div className="font-12 fw-600">CLIENT NAME</div>
              </Col>
              <Col span={4}>
                <div className="font-12 fw-600">ROLE/POSITION</div>
              </Col>
              <Col span={4}>
                <div className="font-12 fw-600">AMOUNT</div>
              </Col>
              <Col span={4}>
                <div className="font-12 fw-600">CREDIT/DEBIT</div>
              </Col>
              <Col span={4}>
                <div className="font-12 fw-600">BALANCE</div>
              </Col>
              <Col span={4}>
                <div className="font-12 fw-600"></div>
              </Col>
            </Row>
          </div>
          <div className="meeting-content">
            {SETTELMENT_DETAILS?.map((item, index) => (
              <div className="upcoming-meetings-content" key={index}>
                <Row>
                  <Col span={4}>
                    <div className="font-12 fw-600">{item.ClientName}</div>
                  </Col>
                  <Col span={4}>
                    <div className="font-12 fw-600">{item.RolePosition}</div>
                  </Col>
                  <Col span={4}>
                    <div className="font-12 fw-600">{item.Amount}</div>
                  </Col>
                  <Col span={4}>
                    {/* {ClientName==="Sri23465" ?"":""} */}
                    <div className={item.ClientName==="Sri23465"?"font-12 fw-600 clr-red":"font-12 fw-600 clr-green"}>
                      {item.CreditDebit}
                    </div>
                    {/* <div className="font-12 fw-600 clr-green">
                      {item.CreditDebit}
                    </div> */}
                  </Col>
                  <Col span={4}>
                    <div className="font-12 fw-600 clr-green">
                      {item.Balance}
                    </div>
                  </Col>
                  <Col span={4}>
                    <FiFileText className="font-18 fw-600 clr-yellow"></FiFileText>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
          <div className="upcoming-meetings-heading">
            <Row>
              <Col span={8}>
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
              <Col span={4}>
                <div className="font-12 fw-600 "></div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settelment;
