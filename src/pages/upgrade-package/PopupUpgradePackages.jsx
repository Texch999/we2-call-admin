import React, { useEffect, useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { ImageBaseUrl } from "../../images";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineDown, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiSolidChevronDown } from "react-icons/bi";
import {
  CREATE_PACKAGE_SUBSCRIPTION,
  GENERATE_SIGNED_URL,
  GET_ALL_PAYMENT_GATEWAYS,
  GET_USER_INFO,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function PopupUpgradePackages(props) {
  const { openPopup, setOpenPopup, selectPackageName, yearly } = props;
  console.log("selectPackageName===>", selectPackageName);
  const [showAvailablePAckages, setShowAvailablePAckages] = useState();
  const [showReducePackage, setShowReducePackage] = useState(false);
  const [paymentType, setPaymentType] = useState();
  const [selectedMethodInfo, setSelectedMethodInfo] = useState("");
  const [allPaymentGateway, setAllPaymentGateway] = useState([]);
  const [singedUrl, setSignedUrl] = useState(false);
  const [trxId, setImageTrxId] = useState("");
  const [image, setImage] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [checked, setChecked] = useState();
  const register_id = localStorage.getItem("register_id");

  const handleShowPaymentOptions = () => {
    setShowPaymentOptions(true);
  };

  const packagesType = [
    {
      value: "neft",
      label: "NEFT/RTGS",
    },
    {
      value: "phonepe",
      label: "PhonePe",
    },
    {
      value: "paytm",
      label: "Paytm",
    },
    {
      value: "gpay",
      label: "Google Pay",
    },
    {
      value: "qr_code",
      label: "Qr Code",
    },
  ];
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    generateSignedUrl();
  };

  const discountValue = parseInt(
    selectPackageName?.package_cost * (selectPackageName?.discount / 100)
  );

  // const splDiscountValue =
  //   parseInt(
  //     (selectPackageName?.package_cost * selectPackageName?.discount) / 100
  //   ) || 0;

  const totalPackageCost = selectPackageName?.package_cost - discountValue;

  const handlePayButton = async () => {
    await imageUploadBucket();
    const summary = {
      total_package_cost: selectPackageName?.package_cost,
      final_package_cost: totalPackageCost,
      transaction_img: `${ImageBaseUrl}/${"payments"}/${trxId}.png`,
      ...selectedMethodInfo,
      requester_name: localStorage.getItem("user_name"),
      requester_role: localStorage.getItem("account_role"),
    };
    if (!image) {
      return;
    }
    await call(CREATE_PACKAGE_SUBSCRIPTION, {
      register_id,
      summary,
      type: "subscription",
      packages: [selectPackageName],
    })
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res);
        } else {
        }
      })
      .catch((err) => console.log("error while calling payment click", err));
  };

  const generateSignedUrl = async () => {
    const trxId = new Date().getTime();
    await call(GENERATE_SIGNED_URL, {
      trxId,
      event_type: "user_profile_image",
      folder_name: "payments",
    })
      .then(async (res) => {
        let url = res?.data?.data?.result?.signed_url;
        setSignedUrl(url);
        setImageTrxId(trxId);
      })
      .catch((err) => console.log("generating signed url error", err));
  };

  const imageUploadBucket = async () => {
    singedUrl &&
      image &&
      (await fetch(singedUrl, {
        method: "PUT",
        body: image,
        headers: {
          "Content-Type": "image/jpeg",
          "cache-control": "public, max-age=0",
        },
      })
        .then((res) => {
          return true;
        })
        .catch((err) => {
          console.log("err: ", err);
        }));
  };

  const getProfile = async () => {
    const payload = {
      register_id,
    };
    try {
      const res = await call(GET_USER_INFO, payload);
      const userProfileData = res?.data?.data;
      setDiscount(userProfileData?.discount || 0);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllPaymentData = async () => {
    const payload = {
      register_id: localStorage.getItem("creator_id"),
    };
    try {
      const res = await call(GET_ALL_PAYMENT_GATEWAYS, payload);
      if (res.status) {
        setAllPaymentGateway(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    getAllPaymentData();
  }, []);

  // const handleAvailablePackage = () => {
  //   setShowAvailablePAckages((prev) => !prev);
  // };

  // const handleReturnPackages = () => {
  //   setShowReducePackage((prev) => !prev);
  // };

  const handleChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleChecked = (e, item) => {
    setChecked(e);
    setSelectedMethodInfo(item);
  };


  return (
    <Modal
      className="match-declaration-modal z-index"
      centered
      show={openPopup}
    >
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setOpenPopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <div className="px-3">
          <h5>Upgrade Packages</h5>
          <div className="head-name p-2">
            {selectPackageName?.package_name} Pack
          </div>
          <hr className="mt-3 hr-line" />
          <div className="d-flex align-items-center justify-content-between login-input p-2 mt-2">
            <div className="small-font">
              {yearly === true ? "Yearly" : "Monthly"} Subscription
            </div>
            <div className="small-fontt">{selectPackageName?.package_cost}</div>
          </div>
          <div className="d-flex align-items-center justify-content-between login-input p-2 mt-2">
            <div className="small-font">
              Discount {selectPackageName?.discount}%
            </div>
            <div className="small-fontt">{discountValue} </div>
          </div>
          <div className="d-flex align-items-center justify-content-between login-input p-2 mt-2">
            <div className="small-font">
              Special Discount {selectPackageName?.discount}%
            </div>
            <div className="small-fontt">
              {selectPackageName?.package_cost *
                (selectPackageName?.discount / 100)}
            </div>
          </div>
          <div className="d-flex justify-content-between  login-input mt-1 p-1">
            <div className="small-font">Total</div>
            <div className="small-font">{totalPackageCost} </div>
          </div>
          <button
            className="login-button p-2 mt-2"
            onClick={() => handleShowPaymentOptions()}
          >
            Confirm and Pay
          </button>
          {showPaymentOptions && (
            <div>
              <div className="h-40px">
                <select
                  className="d-flex w-100 align-items-center justify-content-between login-input p-2 mt-2 clr-white border-none"
                  onChange={(e) => handleChange(e)}
                  checked={checked}
                >
                  <option>Select Payment Method</option>
                  {packagesType.map((item, index) => {
                    return <option value={item.value}>{item.label}</option>;
                  })}
                </select>
              </div>
              {paymentType === "neft" && (
                <div className="payment-scroll">
                  {allPaymentGateway
                    .filter((item) => item.pg_upi === "neft")
                    .map((item, index) => {
                      return (
                        <div className="d-flex justify-content-between login-input p-2 mt-1">
                          <div>
                            Name:{item.account_holder_name}
                            <br /> Ac.No: {item.account_number}
                            <br /> IFSC: {item.ifsc_code}
                            <br /> Bank: {item.bank_name}
                          </div>
                          <div>
                            <div>Select</div>
                            <input
                              type="checkbox"
                              onChange={(e) => handleChecked(e, item)}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
              {console.log(
                allPaymentGateway.filter((item) => item.pg_upi === paymentType),
                "paymentType"
              )}
              {paymentType !== "neft" && (
                <div className="payment-scroll">
                  {allPaymentGateway
                    .filter((item) => item.pg_upi === paymentType)
                    .map((item, index) => {
                      return (
                        <div className="d-flex justify-content-between login-input p-2 mt-1">
                          <div className="login-input p-2 mt-1">
                            Name: {item.account_holder_name}
                            <br /> Moblie: {item.mobile_number}
                          </div>
                          <div>
                            <div>Select</div>
                            <input
                              type="checkbox"
                              onChange={(e) => handleChecked(e, item)}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
              <div>
                {paymentType === "qr_code" && (
                  <div className="payment-scroll">
                    {/* {allPaymentGateway
                    .filter((item) => item.pg_upi === "qr_code")
                    .map((item, index) => {
                      return (
                        <div className="login-input p-2 mt-1">
                          Name: {item.account_holder_name}
                        </div>
                      );
                    })} */}
                  </div>
                )}
              </div>

              <div className="h-40px">
                <input
                  className="d-flex w-100 align-items-center justify-content-between login-input p-2 mt-2 clr-white border-none"
                  type="file"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                ></input>
              </div>
              <hr className="mt-3 hr-line" />
              <button
                className="login-button p-2 mt-2"
                onClick={() => handlePayButton()}
              >
                Pay
              </button>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PopupUpgradePackages;
