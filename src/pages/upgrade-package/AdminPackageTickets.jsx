import { useState } from "react";
import Table from "../home-page/Table";
import CustomPagination from "../pagination/CustomPagination";
import { GET_REQUEST_PACKAGES } from "../../config/endpoints";
import { useEffect } from "react";
import { call } from "../../config/axios";

function AdminPackageTickets() {
  const [adminPackageTicket, setadminPackageTicket] = useState([]);

  const packageSelectTickets = adminPackageTicket?.filter(
    (item) => item.type !== "subscription"
  );

  console.log(packageSelectTickets, ".........packageSelectTickets");

  const MATCH_ENTRY_DATA = packageSelectTickets?.map((obj) => ({
    date: obj?.created_date,
    time: `${obj.created_time}`,
    nameRole: localStorage.getItem("user_name"),
    trxID: obj?.transaction_id,
    packageTRX: obj.summary.final_package_cost,
    payAmount: obj.summary.final_package_cost,
    status:
      obj?.status === "Approved" ? (
        <div className="rounded-pill p-1 completed-btn">{obj?.status}</div>
      ) : obj?.status === "Reject" ? (
        <div className="rounded-pill p-1 reject-btn">{obj?.status}</div>
      ) : (
        <div className="rounded-pill p-1 pending-btn">{obj?.status}</div>
      ),
    fundStatus: obj?.reason,
  }));

  const MATCH_ENTRY_HEADING = [
    {
      header: "DATE",
      field: "date",
    },
    {
      header: "TIME",
      field: "time",
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
      header: "reason",
      field: "fundStatus",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getAdminPackageTicket = async () => {
    const payload = {
      register_id: localStorage.getItem("register_id"),
      creator_id: localStorage.getItem("creator_id"),
    };
    await call(GET_REQUEST_PACKAGES, payload)
      .then((res) => {
        setadminPackageTicket(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

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
