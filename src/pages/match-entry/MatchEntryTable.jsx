import { MdEdit, MdDelete } from "react-icons/md";
import Table from "./../home-page/Table";
import { useEffect, useState } from "react";
import SubmitPopup from "./../popups/SubmitPopup";
import { call } from "../../config/axios";
import { GET_MATCH_POSITION_DATA } from "../../config/endpoints";

function MatchEntryTable(props) {
  const { matchPositionData } = props;

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const registered_match_id = "reg-1694409417188";

  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [matchEntryData, setMatchEntryData] = useState([]);

  const handleEditPopupOpen = () => {
    setEditPopup(true);
  };
  const handleDeletePopupOpen = () => {
    setDeletePopup(true);
  };

  const getMatchEntryData = async () => {
    await call(GET_MATCH_POSITION_DATA, {
      registered_match_id,
      register_id,
    })
      .then((res) => setMatchEntryData(res?.data?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMatchEntryData();
  }, []);

  const MATCH_ENTRY_DATA =
    matchEntryData?.length &&
    matchEntryData?.map((match) => ({
      s_no: match.s_no,
      rate: match.rate,
      client: match.client_name,
      amount: match.amount,
      team: match.team,
      playEat: match.pe,
      date: match.date,
      time: match.time,
      ind: match.teamObj.AUS,
      pak: match.teamObj.IND,
      edit: (
        <MdEdit className="edit-icon" onClick={() => handleEditPopupOpen()} />
      ),
      delete: (
        <MdDelete
          className="edit-icon"
          onClick={() => handleDeletePopupOpen()}
        />
      ),
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
      header: "IND",
      field: "ind",
    },
    {
      header: "PAK",
      field: "pak",
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
      />
      <SubmitPopup
        state={deletePopup}
        setState={setDeletePopup}
        header={"Are You Sure You Want To Delete This Match Entry"}
      />
    </div>
  );
}

export default MatchEntryTable;
