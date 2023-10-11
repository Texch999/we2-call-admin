import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";
function MatchShareModal(props) {
  const { mergedDataArray, matchShareModal, handleCloseMatchShareModal } =
    props;

  const MATCH_POSITION_TABLE_DATA =
    mergedDataArray?.length > 0 &&
    mergedDataArray?.map((client) => ({
      header: client?.client,
      // clintShare:
      //   client?.resultTeam > 0
      //     ? client?.clientShare?.toFixed(2) || 0
      //     : -client?.clientShare?.toFixed(2) || 0,
      clintShare:
        client?.resultTeam > 0
          ? client?.rfShare?.toFixed(2) || 0
          : -client?.rfShare?.toFixed(2) || 0,
      rfShare:
        client?.resultTeam > 0
          ? client?.ULShare?.toFixed(2) || 0
          : -client?.ULShare?.toFixed(2) || 0,
    }));
  // const MATCH_POSITION_TABLE_DATA = [
  //   {
  //     header: "Animesh",
  //     clientShare: 50000000,
  //     rfShare: 50000000,
  //   },
  //   {
  //     header: "Animesh",
  //     clientShare: 50000000,
  //     rfShare: 50000000,
  //   },
  //   {
  //     header: "Animesh",
  //     clientShare: 50000000,
  //     rfShare: 50000000,
  //   },
  // ];
  const MATCH_POSITION_HEADER_DATA = [
    { header: "Client Name", field: "header" },
    { header: "Client Share", field: "clientShare" },
    { header: "RF Share", field: "rfShare" },
  ];
  return (
    <Modal
      className="match-share-modal modal-lg"
      show={matchShareModal}
      onHide={handleCloseMatchShareModal}
      centered
    >
      <Modal.Header>
        <div className="large-font">Client Share</div>
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
