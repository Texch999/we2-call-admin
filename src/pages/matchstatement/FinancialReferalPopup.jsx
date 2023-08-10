import React from "react";
import { Modal, Row, Col } from "antd";

function FinancialReferalPopup() {
  const SETTELMENT_DETAILS = [
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
    {
      name: "Sri3456",
      mffrc: "1000000.00",
      rfshare: "500000.00",
      mcomm: "500000.00",
      rfnetpl: "500000.00",
    },
  ];

  return (
    <div>
      {" "}
      <div className="table-border p-0">
        <div className="upcoming-meetings-heading">
          {" "}
          <Row className="p-3">
            {" "}
            <Col span={4}>
              <div className="font-12 fw-600">Name</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">M+F+R.RC</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">Rf Share</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">M + - Comm</div>
            </Col>
            <Col span={5}>
              <div className="font-12 fw-600">Rf - Net</div>
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
                  <div className="font-12 fw-600 clr-green">{item.mffrc}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.rfshare}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green">{item.mcomm}</div>
                </Col>
                <Col span={5}>
                  <div className="font-12 fw-600 clr-green clr-green">
                    {item.rfnetpl}
                  </div>
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

export default FinancialReferalPopup;
