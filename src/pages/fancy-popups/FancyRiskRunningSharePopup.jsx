import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";

function FancyRiskRunningSharePopup(props) {
  const { state, setState, data } = props;
  const handleCancel = () => {
    setState(false);
  };

  const OVERS_COMM_DATA =
    data?.length > 0 &&
    data?.map((fancy) => ({
      header: `${fancy?.key} Runs`,
      clientShare: fancy?.clientShare,
      rfShare: fancy?.rfShare,
    }));

  // const OVERS_COMM_DATA = [
  //   {
  //     header: "100",
  //     clientShare: 50000000,
  //     rfShare: 50000000,
  //   },
  // ];

  const MATCH_POSITION_HEADER_DATA = [
    { header: "Runs", field: "header" },
    { header: "Client Share", field: "clientShare" },
    { header: "RF Share", field: "rfShare" },
  ];
  return (
    <Modal
      className="match-share-modal modal-lg"
      show={state}
      onHide={() => handleCancel()}
      centered
    >
      <Modal.Header>
        <div className="large-font">Risk Running Position P/L</div>
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

export default FancyRiskRunningSharePopup;
