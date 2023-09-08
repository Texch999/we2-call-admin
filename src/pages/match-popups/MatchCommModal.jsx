import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";

function MatchCommModal(props) {
  const { matchCommModal, handleCloseMatchCommModal } = props;
  const MATCH_POSITION_TABLE_DATA = [
    {
      header: "Animesh",
      clientComm: 50000000,
      rfComm: 50000000,
      ulComm: "- -",
    },
    {
      header: "Animesh",
      clientComm: 50000000,
      rfComm: 50000000,
      ulComm: "- -",
    },
    {
      header: "Animesh",
      clientComm: 50000000,
      rfComm: 50000000,
      ulComm: "- -",
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
      show={matchCommModal}
      onHide={handleCloseMatchCommModal}
      centered
    >
      <Modal.Header>
        <div className="large-font">Client Comm</div>
        <IoCloseSharp onClick={handleCloseMatchCommModal} />
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

export default MatchCommModal;
