import MatchScroll from "./MatchScroll";
import MatchPositionTable from "./MatchPositionTable";
import MatchEntries from "./MatchEntries";
import MatchEntryTable from "./MatchEntryTable";
import { useEffect, useState } from "react";
import {
  GET_ACCOUNT_MATCHES_DATA,
  GET_MATCH_POSITION_DATA,
  GET_OFFLINE_ALL_MATCHES,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function MatchEntry() {
  const [allMatches, setAllMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState([]);
  const [matchPositionData, setMatchPositionData] = useState([]);

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const getAllMatches = async () => {
    await call(GET_OFFLINE_ALL_MATCHES, { register_id, account_role })
      .then((res) => {
        let result = res?.data?.data;
        setAllMatches(result.liveMatches);
        setSelectedMatch(
          result && result?.liveMatches && result?.liveMatches[0]
        );
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const fetchData = async () => {
      await getAllMatches();
    };
    fetchData();
  }, []);

  const getMatchPositionData = async (ID) => {
    await call(GET_MATCH_POSITION_DATA, {
      registered_match_id: ID ? ID : matchPositionData?.registered_match_id,
      register_id,
    })
      .then((res) => setMatchPositionData(res?.data?.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getMatchPositionData();
  }, []);

  return (
    <div>
      <MatchScroll
        allMatches={allMatches}
        selectedMatch={selectedMatch}
        setSelectedMatch={setSelectedMatch}
      />
      <div className="d-flex flex-wrap">
        <MatchPositionTable
          team1={selectedMatch?.team1}
          win={selectedMatch?.team1}
          matchPositionData={matchPositionData}
        />
        <MatchPositionTable
          team1={selectedMatch?.team2}
          team2={selectedMatch?.team2}
          matchPositionData={matchPositionData}
        />
      </div>
      <MatchEntries />
      <MatchEntryTable matchPositionData={matchPositionData} />
    </div>
  );
}

export default MatchEntry;
