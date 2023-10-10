import { BiSolidCloudUpload } from "react-icons/bi";
import {
  FaChevronDown,
  FaChevronUp,
  FaRegUser,
  FaCheck,
} from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { useState } from "react";
import { AiTwotoneSave } from "react-icons/ai";

function FillDetails(props) {
  const { handlePaymentDetails } = props;
  const [activeIndex, setActiveIndex] = useState(0);
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
  const [packageType, setPackageType] = useState(0);
  const [arrey, setArrey] = useState([]);
  let NUMBER_OF_MEMBERS = arrey;

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

  const handleSelectOption = (item, index) => {
    setPackageType(item.value);
    setSelectedPackage(item.label);
    setPackageOptionsOpen(false);
    {
      let arr = [];
      for (let i = 0; i < item.value; i++) {
        arr.push({});
      }
      setArrey(arr);
    }
  };

  const handleAddMore = () => {
    let arr = [];
    arr.push(...arrey, {});
    setArrey(arr);
  };
  const packageSelectOptions = [
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          100000-200000 <div className="p-1 border-ylw">1</div>
        </div>
      ),
      value: 1,
    },
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          200000-300000 <div className="p-1 border-ylw">3</div>
        </div>
      ),
      value: 3,
    },
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          300000-400000 <div className="p-1 border-ylw">5</div>
        </div>
      ),
      value: 5,
    },
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          400000-500000 <div className="p-1 border-ylw">7</div>
        </div>
      ),
      value: 7,
    },
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          500000-700000 <div className="p-1 border-ylw">10</div>
        </div>
      ),
      value: 10,
    },
  ];

  return (
    <div className="p-3">
      <div className="w-100 d-flex justify-content-between mt-2">
        <div className="flex-center payment-icon active-payment-icon font-25">
          <FaRegUser />
        </div>
        <div className="middle-line-clr"></div>
        <div className="flex-center payment-icon font-25">
          <AiTwotoneSave />
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
      <div className="div-scroll-pop">
        <div className="mt-10 row">
          <div className="col position-relative">
            <div
              className="by-id-btn d-flex justify-content-between p-2"
              onClick={() => handlePackageOptions()}
            >
              <div className="font-10">{selectedPackage || "Select Pack"}</div>
              <div className="font-10">
                {selectedPackage ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {packageOptionsOpen && (
              <div className="by-id-btn d-flex justify-content-around flex-column mt-1 p-1 pos-abs w-90">
                {packageSelectOptions.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="member-one-text p-1 font-10"
                      onClick={() => handleSelectOption(item, index)}
                    >
                      {item.label}
                    </div>
                  );
                })}
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
            <div className="d-flex justify-content-between aline-items-center">
              <div className="flex-center w-20 member-btn p-1 font-10 mt-2">
                Member {index + 1}
              </div>
              {index != 0 ? (
                <div className="col-5">
                  <select className="by-id-btn d-flex justify-content-between p-1 mt-1 all-none w-100 me-2">
                    <option>Alreay Registered</option>
                    <option>sangram</option>
                    <option>ravi</option>
                  </select>
                </div>
              ) : (
                ""
              )}
            </div>

            <div className="row">
              <div className="col-6">
                <div className="font-10 mt-1">Name</div>
                <div className="by-id-btn d-flex justify-content-between p-1 mt-1">
                  <input
                    className="all-none bg-none"
                    placeholder="Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="font-10 mt-1">Age</div>
                <div className="by-id-btn d-flex justify-content-between p-2 mt-1">
                  <input
                    className="all-none date-input bg-none"
                    type="date"
                    placeholder="Date"
                  />
                </div>
              </div>
              <div className="col-3 ">
                <div className="font-10 mt-1">Gender</div>
                <select className="by-id-btn d-flex justify-content-between p-1 mt-1 all-none w-100 ">
                  <option>Male</option>
                  <option>FeMale</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <div className="font-10 mt-1">ID Proof</div>
                <select className="by-id-btn d-flex justify-content-between p-1 mt-1 all-none w-100 me-2">
                  <option>Adhaar Card</option>
                  <option>PAN Card</option>
                </select>
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
        <div className="row d-flex justify-content-end"></div>
      </div>
      {/* <div className="login-btn mt-2" onClick={() => handlePaymentDetails()}>
        Submit
      </div> */}
      <div className="login-btn mt-2" onClick={() => handlePaymentDetails()}>
        Save
      </div>
    </div>
  );
}

export default FillDetails;
