import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import ShareButtons from "./ShareButtons";

function SharePopup({ showSharePopup, setShowSharePopup }) {
  const [showShareSection, setShowShareSection] = useState(false);
  const WEBSITE_URL = window.location.href;
  const referID = "123456789";
  const meetingID = "123456789";
  const referralData =
    "Refer ID:" +
    referID +
    ",Meeting ID:" +
    meetingID +
    ",WebsiteURL:" +
    WEBSITE_URL;
  const handleShowShareButton = () => {
    setShowShareSection((prev) => !prev);
  };
  const handleShareClose = () => {
    setShowSharePopup(false);
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(referralData);
    alert(`${referralData} Details Copied Succesfully...`);
  };

  return (
    <div>
      <Modal
        show={showSharePopup}
        className="match-declaration-modal z-index"
        centered
      >
        <Modal.Header className="d-flex justify-content-end">
          <IoCloseSharp onClick={() => handleShareClose()} />
        </Modal.Header>
        <Modal.Body>
          <div className="px-2 pb-2">
            <center>
              <h5 className="meetings-heading">Refer ID</h5>
            </center>
            <span className="mt-2 font-12">Refer/ShareID</span>
            <div className="font-12 d-flex align-items-center login-input p-2 clr-white">
              {referID}
            </div>
            <span className="mt-3 font-12">Meeting ID</span>
            <div className="font-12 d-flex align-items-center login-input p-2 clr-white">
              {meetingID}
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
            {showShareSection && <ShareButtons data={referralData} />}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SharePopup;
