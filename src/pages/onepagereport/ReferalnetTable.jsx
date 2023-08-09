import React, { useState } from "react";
import "./styles.css";
import { Col, Row } from "antd";
import { FiFileText } from "react-icons/fi";

function ReferalnetTable() {
  const SETTELMENT_DETAILS = [
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
    {
      name: "Animesh",
      amount1: "1000000.00",
      amount2: "500000.00",
      comm: "500000.00",
      total: "500000.00",
    },
  ];
  const [paymentModal, setPaymentModal] = useState(false);
  const handlePaymentModalOpen = () => {
    setPaymentModal(!paymentModal);
  };
  return (
    <div>
      <div className="table-border p-0 mt-10">
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={5}>
              <div className="font-12 fw-600">Client Name</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">Match P/L</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">Fancy P/L</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600">RF-Fancy Comm</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">Total</div>
            </Col>
          </Row>
        </div>
        <div className="meeting-content h-25vh">
          {SETTELMENT_DETAILS?.map((item, index) => (
            <div className="upcoming-meetings-content" key={index}>
              <Row>
                <Col span={5}>
                  <div className="font-12 fw-600">{item.name}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.amount1}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.amount2}</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600 clr-green">{item.comm}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.total}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={5}>
              <div className="font-12 fw-600 flex-start">TOTAL</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="flex-start font-16 mt-5 mb-5 fw-600">
      Total - Rf Share = Rf Gross - M Comm = Rf Net
      </div>
      <div className="table-border p-0 mt-10">
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={5}>
              <div className="font-12 fw-600">Client Name</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">RF Share</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">Gross</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600">Match Comm</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">RF Net P/L</div>
            </Col>
          </Row>
        </div>
        <div className="meeting-content h-25vh">
          {SETTELMENT_DETAILS?.map((item, index) => (
            <div className="upcoming-meetings-content" key={index}>
              <Row>
                <Col span={5}>
                  <div className="font-12 fw-600">{item.name}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.amount1}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.amount2}</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600 clr-green">{item.comm}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.total}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={5}>
              <div className="font-12 fw-600 flex-start">TOTAL</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ReferalnetTable;
