import { MdEdit, MdDelete } from "react-icons/md";
import Table from "./../home-page/Table";

function MatchEntryTable() {
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
      edit: <MdEdit className="edit-icon" />,
      delete: <MdDelete className="edit-icon" />,
    },
    {
      sNo: 1,
      rate: 1.5,
      client: "Srinivas2346",
      amount: -50000000.0,
      team: "India",
      playEat: "P",
      date: "31-07-2023",
      time: "12:48:00 PM",
      ind: -50000000.0,
      pak: -50000000.0,
      edit: <MdEdit className="edit-icon" />,
      delete: <MdDelete className="edit-icon" />,
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
      edit: <MdEdit className="edit-icon" />,
      delete: <MdDelete className="edit-icon" />,
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
    </div>
  );
}

export default MatchEntryTable;
