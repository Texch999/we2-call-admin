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

  const data =
    matchPositionData?.length > 0 &&
    matchPositionData
      ?.filter((item) => item?.record_status === "active")
      .map(
        ({ client_name, teamObj, amount, team, ClientDetails, pe }, index) => {
          let resultTeam =
            team1 === win
              ? parseFloat(teamObj[win])
              : parseFloat(teamObj[team1]);
          return {
            key: index,
            resultTeam: resultTeam,
            client: client_name,
            matchBet: parseFloat(amount),
            clientCommConst: ClientDetails?.clientComm,
            ulCommConst: ClientDetails?.ulComm,
            rfCommConst: ClientDetails?.refComm,
            clientShareConst: ClientDetails?.clientShare,
            ulShareConst: ClientDetails?.ulShare,
            rfShareConst: ClientDetails?.refShare,
          };
        }
      );

  const mergedData =
    data?.length > 0 &&
    data?.reduce((accumulator, item) => {
      const clientName = item?.client;
      if (!accumulator[clientName]) {
        accumulator[clientName] = { ...item };
      } else {
        accumulator[clientName].matchBet += item.matchBet;
        accumulator[clientName].resultTeam += item.resultTeam;
      }
      return accumulator;
    }, {});

  const mergedDataArray = Object.values(mergedData);
  mergedDataArray?.map((item) => {
    item.clientComm =
      item.resultTeam > 0
        ? parseFloat(
            (-1 * (item.resultTeam * parseFloat(item?.clientCommConst))) / 100
          )
        : 0;
    item.rfComm =
      item.resultTeam > 0
        ? parseFloat(
            (-1 * (item.resultTeam * parseFloat(item?.rfShareConst))) / 100
          )
        : 0;
    item.afterComm =
      item.resultTeam + parseFloat(item.clientComm) + parseFloat(item.rfComm) ||
      0;
    item.clientShare =
      parseFloat(
        (-1 *
          ((item.resultTeam + parseFloat(item.clientComm)) *
            parseFloat(item?.clientShareConst))) /
          100
      ) || 0;
    item.rfShare =
      parseFloat(
        (-1 *
          ((item.resultTeam + parseFloat(item.rfComm)) *
            parseFloat(item?.rfShareConst))) /
          100
      ) || 0;
    item.afterShare =
      item.resultTeam +
        (parseFloat(item.clientShare) + parseFloat(item.rfShare)) || 0;
    item.clientNet =
      item.resultTeam +
        (parseFloat(item.clientComm) + parseFloat(item.clientShare)) || 0;
    item.rfNet = parseFloat(item.rfComm) + parseFloat(item.rfShare) || 0;
    item.ULShare =
      parseFloat(
        (-1 * ((item.clientNet + item.rfNet) * parseFloat(item.ulShareConst))) /
          100
      ) || 0;
    item.ulNet = parseFloat(item.ULShare) || 0;
    item.masterProfitLoss =
      item?.resultTeam +
        (parseFloat(item.rfNet) +
          parseFloat(item.clientNet) +
          parseFloat(item.ulNet)) || 0;
    item.urPosition =
      item.resultTeam +
        (item.clientComm + item.clientShare + item.rfNet + item.ulNet) || 0;
    item.ulComm =
      item?.resultTeam > 0
        ? parseFloat(
            (-1 *
              ((item.resultTeam + item.clientNet + item.rfNet) *
                parseFloat(item.ulCommConst))) /
              100
          )
        : 0;
  });

  const MATCH_POSITION_TABLE_DATA =
    mergedDataArray?.length > 0 &&
    mergedDataArray?.map((client) => ({
      header: client?.client,
      grossPL: client?.resultTeam?.toFixed(2),
      cPosition: client?.clientNet?.toFixed(2),
      rfPosition: client?.rfNet?.toFixed(2),
      ursPosition: client?.urPosition?.toFixed(2),
    }));

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
            className="cursor-pointer share-bg rounded-pill d-flex align-items-center justify-content-around p-1"
            onClick={() => handleOpenMatchCommModal()}
          >
            <div className="medium-font">Comm</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="cursor-pointer share-bg rounded-pill d-flex align-items-center justify-content-around p-1"
            onClick={() => handleOpenMatchShareModal()}
          >
            <div className="medium-font">Share</div>
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
        <MatchCommModal
          mergedDataArray={mergedDataArray}
          matchCommModal={matchCommModal}
          handleCloseMatchCommModal={handleCloseMatchCommModal}
        />
        <MatchShareModal
          mergedDataArray={mergedDataArray}
          matchShareModal={matchShareModal}
          handleCloseMatchShareModal={handleCloseMatchShareModal}
        />
      </div>
    </div>
  );
}

export default MatchPositionTable;
