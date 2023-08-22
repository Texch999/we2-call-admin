import { MdEdit, MdDelete } from "react-icons/md";
import Table from "../home-page/Table";

function FancyEntryTable() {
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
      edit: <MdEdit className="edit-icon" />,
      delete: <MdDelete className="edit-icon" />,
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
      edit: <MdEdit className="edit-icon" />,
      delete: <MdDelete className="edit-icon" />,
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
      header: "Y?N",
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
    </div>
  );
}

export default FancyEntryTable;
