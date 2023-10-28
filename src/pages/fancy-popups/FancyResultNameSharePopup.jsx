import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";

function FancyResultNameSharePopup(props) {
  const {
    fancyResultSharePopup,
    handleFancyResultSharePopupClose,
    selectedMatch,
    clientShareData,
  } = props;

  const CLIENT_SHARE_DATA =
    clientShareData?.length > 0 &&
    clientShareData?.map((fancy) => ({
      header: fancy?.key,
      clientShare: fancy?.clientShare,
      rfShare: fancy?.rfShare,
    }));

  // const MATCH_POSITION_TABLE_DATA = [
  //   {
  //     header: "Jayanth",
  //     clientShare: 50000000,
  //     rfShare: 50000000,
  //     // ulShare: 50000000,
  //   },
  // ];
  const MATCH_POSITION_HEADER_DATA = [
    { header: "Client Name", field: "header" },
    { header: "Client Share", field: "clientShare" },
    { header: "RF Share", field: "rfShare" },
    // { header: "UL Share", field: "ulShare" },
  ];
  return (
    <Modal
      className="match-share-modal modal-lg"
      show={fancyResultSharePopup}
      onHide={handleFancyResultSharePopupClose}
      centered
    >
      <Modal.Header>
        <div className="large-font">
          Fancy Result P/L-{" "}
          <span className="yellow-clr">
            {selectedMatch?.team1} vs {selectedMatch?.team2}
          </span>
        </div>
        <IoCloseSharp onClick={handleFancyResultSharePopupClose} />
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <MatchTable
            data={CLIENT_SHARE_DATA || []}
            columns={MATCH_POSITION_HEADER_DATA}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FancyResultNameSharePopup;
