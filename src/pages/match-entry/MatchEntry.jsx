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
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [allMatches, setAllMatches] = useState([]);
  const [companyMatches, setCompanyMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState([]);
  const [matchPositionData, setMatchPositionData] = useState([]);
  const [matchAccountData, setMatchAccountData] = useState([]);
  const [selectedMatchEntry, setSelectedMatchEntry] = useState("");
  const [status, setStatus] = useState(false);
  const [afterDeclare, setAfterDeclare] = useState(false);

  const getAllMatches = async () => {
    await call(GET_OFFLINE_ALL_MATCHES, {
      register_id,
      account_role,
    })
      .then((res) => {
        let result = res?.data?.data;
        const temp = result?.liveMatches?.filter(
          (i) => i.match_declared !== "Y"
        );
        setAllMatches(temp);
        setStatus((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const getCompanyMatches = async () => {
    await call(GET_OFFLINE_ALL_MATCHES, {
      register_id: "company",
      account_role,
    })
      .then((res) => {
        let result = res?.data?.data;
        const temp = result?.liveMatches?.filter(
          (i) => i.match_declared !== "Y"
        );
        setCompanyMatches(temp);
        setStatus((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const totalMatches = [...allMatches, ...companyMatches];
  console.log(allMatches, "admin_MATCHES");
  console.log(companyMatches, "COMpany_MATCHES");

  const getMatchPositionData = async (ID) => {
    await call(GET_MATCH_POSITION_DATA, {
      registered_match_id: ID ? ID : matchPositionData?.registered_match_id,
      register_id,
    })
      .then((res) => {
        setMatchPositionData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const getMatchInfo = async () => {
    await call(GET_ACCOUNT_MATCHES_DATA, {
      register_id,
      match_id: selectedMatch?.match_id,
    })
      .then(async (res) => {
        let temp =
          res?.data && res.data.data && res.data.data[0]
            ? res.data.data[0]
            : res.data.data;
        setMatchAccountData(temp);
        await getMatchPositionData(temp?.registered_match_id);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMatchPositionData();
    getAllMatches();
    getCompanyMatches();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getAllMatches();
  //     getCompanyMatches();
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchMatchInfo = async () => {
      if (selectedMatch) {
        await getMatchInfo();
      }
    };
    fetchMatchInfo();
  }, [selectedMatch?.match_id, afterDeclare]);

  return (
    <div>
      <MatchScroll
        allMatches={totalMatches}
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
      <MatchEntries
        setStatus={setStatus}
        selectedMatch={selectedMatch}
        matchAccountData={matchAccountData}
        selectedMatchEntry={selectedMatchEntry}
        setAfterDeclare={setAfterDeclare}
      />
      <MatchEntryTable
        team1={selectedMatch?.team1}
        team2={selectedMatch?.team2}
        selectedMatch={selectedMatch}
        seriesType={""}
        matchAccountData={matchAccountData}
        setSelectedMatchEntry={setSelectedMatchEntry}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
}

export default MatchEntry;
