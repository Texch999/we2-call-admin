import { Col, Container, Modal, Row } from "react-bootstrap";
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
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showPackagePopup}
        onHide={handlePackagePopupClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
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
              <div className="d-flex flex-column mt-2">
                <div className="small-font mb-1">Code Applied *</div>
                <div className="d-flex flex-row justify-content-between w-100 custom-select small-font btn-bg rounded all-none p-1 align-items-center p-2">
                  <div>FI10cARTq3</div>
                  <RxCrossCircled />
                </div>
              </div>
              <div className="text-end small-font my-1">-22500</div>
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2"
              >
                <Dropdown.Toggle>
                  <div className="d-flex align-itens-center justify-content-between p-1">
                    <div>
                      Reduse Available Package
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
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2"
              >
                <Dropdown.Toggle>
                  <div className="d-flex align-itens-center justify-content-between p-1">
                    <div>
                      Reduse Available Package
                      <RiArrowDropDownLine style={{ fontSize: "20px" }} />
                    </div>

                    <span style={{ float: "right" }}>-20000</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-menu-item px-1">
                  {packageReturn.map((inputdata, index) => (
                    <Dropdown.Item
                      key={index}
                      className="rounded my-2 d-flex flex-row justify-content-between small-font "
                    >
                      <div className="d-flex flex-column w-100">
                        <div className="d-flex flex-row justify-content-between align-items-center my-1">
                          <div>{inputdata.header}</div>
                          <div className="add-button rounded-pill p-1 w-20 text-center">
                            {inputdata.data}
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center my-1">
                          <div>{inputdata.headerone}</div>
                          <div className="add-button rounded-pill p-1 w-20 text-center">
                            {inputdata.dataone}
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center my-1">
                          <div>{inputdata.headertwo}</div>
                          <div className="add-button rounded-pill p-1 w-20 text-center">
                            {inputdata.datatwo}
                          </div>
                        </div>
                      </div>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2"
              >
                <Dropdown.Toggle>
                  <div className="d-flex align-itens-center justify-content-between p-1">
                    <div>
                      Return Available Hours
                      <RiArrowDropDownLine style={{ fontSize: "20px" }} />
                    </div>

                    <span style={{ float: "right" }}>-20000</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-menu-item px-1">
                  {packagesHours.map((data, index) => (
                    <Dropdown.Item
                      key={index}
                      className="rounded my-1 d-flex flex-row justify-content-between"
                    >
                      <div>
                        <span>{data.package}</span>
                        <span className="clr-yellow mx-1">{data.hours}</span>
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
            </div>
          </div>
        </Modal.Header>
      </Modal>
      {modalShow && (
        <AddPaymentMode show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </div>
  );
}

export default UpgradeYourPackagePopup;
