import React from "react";
import { Modal, Row, Col } from "antd";

function FinancialUlSharePopup() {
  const SETTELMENT_DETAILS = [
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
    {
      name: "Sri3456",
      totalnet: "1000000.00",
      ulshare: "500000.00",
      urspl: "500000.00",
      ulcomm: "500000.00",
    },
  ];

  return (
    <div>
      {" "}
      <div className="table-border p-0">
        <div className="upcoming-meetings-heading">
        <Row className="p-3">
            <Col span={4}>
              <div className="font-12 fw-600">Name</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">Total Net</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">UL Share</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">Urs P/L</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">UL Comm</div>
            </Col>
          </Row>
        </div>
        <div className="meeting-content h-15vh">
          {SETTELMENT_DETAILS?.map((item, index) => (
            <div className="upcoming-meetings-content" key={index}>
              <Row className="p-3">
                {" "}
                <Col span={4}>
                  <div className="font-12 fw-600">{item.name}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">
                    {item.totalnet}
                  </div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.ulshare}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.urspl}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.ulcomm}</div>
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

export default FinancialUlSharePopup;
