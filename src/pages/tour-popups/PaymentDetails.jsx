import { Col, Row } from "antd";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaRegUser,
} from "react-icons/fa6";
import { BiSolidCloudUpload } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";

function PaymentDetails(props) {
  const { handleBookingComplete } = props;
  return (
    <div>
      <div className="w-100 flex-space-between mt-20">
        <div className="flex-center payment-icon active-payment-icon font-25">
          <FaRegUser />
        </div>
        <div className="active-line-clr"></div>
        <div className="flex-center payment-icon active-payment-icon font-25">
          <MdOutlinePayment />
        </div>
        <div className="middle-line-clr"></div>
        <div className="flex-center payment-icon font-25">
          <FaCheck />
        </div>
      </div>
      <hr className="hr-line mt-20" />
      <div className="flex-center font-16 fw-600 mt-5">Payment Details</div>
      <div className="by-id-btn mt-5">
        <div className="font-10 flex-space-between p-5">
          <div>Select Members</div>
          <div>2</div>
        </div>
        <hr className="hr-line" />
        <div className="p-8">
          <div className="w-15 flex-center font-10 details-text p-3">
            Details
          </div>
          <Row className="mt-5">
            <Col span={12} className="flex-start">
              <FaCheck className="type-file" />
              <div className="font-10 ml-10">Member 1</div>
            </Col>
            <Col span={12} className="flex-center">
              <div className="font-10">Jayanta, Male, 24</div>
              <div className="font-10 ml-10 viewid-text p-5">View ID</div>
            </Col>
          </Row>
        </div>
        <hr className="hr-line" />
        <div className="p-8">
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <div className="flex-space-between font-10 package-amount-text p-5">
                <div>Package Amount</div>
                <div>1,00000000</div>
              </div>
            </Col>
            <Col span={12}>
              <div className="flex-space-between font-10 package-amount-text p-5">
                <div>Total Members</div>
                <div>02</div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col span={24}>
              <div className="flex-space-between font-10 package-amount-text p-5">
                <div>Total Amount to Pay</div>
                <div className="yellow-clr">2,00000000</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="login-btn mt-20">Confirm & Pay</div>
      <hr className="hr-line mt-10" />
      <div className="font-10 mt-5">Payment Mode*</div>
      <Row>
        <Col span={24}>
          <div className="flex-space-between p-8 font-10 neft-div mt-5">
            <div>NEFT/RTGS</div>
            <div>
              <FaChevronDown />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className=" p-8 font-10 neft-div mt-5">
            <div className="flex-space-between">
              <div>Name: Jayanta Pal</div>
              <div className="yellow-clr">Select</div>
            </div>
            <div>A/C No: 34311236216</div>
            <div>Bank: SBI</div>
            <div>IFSC Code: SBIN001111</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="flex-space-between neft-div mt-5 pad-lr-8px">
            <div className="font-10">
              Upload Screenshot
              <input type="file" className="display-none" />
            </div>
            <BiSolidCloudUpload className="type-file font-25" />
          </div>
        </Col>
      </Row>
      <div className="login-btn mt-20" onClick={() => handleBookingComplete()}>
        Pay
      </div>
    </div>
  );
}

export default PaymentDetails;
