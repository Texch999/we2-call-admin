import React, { useState } from "react";
import "./styles.css";
import { Col, Row } from "antd";

function ULshareTable() {
  const SETTELMENT_DETAILS = [
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
    {
      name: "Animesh",
      net: "1000000.00",
      ulshare: "500000.00",
      totalpl: "500000.00",
    },
  ];
  const [paymentModal, setPaymentModal] = useState(false);
  const handlePaymentModalOpen = () => {
    setPaymentModal(!paymentModal);
  };
  return (
    <>
      <div className="table-border p-0 mt-10">
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={6}>
              <div className="font-12 fw-600">Client Name</div>
            </Col>
            <Col span={6}>
              <div className="font-12 fw-600">Total Net</div>
            </Col>
            <Col span={6}>
              <div className="font-12 fw-600">UL Share</div>
            </Col>
            <Col span={6}>
              <div className="font-12 fw-600">Total P/L</div>
            </Col>
          </Row>
        </div>
        <div className="meeting-content h-15vh">
          {SETTELMENT_DETAILS?.map((item, index) => (
            <div className="upcoming-meetings-content p-5" key={index}>
              <Row>
                <Col span={6}>
                  <div className="font-12 fw-600">{item.name}</div>
                </Col>
                <Col span={6}>
                  <div className="font-12 fw-600 clr-green">{item.net}</div>
                </Col>
                <Col span={6}>
                  <div className="font-12 fw-600 clr-green">{item.ulshare}</div>
                </Col>
                <Col span={6}>
                  <div className="font-12 fw-600 clr-green">{item.totalpl}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={6}>
              <div className="font-12 fw-600 flex-center">TOTAL</div>
            </Col>
            <Col span={6}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
            <Col span={6}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
            <Col span={6}>
              <div className="font-12 fw-600 clr-green">1000000.00</div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default ULshareTable;
