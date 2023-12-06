import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import AddPaymentMode from "../popups/AddPaymentMode";
import { call } from "../../config/axios";
import {
  CREATE_PACKAGE_SUBSCRIPTION,
  GENERATE_SIGNED_URL,
  GET_ALL_PAYMENT_GATEWAYS,
} from "../../config/endpoints";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPackages } from "../../redux/actions/commonActions";
function UpgradeYourPackagePopup(props) {
  const { showPackagePopup, setShowPackagePopup } = props;
  const [allPaymentGateway, setAllPaymentGateway] = useState();
  const [checked, setChecked] = useState();
  const [selectedMethodInfo, setSelectedMethodInfo] = useState();
  const [image, setImage] = useState();
  const [signedUrl, setSignedUrl] = useState();
  const [trxId, setImageTrxId] = useState("");
  const [paymentType, setPaymentType] = useState();
  const [openOptions, setOpenOptions] = useState();
  const handlePackagePopupClose = () => {
    setShowPackagePopup(false);
  };
  const [modalShow, setModalShow] = useState(false);
  const handlePaymentModeOpen = () => {
    // setShowPackagePopup(false);
    setModalShow(true);
  };

  console.log(allPaymentGateway, "......allPaymentGateway");

  const handleChange = (e) => {
    setPaymentType(e.target.value);
  };

  const dispatch = useDispatch();

  const getAllPaymentData = async () => {
    const payload = {
      register_id: localStorage.getItem("creator_id"),
    };
    await call(GET_ALL_PAYMENT_GATEWAYS, payload)
      .then((res) => setAllPaymentGateway(res?.data?.data))
      .catch((res) => console.log(res));
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

  // const handlePayButton = async () => {
  //   await imageUploadBucket();
  //   const summary = {
  //     total_package_cost: selectPackageName?.package_cost,
  //     final_package_cost: totalPackageCost,
  //     transaction_img: `${ImageBaseUrl}/${"payments"}/${trxId}.png`,
  //     ...selectedMethodInfo,
  //     requester_name: localStorage.getItem("user_name"),
  //     requester_role: localStorage.getItem("account_role"),
  //   };
  //   if (!image) {
  //     return;
  //   }
  //   await call(CREATE_PACKAGE_SUBSCRIPTION, {
  //     register_id,
  //     summary,
  //     type: "subscription",
  //     packages: [selectPackageName],
  //   })
  //     .then((res) => {
  //       if (res.data.status === 200) {
  //         console.log(res);
  //       } else {
  //       }
  //     })
  //     .catch((err) => console.log("error while calling payment click", err));
  //   // setSuccessfulupgradedPackages(true);
  //   // setOpenPopup(false);
  // };

  const packages = [
    { package: "Standard", number: "5" },
    { package: "Silver", number: "5" },
    { package: "Gold", number: "5" },
    { package: "Diamond", number: "5" },
    { package: "VIP", number: "5" },
  ];
  const packagesHours = [
    { package: "Standard", hours: "5h" },
    { package: "Silver", hours: "5h" },
    { package: "Gold", hours: "5h" },
    { package: "Diamond", hours: "5h" },
    { package: "VIP", hours: "5h" },
  ];
  const packageReturn = [
    {
      header: "Standard value",
      data: "10000",
      headerone: "Availbale Days",
      dataone: "20",
      headertwo: "Now Value ",
      datatwo: "6666.66",
    },
    {
      header: "Standard value",
      data: "10000",
      headerone: "Availbale Days",
      dataone: "20",
      headertwo: "Now Value ",
      datatwo: "6666.66",
    },
  ];

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

  const handleChecked = (e, item) => {
    setChecked(e);
    setSelectedMethodInfo(item);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    generateSignedUrl();
  };

  const packageList =
    useSelector((State) => State.common.selected_packages) || [];
  const totalPackagesCost = packageList.reduce(
    (acc, obj) => acc + obj.cost * obj.no_of_packages,
    0
  );

  const handleOpenOptions = () => {
    setOpenOptions((prev) => !prev);
  };

  const onAddandSubtractClick = (obj, value) => {
    let updatePackages = [];
    if (obj.no_of_packages === 1) {
      updatePackages = packageList.filter(
        (itm) => itm.package_id !== obj.package_id
      );
    } else {
      updatePackages = packageList.map((item) => {
        if (item.package_id === obj.package_id) {
          item.no_of_packages = item.no_of_packages + value;
        }
        return item;
      });
    }
    dispatch(setSelectedPackages(updatePackages));
  };

  useEffect(() => {
    getAllPaymentData();
  }, [paymentType]);
  const fileInputRef = useRef(null);
  console.log(paymentType, "......paymentType");
  // const handlePaymentMethod = (e) => {
  //   setPaymentType(e.target.value);
  // };

  return (
    <div className="modal fade bd-example-modal-lg container mt-5 z-index">
      <Modal
        size="md"
        show={showPackagePopup}
        onHide={handlePackagePopupClose}
        centered
        className="match-share-modal payment-modal z-index"
      >
        <Modal.Header
          closeButton
          onHide={() => setShowPackagePopup(false)}
        ></Modal.Header>
        <Modal.Body>
          <div className="w-100 flex-columnn relative-position">
            <div className="text-center large-font mt-3 mb-2">
              Package Upgrade
            </div>
            <div className="d-flex justify-content-center">
              <div className="small-font match-date-button rounded-pill d-flex justify-content-between p-1">
                {localStorage.getItem("user_name")}
                <button className="yellow-btn rounded clr-white ms-1">
                  {localStorage.getItem("account_role")}
                </button>
              </div>
            </div>
            <div className="w-100 p-4">
              {/* <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center justify-content-between p-2">
                <div>Total Packages Price</div>
                <div>{totalPackagesCost}</div>
              </div> */}
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2"
              >
                <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center justify-content-between p-2">
                  <div onClick={() => handleOpenOptions()}>
                    <div>Total Packages Price</div>
                  </div>

                  <span style={{ float: "right" }}>{totalPackagesCost}</span>
                </div>
                {openOptions === true && (
                  <div className="custom-menu-item px-1 ">
                    {packageList?.map((item, index) => (
                      <div
                        key={index}
                        className="rounded my-1 d-flex flex-row justify-content-between"
                      >
                        <div>
                          <span>{item.package_name}</span>
                          <span className="clr-yellow mx-1">
                            {item.duration}
                          </span>
                        </div>
                        <div className="add-button rounded-pill p-1 small-font d-flex align-items-center justify-content-evenly">
                          <FaMinus
                            className="mx-1"
                            onClick={() => onAddandSubtractClick(item, -1)}
                          />
                          <div className="fw-semibold">
                            {item.no_of_packages}
                          </div>
                          <FaPlus
                            className="mx-1"
                            onClick={() => onAddandSubtractClick(item, 1)}
                          />
                        </div>
                      </div>
                    ))}
                    <Dropdown.Item className="rounded my-2 d-flex flex-row justify-content-between">
                      <div>Total Amount</div>
                      <div>2000000000.00</div>
                    </Dropdown.Item>
                  </div>
                )}
              </Dropdown>
              <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center justify-content-between p-2 mt-2">
                <div>Total Packages Price</div>
                <div>150000.00</div>
              </div>
              <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center justify-content-between p-2 mt-2">
                <div>Total Packages Price</div>
                <div>150000.00</div>
              </div>
              <hr />
              <div className="d-flex justify-content-between medium-font mt-2 mb-2">
                <div>Total</div>
                <div>107500</div>
              </div>
              <button
                type="submit"
                className="submit-button mt-2 small-font p-2 rounded all-none w-100 mb-2"
                onClick={() => handlePaymentModeOpen()}
              >
                Confirm & Pay
              </button>
              {modalShow && (
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
                        ?.filter((item) => item.pg_upi === "neft")
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
                        {allPaymentGateway
                          .filter((item) => item.pg_upi === "qr_code")
                          .map((item, index) => {
                            return (
                              <div className="login-input p-2 mt-1">
                                Name: {item.account_holder_name}
                              </div>
                            );
                          })}
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
                    // onClick={() => handlePayButton()}
                  >
                    Pay
                  </button>
                </div>
              )}
              {paymentType === "neft" && paymentType}
              {paymentType === "upi" && paymentType}
              {paymentType === "qr_code" && paymentType}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpgradeYourPackagePopup;
