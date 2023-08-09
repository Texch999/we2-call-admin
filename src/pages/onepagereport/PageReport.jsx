import React, { useState } from "react";
import { Col, Row } from "antd";
import { FiFileText } from "react-icons/fi";
import OnePagePopup from "./OnePagePopup";

function PageReport() {
  const SETTELMENT_DETAILS = [
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
    {
      client: "Animesh",
      mfrc: "1000000.00",
      cnet: "500000.00",
      rfnet: "200000.00",
      totalpl: "50000000",
    },
  ];
  const [openOnepagePopup, setOpenOnePagePopup] = useState(false);
  const handleOpenPagePopup = () => {
    setOpenOnePagePopup(true);
  };
  return (
    <div>
      <div className="table-border p-0">
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={5}>
              <div className="font-12 fw-600">CLIENT NAME</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">M+F+RC</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">C NET</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600">RF NET</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">TOTAL P/L</div>
            </Col>
          </Row>
        </div>
        <div className="meeting-content">
          {SETTELMENT_DETAILS?.map((item, index) => (
            <div className="upcoming-meetings-content" key={index}>
              <Row>
                <Col span={5}>
                  <div
                    className="font-12 fw-600"
                    onClick={() => handleOpenPagePopup()}
                  >
                    {item.client}
                  </div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600">{item.mfrc}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600">{item.cnet}</div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600">{item.rfnet}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.totalpl}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className="upcoming-meetings-heading">
          <Row>
            <Col span={5}>
              <div className="font-12 fw-600 flex-center">TOTAL</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">50000000000</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">50000000000</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600 clr-green">50000000000</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">50000000000</div>
            </Col>
          </Row>
        </div>
      </div>
      <OnePagePopup
        openOnepagePopup={openOnepagePopup}
        setOpenOnePagePopup={setOpenOnePagePopup}
      />
    </div>
  );
}

export default PageReport;
