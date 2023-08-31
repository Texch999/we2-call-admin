import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
import MatchDeclarationPopup from "../match-popups/MatchDeclarationPopup";
function PaymentSettelmentPopup(props) {
  const { showPaymentModal, setShowPaymentModal, match, clientName } = props;
  const handlePaymentClose = () => {
    setShowPaymentModal(false);
  };
  const [paymentSubmitPopup, setPaymentSubmitPopup] = useState(false);
  const [paymentPopup, setPaymentPopup] = useState(false);
  const handlePaymentSubmitPopupOpen = () => {
    setPaymentSubmitPopup(true);
  };
  const handlePaymentPopupOpen = () => {
    setPaymentPopup(true);
    setPaymentSubmitPopup(false);
  };
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
                    {match}
                  </div>
                </div>
                <div className="ms-1 me-1">
                  <div className="w-100 small-font clr-yellow match-date-button p-1 rounded-pill">
                    Date : 31/07/2023
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 p-4">
              <div className="d-flex flex-column">
                <div className="small-font mb-1">{clientName}*</div>
                <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center">
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "./assets/user.png"}
                      className="username-img p-2 me-2"
                    />
                  </div>
                  <select className="w-100 custom-select small-font btn-bg rounded all-none">
                    <option selected>Select</option>
                    <option>Sangram</option>
                    <option>Ranjith</option>
                    <option>Srikanth</option>
                    <option>Upendra</option>
                    <option>Bhargavi</option>
                    <option>Jyothi Babu</option>
                  </select>
                </div>
              </div>

              <Container fluid className="mt-2">
                <Row>
                  <Col className="ps-0">
                    <input
                      type="number"
                      placeholder="Balance"
                      className="w-100 custom-select small-font btn-bg rounded all-none p-2 small-font"
                    ></input>
                  </Col>
                  <Col className="pe-0">
                    <input
                      type="number"
                      placeholder="Net Balance"
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
                  <select className="w-100 custom-select small-font btn-bg rounded all-none">
                    <option selected>Payment Mode</option>
                    <option>Google Pay</option>
                    <option>Phone Pe</option>
                    <option>Paytm</option>
                    <option>UPI</option>
                    <option>Credit/Debit Card</option>
                    <option>NEFT/RTGS</option>
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
                      className="w-100 custom-select small-font btn-bg rounded all-none"
                    ></input>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="submit-button mt-2 small-font p-2 rounded all-none w-100 mb-2"
                onClick={() => handlePaymentSubmitPopupOpen()}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal.Header>
      </Modal>
      <MatchDeclarationPopup
        header={"Settled Payment sai-offline-user 4000 are you sure?"}
        // amount={"+100000"}
        state={paymentSubmitPopup}
        setState={setPaymentSubmitPopup}
        handleSubmitPopupOpen={handlePaymentPopupOpen}
      />
      <MatchSubmitPopup
        header={"Payment Successfully Completed"}
        state={paymentPopup}
        setState={setPaymentPopup}
      />
    </div>
  );
}

export default PaymentSettelmentPopup;
