import Table from "../home-page/Table";

function YourPackageTransaction() {
  const MATCH_ENTRY_DATA = [
    {
      dateAndTime: "19 July 2023, 10:00:00 PM",
      nameRole: "Sri-Agent",
      trxID: "trx-id-20230627074602133078",
      packageTRX: "Upgrade Package - 20,000 (Monthly)",
      payAmount: 20000,
      status: <div className="rounded-pill p-1 pending-btn">Pending</div>,
      fundStatus: "Insufficient Balance",
    },
    {
      dateAndTime: "19 July 2023, 10:00:00 PM",
      nameRole: "Sri-Agent",
      trxID: "trx-id-20230627074602133078",
      packageTRX: "Upgrade Package - 20,000 (Monthly)",
      payAmount: 20000,
      status: <div className="rounded-pill p-1 reject-btn">Rejected</div>,
      fundStatus: "Welcome!",
    },
    {
      dateAndTime: "19 July 2023, 10:00:00 PM",
      nameRole: "Sri-Agent",
      trxID: "trx-id-20230627074602133078",
      packageTRX: "Upgrade Package - 20,000 (Monthly)",
      payAmount: 20000,
      status: <div className="rounded-pill p-1 completed-btn">Completed</div>,
      fundStatus: "Insufficient Balance",
    },
  ];
  const MATCH_ENTRY_HEADING = [
    {
      header: "DATE & TIME",
      field: "dateAndTime",
    },
    {
      header: "NAME/ROLE",
      field: "nameRole",
    },
    {
      header: "TRX ID",
      field: "trxID",
    },
    {
      header: "PACKAGE TRX",
      field: "packageTRX",
    },
    {
      header: "PAY AMOUNT",
      field: "payAmount",
    },
    {
      header: "STATUS",
      field: "status",
    },
    {
      header: "",
      field: "fundStatus",
    },
  ];
  return (
    <div className="p-3">
      <Table data={MATCH_ENTRY_DATA} columns={MATCH_ENTRY_HEADING} />
    </div>
  );
}

export default YourPackageTransaction;
