import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";

function FancyResultCommPopup(props) {
  const {
    fancyResultCommPopup,
    handleFancyResultCommPopupClose,
    selectedMatch,
    clientCommData,
  } = props;

  const CLIENT_COMM_DATA =
    clientCommData?.length > 0 &&
    clientCommData?.map((fancy) => ({
      header: fancy?.key,
      clientComm: fancy?.clientComm,
      rfComm: fancy?.rfComm,
    }));
  // const MATCH_POSITION_TABLE_DATA = [
  //   {
  //     header: "Jayanth",
  //     clientComm: 50000000,
  //     rfComm: 50000000,
  //   },
  // ];
  const MATCH_POSITION_HEADER_DATA = [
    { header: "Client Name", field: "header" },
    { header: "Client Comm", field: "clientComm" },
    { header: "RF Comm", field: "rfComm" },
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
          Fancy Result P/L-{" "}
          <span className="yellow-clr">
            {selectedMatch?.team1} vs {selectedMatch?.team2}
          </span>
        </div>
        <IoCloseSharp onClick={handleFancyResultCommPopupClose} />
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <MatchTable
            data={CLIENT_COMM_DATA || []}
            columns={MATCH_POSITION_HEADER_DATA}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FancyResultCommPopup;
