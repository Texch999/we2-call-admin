import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import AddPaymentMode from "../popups/AddPaymentMode";
function UpgradeYourPackagePopup(props) {
  const { showPackagePopup, setShowPackagePopup } = props;
  const handlePackagePopupClose = () => {
    setShowPackagePopup(false);
  };
  const [modalShow, setModalShow] = useState(false);
  const handlePaymentModeOpen = () => {
    // setShowPackagePopup(false);
    setModalShow(true);
  };
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

  const paymentTypes = [
    {
      label: "NEFT/RTGS",
      value: "neft",
    },
    {
      label: "PhonePe",
      value: "upi",
    },
    {
      label: "Paytm",
      value: "upi",
    },
    {
      label: "GooglePay",
      value: "upi",
    },
    {
      label: "QR Code",
      value: "qr_code",
    },
  ];
  const [paymentType, setPaymentType] = useState();
  console.log(paymentType, "......paymentType");
  const handlePaymentMethod = (e) => {
    setPaymentType(e.target.value);
  };

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
              <div className="w-25 small-font match-date-button rounded-pill d-flex justify-content-between p-1">
                Srinivas
                <button className="yellow-btn rounded clr-white">SM</button>
              </div>
            </div>
            <div className="w-100 p-4">
              <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center justify-content-between p-2">
                <div>Total Packages Price</div>
                <div>150000.00</div>
              </div>
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2"
              >
                <Dropdown.Toggle>
                  <div className="d-flex align-itens-center justify-content-between p-1">
                    <div>
                      Return Existed Package
                      <RiArrowDropDownLine style={{ fontSize: "20px" }} />
                    </div>

                    <span style={{ float: "right" }}>-20000</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-menu-item px-1">
                  {packages.map((data, index) => (
                    <Dropdown.Item
                      key={index}
                      className="rounded my-1 d-flex flex-row justify-content-between"
                    >
                      <div>
                        <span>{data.package}</span>
                        <span className="clr-yellow mx-1">{data.number}</span>
                      </div>
                      <div className="add-button rounded-pill p-1 small-font d-flex align-items-center justify-content-evenly">
                        <FaMinus className="mx-1" />
                        <div className="fw-semibold">ADD</div>
                        <FaPlus className="mx-1" />
                      </div>
                    </Dropdown.Item>
                  ))}
                  <Dropdown.Item className="rounded my-2 d-flex flex-row justify-content-between">
                    <div>Total Amount</div>
                    <div>2000000000.00</div>
                  </Dropdown.Item>
                </Dropdown.Menu>
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
                <select
                  onChange={handlePaymentMethod}
                  // name="pg_upi"
                  className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-2"
                >
                  {paymentTypes.map((type, index) => (
                    <option key={index} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
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
