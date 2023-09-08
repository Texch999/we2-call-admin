import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";

function FancyResultOversCommPopup(props) {
  const { state, setState } = props;
  const handleCancel = () => {
    setState(false);
  };
  const MATCH_POSITION_TABLE_DATA = [
    {
      header: "20 Overs",
      clientComm: 50000000,
      rfComm: 50000000,
      ulComm: "- - ",
    },
    {
      header: "10 Overs",
      clientComm: 50000000,
      rfComm: 50000000,
      ulComm: "- - ",
    },
    {
      header: "5 Overs",
      clientComm: 50000000,
      rfComm: 50000000,
      ulComm: "- - ",
    },
  ];
  const MATCH_POSITION_HEADER_DATA = [
    { header: "Overs", field: "header" },
    { header: "Client Comm", field: "clientComm" },
    { header: "RF Comm", field: "rfComm" },
    { header: "- -", field: "ulComm" },
  ];
  return (
    <Modal
      className="match-share-modal modal-lg"
      show={state}
      onHide={() => handleCancel()}
      centered
    >
      <Modal.Header>
        <div className="large-font">
          Fancy Result P/L- <span className="yellow-clr">IND vs SL</span>
        </div>
        <IoCloseSharp onClick={() => handleCancel()} />
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

export default FancyResultOversCommPopup;
