import { PiArrowCircleDownBold } from "react-icons/pi";
import MatchTable from "./MatchTable";
import { useState } from "react";
import MatchShareModal from "../match-popups/MatchShareModal";
import MatchCommModal from "../match-popups/MatchCommModal";
function MatchPositionTable(props) {
  const { teamName } = props;
  const [matchShareModal, setMatchShareModal] = useState(false);
  const [matchCommModal, setMatchCommModal] = useState(false);
  const handleOpenMatchShareModal = () => {
    setMatchShareModal(true);
  };
  const handleCloseMatchShareModal = () => {
    setMatchShareModal(false);
  };
  const handleOpenMatchCommModal = () => {
    setMatchCommModal(true);
  };
  const handleCloseMatchCommModal = () => {
    setMatchCommModal(false);
  };
  const MATCH_POSITION_TABLE_DATA = [
    {
      header: "Animesh",
      grossPL: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      header: "Animesh",
      grossPL: 50000000,
      cPosition: -50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      header: "Animesh",
      grossPL: 50000000,
      cPosition: -50000000,
      rfPosition: -50000000,
      ursPosition: 50000000,
    },
    {
      header: "Animesh",
      grossPL: 50000000,
      cPosition: -50000000,
      rfPosition: -50000000,
      ursPosition: 50000000,
    },
    {
      header: "Animesh",
      grossPL: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
  ];
  const MATCH_POSITION_HEADER_DATA = [
    { header: "CLIENT NAME", field: "header" },
    { header: "GROSS PL", field: "grossPL" },
    { header: "C POSITION", field: "cPosition" },
    { header: "RF POSITION", field: "rfPosition" },
    { header: "URS POSITION", field: "ursPosition" },
  ];
  return (
    <div className="w-50 p-3">
      <div className="row d-flex align-items-center match-position-bg p-2 rounded m-1">
        <div className="col-sm-4 col-lg-6">
          <div className="medium-font">
            Match Position - <span className="yellow-clr">{teamName}</span>
          </div>
        </div>
        <div className="col">
          <div
            className="share-bg rounded-pill d-flex align-items-center justify-content-around p-1"
            onClick={() => handleOpenMatchShareModal()}
          >
            <div className="medium-font">Share</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="share-bg rounded-pill d-flex align-items-center justify-content-around p-1"
            onClick={() => handleOpenMatchCommModal()}
          >
            <div className="medium-font">Comm</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <MatchTable
          data={MATCH_POSITION_TABLE_DATA}
          columns={MATCH_POSITION_HEADER_DATA}
        />
      </div>
      <div>
        <MatchShareModal
          matchShareModal={matchShareModal}
          handleCloseMatchShareModal={handleCloseMatchShareModal}
        />
        <MatchCommModal
          matchCommModal={matchCommModal}
          handleCloseMatchCommModal={handleCloseMatchCommModal}
        />
      </div>
    </div>
  );
}

export default MatchPositionTable;
