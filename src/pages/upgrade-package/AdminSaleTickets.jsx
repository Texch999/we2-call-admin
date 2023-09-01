import { useState } from "react";
import Table from "../home-page/Table";
import { BsFillEyeFill } from "react-icons/bs";
import AdminSaleTicketPopup from "./AdminSaleTicketPopup";

function AdminSaleTickets() {
  const [showPackageUpgrade, setShowPackageUpgrade] = useState(false);
  const handlePackageUpgrade = () => {
    setShowPackageUpgrade(true);
  };
  const ADMIN_SALE_TICKETS_DATA = [
    {
      dateAndTime: "19 July 2023, 10:00:00 PM",
      nameRole: "Sri-Agent",
      trxID: "trx-id-20230627074602133078",
      packageTRX: "Upgrade Package - 20,000 (Monthly)",
      payAmount: 20000,
      status: (
        <h5 className="rounded mb-0 py-1 pending-btn d-flex align-items-center justify-content-center">
          <BsFillEyeFill className="d-flex yellow-clr" />
        </h5>
      ),
      newButton: (
        <div
          className="rounded p-1 completed-btn"
          onClick={() => handlePackageUpgrade()}
        >
          NEW
        </div>
      ),
    },
    {
      dateAndTime: "19 July 2023, 10:00:00 PM",
      nameRole: "Sri-Agent",
      trxID: "trx-id-20230627074602133078",
      packageTRX: "Upgrade Package - 20,000 (Monthly)",
      payAmount: 20000,
      status: (
        <h5 className="rounded mb-0 py-1 pending-btn d-flex align-items-center justify-content-center">
          <BsFillEyeFill className="d-flex yellow-clr" />
        </h5>
      ),
      newButton: (
        <div
          className="rounded p-1 completed-btn"
          onClick={() => handlePackageUpgrade()}
        >
          NEW
        </div>
      ),
    },
    {
      dateAndTime: "19 July 2023, 10:00:00 PM",
      nameRole: "Sri-Agent",
      trxID: "trx-id-20230627074602133078",
      packageTRX: "Upgrade Package - 20,000 (Monthly)",
      payAmount: 20000,
      status: (
        <h5 className="rounded mb-0 py-1 pending-btn d-flex align-items-center justify-content-center">
          <BsFillEyeFill
            className="d-flex yellow-clr"
            onClick={() => handlePackageUpgrade()}
          />
        </h5>
      ),
      newButton: <div className="rounded p-1 completed-btn">NEW</div>,
    },
  ];
  const ADMIN_SALE_TICKETS_HEADING = [
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
      field: "newButton",
    },
  ];
  return (
    <div className="mt-3">
      <Table
        data={ADMIN_SALE_TICKETS_DATA}
        columns={ADMIN_SALE_TICKETS_HEADING}
      />
      <AdminSaleTicketPopup
        showPackageUpgrade={showPackageUpgrade}
        setShowPackageUpgrade={setShowPackageUpgrade}
      />
    </div>
  );
}

export default AdminSaleTickets;
