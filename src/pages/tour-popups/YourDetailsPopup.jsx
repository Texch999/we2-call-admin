import { useState } from "react";
import "./styles.css";
import PaymentDetails from "./PaymentDetails";
import FillDetails from "./FillDetails";
import BookingCompleteMsg from "./BookingCompleteMsg";
import { Modal } from "react-bootstrap";

function YourDetailsPopup(props) {
  const { yourDetailsPopup, setYourDetailsPopup } = props;
  const [fillDetails, setFillDetails] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const handleFillDetails = () => {
    setFillDetails(true);
    setPaymentDetails(false);
    setBookingComplete(false);
  };
  const handlePaymentDetails = () => {
    setPaymentDetails(true);
    setFillDetails(false);
    setBookingComplete(false);
  };
  const handleBookingComplete = () => {
    setBookingComplete(true);
    setPaymentDetails(false);
    setFillDetails(false);
  };
  const handleCancel = () => {
    setYourDetailsPopup(false);
  };
  return (
    <Modal
      show={yourDetailsPopup}
      className="add-user-modal"
      footer={null}
      centered
      onCancel={() => handleCancel()}
    >
      <div className="p-3">
        {fillDetails && (
          <FillDetails handlePaymentDetails={handlePaymentDetails} />
        )}
        {paymentDetails && (
          <PaymentDetails handleBookingComplete={handleBookingComplete} />
        )}
        {bookingComplete && <BookingCompleteMsg handleCancel={handleCancel} />}
      </div>
    </Modal>
  );
}

export default YourDetailsPopup;
