import React, { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import moment from "moment";
import { call } from "../../config/axios";
import { SET_ADMIN_OFFLINE_PAYMENT } from "../../config/endpoints";

function PaymentSettelmentPopup(props) {
  const {
    showPaymentModal,
    setShowPaymentModal,
    paymentPopupOpen,
    setPaymentPopupOpen,
    setPaymentSuccessPopUp,
    setSuccess,
    role,
    selectedUser,
    totalAmount,
    pendinAmount,
    clientDetails,
  } = props;
  // console.log(clientDetails, "clientDetails");
  // console.log(selectedUser, "selectedUser");
  // console.log(role, "role");
  // console.log(totalAmount, "totalAmount");
  // console.log(pendinAmount, "pendinAmount");

  const register_id = localStorage?.getItem("register_id");
  const [paymentType, setPaymentType] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [settlementObj, setSettlementObj] = useState({
    settled_platform_amount: 0,
  });

  const onSubmitBtnClick = async () => {
    setIsProcessing(true);
    console.log("settlement obj", settlementObj);
    await call(SET_ADMIN_OFFLINE_PAYMENT, {
      client_id: clientDetails?.client_id,
      referral_name: clientDetails?.referral_name,
      client_name: clientDetails?.client_name,
      register_id,
      payment_type: paymentType?.value,
      totalAmount: totalAmount?.toFixed(2),
      ...settlementObj,
    })
      ?.then((res) => {
        setIsProcessing(false);
        console.log(res);
        if (res?.data?.error === "true") {
          setError(res?.data?.message);
        } else {
          setPaymentPopupOpen(false);
          setSuccess((prev) => !prev);
          setPaymentSuccessPopUp(true);
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setError(err);
        console.log(err);
      });
  };
  console.log(settlementObj, "settlementObj");
  // console.log(...settlementObj,"...settlementObj")
  // const handleCloseModal = () => {
  //   setShowPaymentModal(false);
  // };
  const onInputChange = (e) => {
    setSettlementObj({
      ...settlementObj,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handlePaymentClose = () => {
    setShowPaymentModal(false);
  };

  // const [paymentSubmitPopup, setPaymentSubmitPopup] = useState(false);
  // const [paymentPopup, setPaymentPopup] = useState(false);
  // const handlePaymentSubmitPopupOpen = () => {
  //   setPaymentSubmitPopup(true);
  //   setShowPaymentModal(false);
  // };
  // const handlePaymentPopupOpen = () => {
  //   setPaymentPopup(true);
  //   setPaymentSubmitPopup(false);
  // };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showPaymentModal}
        onHide={handlePaymentClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 flex-columnn relative-position">
            <div className="d-flex justify-content-center mt-2 mb-2">
              <img
                src={process.env.PUBLIC_URL + "./assets/payment.png"}
                className="settelment-image"
              ></img>
            </div>
            <div className="text-center large-font mt-1 mb-1">
              Payment Settelment
            </div>
            <div className="p-2 rounded-top w-100 d-flex align-items-center justify-content-center">
              <div className="w-75 d-flex justify-content-center">
                <div className="ms-1 me-1">
                  <div className="w-100 small-font clr-yellow match-date-button p-1 rounded-pill">
                    Date: {moment().format("DD/MM/YYYY")}
                  </div>
                </div>
                <div className="ms-1 me-1">
                  <div className="w-100 small-font clr-yellow match-date-button p-1 rounded-pill">
                    Time: {moment().format("hh:mm A")}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 p-4">
              <div className="d-flex flex-column">
                <div className="small-font mb-1">{role}*</div>
                <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center">
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "./assets/user.png"}
                      className="username-img p-2 me-2"
                    />
                  </div>
                  <div className="w-100 custom-select small-font btn-bg rounded all-none">
                    <input
                      className="w-100 custom-select small-font btn-bg rounded all-none p-2"
                      value={clientDetails?.client_name}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <Container fluid className="mt-2">
                <Row>
                  <Col className="ps-0">
                    <div
                      type="number"
                      // placeholder="Balance"
                      className="w-100 custom-select small-font btn-bg rounded all-none p-2 small-font"
                      // value={totalAmount}
                      // disabled
                    >
                      Balance:{totalAmount ? totalAmount : "0"}
                    </div>
                  </Col>
                  <Col className="pe-0">
                    <div className="w-100 custom-select small-font btn-bg rounded all-none p-2">
                      {/* {+pendinAmount -
                        (pendinAmount > 0
                          ? settlementObj?.settled_platform_amount || 0
                          : -1 * (settlementObj?.settled_platform_amount || 0))} */}
                      PendingBal:{pendinAmount ? totalAmount : "0"}
                    </div>
                  </Col>
                </Row>
              </Container>
              <div className="d-flex flex-column mt-2">
                <div className="small-font mb-1">Payment Mode *</div>
                <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center">
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "./assets/card.png"}
                      className="username-img p-2 me-2"
                    />
                  </div>
                  <select
                    className="w-100 custom-select small-font btn-bg rounded all-none"
                    onChange={(e) => onInputChange(e)}
                    name="payment_type"
                  >
                    {/* <option selected>{settlementObj?.payment_type}</option> */}
                    <option value="gpay">Google Pay</option>
                    <option value="ppay">Phone Pe</option>
                    <option value="paytm">Paytm</option>
                    <option value="upi">UPI</option>
                    <option value="card">Credit/Debit Card</option>
                    <option value="rtgs">NEFT/RTGS</option>
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column w-100 mt-2">
                <div className="small-font mb-1 mt-1">Amount *</div>
                <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center">
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "./assets/money.png"}
                      className="username-img p-2 me-2"
                    ></img>
                  </div>
                  <div>
                    <input
                      type="number"
                      id="settled_platform_amount"
                      placeholder="Enter Amount"
                      name="settled_platform_amount"
                      defaultValue={settlementObj?.settled_platform_amount}
                      onChange={(e) => {
                        onInputChange(e);
                      }}
                      className="w-100 custom-select small-font btn-bg rounded all-none"
                    ></input>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="submit-button mt-2 small-font p-2 rounded all-none w-100 mb-2"
                onClick={() => onSubmitBtnClick()}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Submit"}
              </button>
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default PaymentSettelmentPopup;
