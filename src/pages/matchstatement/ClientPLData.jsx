import React, { useEffect, useState } from "react";
import MatchBetTable from "./MatchBetTable";
import FancyBetTable from "./FancyBetTable";
import { call } from "../../config/axios";
import { GET_MATCH_ENTRY_DETAILS } from "../../config/endpoints";

function ClientPLData({
  selectedClientID,
  selectedClientName,
  matchDetails,
  winTeam,
}) {
  const register_id = localStorage?.getItem("register_id");
  const creator_id = localStorage?.getItem("creator_id");
  const account_role = localStorage?.getItem("account_role");

  const [userMatchEntrys, setUserMatchEntrys] = useState([]);
  const [matchBetInputs, setMatchBetInputs] = useState(true);
  const [fancyBetInputs, setFancyBetInputs] = useState(false);

  const handleMatchBet = () => {
    setFancyBetInputs(false);
    setMatchBetInputs(true);
  };
  const handleFancyBet = () => {
    setFancyBetInputs(true);
    setMatchBetInputs(false);
  };

  const getMatchEntryDetails = async () => {
    await call(GET_MATCH_ENTRY_DETAILS, {
      registered_match_id: matchDetails?.matchId,
      register_id,
      client_id: selectedClientID,
    })
      .then((res) => {
        setUserMatchEntrys(res?.data?.data?.Items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMatchEntryDetails();
  }, [selectedClientID]);

  return (
    <div>
      <div className="medium-font mt-3 mb-2">
        Client Name : {selectedClientName}
      </div>
      <div className="w-50 d-flex justify-content-start mt-2 mb-3">
        <div className="w-25 d-flex justify-content-end">
          <div
            className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-1 ms-1 me-1 ${
              matchBetInputs ? "yellow-border" : ""
            }`}
            onClick={() => handleMatchBet()}
          >
            <div className="medium-font">Match Bet</div>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-end">
          <div
            className={`match-entry-btn w-100 d-flex align-items-center justify-content-around rounded p-1 ms-1 me-1 ${
              fancyBetInputs ? "yellow-border" : ""
            }`}
            onClick={() => handleFancyBet()}
          >
            <div className="medium-font">Fancy Bet</div>
          </div>
        </div>
      </div>
      {matchBetInputs && (
        <MatchBetTable userMatchEntrys={userMatchEntrys} winTeam={winTeam} />
      )}
      {fancyBetInputs && <FancyBetTable />}
    </div>
  );
}

export default ClientPLData;
