import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";

function FancyResultOversCommPopup(props) {
  const { state, setState, selectedMatch, oversCommData } = props;
  const handleCancel = () => {
    setState(false);
  };

  const OVERS_COMM_DATA =
    oversCommData?.length > 0 &&
    oversCommData?.map((fancy) => ({
      header: `${fancy?.key} Over`,
      clientComm: fancy?.clientComm.toFixed(2),
      rfComm: fancy?.rfComm.toFixed(2),
    }));
    
  // const OVERS_COMM_DATA = [
  //   {
  //     header: "20 Overs",
  //     clientComm: 50000000,
  //     rfComm: 50000000,
  //   },
  // ];
  const MATCH_POSITION_HEADER_DATA = [
    { header: "Overs", field: "header" },
    { header: "Client Comm", field: "clientComm" },
    { header: "RF Comm", field: "rfComm" },
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
          Fancy Result P/L-{" "}
          <span className="yellow-clr">
            {selectedMatch?.team1} vs {selectedMatch?.team2}
          </span>
        </div>
        <IoCloseSharp onClick={() => handleCancel()} />
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <MatchTable
            data={OVERS_COMM_DATA}
            columns={MATCH_POSITION_HEADER_DATA}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FancyResultOversCommPopup;
