import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";
import { useState } from "react";
import ShareButtons from "./ShareButtons";

function SharePopup({ showSharePopup, setShowSharePopup }) {
  const handleShareClose = () => {
    setShowSharePopup(false);
  };
  const [showShareSection, setShowShareSection] = useState(false);
  const [refId, setRefid] = useState("123456789");
  const [meetId, setMeetId] = useState("123456789");
  const handleShowShareButton = (event) => {
    setShowShareSection((prev) => !prev);
  };
  const url = window.location.href;
  const [value, setValue] = useState(url);
  const [copied, setCopied] = useState(false);
  const otherChange = (e) => {
    setValue(e.target.value, { copied: false });
    setRefid(e.target.value);
    setMeetId(e.target.value);
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
              {refId}
            </div>
            <span className="mt-3 font-12">Meeting Head ID</span>
            <div className="font-12 d-flex align-items-center login-input p-2 clr-white">
              {meetId}
            </div>{" "}
            <span className="mt-3 font-12">Website URL</span>
            <textarea
              className="font-12 w-100 p-2 login-input clr-white all-none"
              value={value}
              onChange={(e) => otherChange(e)}
              rows={2}
              cols={10}
            />
            <div className="font-12 d-flex justify-content-between mt-2">
              <div
                className="w-48 h-38px rounded yellow-btn d-flex align-items-center justify-content-center"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "RefferId:" + refId + ",MeetingID:" + meetId
                  );
                }}
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
            {copied ? (
              <span className="text-center clr-white font-12 w-100">
                Copied!!
              </span>
            ) : null}
            {showShareSection && (
              <>
                <ShareButtons refId={refId} meetId={meetId} />
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SharePopup;
