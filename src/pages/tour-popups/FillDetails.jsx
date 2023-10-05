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
  const [selectedPackage, setSelectedPackage] = useState(false);
  const [packageOptionsOpen, setPackageOptionsOpen] = useState(false);
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

  const handlePackageOptions = () => {
    setPackageOptionsOpen(true);
  };

  const handleSelectOption = (item) => {
    setSelectedPackage(item);
    setPackageOptionsOpen(false);
  };

  const packageSelectOptions = [
    "100000-200000",
    "200000-300000",
    "300000-400000",
    "400000-500000",
    "100000-above",
  ];

  const NUMBER_OF_MEMBERS = [{ member: 1 }, { member: 2 }];
  return (
    <div className="p-3">
      <div className="w-100 d-flex justify-content-between mt-2">
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
      <hr className="hr-line mt-3" />
      <div className="flex-center font-16 mt-1 fw-600">Fill Your Details</div>
      <div className="mt-10 row">
        <div className="col">
          <div
            className="by-id-btn d-flex justify-content-between p-2"
            onClick={() => handlePackageOptions()}
          >
            <div className="font-10">{selectedPackage || "Select Pack"}</div>
            <div className="font-10">
              ? <FaChevronUp /> : <FaChevronDown />
            </div>
          </div>
          {packageOptionsOpen && (
            <div className="by-id-btn d-flex justify-content-around flex-column mt-1 p-1 pos-abs w-30">
              {packageSelectOptions.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="member-one-text p-1 font-10"
                    onClick={() => handleSelectOption(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="col">
          <div
            className="by-id-btn d-flex justify-content-between p-2"
            onClick={() => handleMembersOpen()}
          >
            <div className="font-10">{numberOfMembers || "Select Members"}</div>
            <div className="font-10">
              {membersOpen ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {membersOpen && (
            <div className="by-id-btn d-flex justify-content-around flex-column mt-1 p-1 pos-abs w-30">
              <div
                className="member-one-text p-1 font-10"
                onClick={() => handleNumberOfMembers("Member 1")}
              >
                Member 1
              </div>
              <div
                className="member-one-text p-1 font-10"
                onClick={() => handleNumberOfMembers("Member 2")}
              >
                Member 2
              </div>
            </div>
          )}
        </div>
        <div className="col">
          <div
            className="by-id-btn d-flex justify-content-between p-2"
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
            <div className="by-id-btn flex-space-around flex-column mt-1 p-1 pos-abs w-30">
              <div
                className="member-one-text p-1 font-10"
                onClick={() => handleRegisteredNames("Jayanth")}
              >
                Jayanth
              </div>
              <div
                className="member-one-text p-1 font-10"
                onClick={() => handleRegisteredNames("Srikanth")}
              >
                Srikanth
              </div>
            </div>
          )}
        </div>
      </div>
      {NUMBER_OF_MEMBERS?.map((item, index) => (
        <div key={index}>
          <div className="flex-center w-20 member-btn p-1 font-10 mt-2">
            Member {item.member}
          </div>
          <div className="row">
            <div className="col-6">
              <div className="font-10 mt-1">Name</div>
              <div className="by-id-btn d-flex justify-content-between p-1 mt-1">
                <input className="all-none" placeholder="Name" type="text" />
              </div>
            </div>
            <div className="col-3">
              <div className="font-10 mt-1">Age</div>
              <div className="by-id-btn d-flex justify-content-between p-2 mt-1">
                <input
                  className="all-none date-input"
                  type="date"
                  placeholder="Date"
                />
              </div>
            </div>
            <div className="col-3 ">
              <div className="font-10 mt-1">Gender</div>
              <div
                className="by-id-btn d-flex justify-content-between p-2 mt-1"
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
                <div className="by-id-btn d-flex justify-content-around flex-column mt-1 p-1 pos-abs w-77">
                  <div
                    className="member-one-text p-1 font-10"
                    onClick={() => handleGenderType("Male")}
                  >
                    Male
                  </div>
                  <div
                    className="member-one-text p-1 font-10"
                    onClick={() => handleGenderType("Female")}
                  >
                    Female
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <div className="font-10 mt-1">ID Proof</div>
              <div
                className="by-id-btn d-flex justify-content-between p-2 mt-1"
                onClick={() => handleProofOpen(index)}
              >
                <div className="font-10">{proofType || "Adhaar Card"}</div>
                <div className="font-10">
                  {proofOpen ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {proofOpen && (
                <div className="by-id-btn flex-space-around flex-column mt-1 p-1 pos-abs w-88">
                  <div
                    className="member-one-text p-1 font-10"
                    onClick={() => handleProofType("Adhaar Card")}
                  >
                    Adhaar Card
                  </div>
                  <div
                    className="member-one-text p-1 font-10"
                    onClick={() => handleProofType("PAN Card")}
                  >
                    PAN Card
                  </div>
                </div>
              )}
            </div>
            <div className="col-6">
              <div className="font-10 mt-1">Upload Screenshot</div>
              <div className="d-flex justify-content-between align-items-center neft-div mt-1 p-1">
                <div className="font-10">
                  Upload Screenshot
                  <input type="file" className="display-none" />
                </div>
                <BiSolidCloudUpload className="type-file font-25" />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="login-btn mt-2" onClick={() => handlePaymentDetails()}>
        Submit
      </div>
    </div>
  );
}

export default FillDetails;
