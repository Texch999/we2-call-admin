import { useState } from "react";
import Table from "../home-page/Table";
import CustomPagination from "../pagination/CustomPagination";
import {
  GET_ALL_PACKAGES_APPROVED_HSITORY,
  GET_REQUEST_PACKAGES,
} from "../../config/endpoints";
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
  const [summary, setSummary] = useState();
  const [packagesStatement, setPackagesStatement] = useState();

  const register_id = localStorage.getItem("register_id");

  const creator_id = localStorage.getItem("creator_id");

  const getAllPackageRequests = async () => {
    await call(GET_ALL_PACKAGES_APPROVED_HSITORY, { register_id, creator_id })
      .then((res) => {
        const resp = res?.data?.data?.records
          ?.map((item) => {
            const dateTimeString = `${item.created_date} ${item.created_time}`;
            const timestamp = new Date(dateTimeString).getTime();
            item.timestamp = timestamp;
            return item;
          })
          ?.sort((a, b) => b.timestamp - a.timestamp);
        setSummary(res?.data?.data?.summary);
        setPackagesStatement(resp);
      })
      .catch((err) => console.log(err));
  };

  const MATCH_ENTRY_HEADING = [
    {
      field: "pkg_trans",
      header: "Name",
    },
    {
      field: "date_time",
      header: "Date & Time",
    },
    {
      field: "trans_id",
      header: "Transaction ID",
    },
    {
      field: "paid_amount",
      header: "Paid Amount",
    },
    {
      field: "sell_amount",
      header: "Sell Amount",
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
    getAllPackageRequests();
  }, []);

  let totalPaidAmount = 0,
    totalSellAmount = 0;

  const MATCH_ENTRY_DATA = packagesStatement?.map((obj) => {
    const paidAmount =
      obj?.register_id !== register_id ? obj?.summary.final_package_cost : 0;
    const sellAmount =
      obj?.register_id === register_id ? obj?.summary.final_package_cost : 0;
    totalPaidAmount += paidAmount;
    totalSellAmount += sellAmount;
    return {
      pkg_trans: obj?.summary.requester_name,
      date_time: (
        <div>
          <div>{obj.created_date}</div>
          <div>{obj.created_time}</div>
        </div>
      ),
      trans_id: obj.transaction_id,
      paid_amount: <div className="clr-red"> -{paidAmount} </div>,
      sell_amount: <div className="clr-green"> +{sellAmount}</div>,
    };
  });

  const TotalPL = summary?.totalSellAmmount - summary?.totalPaidAmmount;

  return (
    <div className="p-3">
      <Table data={MATCH_ENTRY_DATA} columns={MATCH_ENTRY_HEADING} />
      <div className="w-100 d-flex justify-content-end font-clr-white total-count-container  py-2 px-4 rounded">
        <div className="w-75 d-flex justify-content-between">
          <span className="d-flex">
            Total Paid Ammount :
            <span className="clr-red"> -{summary?.totalPaidAmmount}</span>
          </span>
          <span className="d-flex">
            Total Sell Ammount :
            <div className="clr-green"> +{summary?.totalSellAmmount}</div>
          </span>
          <span className="d-flex">
            Loss/Profit Ammount :
            <div className={TotalPL >= 0 ? "clr-green" : "clr-red"}>
              {TotalPL}
            </div>
          </span>
        </div>
      </div>
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
