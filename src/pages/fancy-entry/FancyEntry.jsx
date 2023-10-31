import "./styles.css";
import MatchScroll from "../match-entry/MatchScroll";
import FancyResultClientTable from "./FancyResultClientTable";
import FancyResultOversTable from "./FancyResultOversTable";
import FancyEntries from "./FancyEntries";
import FancyEntryTable from "./FancyEntryTable";
import FancyRiskRunningTable from "./FancyRiskRunningTable";
import { useEffect, useState } from "react";
import {
  GET_ACCOUNT_MATCHES_DATA,
  GET_OFFLINE_ALL_MATCHES,
  RISK_RUNNING_SESSION,
  FANCY_RESULT_PROFIT_LOSS,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function FancyEntry() {
  const [allMatches, setAllMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState([]);
  const [afterDeclare, setAfterDeclare] = useState(false);
  const [matchAccountData, setMatchAccountData] = useState([]);
  const [matchOver, setMatchOver] = useState(1);
  const [matchInnings, setMatchInnings] = useState("1");
  const [riskRunningData, setRiskRunningData] = useState([]);
  const [profitLossData, setProfitLossData] = useState([]);
  const [status, setStatus] = useState(false);
  const [selectedMatchEntry, setSelectedMatchEntry] = useState("");

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

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
        setSelectedMatch((temp && temp[0]) || "");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAllMatches();
    };

    fetchData();
  }, [afterDeclare]);

  const getMatchInfo = async () => {
    await call(GET_ACCOUNT_MATCHES_DATA, {
      register_id,
      match_id: selectedMatch?.match_id,
    })
      .then(async (res) => {
        let temp =
          res?.data && res?.data?.data && res?.data?.data[0]
            ? res?.data?.data[0]
            : res?.data?.data;
        setMatchAccountData(temp);
        await getRiskRunningData(temp?.registered_match_id);
        await getFancyProfitLoss(temp?.registered_match_id);
      })
      .catch((err) => console.log(err));
  };

  const getRiskRunningData = async (ID) => {
    await call(RISK_RUNNING_SESSION, {
      register_id,
      registered_match_id: ID ? ID : matchAccountData?.registered_match_id,
      match_over: matchOver,
      innings: matchInnings === "2" ? "2" : "1",
    })
      .then((res) => {
        setRiskRunningData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const getFancyProfitLoss = async (ID) => {
    await call(FANCY_RESULT_PROFIT_LOSS, {
      register_id,
      registered_match_id: ID ? ID : matchAccountData?.registered_match_id,
    })
      .then((res) => {
        setProfitLossData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const fetchMatchInfo = async () => {
      if (selectedMatch) {
        await getMatchInfo();
      }
    };

    fetchMatchInfo();
  }, [selectedMatch, afterDeclare]);

  return (
    <div>
      <MatchScroll
        allMatches={allMatches}
        selectedMatch={selectedMatch}
        setSelectedMatch={setSelectedMatch}
      />
      <div className="d-flex flex-wrap">
        <FancyResultClientTable
          selectedMatch={selectedMatch}
          profitLossData={profitLossData?.clientsData}
        />
        <FancyResultOversTable
          selectedMatch={selectedMatch}
          profitLossData={profitLossData?.oversObject}
        />
        <FancyRiskRunningTable riskRunningData={riskRunningData} />
      </div>
      <FancyEntries
        selectedMatch={selectedMatch}
        matchAccountData={matchAccountData}
        selectedMatchEntry={selectedMatchEntry}
        setSelectedMatchEntry={setSelectedMatchEntry}
        setStatus={setStatus}
        setMatchOver={setMatchOver}
        getRiskRunningData={getRiskRunningData}
        getFancyProfitLoss={getFancyProfitLoss}
        profitLossData={profitLossData?.oversObject}
        setAfterDeclare={setAfterDeclare}
        setMatchInnings={setMatchInnings}
      />
      <FancyEntryTable
        selectedMatch={selectedMatch}
        seriesType={""}
        setStatus={setStatus}
        matchAccountData={matchAccountData}
        setSelectedMatchEntry={setSelectedMatchEntry}
        status={status}
      />
    </div>
  );
}

export default FancyEntry;
