import React, { useState } from "react";
import "./styles.css";
import { Col, Row } from "antd";
import { FiFileText } from "react-icons/fi";
import PaymentSettelmentPopUp from "./PaymentSettelmentPopUp";
import ThankYouPopup from "./ThankYouPopup";
import ConfirmModal from "./ConfirmModal";
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
  const [paymentModal, setPaymentModal] = useState(false);
  const handlePaymentModalOpen = () => {
    setPaymentModal(!paymentModal);
  };
  const [thankyouModal, setThankYouModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  return (
    <div className="homepage">
      <div className="main-div">
        <div className="meetings-container flex-column">
          <div className="font-24 fw-600 flex-start p-10 mt-20">Settelment</div>
          <div className="font-14 fw-600 flex-start mb-10 p-5">
            Account Summary
          </div>
        </div>
        <div className="flex-row flex-space-around w-60">
          <div className="details-btn w-20 h-5vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-12">Total Amount</div>
            <div className="clr-yellow font-12">1000000.00</div>
          </div>
          <div className="details-btn w-20 h-5vh br-10 flex-space-around flex-column align-baseline p-5  mr-10 ml-10">
            <div className="font-12">Total Settled Bal C/D</div>
            <div className="clr-yellow font-12">1000000.00</div>
          </div>
          <div className="details-btn w-20 h-5vh br-10 flex-space-around flex-column align-baseline p-5 mr-10 ml-10">
            <div className="font-12">Total Balance</div>
            <div className="clr-yellow font-12">1000000.00</div>
          </div>
        </div>
        <div className="p-15">
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
                      <div className="font-12 fw-600 clr-green">
                        {item.Balance}
                      </div>
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
      </div>

      <PaymentSettelmentPopUp
        paymentModal={paymentModal}
        setPaymentModal={setPaymentModal}
        setThankYouModal={setThankYouModal}
        thankyouModal={thankyouModal}
        confirmModal={confirmModal}
        setConfirmModal={setConfirmModal}
      />
      <ThankYouPopup
        thankyouModal={thankyouModal}
        setThankYouModal={setThankYouModal}
      />
      <ConfirmModal
        confirmModal={confirmModal}
        setConfirmModal={setConfirmModal}
        thankyouModal={thankyouModal}
        setThankYouModal={setThankYouModal}
      />
    </div>
  );
}

export default Settelment;
