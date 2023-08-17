import { Modal } from "antd";
import { useState } from "react";
import "./styles.css";
import PaymentDetails from "./PaymentDetails";
import FillDetails from "./FillDetails";
import BookingCompleteMsg from "./BookingCompleteMsg";

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
      open={yourDetailsPopup}
      className="yours-details-modal"
      footer={null}
      onCancel={() => handleCancel()}
    >
      <div className="p-1rem">
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
