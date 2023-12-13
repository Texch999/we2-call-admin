import { useState } from "react";
import Table from "../home-page/Table";
import CustomPagination from "../pagination/CustomPagination";
import { GET_REQUEST_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect } from "react";

function YourPackageTransaction() {
  // const MATCH_ENTRY_DATA = [
  //   {
  //     dateAndTime: "19 July 2023, 10:00:00 PM",
  //     nameRole: "Sri-Agent",
  //     trxID: "trx-id-20230627074602133078",
  //     packageTRX: "Upgrade Package - 20,000 (Monthly)",
  //     payAmount: 20000,
  //     status: <div className="rounded-pill p-1 pending-btn">Pending</div>,
  //     fundStatus: "Insufficient Balance",
  //   },
  //   {
  //     dateAndTime: "19 July 2023, 10:00:00 PM",
  //     nameRole: "Sri-Agent",
  //     trxID: "trx-id-20230627074602133078",
  //     packageTRX: "Upgrade Package - 20,000 (Monthly)",
  //     payAmount: 20000,
  //     status: <div className="rounded-pill p-1 reject-btn">Rejected</div>,
  //     fundStatus: "Welcome!",
  //   },
  //   {
  //     dateAndTime: "19 July 2023, 10:00:00 PM",
  //     nameRole: "Sri-Agent",
  //     trxID: "trx-id-20230627074602133078",
  //     packageTRX: "Upgrade Package - 20,000 (Monthly)",
  //     payAmount: 20000,
  //     status: <div className="rounded-pill p-1 completed-btn">Completed</div>,
  //     fundStatus: "Insufficient Balance",
  //   },
  // ];
  const [requestedPackages, setRequestedPackages] = useState([]);
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
      header: "Reason",
      field: "fundStatus",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

  const getRequestedPackages = async () => {
    const payload = {
      register_id: localStorage.getItem("register_id"),
      creator_id: localStorage.getItem("creator_id"),
    };
    await call(GET_REQUEST_PACKAGES, payload)
      .then((res) => {
        setRequestedPackages(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getRequestedPackages();
  }, []);

  const MATCH_ENTRY_DATA = requestedPackages.map((item) => ({
    dateAndTime: (
      <div>
        {item.created_date}-{item.created_time}
      </div>
    ),
    nameRole: localStorage.getItem("user_name"),
    trxID: item?.transaction_id,
    packageTRX: item?.summary.final_package_cost,
    payAmount: item?.summary.total_packages_cost,
    status:
      item?.status === "approve" ? (
        <div className="rounded-pill p-1 completed-btn">Completed</div>
      ) : item?.status === "Reject" ? (
        <div className="rounded-pill p-1 reject-btn">Reject</div>
      ) : (
        <div className="rounded-pill p-1 pending-btn">Pending</div>
      ),
    fundStatus: item?.reason,
  }));

  return (
    <div className="p-3">
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

export default YourPackageTransaction;
