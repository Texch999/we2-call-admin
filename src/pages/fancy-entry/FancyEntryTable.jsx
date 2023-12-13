import { MdEdit, MdDelete } from "react-icons/md";
import Table from "../home-page/Table";
import { useEffect, useState } from "react";
import SubmitPopup from "../popups/SubmitPopup";
import {
  DELETE_FANCY_ENTRY,
  GET_FANCY_ENTRY_DATA,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function FancyEntryTable(props) {
  const {
    seriesType,
    selectedMatch,
    matchAccountData,
    setSelectedMatchEntry,
    status,
    setStatus,
  } = props;

  let register_id = localStorage?.getItem("register_id");

  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [data, setData] = useState([]);
  const [matchEntryData, setMatchEntryData] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  const handleEditPopupOpen = (DATA) => {
    setMatchEntryData(DATA);
    setSelectedMatchEntry(DATA);
    setEditPopup(!editPopup);
  };
  const handleDeletePopupOpen = (matchId) => {
    setSelectedId(matchId);
    setDeletePopup(!deletePopup);
  };

  const getFancyEntryDetails = async () => {
    await call(GET_FANCY_ENTRY_DATA, {
      registered_match_id: matchAccountData?.registered_match_id,
      register_id,
    })
      .then((res) => {
        setData(res?.data?.data?.Items);
        // setStatus((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const deleteApi = async () => {
    await call(DELETE_FANCY_ENTRY, {
      fancy_entry_id: selectedId,
      register_id,
    })
      .then((res) => {
        setSelectedId("");
        setStatus((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFancyEntryDetails();
  }, [matchAccountData?.registered_match_id, status]);

  const FANCY_ENTRY_DATA =
    data &&
    data?.length > 0 &&
    data
      ?.filter((i) => i?.fancy_status !== "Y")
      .map((fancy) => {
        return {
          sNo:
            fancy?.old_s_no === fancy?.s_no
              ? fancy?.s_no
              : `${fancy?.s_no}/${fancy?.old_s_no}`,
          over: fancy?.over,
          rate: fancy?.rate,
          team: fancy?.team,
          runs: fancy?.runs,
          yesNo: (
            <span className={fancy?.yN === "Y" ? "clr-green" : "clr-pink"}>
              {fancy?.yN}
            </span>
          ),
          date: fancy?.date,
          time: fancy?.time,
          client: fancy?.client_name,
          amount: <span className="yellow-clr">{fancy?.amount}</span>,
          edit: fancy?.record_status === "active" && (
            <MdEdit
              className="edit-icon"
              onClick={() => handleEditPopupOpen(fancy)}
            />
          ),
          delete: fancy?.record_status === "active" && (
            <MdDelete
              className="edit-icon"
              onClick={() => handleDeletePopupOpen(fancy?.fancy_entry_id)}
            />
          ),
          recordStatus: fancy?.record_status,
        };
      });

  const FANCY_ENTRY_HEADING = [
    {
      header: "S.NO",
      field: "sNo",
    },
    {
      header: "OVER",
      field: "over",
    },
    {
      header: "RATE",
      field: "rate",
    },
    {
      header: "TEAM",
      field: "team",
    },
    {
      header: "RUNS",
      field: "runs",
    },
    {
      header: "Y/N",
      field: "yesNo",
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
      header: "CLIENT NAME",
      field: "client",
    },
    {
      header: "AMOUNT",
      field: "amount",
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
      <Table data={FANCY_ENTRY_DATA || []} columns={FANCY_ENTRY_HEADING} />
      <SubmitPopup
        state={editPopup}
        setState={setEditPopup}
        header={"Are You Sure You Want To Edit This Fancy Entry"}
        data={matchEntryData}
        setSelectedMatchEntry={setSelectedMatchEntry}
      />
      <SubmitPopup
        state={deletePopup}
        setState={setDeletePopup}
        header={"Are You Sure You Want To Delete This Fancy Entry"}
        deletedId={selectedId}
        deleteApi={deleteApi}
        setSelectedId={setSelectedId}
      />
    </div>
  );
}

export default FancyEntryTable;
