import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Images } from "../../images";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Dropdown } from "react-bootstrap";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { useRef } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

function PackageUpgradePopup(props) {
  const { showPackageUpgrade, setShowPackageUpgrade } = props;
  const HandlePackageClose = () => {
    setShowPackageUpgrade(false);
  };
  const uploadfileInputRef = useRef(null);
  const handleUploadFileSelect = (e) => {
    const file = e.target.files[0];
    console.log("selected file", file);
  };
  const handleUploadButtonClick = () => {
    uploadfileInputRef.current.click();
  };
  const [showPayment, setShowPaymentPopup] = useState(false);
  const handleConfrmPayButton = () => {
    setShowPaymentPopup(true);
  };
  const [successPopup, setSuccessPopup] = useState(false);
  const handleSuccessPopupOpen = () => {
    setSuccessPopup(true);
    setShowPackageUpgrade(false);
  };
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showPackageUpgrade}
        onHide={HandlePackageClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100  flex-column relative-position">
            <h6 className="text-center large-font mt-3 mb-2">
              Package Upgrade
            </h6>
            <div className="d-flex justify-content-center mt-2">
              <div className="d-flex justify-content-around align-items-center w-40 small-font match-date-button rounded-pill">
                <img
                  src={Images.DiamondPackage}
                  className="package-icons"
                ></img>
                <div>Diamond Package</div>
              </div>
            </div>
            <div className="w-100 p-4">
              <div className="text-start small-font"> You Selected*</div>
              <Dropdown
                size="lg"
                className="user-dropdown-toggle custom-button-drop small-font mt-2"
              >
                <Dropdown.Toggle>
                  <div className="d-flex align-itens-center justify-content-between">
                    <div>
                      Annual Subscription
                      <RiArrowDropDownLine style={{ fontSize: "20px" }} />
                    </div>
                    <span style={{ float: "right" }}>7649.00</span>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-menu-item px-1">
                  <Dropdown.Item className="rounded my-1 d-flex flex-row justify-content-between">
                    Monthly Subscription
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none px-3 py-2 align-items-center justify-content-between mt-2">
                <div>Old Price</div>
                <div>-1249.44</div>
              </div>
              <div className="d-flex flex-column mt-2">
                <div className="small-font mb-1">Code Applied *</div>
                <div className="d-flex flex-row justify-content-between w-100 custom-select small-font btn-bg rounded all-none px-3 py-2 align-items-center">
                  <div>FI10cARTq3</div>
                  <RxCrossCircled />
                </div>
                <div className="text-end small-font my-2 px-2">-764.90</div>
              </div>
              <hr />
              <div className="d-flex justify-content-between medium-font mt-2 mb-2">
                <div>Total</div>
                <div>8123.24</div>
              </div>
              <button
                type="submit"
                className="submit-button mt-2 small-font p-2 rounded all-none w-100 mb-2"
                onClick={() => handleConfrmPayButton()}
              >
                Confirm & Pay
              </button>
              {showPayment && (
                <>
                  <hr />
                  <div>
                    <div className="text-start small-font"> Payment Mode</div>
                    <select
                      name="match"
                      className="w-100 custom-select medium-font btn-bg rounded all-none px-2 py-2 mt-2"
                    >
                      <option selected>Enter Payment Mode</option>
                      <option value="sl">NEFT/RTGS</option>
                      <option value="eng">PhonePe</option>
                      <option value="zim">Gpay</option>
                      <option value="pak">Paytm</option>
                    </select>
                  </div>
                  <div onClick={handleUploadButtonClick} className="my-2">
                    <div className="date-container d-flex justify-content-between align-items-center rounded px-3 py-1">
                      <div className="small-font">Upload Screenshot</div>
                      <input
                        type="file"
                        ref={uploadfileInputRef}
                        style={{ display: "none" }}
                        onChange={handleUploadFileSelect}
                        className="login-inputs"
                      ></input>
                      <BiSolidCloudUpload className="custom-icon"></BiSolidCloudUpload>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="submit-button mt-2 small-font p-2 rounded all-none w-100 mb-2"
                    onClick={() => handleSuccessPopupOpen()}
                  >
                    Pay
                  </button>
                </>
              )}
            </div>
          </div>
        </Modal.Header>
      </Modal>
      <MatchSubmitPopup
        header={"Upgraded Package Successfully"}
        state={successPopup}
        setState={setSuccessPopup}
      />
    </div>
  );
}

export default PackageUpgradePopup;
