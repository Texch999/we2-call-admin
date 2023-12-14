import { Col, Container, Modal, Row } from "react-bootstrap";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {
  GET_REASON_REJECTIONS,
  GET_ADMIN_PACKAGE_REQUEST,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import PackageListViewPopup from "./PackageListViewPopup";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
import { BsArrowsFullscreen } from "react-icons/bs";
import ImagePopup from "./ImagePopup";
function TicketUpgradePopup(props) {
  const { showTicketPackagePopup, setTicketShowPackagePopup, saletickets } =
    props;
  const [showPackageListPopup, setShowPackageListPopup] = useState(false);
  const handleShowPackageList = () => {
    setShowPackageListPopup((prev) => !prev);
  };
  const handleTicketPackagePopupClose = () => {
    setTicketShowPackagePopup(false);
  };
  const [showSuccesfulUpgradeTicket, setShowSuccesfulUpgradeTicket] =
    useState(false);
  const handleSuccessUpgradeTicket = () => {
    setShowSuccesfulUpgradeTicket(true);
    setTicketShowPackagePopup(false);
  };
  const [showImagePopup, setShowImagePopup] = useState(false);
  const handleImageModal = () => {
    setShowImagePopup(true);
  };
  const handleImageModalClose = () => {
    setShowImagePopup(false);
  };
  const [saleTicket, setSaleTicket] = useState([]);

  const getAllsaleTickets = async () => {
    const payload = {
      register_id: localStorage.getItem("register_id"),
    };
    await call(GET_ADMIN_PACKAGE_REQUEST, payload)
      .then((res) => {
        setSaleTicket(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllsaleTickets();
  }, []);

  const handelChange = (e) => {
    setSaleTicket({
      ...saleTicket,
      [e.target.name]: e.target.value,
    });
  };

  const [rejectionDropdown, setRejectionDropdown] = useState([]);

  const getAllReasonrejections = async () => {
    const payload = {
      p_id: "REJECT-REASON",
    };
    await call(GET_REASON_REJECTIONS, payload).then((res) => {
      setRejectionDropdown(res?.data?.data);
    });
  };
  useEffect(() => {
    getAllReasonrejections();
  }, []);

  console.log(saletickets, ".......saletickets");
  const imageUrl = saletickets?.summary?.total_packages_cost;

  const showTicketPackage = saleTicket.map((obj) => {});
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showTicketPackagePopup}
        onHide={handleTicketPackagePopupClose}
        centered
        className="match-share-modal payment-modal z-index"
      >
        <Modal.Header closeButton>
          <div className="w-100 flex-columnn relative-position">
            <div className="w-100 p-4">
              <div className="d-flex justify-content-start">
                <div className="w-25 small-font rounded-pill d-flex justify-content-between p-1 align-items-center">
                  Srinivas
                  <button className="yellow-btn rounded clr-white mx-2">
                    SM
                  </button>
                  <div className="completed-btn rounded-pill px-4 py-1 mx-1">
                    Deposit
                  </div>
                </div>
              </div>
              <div className="p-2 my-2 d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none align-items-center justify-content-between">
                <div>Trx ID</div>
                <div>{saletickets?.transaction_id}</div>
              </div>
              <div className="my-2 d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-2 align-items-center justify-content-between ">
                <div>Reference ID</div>
                <div>{saletickets?.package_requester_id}</div>
              </div>
              <div className="my-2 d-flex flex-column w-100 custom-select small-font btn-bg rounded all-none p-2 align-items-center justify-content-between ">
                <div className="d-flex flex-row justify-content-between w-100 my-1">
                  <div>Amount</div>
                  <div>{saletickets?.summary?.final_package_cost}</div>
                </div>
                <div className="d-flex flex-row justify-content-between w-100 my-1">
                  <div>Payment Method</div>
                  <div>UPI</div>
                </div>
                <div className="d-flex flex-row justify-content-between w-100 my-1">
                  <div>From</div>
                  <div>{saletickets?.summary?.requester_name}</div>
                </div>
                <div className="d-flex flex-row justify-content-between w-100 my-1">
                  <div>To</div>
                  <div>
                    {localStorage.getItem("user_name")}-
                    {localStorage.getItem("account_role")}
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between w-100 my-1">
                  <div>Time</div>
                  <div>
                    {saletickets?.created_date} {saletickets?.created_time}
                  </div>
                </div>
              </div>
              <div className="my-2 w-100 custom-select small-font btn-bg rounded all-none p-2 h-10vh overflow-hidden relative-position">
                <img src={imageUrl} />
                <BsArrowsFullscreen
                  className="clr-red image-enlarge-icon"
                  onClick={handleImageModal}
                />
              </div>
              <div className="my-2 d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-2 align-items-center justify-content-between ">
                <div>Packagelist</div>
                <div className="clr-yellow" onClick={handleShowPackageList}>
                  VIEW
                </div>
              </div>
              <select
                name="reason"
                id="reason"
                value={saleTicket?.reason || ""}
                onChange={(e) => handelChange(e)}
                className="my-2 d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-2 align-items-center justify-content-between "
              >
                <option value="select">selecte...</option>
                {rejectionDropdown?.map((obj) => (
                  <option value={obj.reason} selected>
                    {obj.reason}
                  </option>
                ))}
              </select>
              <textarea className="my-2 d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none p-2 align-items-center justify-content-between ">
                Specify Other
              </textarea>
              <hr />
              <div className="d-flex justify-content-between medium-font mt-2 mb-2">
                <div>Total</div>
                <div>{saletickets?.summary?.total_packages_cost}</div>
              </div>
              <div className="w-100 d-flex flex-row">
                <button
                  type="submit"
                  className="submit-button mt-2 small-font p-2 rounded all-none w-50 mb-2 mx-2"
                  onClick={() => handleSuccessUpgradeTicket()}
                >
                  Accept
                </button>{" "}
                <button
                  type="submit"
                  className="deactivate-button mt-2 small-font p-2 rounded all-none w-50 mb-2 mx-2 clr-white"
                  onClick={() => handleTicketPackagePopupClose()}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </Modal.Header>
      </Modal>
      <ImagePopup
        showImagePopup={showImagePopup}
        setShowImagePopup={setShowImagePopup}
        imageUrl={saletickets?.summary?.transaction_img}
      />
      <PackageListViewPopup
        showPackageListPopup={showPackageListPopup}
        setShowPackageListPopup={setShowPackageListPopup}
        PackagesList={saletickets?.requested_packages}
      />
      <MatchSubmitPopup
        header={"You Are Successfully Upgraded Your Package Ticket"}
        state={showSuccesfulUpgradeTicket}
        setState={setShowSuccesfulUpgradeTicket}
      />
    </div>
  );
}

export default TicketUpgradePopup;
