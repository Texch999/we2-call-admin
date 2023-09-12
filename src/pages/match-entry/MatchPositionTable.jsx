import { PiArrowCircleDownBold } from "react-icons/pi";
import MatchTable from "./MatchTable";
import { useState } from "react";
import MatchShareModal from "../match-popups/MatchShareModal";
import MatchCommModal from "../match-popups/MatchCommModal";
function MatchPositionTable(props) {
  const { matchPositionData, team1, team2, win } = props;
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
  // const data =
  //   matchPositionData?.length &&
  //   matchPositionData
  //     ?.filter((item) => item.record_status === "active")
  //     ?.map(({ client_name, teamObj, amount, ClientDetails }, index) => {
  //       let resultTeam =
  //         team1 === win ? parseFloat(teamObj[win]) : parseFloat(teamObj[team1]);
  //       let clientComm =
  //         resultTeam > 0
  //           ? parseFloat(
  //               (resultTeam * parseFloat(ClientDetails?.clientComm)) / 100
  //             )
  //           : 0;
  //       let refComm =
  //         resultTeam > 0
  //           ? parseFloat(
  //               (resultTeam * parseFloat(ClientDetails?.refComm)) / 100
  //             )
  //           : 0;
  //       let clientShare = parseFloat(
  //         ((resultTeam - parseFloat(clientComm)) *
  //           parseFloat(ClientDetails?.clientShare)) /
  //           100
  //       );
  //       let rfShare = parseFloat(
  //         ((resultTeam - parseFloat(refComm)) *
  //           parseFloat(ClientDetails?.refShare)) /
  //           100
  //       );
  //       let clientNet = parseFloat(clientComm) + parseFloat(clientShare);
  //       let rfNet = parseFloat(refComm) + parseFloat(rfShare);
  //       return {
  //         key: index,
  //         client: client_name,
  //         matchBet: parseInt(amount),
  //         clientComm: clientComm,
  //         rfComm: refComm,
  //         afterComm:
  //           resultTeam - (parseFloat(clientComm) + parseFloat(refComm)),
  //         clientShare: clientShare,
  //         rfShare: rfShare,
  //         afterShare:
  //           resultTeam - (parseFloat(clientShare) + parseFloat(rfShare)),
  //         clientNet: clientNet,
  //         rfNet: rfNet,
  //         masterProfitLoss:
  //           resultTeam - (parseFloat(clientNet) - parseFloat(refComm)),
  //       };
  //     });
  // let totalMatchResultData = {};
  // if (data?.length > 0) {
  //   totalMatchResultData = {
  //     matchBet: data.reduce((acc, obj) => acc + (obj.matchBet || 0), 0),
  //     clientComm: data.reduce((acc, obj) => acc + (obj.clientComm || 0), 0),
  //     rfComm: data.reduce((acc, obj) => acc + (obj.rfComm || 0), 0),
  //     afterComm: data.reduce((acc, obj) => acc + (obj.afterComm || 0), 0),
  //     clientShare: data.reduce((acc, obj) => acc + (obj.clientShare || 0), 0),
  //     rfShare: data.reduce((acc, obj) => acc + (obj.rfShare || 0), 0),
  //     afterShare: data.reduce((acc, obj) => acc + (obj.afterShare || 0), 0),
  //     clientNet: data.reduce((acc, obj) => acc + (obj.clientNet || 0), 0),
  //     rfNet: data.reduce((acc, obj) => acc + (obj.rfNet || 0), 0),
  //     masterProfitLoss: data.reduce(
  //       (acc, obj) => acc + (obj.masterProfitLoss || 0),
  //       0
  //     ),
  //   };
  // }
  const MATCH_POSITION_TABLE_DATA = [
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
            Match Position - <span className="yellow-clr">{team1}</span>
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
