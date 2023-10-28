import { useEffect, useState } from "react";
import "./styles.css";
import PaymentDetails from "./PaymentDetails";
import FillDetails from "./FillDetails";
import BookingCompleteMsg from "./BookingCompleteMsg";
import { Modal } from "react-bootstrap";
import AddedUserList from "./AddedUserList";

function YourDetailsPopup(props) {
  const { yourDetailsPopup, setYourDetailsPopup } = props;
  const [fillDetails, setFillDetails] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [addedUsersList, setAddedUsersList] = useState(false);
  const handleFillDetails = () => {
    setFillDetails(true);
    setAddedUsersList(false);
    setPaymentDetails(false);
    setBookingComplete(false);
  };
  const handlePaymentDetails = () => {
    setAddedUsersList(true);
    setPaymentDetails(false);
    setFillDetails(false);
    setBookingComplete(false);
  };

  const handleAddedUserList = () => {
    setAddedUsersList(false);
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
    setBookingComplete(false);
    setFillDetails(true);
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
        {addedUsersList && (
          <AddedUserList
            handleFillDetails={handleFillDetails}
            handleAddedUserList={handleAddedUserList}
          />
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
