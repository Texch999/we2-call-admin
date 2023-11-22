import { useEffect, useState } from "react";
import "./styles.css";
import PaymentDetails from "./PaymentDetails";
import FillDetails from "./FillDetails";
import BookingCompleteMsg from "./BookingCompleteMsg";
import { Modal } from "react-bootstrap";
import AddedUserList from "./AddedUserList";
import { GET_TOUR_BY_ID } from "../../config/endpoints";
import { call } from "../../config/axios"

function YourDetailsPopup(props) {
  const { yourDetailsPopup, setYourDetailsPopup, tour } = props;
  const [fillDetails, setFillDetails] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [addedUsersList, setAddedUsersList] = useState(false);
  const [usersDetails,setusersDetails]=useState({})
  // console.log(tour,'.....tour from yourdetails pop up')

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
          <FillDetails handlePaymentDetails={handlePaymentDetails} setusersDetails={setusersDetails} tour={tour}/>
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
