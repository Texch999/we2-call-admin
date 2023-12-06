import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import { Images } from "./../../images/index";
import { useState } from "react";
import ShareButtons from "./ShareButtons";

function SharePopup({ showSharePopup, setShowSharePopup }) {
  const [textToCopy, setTextToCopy] = useState("This is the text to copy!");
  const handleShareClose = () => {
    setShowSharePopup(false);
  };
  // const handleCopyButton = () => {
  //   setShowSharePopup(false);
  // };
  const [showShareSection, setShowShareSection] = useState(false);
  const [refId, setRefid] = useState("123456789");
  const [meetId, setMeetId] = useState("123456789");
  const handleShowShareButton = (event) => {
    setShowShareSection((prev) => !prev);
    setRefid(event.target.value);
    setMeetId(event.target.value);
  };
  const url = window.location.href;
  const [value, setValue] = useState(url);
  const [copied, setCopied] = useState(false);
  const otherChange = (e) => {
    setValue(e.target.value, { copied: false });
    setRefid(e.target.value);
    setMeetId(e.target.value);
  };

  // const handleCopyButton = ({ target: { innerHTML } }) => {
  //   console.log(`Clicked on "${innerHTML}"!`); // eslint-disable-line
  //   setShowShareSection(false);
  // };
  // const otherCopy = () => setCopied(true);

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
          <center className="px-4">
            <img src={Images.header_logo} alt="Question_Mark" />
          </center>
          <span className="mt-2 font-12">Refer/ShareID</span>
          <div className="d-flex align-items-center login-input p-1 clr-white">
            {refId}
          </div>
          <span className="mt-2 font-12">Meeting Head ID</span>
          <div className="d-flex align-items-center login-input p-1 mb-2 clr-white">
            {meetId}
          </div>{" "}
          <div className="d-flex justify-content-center">
            <textarea
              className="font-9 w-75 login-input clr-white font-10 text-center all-none"
              value={value}
              onChange={otherChange}
              rows={2}
              cols={10}
            />
          </div>
          <div className="row d-flex justify-content-between mt-3">
            <div
              className="col rounded yellow-btn p-1 mx-1 text-center"
              onClick={() => {
                navigator.clipboard.writeText(refId);
                navigator.clipboard.writeText(meetId);
              }}
            >
              Copy
            </div>
            <div
              className="col rounded yellow-btn p-1 mx-1 text-center"
              onClick={() => handleShowShareButton()}
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
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SharePopup;
