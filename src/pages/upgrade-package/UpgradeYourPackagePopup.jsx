import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import AddPaymentMode from "../popups/AddPaymentMode";
import { call } from "../../config/axios";
import { IoClose } from "react-icons/io5";
import {
  CREATE_PACKAGE_SUBSCRIPTION,
  GENERATE_SIGNED_URL,
  GET_ALL_PAYMENT_GATEWAYS,
  GET_USER_INFO,
} from "../../config/endpoints";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPackages } from "../../redux/actions/commonActions";
import { ImageBaseUrl } from "../../images";
function UpgradeYourPackagePopup(props) {
  const { showPackagePopup, setShowPackagePopup } = props;
  const [allPaymentGateway, setAllPaymentGateway] = useState();
  const [checked, setChecked] = useState();
  const [selectedMethodInfo, setSelectedMethodInfo] = useState("");
  const [image, setImage] = useState("");
  const [signedUrl, setSignedUrl] = useState();
  const [trxId, setImageTrxId] = useState("");
  const [openOptions, setOpenOptions] = useState();
  const [openReturnOptions, setOpenReturnOptions] = useState();
  const [returnPackageList, setReturnPackageList] = useState([]);
  const [userPackageList, setAdminPackages] = useState([]);
  const [returnPackageTrackerList, setReturnPackageTrackerList] = useState([]);
  const [transactionImg, setTransactionImg] = useState(false);
  const [discount, setDiscount] = useState("");
  const [message, setMessage] = useState();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedReturnPackageTotalCost, setSelectedReturnPackageTotalCost] =
    useState(0);

  const handlePackagePopupClose = () => {
    setShowPackagePopup(false);
    setSelectedMethodInfo("");
    setTransactionImg("");
    dispatch(setSelectedPackages([]));
  };
  const [modalShow, setModalShow] = useState(false);
  const handlePaymentModeOpen = () => {
    // setShowPackagePopup(false);
    setModalShow(true);
  };

  const register_id = localStorage.getItem("register_id");
  const packageList =
    useSelector((State) => State.common.selected_packages) || [];
  const totalPackagesCost = packageList.reduce(
    (acc, obj) => acc + obj.cost * obj.no_of_packages,
    0
  );
  const dispatch = useDispatch();

  const getAllPaymentData = async () => {
    const payload = {
      register_id: localStorage.getItem("creator_id"),
    };
    try {
      const res = await call(GET_ALL_PAYMENT_GATEWAYS, payload);
      if (res.status) {
        setAllPaymentGateway(res?.data?.data);
      }
    } catch (err) {
      console.log(err);
    }
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

  const handlePayButton = async () => {
    await imageUpploadToBucket();
    const discountValue = parseInt((totalPackagesCost * discount) / 100);
    const finalPackageCost =
      totalPackagesCost - discountValue - totalPackagesDiscountValue;
    if (selectedReturnPackageTotalCost > finalPackageCost) {
      setMessage("return packages cost will not exceed curent packages");
      return;
    }
    const summary = {
      total_packages_cost: totalPackagesCost,
      final_package_cost: finalPackageCost - selectedReturnPackageTotalCost,
      after_all_discount_final_package_cost: finalPackageCost,
      transaction_img: `${ImageBaseUrl}/${"payments"}/${trxId}.png`,
      ...selectedMethodInfo,
      user_discount: discount,
      return_package_list: returnPackageList,
      requester_name: localStorage.getItem("user_name"),
      requester_role: localStorage.getItem("account_role"),
    };
    // if (!selectedMethodInfo) {
    //   setMessage("please select payment method");
    //   return;
    // }
    // if (!transactionImg) {
    //   setMessage("please upload screenshot");
    //   return;
    // }
    setIsProcessing(true);
    await call(CREATE_PACKAGE_SUBSCRIPTION, {
      register_id,
      packages: packageList,
      summary,
    })
      .then((res) => {
        if (res.data.status === 200) {
          // setSuccessUpdatePopup(true);
          setIsProcessing(false);
          handlePackagePopupClose();
          setSelectedMethodInfo("");
          setTransactionImg("");
          dispatch(setSelectedPackages([]));
        } else {
          setIsProcessing(false);
          setMessage(res.data.message);
        }
      })
      .catch((err) => {
        setIsProcessing(false);
      });
    // setUpgradePaymentPopup(true);
    // setShowUpgradePopup(false);
  };

  const finalPackageCost = totalPackagesCost;

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

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    setImage(file);
    generateSignedUrl();
  };

  const getProfile = async (id) => {
    const payload = {
      register_id,
    };
    try {
      const res = await call(GET_USER_INFO, payload);
      const userProfileData = res?.data?.data?.[0];
      setDiscount(userProfileData?.package_discount || 0);
    } catch (err) {
      console.log(err);
    }
  };

  const returnPackagesTotalCost = (input) => {
    if (returnPackageList?.length && returnPackageTrackerList?.length) {
      const returnPackageTrackerList1 = returnPackageTrackerList;
      const returnPackTrackList = returnPackageList.map((returnPackObj) => {
        let no_of_return_packages = returnPackObj.no_of_packages,
          totalValue = 0;
        const filterTrackerListWithId = returnPackageTrackerList1.filter(
          (trackObj) => trackObj.package_id == returnPackObj.package_id
        );
        let i = 0;
        let matched_no_return_pack = no_of_return_packages;
        if (!matched_no_return_pack) {
          returnPackObj.totalValue = totalValue;
        }
        while (
          i < filterTrackerListWithId.length &&
          matched_no_return_pack > 0
        ) {
          const currentItem = filterTrackerListWithId[i];
          currentItem.matched_no_return_pack = currentItem?.no_of_packages;
          const packsToSubtract = Math.min(
            matched_no_return_pack,
            currentItem.no_of_packages
          );
          matched_no_return_pack -= packsToSubtract;
          currentItem.matched_no_return_pack -= packsToSubtract;

          returnPackObj.tracker_id = currentItem?.tracker_id;
          totalValue = totalValue + +currentItem.after_discount_per_single_pack;
          returnPackObj.totalValue = totalValue;
          const existingValues = returnPackObj.tracker_List || [];
          returnPackObj.tracker_List = [
            ...existingValues,
            currentItem?.tracker_id,
          ];
          if (currentItem.matched_no_return_pack === 0) {
            returnPackObj.status = "settled";
            i++;
          }
        }
        return returnPackObj;
      });
      const totalReturnPackValue = returnPackTrackList.reduce(
        (acc, obj) => acc + obj?.totalValue,
        0
      );
      setSelectedReturnPackageTotalCost(totalReturnPackValue);
    }
  };

  const onAddandSubtractExistingPackClick = (obj, value) => {
    let updatePackages = [];
    // if (obj.no_of_packages === 1 && value == 1) {
    //   updatePackages = userPackageList.filter(
    //     (itm) => itm.package_id !== obj.package_id
    //   );
    // } else {
    updatePackages = userPackageList.map((item) => {
      if (item.package_id === obj.package_id) {
        item.no_of_packages = item.no_of_packages;
        item.selected_no_of_packages =
          (item.selected_no_of_packages || 0) + value;
      }
      return item;
    });
    // }
    let updateReturnPackageList = [];
    if (returnPackageList?.length) {
      const findIndex = returnPackageList.findIndex(
        (list) => list?.package_id === obj?.package_id
      );
      if (findIndex < 0) {
        const newArr = [
          {
            cost: obj?.package_cost,
            package_id: obj?.package_id,
            no_of_packages: value,
            selected_no_of_packages: value,
          },
        ];
        updateReturnPackageList = [...returnPackageList, ...newArr];
      } else {
        updateReturnPackageList = returnPackageList.map((list) => {
          if (list?.package_id === obj?.package_id) {
            list.no_of_packages = list.no_of_packages + value;
            list.selected_no_of_packages = list.selected_no_of_packages + value;
            // list.package_name = list.package_name
          }
          return list;
        });
      }
    } else {
      updateReturnPackageList = [
        {
          ...obj,
          cost: obj?.package_cost,
          package_id: obj?.package_id,
          no_of_packages: value,
          selected_no_of_packages: value,
        },
      ];
    }
    if (selectedReturnPackageTotalCost > finalPackageCost) {
      setMessage("return packages cost will not exceed curent packages");
      return;
    }
    setReturnPackageList(updateReturnPackageList);
    setAdminPackages(updatePackages);
  };

  useEffect(() => {
    if (selectedReturnPackageTotalCost > finalPackageCost) {
      setMessage("return packages cost will not exceed curent packages");
      return;
    }
  }, [selectedReturnPackageTotalCost]);

  useEffect(() => {
    returnPackagesTotalCost();
  }, [returnPackageList]);

  // const presentToast = ({ message, color = "danger" }) => {
  //   present({
  //     message: message,
  //     duration: 1500,
  //     position: "middle",
  //     color: color,
  //   });
  // };

  const totalPackagesDiscountValue = packageList.reduce(
    (acc, obj) => acc + (obj.cost * obj.no_of_packages * obj.discount) / 100,
    0
  );

  const handlePaymentSelection = (itm) => {
    setSelectedMethod(itm.target.value);
    const obj = allPaymentGateway.find(
      (obj) => obj.pg_upi === itm.target.value
    );
    setSelectedMethodInfo(obj);
  };

  const imageUpploadToBucket = async () => {
    signedUrl &&
      transactionImg &&
      (await fetch(signedUrl, {
        method: "PUT",
        body: transactionImg,
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

  const handleOpenOptions = () => {
    setOpenOptions((prev) => !prev);
  };

  const handleOpenReturnOptions = () => {
    setOpenReturnOptions((prev) => !prev);
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

  const totalPackagesDiscount = packageList.reduce(
    (acc, obj) => acc + obj.discount / packageList?.length,
    0
  );

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    getAllPaymentData();
  }, []);
  const fileInputRef = useRef(null);

  return (
    <div className="modal fade bd-example-modal-lg container mt-5 z-index">
      <Modal
        size="md"
        show={showPackagePopup}
        centered
        className="match-share-modal payment-modal z-index"
      >
        <div onClick={handlePackagePopupClose}>close</div>
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
                  <div className="custom-menu-item px-1 z-index">
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
                      <div>{totalPackagesCost}</div>
                    </Dropdown.Item>
                  </div>
                )}
              </Dropdown>
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2"
              >
                <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center justify-content-between p-2">
                  <div onClick={() => handleOpenReturnOptions()}>
                    <div>Return existed Packages</div>
                  </div>

                  <span style={{ float: "right" }}>
                    {selectedReturnPackageTotalCost}
                  </span>
                </div>
                {openReturnOptions === true && (
                  <div className="custom-menu-item px-1 z-index">
                    {userPackageList?.map((item, index) => (
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
                            onClick={() =>
                              item.selected_no_of_packages >=
                              item.no_of_packages
                                ? null
                                : onAddandSubtractExistingPackClick(item, -1)
                            }
                          />
                          <div className="fw-semibold">
                            {item.selected_no_of_packages || 0}
                          </div>
                          <FaPlus
                            className="mx-1"
                            onClick={() =>
                              item?.selected_no_of_packages <= 0
                                ? null
                                : onAddandSubtractExistingPackClick(item, 1)
                            }
                          />
                        </div>
                      </div>
                    ))}
                    <Dropdown.Item className="rounded my-2 d-flex flex-row justify-content-between">
                      <div>Total Amount</div>
                      <div>{totalPackagesCost}</div>
                    </Dropdown.Item>
                  </div>
                )}
              </Dropdown>
              <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center justify-content-between p-2 mt-2">
                <div>Discount{totalPackagesDiscount}%</div>
                <div>
                  {totalPackagesDiscountValue
                    ? -parseInt(totalPackagesDiscountValue)
                    : 0}
                </div>
              </div>
              <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center justify-content-between p-2 mt-2">
                <div>Special Discount{discount}%</div>
                <div>
                  {discount
                    ? -parseInt((totalPackagesCost * discount) / 100)
                    : 0}
                </div>
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
                      onChange={(e) => handlePaymentSelection(e)}
                      checked={checked}
                    >
                      <option>Select Payment Method</option>
                      {packagesType.map((item, index) => {
                        return <option value={item.value}>{item.label}</option>;
                      })}
                    </select>
                  </div>
                  {selectedMethod === "neft" && selectedMethodInfo ? (
                    <div className="d-flex justify-content-between login-input p-2 mt-1">
                      <div>
                        Name:{selectedMethodInfo?.account_holder_name}
                        <br /> Ac.No: {selectedMethodInfo?.ifsc_code}
                        <br /> IFSC: {selectedMethodInfo?.account_number}
                        <br /> Bank: {selectedMethodInfo?.bank_name}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedMethod === "phonepe" && selectedMethodInfo ? (
                    <div className="d-flex justify-content-between login-input p-2 mt-1">
                      <div>
                        upi:{selectedMethodInfo?.pg_name}
                        <br /> mobile: {selectedMethodInfo?.mobile_number}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedMethod === "paytm" && selectedMethodInfo ? (
                    <div className="d-flex justify-content-between login-input p-2 mt-1">
                      <div>
                        upi:{selectedMethodInfo?.pg_name}
                        <br /> mobile: {selectedMethodInfo?.mobile_number}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedMethod === "gpay" && selectedMethodInfo ? (
                    <div className="d-flex justify-content-between login-input p-2 mt-1">
                      <div>
                        upi:{selectedMethodInfo?.pg_name}
                        <br /> mobile: {selectedMethodInfo?.mobile_number}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedMethod === "qr_code" && (
                    <div className="d-flex justify-content-between login-input p-2 mt-1">
                      <img className="qr-code"></img>
                      <div>Name:{selectedMethodInfo?.account_holder_name}</div>
                    </div>
                  )}

                  <div className="h-40px">
                    <input
                      type="file"
                      style={{ display: "none" }}
                      // id="upload-pic"
                      ref={fileInputRef}
                      onChange={handleFileSelect}
                    ></input>
                    <label
                      className="d-flex w-100 align-items-center justify-content-between login-input p-2 mt-2 clr-white border-none"
                      onClick={handleButtonClick}
                    >
                      {image ? image.name : "Upload Screen Shot"}
                    </label>
                  </div>
                  <hr className="mt-3 hr-line" />
                  <button
                    className="login-button p-2 mt-2"
                    onClick={() => handlePayButton()}
                  >
                    {isProcessing === true ? "Processing" : "Pay"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UpgradeYourPackagePopup;
