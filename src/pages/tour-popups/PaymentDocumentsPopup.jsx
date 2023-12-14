import { RiDownloadLine } from "react-icons/ri";
import { PiShareFatFill } from "react-icons/pi";
import { Modal } from "react-bootstrap";

function PaymentDocumentsPopup(props) {
  const { messagePopup, setMessagePopup } = props;
  const handleCancel = () => {
    setMessagePopup(false);
  };
  return (
    <Modal
      show={messagePopup}
      className="add-user-modal "
      footer={null}
      centered
      onCancel={() => handleCancel()}
    >
      <div className="p-3">
        <div className="font-14">Message</div>
        <hr className="hr-line mt-1" />
        <div className="font-12 mt-1">Where does it come from?</div>
        <div className="message-text-div medium-font mt-2 p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus velsis.
        </div>
        <div className="d-flex justify-content-between medium-font p-2">
          <div>Tuesday 18:22pm</div> <div>Tuesday 18:22pm</div>
        </div>
        <div className="font-12 mt-10">Where can I get some?</div>
        <div className="message-text-div medium-font mt-1 p-2">
          <div className="row">
            <div className="col-3">
              <div className="message-text-div medium-font h-8vh">RRR</div>
            </div>
            <dic className="col-5">
              <div className="align-start d-flex justify-content-between flex-column medium-font h-8vh">
                <div>Prototype recording 02.pdf</div>
                <div>1 MB</div>
              </div>
            </dic>
            <div className="col-2 flex-center">
              <div className="download-icon-div flex-center">
                <RiDownloadLine />
              </div>
            </div>
            <div className="col-2 flex-center">
              {" "}
              <div className="download-icon-div flex-center">
                <PiShareFatFill />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between medium-font p-2">
          <div>Tuesday 18:22pm</div> <div>Tuesday 18:22pm</div>
        </div>
      </div>
    </Modal>
  );
}

export default PaymentDocumentsPopup;