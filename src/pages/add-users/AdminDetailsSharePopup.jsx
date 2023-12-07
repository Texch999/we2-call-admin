import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import ShareButtons from "./../home-page/ShareButtons";

function AdminDetailsSharePopup({
  adminDetailsPopup,
  setAdminDetailsPopup,
  adminDetailsData,
}) {
  const [showShareSection, setShowShareSection] = useState(false);
  const WEBSITE_URL = window.location.href;
  const adminData =
    "User Name:" +
    adminDetailsData?.user_name +
    ",Role:" +
    adminDetailsData?.type +
    ",Password:" +
    adminDetailsData?.password;
  const handleShowShareButton = () => {
    setShowShareSection((prev) => !prev);
  };
  const handleShareClose = () => {
    setAdminDetailsPopup(false);
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(adminData);
    alert(`${adminData} Details Copied Succesfully...`);
  };

  return (
    <div>
      <Modal
        show={adminDetailsPopup}
        className="match-declaration-modal z-index"
        centered
      >
        <Modal.Header className="d-flex justify-content-end">
          <IoCloseSharp onClick={() => handleShareClose()} />
        </Modal.Header>
        <Modal.Body>
          <div className="px-2 pb-2">
            <center>
              <h5 className="meetings-heading">Admin Details</h5>
            </center>
            <span className="mt-2 font-12">User Name</span>
            <div className="font-12 d-flex align-items-center login-input p-2 clr-white">
              {adminDetailsData?.user_name}
            </div>
            <span className="mt-3 font-12">Role</span>
            <div className="font-12 d-flex align-items-center login-input p-2 clr-white">
              {adminDetailsData?.type}
            </div>
            <span className="mt-3 font-12">Password</span>
            <div className="font-12 d-flex align-items-center login-input p-2 clr-white">
              {adminDetailsData?.password}
            </div>
            <span className="mt-3 font-12">Website URL</span>
            <div className="font-12 d-flex align-items-center login-input p-2 clr-white">
              {WEBSITE_URL}
            </div>
            <div className="font-12 d-flex justify-content-between mt-2">
              <div
                className="w-48 h-38px rounded yellow-btn d-flex align-items-center justify-content-center"
                onClick={() => handleCopyText()}
              >
                Copy
              </div>
              <div
                className="w-48 h-38px rounded yellow-btn d-flex align-items-center justify-content-center"
                onClick={(e) => handleShowShareButton(e)}
              >
                Share
              </div>
            </div>
            {showShareSection && <ShareButtons data={adminData} />}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdminDetailsSharePopup;
