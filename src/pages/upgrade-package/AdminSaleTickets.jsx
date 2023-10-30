import Table from "../home-page/Table";
import { BsFillEyeFill } from "react-icons/bs";
import CustomPagination from "../pagination/CustomPagination";
import { useState } from "react";
import UpgradeYourPackagePopup from "./UpgradeYourPackagePopup";
import { GET_ADMIN_PACKAGE_REQUEST } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect } from "react";
import TicketUpgradePopup from "./TicketUpgradePopup";

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

  const getAllsaleTickets = async () => {
    const payload = {
      register_id: localStorage.getItem("register_id"),
    };
    await call(GET_ADMIN_PACKAGE_REQUEST, payload)
      .then((res) => {
        setSaleTicket(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  console.log("------->saleTicket", saleTicket);

  useEffect(() => {
    getAllsaleTickets();
  }, []);

  const ADMIN_SALE_TICKETS_DATA = saleTicket.map((obj) => ({
    dateAndTime: <div>{obj.created_date}-{obj.created_time}</div>,
    nameRole: localStorage.getItem("user_name"),
    trxID: obj.transaction_id,
    packageTRX: obj.summary.final_package_cost,
    payAmount: obj.summary.final_package_cost,
    status:
      obj?.status === "approve" ? (
        <div className="rounded-pill p-1 completed-btn">Completed</div>
      ) : obj?.status === "Reject" ? (
        <div className="rounded-pill p-1 reject-btn">Reject</div>
      ) : (
        <div className="rounded-pill p-1 pending-btn">Pending</div>
      ),
    newButton: (
      <div
        className="rounded p-1 completed-btn"
        onClick={() => handleNewButton(obj)}
      >
        NEW
      </div>
    ),
  }));

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
      <TicketUpgradePopup
        saletickets={saletickets}
        showTicketPackagePopup={showTicketPackagePopup}
        setTicketShowPackagePopup={setTicketShowPackagePopup}
      />
    </div>
  );
}

export default AdminSaleTickets;
