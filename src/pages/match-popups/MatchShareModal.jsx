import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";
function MatchShareModal(props) {
  const { matchShareModal, handleCloseMatchShareModal } = props;
  const MATCH_POSITION_TABLE_DATA = [
    {
      header: "Animesh",
      clientComm: 50000000,
      rfComm: 50000000,
      empty: "- -",
    },
    {
      header: "Animesh",
      clientComm: 50000000,
      rfComm: 50000000,
      empty: "- -",
    },
    {
      header: "Animesh",
      clientComm: 50000000,
      rfComm: 50000000,
      empty: "- -",
    },
  ];
  const MATCH_POSITION_HEADER_DATA = [
    { header: "Client Name", field: "header" },
    { header: "Client Comm", field: "clientComm" },
    { header: "RF Comm", field: "rfComm" },
    { header: "- -", field: "empty" },
  ];
  return (
    <Modal
      className="match-share-modal"
      show={matchShareModal}
      onHide={handleCloseMatchShareModal}
      centered
    >
      <Modal.Header>
        <div className="large-font">Client Comm</div>
        <IoCloseSharp onClick={handleCloseMatchShareModal} />
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

export default MatchShareModal;
