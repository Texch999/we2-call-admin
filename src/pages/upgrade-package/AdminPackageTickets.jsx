import { useState } from "react";
import Table from "../home-page/Table";
import CustomPagination from "../pagination/CustomPagination";
import { GET_ADMIN_PACKAGES } from "../../config/endpoints";
import { useEffect } from "react";
import { call } from "../../config/axios";

function AdminPackageTickets() {
  const [adminPackageTicket, setadminPackageTicket] = useState([]);

  const MATCH_ENTRY_DATA = 
  // adminPackageTicket.map((obj) => ({
  //   dateAndTime: obj.created_date,
  //   nameRole: localStorage.getItem("user_name"),
  //   trxID: obj.transaction_id,
  //   // packageTRX: obj.summary.final_package_cost,
  //   // payAmount: obj.summary.final_package_cost,
  //   status:
  //     obj?.status === "approve" ? (
  //       <div className="rounded-pill p-1 completed-btn">Completed</div>
  //     ) : obj?.status === "Reject" ? (
  //       <div className="rounded-pill p-1 reject-btn">Reject</div>
  //     ) : (
  //       <div className="rounded-pill p-1 pending-btn">Pending</div>
  //     ),
  // }));
  [
    {
      dateAndTime: "19 July 2023, 10:00:00 PM",
      nameRole: "Sri-Agent",
      trxID: "trx-id-20230627074602133078",
      packageTRX: "Upgrade Package - 20,000 (Monthly)",
      payAmount: 20000,
      status: <div className="rounded-pill p-1 pending-btn">Pending</div>,
      fundStatus: "Insufficient Balance",
    },
  // {
  //   dateAndTime: "19 July 2023, 10:00:00 PM",
  //   nameRole: "Sri-Agent",
  //   trxID: "trx-id-20230627074602133078",
  //   packageTRX: "Upgrade Package - 20,000 (Monthly)",
  //   payAmount: 20000,
  //   status: <div className="rounded-pill p-1 reject-btn">Rejected</div>,
  //   fundStatus: "Welcome!",
  // },
  // {
  //   dateAndTime: "19 July 2023, 10:00:00 PM",
  //   nameRole: "Sri-Agent",
  //   trxID: "trx-id-20230627074602133078",
  //   packageTRX: "Upgrade Package - 20,000 (Monthly)",
  //   payAmount: 20000,
  //   status: <div className="rounded-pill p-1 completed-btn">Completed</div>,
  //   fundStatus: "Insufficient Balance",
  // },
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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

  const getAdminPackageTicket = async () => {
    const payload = {
      register_id: localStorage.getItem("register_id"),
    };
    await call(GET_ADMIN_PACKAGES, payload)
      .then((res) => {
        setadminPackageTicket(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  console.log("--->adminPackageTicket", adminPackageTicket);

  useEffect(() => {
    getAdminPackageTicket();
  }, []);

  return (
    <div className="mt-3">
      <Table data={MATCH_ENTRY_DATA} columns={MATCH_ENTRY_HEADING} />
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

export default AdminPackageTickets;
