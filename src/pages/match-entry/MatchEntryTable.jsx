import { MdEdit, MdDelete } from "react-icons/md";
import Table from "./../home-page/Table";
import { useState } from "react";
import SubmitPopup from "./../popups/SubmitPopup";

function MatchEntryTable() {
  const [editPopup, setEditPopup] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const handleEditPopupOpen = () => {
    setEditPopup(true);
  };
  const handleDeletePopupOpen = () => {
    setDeletePopup(true);
  };
  const MATCH_ENTRY_DATA = [
    {
      sNo: 1,
      rate: 1.5,
      client: "Srinivas2346",
      amount: 50000000.0,
      team: "India",
      playEat: "P",
      date: "31-07-2023",
      time: "12:48:00 PM",
      ind: 50000000.0,
      pak: 50000000.0,
      edit: (
        <MdEdit className="edit-icon" onClick={() => handleEditPopupOpen()} />
      ),
      delete: (
        <MdDelete
          className="edit-icon"
          onClick={() => handleDeletePopupOpen()}
        />
      ),
    },
    {
      sNo: 1,
      rate: 1.5,
      client: "Srinivas2346",
      amount: 50000000.0,
      team: "India",
      playEat: "P",
      date: "31-07-2023",
      time: "12:48:00 PM",
      ind: 50000000.0,
      pak: 50000000.0,
      edit: (
        <MdEdit className="edit-icon" onClick={() => handleEditPopupOpen()} />
      ),
      delete: (
        <MdDelete
          className="edit-icon"
          onClick={() => handleDeletePopupOpen()}
        />
      ),
    },
    {
      sNo: 1,
      rate: 1.5,
      client: "Srinivas2346",
      amount: 50000000.0,
      team: "India",
      playEat: "P",
      date: "31-07-2023",
      time: "12:48:00 PM",
      ind: 50000000.0,
      pak: 50000000.0,
      edit: (
        <MdEdit className="edit-icon" onClick={() => handleEditPopupOpen()} />
      ),
      delete: (
        <MdDelete
          className="edit-icon"
          onClick={() => handleDeletePopupOpen()}
        />
      ),
    },
  ];
  const MATCH_ENTRY_HEADING = [
    {
      header: "S.NO",
      field: "sNo",
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
      <Table data={MATCH_ENTRY_DATA} columns={MATCH_ENTRY_HEADING} />
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
