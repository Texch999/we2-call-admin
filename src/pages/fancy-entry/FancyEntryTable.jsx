import { MdEdit, MdDelete } from "react-icons/md";
import Table from "../home-page/Table";
import { useState } from "react";
import SubmitPopup from "../popups/SubmitPopup";

function FancyEntryTable() {
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
      over: "30 Over",
      rate: "- -",
      team: "India",
      runs: "150",
      yesNo: "Y",
      date: "31-07-2023",
      time: "12:48:00 PM",
      client: "Srinivas2346",
      amount: 50000000.0,
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
      sNo: 2,
      over: "20 Over",
      rate: "- -",
      team: "India",
      runs: "150",
      yesNo: "Y",
      date: "31-07-2023",
      time: "12:48:00 PM",
      client: "Srinivas2346",
      amount: 50000000.0,
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
      sNo: 2,
      over: "10 Over",
      rate: "- -",
      team: "India",
      runs: "150",
      yesNo: "Y",
      date: "31-07-2023",
      time: "12:48:00 PM",
      client: "Srinivas2346",
      amount: 50000000.0,
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
      <Table data={MATCH_ENTRY_DATA} columns={MATCH_ENTRY_HEADING} />
      <SubmitPopup
        state={editPopup}
        setState={setEditPopup}
        header={"Are You Sure You Want To Edit This Fancy Entry"}
      />
      <SubmitPopup
        state={deletePopup}
        setState={setDeletePopup}
        header={"Are You Sure You Want To Delete This Fancy Entry"}
      />
    </div>
  );
}

export default FancyEntryTable;
