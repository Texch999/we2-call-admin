import { Col, Modal, Row } from "antd";
import { RiDownloadLine } from "react-icons/ri";
import { PiShareFatFill } from "react-icons/pi";

function MessagePopup(props) {
  const { messagePopup, setMessagePopup } = props;
  const handleCancel = () => {
    setMessagePopup(false);
  };
  return (
    <Modal
      open={messagePopup}
      className="message-modal"
      footer={null}
      onCancel={() => handleCancel()}
    >
      <div>
        <div className="font-18">Message</div>
        <hr className="hr-line mt-10" />
        <div className="font-12 mt-10">Where does it come from?</div>
        <div className="message-text-div font-10 mt-10 p-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus velsis.
        </div>
        <div className="flex-space-between font-10 p-8">
          <div>Tuesday 18:22pm</div> <div>Tuesday 18:22pm</div>
        </div>
        <div className="font-12 mt-10">Where can I get some?</div>
        <div className="message-text-div font-10 mt-10 p-8">
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <div className="message-text-div font-10 h-8vh">RRR</div>
            </Col>
            <Col span={10}>
              <div className="align-start flex-space-between flex-column font-10 h-8vh">
                <div>Prototype recording 02.pdf</div>
                <div>1 MB</div>
              </div>
            </Col>
            <Col span={4} className="flex-center">
              <div className="download-icon-div flex-center">
                <RiDownloadLine />
              </div>
            </Col>
            <Col span={4} className="flex-center">
              {" "}
              <div className="download-icon-div flex-center">
                <PiShareFatFill />
              </div>
            </Col>
          </Row>
        </div>
        <div className="flex-space-between font-10 p-8">
          <div>Tuesday 18:22pm</div> <div>Tuesday 18:22pm</div>
        </div>
      </div>
    </Modal>
  );
}

export default MessagePopup;
