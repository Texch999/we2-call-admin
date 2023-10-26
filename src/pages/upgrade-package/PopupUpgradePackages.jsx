import React, { useEffect, useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineDown, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiSolidChevronDown } from "react-icons/bi";
import {
  CREATE_PACKAGE_SUBSCRIPTION,
  GENERATE_SIGNED_URL,
  GET_ALL_PAYMENT_GATEWAYS,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function PopupUpgradePackages(props) {
  const { openPopup, setOpenPopup, selectPackageName, yearly } = props;
  const [showAvailablePAckages, setShowAvailablePAckages] = useState();
  const [showReducePackage, setShowReducePackage] = useState(false);
  const [paymentType, setPaymentType] = useState();
  const [allPaymentGateway, setAllPaymentGateway] = useState([]);
  const [singedUrl, setSignedUrl] = useState(false);
  const [trxId, setImageTrxId] = useState("");
  const [image, setImage] = useState("");
  const register_id = localStorage.getItem("register_id");
  console.log("selectPackageName====>", selectPackageName);
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
    getAllPaymentData();
  }, []);

  console.log(allPaymentGateway, "......allPaymentGateway");

  // const handleAvailablePackage = () => {
  //   setShowAvailablePAckages((prev) => !prev);
  // };

  // const handleReturnPackages = () => {
  //   setShowReducePackage((prev) => !prev);
  // };

  const handleChange = (e) => {
    setPaymentType(e.target.value);
  };

  console.log(paymentType, "paymentType....");

  return (
    <Modal className="match-declaration-modal" centered show={openPopup}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setOpenPopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <div className="px-3">
          <h5>Upgrade Packages</h5>
          <div className="head-name p-2">{selectPackageName?.packageName}</div>
          <hr className="mt-3 hr-line" />
          <div className="d-flex align-items-center justify-content-between login-input p-2 mt-2">
            <div className="small-font">
              {yearly === true ? "Yearly" : "Monthly"} Subscription
            </div>
            <div className="small-fontt">{selectPackageName?.rate}</div>
          </div>
          <div className="d-flex align-items-center justify-content-between login-input p-2 mt-2">
            <div className="small-font">Discount 0%</div>
            <div className="small-fontt">150000.00</div>
          </div>
          <div className="d-flex align-items-center justify-content-between login-input p-2 mt-2">
            <div className="small-font">Special Discount 10%</div>
            <div className="small-fontt">150000.00</div>
          </div>
          <div className="h-40px">
            <select
              className="d-flex w-100 align-items-center justify-content-between login-input p-2 mt-2 clr-white border-none"
              onChange={(e) => handleChange(e)}
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
                    <div className="login-input p-2 mt-1">
                      Name:{item.account_holder_name}
                      <br /> Ac.No: {item.account_number}
                      <br /> IFSC: {item.ifsc_code}
                      <br /> Bank: {item.bank_name}
                    </div>
                  );
                })}
            </div>
          )}
          {(paymentType === "paytm" || "gpay" || "phonepe") &&
            paymentType !== "neft" && (
              <div className="payment-scroll">
                {allPaymentGateway
                  .filter((item) => item.pg_upi === paymentType)
                  .map((item, index) => {
                    return (
                      <div className="login-input p-2 mt-1">
                        Name: {item.account_holder_name}
                        <br /> Moblie: {item.mobile_number}
                      </div>
                    );
                  })}
              </div>
            )}
          {paymentType === "qr_code" && (
            <div className="payment-scroll">
              {allPaymentGateway
                .filter((item) => item.pg_upi === "qr_code")
                .map((item, index) => {
                  return (
                    <div className="login-input p-2 mt-1">
                      <center>Upload Qr Code</center>
                      <img src={item.uploadImage}></img>
                    </div>
                  );
                })}
            </div>
          )}
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
          <div className="d-flex justify-content-between">
            <div className="small-font">Total</div>
            <div className="small-font">107500</div>
          </div>
          <button className="login-button p-2 mt-2">Confirm and Pay</button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default PopupUpgradePackages;
