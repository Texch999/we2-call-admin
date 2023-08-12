import { Modal } from "antd";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
function PaymentSettelmentPopUp(props) {
  const { paymentModal, setPaymentModal, setConfirmModal } = props;
  const handleCancel = () => {
    setPaymentModal();
  };
  const handleSubmit = () => {
    setConfirmModal(true);
    setPaymentModal(false);
  };
  return (
    <Modal
      className="login-modal"
      centered
      open={paymentModal}
      footer={null}
      onCancel={() => handleCancel()}
    >
      <center>
        <div className="flex-column w-80">
          <div className="flex-center w-100 mt-10">
            <img
              className="w-25 h-25"
              src={process.env.PUBLIC_URL + "./assets/images/payment.png"}
            ></img>
          </div>
          <div className="font-24 fw-600 flex-center mb-10">
            Payment Settelment
          </div>
          <div className="flex-row flex-center">
            <div className="flex-center font-12 flex-row button-date-time h-25p br-15 w-40 mr-5 ml-5 p-5">
              <div className="font-12 mr-5">Date </div>
              <div className="font-12">: 27/07/2023</div>
            </div>
            <div className="flex-center font-12 flex-row button-date-time h-25p br-15 w-40 mr-5 ml-5 p-5">
              <div className="font-12 mr-5">Time </div>
              <div className="font-12">: 17:46:00 PM</div>
            </div>
          </div>
          <form>
            <div className="mt-10">
              <label className="flex font-10 clr-yellow">Client Name *</label>
              <div className="flex by-id-btn p-5 font-10 mt-5 flex-space-between align-center w-100">
                <img
                  className="username-img"
                  src={process.env.PUBLIC_URL + "./assets/images/user.png"}
                  alt="User_Icon"
                />
                <input
                  className="login-inputs ml-5"
                  type="email"
                  placeholder="Enter Your ID"
                />
                <RiArrowDropDownLine
                  style={{ fontSize: "30px", color: "white" }}
                />
              </div>
            </div>
            <div className="d-flex flex-row mt-10 w-100 flex-space-between">
              <div className="flex-start font-12 w-45 flex-row button-date-time h-25p br-10 p-5 mr-5">
                {" "}
                <input
                  type="text"
                  placeholder="balance"
                  className="login-inputs"
                ></input>
              </div>
              <div className="flex-start font-12 w-45 flex-row button-date-time h-25p br-10 p-5 ml-5">
                {" "}
                <input
                  type="text"
                  placeholder="Net bal"
                  className="login-inputs"
                ></input>
              </div>
            </div>
            <div className="mt-10">
              <label className="flex font-10 clr-yellow">Payment Mode</label>
              <div className="flex by-id-btn p-5 font-10 mt-5 flex-space-between h-30p align-center w-100">
                <img
                  className="username-img"
                  src={process.env.PUBLIC_URL + "./assets/images/card.png"}
                  alt="User_Icon"
                />
                <input
                  className="login-inputs"
                  type="text"
                  placeholder="Select Payment Mode"
                />
                <RiArrowDropDownLine
                  style={{ fontSize: "30px", color: "white" }}
                />
              </div>
            </div>
            <div className="mt-10">
              <label className="flex font-10 clr-yellow">Amount</label>
              <div className="flex by-id-btn p-5 font-10 mt-5 h-30p flex-space-between align-center w-100">
                <img
                  className="username-img"
                  src={process.env.PUBLIC_URL + "./assets/images/money.png"}
                  alt="User_Icon"
                />
                <input
                  className="login-inputs"
                  type="text"
                  placeholder="Enter Amount"
                />
              </div>
            </div>
            <div
              className="submit-btn mt-20 h-4vh mb-20 font-16 flex-center fw-600 w-100 p-5"
              onClick={() => handleSubmit()}
            >
              Submit
            </div>
          </form>
        </div>
      </center>
    </Modal>
  );
}

export default PaymentSettelmentPopUp;
