import { MdEdit, MdDelete } from "react-icons/md";
import Table from "./../home-page/Table";
import { useEffect, useState } from "react";
import SubmitPopup from "./../popups/SubmitPopup";
import { call } from "../../config/axios";
import {
  DELETE_MATCH_ENTRY,
  GET_MATCH_ENTRY_DETAILS,
} from "../../config/endpoints";

function MatchEntryTable(props) {
  const {
    team1,
    team2,
    seriesType,
    selectedMatch,
    matchAccountData,
    setSelectedMatchEntry,
    status,
    setStatus,
  } = props;

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [data, setData] = useState([]);
  const [matchEntryData, setMatchEntryData] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  const handleOpenEditPopup = (DATA) => {
    setMatchEntryData(DATA);
    setEditPopup(!editPopup);
  };
  const handleOpenDeletePopup = (matchId) => {
    setSelectedId(matchId);
    setDeletePopup(!deletePopup);
  };

  const deleteApi = async () => {
    await call(DELETE_MATCH_ENTRY, {
      match_entry_id: selectedId,
      register_id,
    })
      .then((res) => {
        setSelectedId("");
        setStatus((prev) => !prev);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const getMatchEntryDetails = async () => {
    await call(GET_MATCH_ENTRY_DETAILS, {
      registered_match_id: matchAccountData?.registered_match_id,
      register_id,
    })
      .then((res) => {
        setData(res?.data?.data?.Items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMatchEntryDetails();
  }, [matchAccountData?.registered_match_id, status]);

  const MATCH_ENTRY_DATA =
    data?.length >= 0 &&
    data?.map((match) => ({
      s_no: (
        <div>
          {match?.old_s_no === match?.s_no
            ? match?.s_no
            : `${match?.s_no}/${match?.old_s_no}`}
        </div>
      ),
      rate: match.rate,
      client: match.client_name,
      amount: <div className="yellow-clr">{match.amount}</div>,
      team: match.team,
      playEat: (
        <div
          className={match?.pe.toUpperCase() === "P" ? "clr-green" : "clr-pink"}
        >
          {match?.pe.toUpperCase()}
        </div>
      ),
      date: match.date,
      time: match.time,
      teamOne: (
        <div
          className={
            match.teamObj[selectedMatch.team1] >= 0 ? "clr-green" : "clr-red"
          }
        >
          {match.teamObj[selectedMatch.team1]}
        </div>
      ),
      teamTwo: (
        <div
          className={
            match.teamObj[selectedMatch.team2] >= 0 ? "clr-green" : "clr-red"
          }
        >
          {match.teamObj[selectedMatch.team2]}
        </div>
      ),
      edit: (
        <div>
          {match?.record_status === "active" && (
            <MdEdit
              className="cursor-pointer edit-icon"
              onClick={() => handleOpenEditPopup(match)}
            />
          )}
        </div>
      ),
      delete: (
        <div>
          {match?.record_status === "active" && (
            <MdDelete
              className="cursor-pointer edit-icon"
              onClick={() => handleOpenDeletePopup(match?.match_entry_id)}
            />
          )}
        </div>
      ),
      recordStatus: match?.record_status,
    }));

  const MATCH_ENTRY_HEADING = [
    {
      header: "S.NO",
      field: "s_no",
    },
    {
      header: "RATE",
      field: "rate",
    },
    {
      header: "CLIENT NAME",
      field: "client",
    },
    {
      header: "AMOUNT",
      field: "amount",
    },
    {
      header: "TEAM",
      field: "team",
    },
    {
      header: "P/E",
      field: "playEat",
    },
    {
      header: "DATE",
      field: "date",
    },
    {
      header: "TIME",
      field: "time",
    },
    {
      header: <div>{team1}</div>,
      field: "teamOne",
    },
    {
      header: <div>{team2}</div>,
      field: "teamTwo",
    },
    {
      header: "",
      field: "edit",
    },
    {
      header: "",
      field: "delete",
    },
  ];
  return (
    <div className="p-3">
      <Table data={MATCH_ENTRY_DATA || []} columns={MATCH_ENTRY_HEADING} />
      <SubmitPopup
        state={editPopup}
        setState={setEditPopup}
        header={"Are You Sure You Want To Edit This Match Entry"}
        data={matchEntryData}
        setSelectedMatchEntry={setSelectedMatchEntry}
      />
      <SubmitPopup
        state={deletePopup}
        setState={setDeletePopup}
        header={"Are You Sure You Want To Delete This Match Entry"}
        deletedId={selectedId}
        deleteApi={deleteApi}
        setSelectedId={setSelectedId}
      />
    </div>
  );
}

export default MatchEntryTable;
