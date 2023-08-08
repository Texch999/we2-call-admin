import React, { useState } from "react";
import "./styles.css";
import { Col, Row } from "antd";
import { FiFileText } from "react-icons/fi";

function ULshareTable() {
  const SETTELMENT_DETAILS = [];
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
            <Col span={5}>
              <div className="font-12 fw-600">Rf-Fancy Comm</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600">Total</div>
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
                  <div
                    className={
                      item.ClientName === "Sri23465"
                        ? "font-12 fw-600 clr-red"
                        : "font-12 fw-600 clr-green"
                    }
                  >
                    {item.CreditDebit}
                  </div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600 clr-green">{item.Balance}</div>
                </Col>
                <Col span={4}>
                  <FiFileText
                    className="font-18 fw-600 clr-yellow"
                    onClick={() => handlePaymentModalOpen()}
                  ></FiFileText>
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
            <Col span={5}>
              <div className="font-12 fw-600">Rf-Fancy Comm</div>
            </Col>
            <Col span={4}>
              <div className="font-12 fw-600">Total</div>
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
                  <div
                    className={
                      item.ClientName === "Sri23465"
                        ? "font-12 fw-600 clr-red"
                        : "font-12 fw-600 clr-green"
                    }
                  >
                    {item.CreditDebit}
                  </div>
                </Col>
                <Col span={4}>
                  <div className="font-12 fw-600 clr-green">{item.Balance}</div>
                </Col>
                <Col span={4}>
                  <FiFileText
                    className="font-18 fw-600 clr-yellow"
                    onClick={() => handlePaymentModalOpen()}
                  ></FiFileText>
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
  );
}

export default ULshareTable;
