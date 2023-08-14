import { Col, Row } from "antd";
import { BiSolidCloudUpload } from "react-icons/bi";
import {
  FaChevronDown,
  FaChevronUp,
  FaRegUser,
  FaCheck,
} from "react-icons/fa6";

import { MdOutlinePayment } from "react-icons/md";
import { useState } from "react";

function FillDetails(props) {
  const { handlePaymentDetails } = props;
  const [activeIndex, setActiveIndex] = useState();
  const [membersOpen, setMembersOpen] = useState(false);
  const [numberOfMembers, setNumberOfMembers] = useState();
  const [registeredOpen, setRegisteredOpen] = useState(false);
  const [registeredNames, setRegisteredNames] = useState();
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderType, setGenderType] = useState();
  const [proofOpen, setProofOpen] = useState(false);
  const [proofType, setProofType] = useState();
  const handleMembersOpen = () => {
    setMembersOpen(!membersOpen);
  };
  const handleRegisteredOpen = () => {
    setRegisteredOpen(!registeredOpen);
  };
  const handleNumberOfMembers = (content) => {
    setNumberOfMembers(content);
    setMembersOpen(false);
  };
  const handleRegisteredNames = (content) => {
    setRegisteredNames(content);
    setRegisteredOpen(false);
  };
  const handleGenderOpen = (index) => {
    setGenderOpen(!genderOpen);
    setActiveIndex(index);
  };
  const handleGenderType = (content, index) => {
    setGenderType(content);
    setGenderOpen(false);
    setActiveIndex(index);
  };
  const handleProofOpen = (index) => {
    setProofOpen(!proofOpen);
    setActiveIndex(index);
  };
  const handleProofType = (content) => {
    setProofType(content);
    setProofOpen(false);
  };
  const NUMBER_OF_MEMBERS = [{ member: 1 }, { member: 2 }];
  return (
    <div>
      <div className="w-100 flex-space-between mt-20">
        <div className="flex-center payment-icon active-payment-icon font-25">
          <FaRegUser />
        </div>
        <div className="middle-line-clr"></div>
        <div className="flex-center payment-icon font-25">
          <MdOutlinePayment />
        </div>
        <div className="middle-line-clr"></div>
        <div className="flex-center payment-icon font-25">
          <FaCheck />
        </div>
      </div>
      <hr className="hr-line mt-20" />
      <div className="flex-center font-16 mt-5 fw-600">Fill Your Details</div>
      <Row gutter={[24, 24]} className="mt-10">
        <Col span={12}>
          <div
            className="by-id-btn flex-space-between p-8"
            onClick={() => handleMembersOpen()}
          >
            <div className="font-10">{numberOfMembers || "Select Members"}</div>
            <div className="font-10">
              {membersOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {membersOpen && (
            <div className="by-id-btn flex-space-around flex-column mt-5 p-1 pos-abs w-88">
              <div
                className="member-one-text p-5 font-10"
                onClick={() => handleNumberOfMembers("Member 1")}
              >
                Member 1
              </div>
              <div
                className="member-one-text p-5 font-10"
                onClick={() => handleNumberOfMembers("Member 2")}
              >
                Member 2
              </div>
            </div>
          )}
        </Col>
        <Col span={12}>
          <div
            className="by-id-btn flex-space-between p-8"
            onClick={() => handleRegisteredOpen()}
          >
            <div className="font-10">
              {registeredNames || "Already Registered"}
            </div>
            <div className="font-10">
              {registeredOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {registeredOpen && (
            <div className="by-id-btn flex-space-around flex-column mt-5 p-1 pos-abs w-88">
              <div
                className="member-one-text p-5 font-10"
                onClick={() => handleRegisteredNames("Jayanth")}
              >
                Jayanth
              </div>
              <div
                className="member-one-text p-5 font-10"
                onClick={() => handleRegisteredNames("Srikanth")}
              >
                Srikanth
              </div>
            </div>
          )}
        </Col>
      </Row>
      {NUMBER_OF_MEMBERS?.map((item, index) => (
        <div key={index}>
          <div className="flex-center w-15 member-btn p-3 font-10 mt-10">
            Member {item.member}
          </div>
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <div className="font-10 mt-5">Name</div>
              <div className="by-id-btn flex-space-between p-8 mt-5">
                <input className="all-none" placeholder="Name" type="text" />
              </div>
            </Col>
            <Col span={6}>
              <div className="font-10 mt-5">Age</div>
              <div className="by-id-btn flex-space-between p-8 mt-5">
                <input
                  className="all-none date-input"
                  type="date"
                  placeholder="Date"
                />
              </div>
            </Col>
            <Col span={6}>
              <div className="font-10 mt-5">Gender</div>
              <div
                className="by-id-btn flex-space-between p-8 mt-5"
                onClick={() => handleGenderOpen(index)}
              >
                <div className="font-10">{genderType || "Gender"}</div>
                <div className="font-10">
                  {activeIndex === index && genderOpen ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              </div>
              {activeIndex === index && genderOpen && (
                <div className="by-id-btn flex-space-around flex-column mt-5 p-1 pos-abs w-77">
                  <div
                    className="member-one-text p-5 font-10"
                    onClick={() => handleGenderType("Male")}
                  >
                    Male
                  </div>
                  <div
                    className="member-one-text p-5 font-10"
                    onClick={() => handleGenderType("Female")}
                  >
                    Female
                  </div>
                </div>
              )}
            </Col>
          </Row>
          <Row gutter={[24, 24]} className="mt-10">
            {" "}
            <Col span={12}>
              <div className="font-10 mt-5">ID Proof</div>
              <div
                className="by-id-btn flex-space-between p-8 mt-5"
                onClick={() => handleProofOpen(index)}
              >
                <div className="font-10">{proofType || "Adhaar Card"}</div>
                <div className="font-10">
                  {proofOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {proofOpen && (
                <div className="by-id-btn flex-space-around flex-column mt-5 p-1 pos-abs w-88">
                  <div
                    className="member-one-text p-5 font-10"
                    onClick={() => handleProofType("Adhaar Card")}
                  >
                    Adhaar Card
                  </div>
                  <div
                    className="member-one-text p-5 font-10"
                    onClick={() => handleProofType("PAN Card")}
                  >
                    PAN Card
                  </div>
                </div>
              )}
            </Col>{" "}
            <Col span={12}>
              <div className="font-10 mt-5">Upload Screenshot</div>
              <div className="flex-space-between neft-div mt-5 pad-lr-8px">
                <div className="font-10">
                  Upload Screenshot
                  <input type="file" className="display-none" />
                </div>
                <BiSolidCloudUpload className="type-file font-25" />
              </div>
            </Col>
          </Row>
        </div>
      ))}
      <div className="login-btn mt-20" onClick={() => handlePaymentDetails()}>
        Submit
      </div>
    </div>
  );
}

export default FillDetails;
