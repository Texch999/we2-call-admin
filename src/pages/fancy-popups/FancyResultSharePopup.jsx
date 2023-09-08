import { Modal } from "react-bootstrap";
import { IoCloseSharp } from "react-icons/io5";
import MatchTable from "../match-entry/MatchTable";

function FancyResultSharePopup(props) {
  const { fancyResultSharePopup, handleFancyResultSharePopupClose } = props;
  const MATCH_POSITION_TABLE_DATA = [
    {
      header: "15 Overs",
      clientShare: 50000000,
      rfShare: 50000000,
      ulShare: 50000000,
    },
    {
      header: "10 Overs",
      clientShare: 50000000,
      rfShare: 50000000,
      ulShare: 50000000,
    },
    {
      header: "5 Overs",
      clientShare: 50000000,
      rfShare: 50000000,
      ulShare: 50000000,
    },
  ];
  const MATCH_POSITION_HEADER_DATA = [
    { header: "Over", field: "header" },
    { header: "Client Share", field: "clientShare" },
    { header: "RF Share", field: "rfShare" },
    { header: "UL Share", field: "ulShare" },
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
          Fancy Result P/L- <span className="yellow-clr">IND vs SL</span>
        </div>
        <IoCloseSharp onClick={handleFancyResultSharePopupClose} />
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

export default FancyResultSharePopup;
