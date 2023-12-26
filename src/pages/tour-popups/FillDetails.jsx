import { BiSolidCloudUpload } from "react-icons/bi";
import {
  FaChevronDown,
  FaChevronUp,
  FaRegUser,
  FaCheck,
} from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { useRef, useState } from "react";
import { AiTwotoneSave } from "react-icons/ai";
import { call } from "../../config/axios";
import { GENERATE_SIGNED_URL } from "../../config/endpoints";
import { ImageBaseUrl } from "../../images/index";

function FillDetails(props) {
  const { handlePaymentDetails, tour } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [numberOfMembers, setNumberOfMembers] = useState();
  const [registeredNames, setRegisteredNames] = useState();
  const [genderType, setGenderType] = useState();
  const [proofType, setProofType] = useState();
  const [packageType, setPackageType] = useState(0);
  const [membersOpen, setMembersOpen] = useState(false);
  const [registeredOpen, setRegisteredOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [proofOpen, setProofOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(false);
  const [packageOptionsOpen, setPackageOptionsOpen] = useState(false);
  const [inputData, setInputData] = useState({});
  const [imagefiles, setImagefiles] = useState({});
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
    setPackageOptionsOpen(!packageOptionsOpen);
  };

  const handleSelectOption = (item, index) => {
    setPackageType(item.value);
    setSelectedPackage(item.label);
    setPackageOptionsOpen(false);
    {
      let arr = [];
      if (tour[0]?.tour_name !== "4.Casino Tour") {
        arr.push({
          username: item.name + "username" + 1,
          userdob: item.name + "userdob" + 1,
          usergender: item.name + "usergender" + 1,
          useridproof: item.name + "useridproof" + 1,
          userimageinfo: item.name + "userimage" + 1,
        });
      } else {
        for (let i = 0; i < item.value; i++) {
          arr.push({
            username: item.name + "username" + (i + 1),
            userdob: item.name + "userdob" + (i + 1),
            usergender: item.name + "usergender" + (i + 1),
            useridproof: item.name + "useridproof" + (i + 1),
            userimageinfo: item.name + "userimage" + (i + 1),
          });
        }
      }
      setArrey(arr);
    }
  };

  // const handleAddMore = () => {
  //   let arr = [];
  //   arr.push(...arrey, {});
  //   setArrey(arr);
  // };
  const packageSelectOptions = [
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          Regular Pack
          {/* <div className="p-1 border-ylw"></div> */}
        </div>
      ),
      name: "regularPack",
      value: tour[0]?.packages?.regularpack?.allowedpersons,
    },
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          Premium Pack
          {/* <div className="p-1 border-ylw"></div> */}
        </div>
      ),
      name: "premiumPack",
      value: tour[0]?.packages?.premiumpack?.allowedpersons,
    },
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          Luxury Pack
          {/* <div className="p-1 border-ylw"></div> */}
        </div>
      ),
      name: "luxuryPack",
      value: tour[0]?.packages?.luxurypack?.allowedpersons,
    },
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          Vip Pack
          {/* <div className="p-1 border-ylw"></div> */}
        </div>
      ),
      name: "vipPack",
      value: tour[0]?.packages?.vippack?.allowedpersons,
    },
    {
      label: (
        <div className="d-flex justify-content-between aline-items-center">
          Vvip Pack
          {/* <div className="p-1 border-ylw"></div> */}
        </div>
      ),
      name: "vvipPack",
      value: tour[0]?.packages?.vvippack?.allowedpersons,
    },
  ];
  const handleInputsChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleUploadchange = async (e, index) => {
    const imagefile = e.target.files[0];
    const imageId = Date.now();
    const imageuploadingurl = await generatesignedurl(imageId);
    imageuploadingurl &&
      imagefile &&
      (await fetch(imageuploadingurl, {
        method: "PUT",
        body: imagefile,
        headers: {
          "Content-Type": "image/jpeg",
          "cache-control": "public, max-age=0",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setInputData({
              ...inputData,
              [e.target.name]: `${ImageBaseUrl}/tours_user_docs/${imageId}.png`,
            });
            setImagefiles({
              ...imagefiles,
              [e.target.name]: imagefile.name,
            });
          }
        })
        .catch((err) => {
          console.log("err: ", err);
        }));
  };

  const generatesignedurl = async (imageId) => {
    const payload = {
      register_id: `${imageId}`,
      event_type: "user_profile_image",
      folder_name: "tours_user_docs",
    };
    try {
      const res = await call(GENERATE_SIGNED_URL, payload);
      const url = res?.data?.data?.result?.signed_url;
      return url;
    } catch (error) {
      console.log("error while creating the signed url", error);
      return "";
    }
  };
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
          {/* <div className="col">
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
          </div> */}
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
                    <option>Already Registered</option>
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
                    name={item.username}
                    value={inputData[item.username]}
                    onChange={(e) => handleInputsChange(e)}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="font-10 mt-1">DoB</div>
                <div className="by-id-btn d-flex justify-content-between p-2 mt-1">
                  <input
                    className="all-none date-input bg-none"
                    type="date"
                    placeholder="Date"
                    name={item.userdob}
                    value={inputData[item.userdob]}
                    onChange={(e) => handleInputsChange(e)}
                  />
                </div>
              </div>
              <div className="col-3 ">
                <div className="font-10 mt-1">Gender</div>
                <select
                  className="by-id-btn d-flex justify-content-between p-1 mt-1 all-none w-100 "
                  name={item.usergender}
                  onChange={(e) => handleInputsChange(e)}
                >
                  <option selected>Select gender</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>FeMale</option>
                </select>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <div className="font-10 mt-1">ID Proof</div>
                <select
                  className="by-id-btn d-flex justify-content-between p-1 mt-1 all-none w-100 me-2"
                  name={item.useridproof}
                  onChange={(e) => handleInputsChange(e)}
                >
                  <option selected>Select proof</option>
                  <option value={"aadharcard"}>Adhaar Card</option>
                  <option value={"pancard"}>PAN Card</option>
                </select>
              </div>
              <div className="col-6">
                <div className="font-10 mt-1">Upload Screenshot</div>
                <label
                  className="d-flex justify-content-between align-items-center neft-div mt-1 p-1"
                  htmlFor={item.userimageinfo}
                >
                  <div className="font-10">
                    <div>
                      {imagefiles[item.userimageinfo] || "select Image"}
                    </div>
                    <input
                      type="file"
                      name={item.userimageinfo}
                      id={item.userimageinfo}
                      className="display-none"
                      onChange={(e) => handleUploadchange(e, index)}
                    />
                  </div>
                  <BiSolidCloudUpload className="type-file font-25" />
                </label>
              </div>
            </div>
          </div>
        ))}
        <div className="row d-flex justify-content-end"></div>
      </div>
      {/* <div className="login-btn mt-2" onClick={() => handlePaymentDetails()}>
        Submit
      </div> */}
      <div
        className="login-btn mt-2"
        onClick={() => handlePaymentDetails(inputData)}
      >
        Save
      </div>
    </div>
  );
}

export default FillDetails;
