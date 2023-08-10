import React from "react";
import { Modal, Row, Col } from "antd";
function FinanceClientModal() {
  const SETTELMENT_DETAILS = [
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mfrc: "1000000.00",
      cshare: "500000.00",
      mcomm: "500000.00",
      cnetpl: "500000.00",
    },
  ];
  return (
    <div>
      {" "}
      <div className="table-border">
        <div className="upcoming-meetings-heading ">
          {" "}
          <Row className="p-3">
            {" "}
            <Col span={4}>
              <div className="font-12 fw-600">Name</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">M+F+RC</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">C Share</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">M + - Comm</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">C Net P/L</div>
            </Col>
          </Row>
        </div>
        <div className="meeting-content h-15vh">
          {SETTELMENT_DETAILS?.map((item, index) => (
            <div className="upcoming-meetings-content" key={index}>
<Row className="p-3">                <Col span={4}>
                  <div className="font-12 fw-600">{item.name}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.mfrc}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.cshare}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.mcomm}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green ">{item.cnetpl}</div>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className="upcoming-meetings-heading">
          <Row className="p-3">
            {" "}
            <Col span={4}>
              <div className="font-12 fw-600 flex-center">TOTAL</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">50000000000</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">50000000000</div>
            </Col>{" "}
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">50000000000</div>
            </Col>{" "}
            <Col span={5}>
              <div className="font-12 fw-600 clr-green">50000000000</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default FinanceClientModal;
