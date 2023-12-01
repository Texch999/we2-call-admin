import Table from "../home-page/Table";
import { BsFillEyeFill } from "react-icons/bs";
import CustomPagination from "../pagination/CustomPagination";
import { useState } from "react";

function AdminSaleTickets() {
  const [showTicketPackagePopup, setTicketShowPackagePopup] = useState(false);
  const [saletickets, setSaletickets] = useState();
  const handleNewButton = (data) => {
    setTicketShowPackagePopup(true);
    setSaletickets(data);
  };
  const [saleTicket, setSaleTicket] = useState([]);

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
