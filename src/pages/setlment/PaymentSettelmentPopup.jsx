import React, { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import moment from "moment";

function PaymentSettelmentPopup(props) {
  const {
    showPaymentModal,
    setShowPaymentModal,
    clientId,
    SETTELMENT_DETAILS = [],
    setOfflineSettlePayload,
    offlineSettlePayload,
    handlePaymentSubmitPopupOpen,
    role,
  } = props;
  const [showPaymentType, setShowPaymentType] = useState(false);
  const [paymentType, setPaymentType] = useState("Payment Mode");
  const selectedObj =
    SETTELMENT_DETAILS?.length &&
    SETTELMENT_DETAILS?.filter((obj) => obj.client_id == clientId)?.[0];
  const [settlementObj, setSettlementObj] = useState({});
  const onSubmitBtnClick = () => {
    setOfflineSettlePayload({ ...offlineSettlePayload, ...settlementObj });
    setShowPaymentModal(false);
    handlePaymentSubmitPopupOpen();
  };
  // const handleCloseModal = () => {
  //   setShowPaymentModal(false);
  // };
  const paymentTypes = [
    { name: "PhonePe", value: "Phonepay" },
    { name: "G Pay", value: "G pay" },
  ];
  const onPaymentType = () => {
    setShowPaymentType((prev) => !prev);
  };
  const handlePaymentType = (type) => {
    setPaymentType(type);
    setSettlementObj({
      ...settlementObj,
      payment_type: type?.value,
    });
  };
  const onInputChange = (e) => {
    setSettlementObj({
      ...settlementObj,
      [e.target.name]: Number(e.target.value),
    });
  };
  useEffect(() => {
    setSettlementObj(selectedObj);
  }, [selectedObj]);
  const handlePaymentClose = () => {
    setShowPaymentModal(false);
  };

  console.log(settlementObj, ".................settlementObj");
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
                      value={settlementObj?.ClientName}
                    />
                  </div>
                </div>
              </div>

              <Container fluid className="mt-2">
                <Row>
                  <Col className="ps-0">
                    <input
                      type="number"
                      placeholder="Balance"
                      className="w-100 custom-select small-font btn-bg rounded all-none p-2 small-font"
                      value={settlementObj?.Amount}
                    ></input>
                  </Col>
                  <Col className="pe-0">
                    <input
                      type="number"
                      placeholder="Net Balance"
                      value={
                        settlementObj?.Amount -
                        (settlementObj?.settled_amount || 0)
                      }
                      className="w-100 custom-select small-font btn-bg rounded all-none p-2"
                    ></input>
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
                      placeholder="Enter Amount"
                      name="settled_amount"
                      onChange={(e) => onInputChange(e)}
                      value={settlementObj?.settled_amount}
                      className="w-100 custom-select small-font btn-bg rounded all-none"
                    ></input>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="submit-button mt-2 small-font p-2 rounded all-none w-100 mb-2"
                onClick={() => onSubmitBtnClick()}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default PaymentSettelmentPopup;
