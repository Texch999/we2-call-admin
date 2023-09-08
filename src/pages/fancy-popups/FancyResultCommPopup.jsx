import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";

function FancyResultCommPopup(props) {
  const { fancyResultCommPopup, handleFancyResultCommPopupClose } = props;
  const MATCH_POSITION_TABLE_DATA = [
    {
      header: "Jayanth",
      clientComm: 50000000,
      rfComm: 50000000,
      ulComm: "- - ",
    },
    {
      header: "Jayanth",
      clientComm: 50000000,
      rfComm: 50000000,
      ulComm: "- - ",
    },
    {
      header: "Jayanth",
      clientComm: 50000000,
      rfComm: 50000000,
      ulComm: "- - ",
    },
  ];
  const MATCH_POSITION_HEADER_DATA = [
    { header: "Client Name", field: "header" },
    { header: "Client Comm", field: "clientComm" },
    { header: "RF Comm", field: "rfComm" },
    { header: "- -", field: "ulComm" },
  ];
  return (
    <Modal
      className="match-share-modal modal-lg"
      show={fancyResultCommPopup}
      onHide={handleFancyResultCommPopupClose}
      centered
    >
      <Modal.Header>
        <div className="large-font">
          Fancy Result P/L- <span className="yellow-clr">IND vs SL</span>
        </div>
        <IoCloseSharp onClick={handleFancyResultCommPopupClose} />
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <MatchTable
            data={MATCH_POSITION_TABLE_DATA}
            columns={MATCH_POSITION_HEADER_DATA}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FancyResultCommPopup;
