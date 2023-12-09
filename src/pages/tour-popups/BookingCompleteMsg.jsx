import { MdOutlinePayment } from "react-icons/md";
import { FaRegUser, FaCheck } from "react-icons/fa6";
import { Images } from "../../images";
import { AiTwotoneSave } from "react-icons/ai";

function BookingCompleteMsg(props) {
  const { handleCancel } = props;
  return (
    <center>
      <div className="w-100 d-flex justify-content-between mt-2">
        <div className="flex-center payment-icon active-payment-icon font-25">
          <FaRegUser />
        </div>
        <div className="active-line-clr"></div>
        <div className="flex-center payment-icon active-payment-icon font-25">
          <AiTwotoneSave />
        </div>
        <div className="active-line-clr"></div>
        <div className="flex-center payment-icon active-payment-icon font-25">
          <MdOutlinePayment />
        </div>
        <div className="active-line-clr"></div>
        <div className="flex-center payment-icon active-payment-icon font-25">
          <FaCheck />
        </div>
      </div>
      <hr className="hr-line mt-2" />
      <img
        className="congrats-img mt-1"
        src="../assets/congrats_image.png"
        alt="Congrats_Img"
      />
      <div className="font-16 fw-600">Congratulations!</div>
      <div className="font-12 fw-600">Your Booking is Completed</div>
      <div className="font-10 font-10 mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </div>
      <div className="w-80 login-btn mt-3" onClick={() => handleCancel()}>
        Go Back to Message
      </div>
    </center>
  );
}

export default BookingCompleteMsg;
