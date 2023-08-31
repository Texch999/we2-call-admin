import { Col, Container, Modal, Row } from "react-bootstrap";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { MdModeEditOutline, MdArrowDownward } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
function UpgradeYourPackagePopup(props) {
  const { showPackagePopup, setShowPackagePopup } = props;
  const handlePackagePopupClose = () => {
    setShowPackagePopup(false);
  };
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
              <div className="text-end small-font">-22500</div>
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2"
              >
                <Dropdown.Toggle>
                  <div className="d-flex align-itens-center justify-content-between p-1">
                    <div>
                      Reduse Available Package{" "}
                      <RiArrowDropDownLine style={{ fontSize: "20px" }} />
                    </div>

                    <span style={{ float: "right" }}>-20000</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action1">Demo 01</Dropdown.Item>
                  <Dropdown.Item href="#action2">Lokesh</Dropdown.Item>
                  <Dropdown.Item href="#action3">Jayanth</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{" "}
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2 mb-2"
              >
                <Dropdown.Toggle>
                  <div className="d-flex align-itens-center justify-content-between p-1">
                    <div>
                      Return to Return Package{" "}
                      <RiArrowDropDownLine style={{ fontSize: "20px" }} />
                    </div>

                    <span style={{ float: "right" }}>-20000</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action1">Demo 01</Dropdown.Item>
                  <Dropdown.Item href="#action2">Lokesh</Dropdown.Item>
                  <Dropdown.Item href="#action3">Jayanth</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>{" "}
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2 mb-2"
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
                <Dropdown.Menu>
                  <Dropdown.Item href="#action1">Demo 01</Dropdown.Item>
                  <Dropdown.Item href="#action2">Lokesh</Dropdown.Item>
                  <Dropdown.Item href="#action3">Jayanth</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <hr/>
              <div className="d-flex justify-content-between medium-font mt-2 mb-2">
                <div>Total</div>
                <div>107500</div>
              </div>
              <button
                type="submit"
                className="submit-button mt-2 small-font p-2 rounded all-none w-100 mb-2"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default UpgradeYourPackagePopup;
