import Table from "../home-page/Table";
import { BsFillEyeFill } from "react-icons/bs";
import CustomPagination from "../pagination/CustomPagination";
import { useState } from "react";

function AdminSaleTickets() {
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
      newButton: <div className="rounded p-1 completed-btn">NEW</div>,
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
      newButton: <div className="rounded p-1 completed-btn">NEW</div>,
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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  return (
    <div className="mt-3">
      <Table
        data={ADMIN_SALE_TICKETS_DATA}
        columns={ADMIN_SALE_TICKETS_HEADING}
      />
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> {currentPage} </b> 0f <b> {totalPages} </b> Entries....
          </span>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminSaleTickets;
