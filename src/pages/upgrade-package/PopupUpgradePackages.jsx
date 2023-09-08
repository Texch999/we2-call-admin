import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineDown, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiSolidChevronDown } from "react-icons/bi";

function PopupUpgradePackages(props) {
  const { openPopup, setOpenPopup } = props;
  const [showAvailablePAckages, setShowAvailablePAckages] = useState();
  const [showReducePackage, setShowReducePackage] = useState(false);
  const packagesType = ["Standerd", "Silver", "Gold", "Diamond", "Vip"];

  const handleAvailablePackage = () => {
    setShowAvailablePAckages((prev) => !prev);
  };

  const handleReturnPackages = () => {
    setShowReducePackage((prev) => !prev);
  };
  return (
    <Modal className="match-declaration-modal" centered show={openPopup}>
      <Modal.Header className="d-flex justify-content-end">
        <IoCloseSharp onClick={() => setOpenPopup(false)} />
      </Modal.Header>
      <Modal.Body>
        <div className="px-3">
          <center>
            <h5>Upgrade Packages</h5>
          </center>
          <div className="d-flex align-items-center justify-content-between login-input p-2 mt-2">
            <div className="small-font">Total Packages Price</div>
            <div className="small-fontt">150000.00</div>
          </div>
          <div className="small-font mt-3">Code Appiled</div>
          <div className="d-flex align-items-center justify-content-between login-input p-2 mt-2">
            <div className="small-font">Total Packages Price</div>
            <RxCrossCircled />
          </div>
          <div className="small-font  d-flex justify-content-end">-2250</div>
          <div className="h-40px">
            <div
              className="d-flex align-items-center justify-content-between login-input p-2 mt-2"
              onClick={() => handleAvailablePackage()}
            >
              <div className="small-font">
                Reduse Available Package <BiSolidChevronDown className="ms-1" />
              </div>
              <span>-2442</span>
            </div>
            {showAvailablePAckages && (
              <div className="drop-down-container">
                {packagesType.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="packages-add p-2 small-font d-flex justify-content-between align-items-center"
                    >
                      <div>
                        {item}
                        <span className="ms-2">8</span>
                      </div>
                      <div className="d-flex align-items-center incre-button p-1">
                        <AiOutlineMinus className="me-1 yellow-clr" />
                        <div>100</div>
                        <AiOutlinePlus className="ms-1 yellow-clr" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="h-40px">
            <div
              className="d-flex align-items-center justify-content-between login-input p-2 mt-2"
              onClick={() => handleReturnPackages()}
            >
              <div className="small-font">
                Return to Return Package <BiSolidChevronDown className="ms-1" />
              </div>
              <span>-2442</span>
            </div>
            {showReducePackage && (
              <div className="drop-down-container">
                {packagesType.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="packages-add p-2 small-font d-flex justify-content-between align-items-center"
                    >
                      <div>
                        {item}
                        <span className="ms-2">8</span>
                      </div>
                      <div className="d-flex align-items-center incre-button p-1">
                        <AiOutlineMinus className="me-1 yellow-clr" />
                        <div>100</div>
                        <AiOutlinePlus className="ms-1 yellow-clr" />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-between login-input p-2 mt-2">
            <div className="small-font">
              Return Available Hours <BiSolidChevronDown className="ms-1" />
            </div>
            <span>-2442</span>
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
