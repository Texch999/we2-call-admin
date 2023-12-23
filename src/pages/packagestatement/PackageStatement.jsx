import React, { useEffect, useState } from "react";
import Table from "../home-page/Table";
import "./styles.css";
import { call } from "../../config/axios";
import { GET_ALL_PACKAGES_APPROVED_HSITORY } from "../../config/endpoints";
import CustomPagination from "../pagination/CustomPagination";

function PackageStatement() {
  const [summary, setSummary] = useState({});
  const [packagesStatement, setPackagesStatement] = useState([]);
  const creator_id = localStorage.getItem("creator_id");
  const register_id = localStorage.getItem("register_id");

  const packageStatementColumns = [
    {
      field: "pkg_trans",
      header: "NAME",
    },
    {
      field: "date",
      header: "DATE",
    },
    {
      field: "time",
      header: "TIME",
    },
    {
      field: "paid_amount",
      header: "PAID AMOUNT",
    },
    {
      field: "sell_amount",
      header: "SELL AMOUNT",
    },
  ];

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

  useEffect(() => {
    getAllPackageRequests();
  }, []);
  let totalPaidAmount = 0,
    totalSellAmount = 0,
    totalNetPl = 0;

  const packageStatementData = packagesStatement?.map((obj) => {
    const paidAmount =
      obj?.register_id !== register_id ? obj?.summary.final_package_cost : 0;
    const sellAmount =
      obj?.register_id === register_id ? obj?.summary.final_package_cost : 0;
    totalPaidAmount += paidAmount;
    totalSellAmount += sellAmount;
    totalNetPl = sellAmount - paidAmount;
    return {
      pkg_trans: obj?.summary.requester_name,
      date: obj?.created_date,
      time: obj?.created_time,
      paid_amount: paidAmount,
      sell_amount: sellAmount,
    };
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages =
    (packageStatementData && packageStatementData?.length / 5) || 0;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-2">
      <h5 className="meetings-heading">Package Statement</h5>
      <Table columns={packageStatementColumns} data={packageStatementData} />
      <div className="d-flex justify-content-between align-items-center mt-2">
        {totalPages > 1 && (
          <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
            <span>
              Showing <b> {currentPage} </b> Of <b> {totalPages} </b> Entries...
            </span>
          </div>
        )}
        <div className="d-flex justify-content-end mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <div className="d-flex total-count-container mt-2 py-2  rounded align-items-center justify-content-around">
        <div>
          Total Net PL =
          <span className={`${totalNetPl >= 0 ? "clr-green" : "clr-red"}`}>
            {totalNetPl || 0}
          </span>
        </div>
        <div>
          Total Paid Amount ={" "}
          <span className={`${totalPaidAmount >= 0 ? "clr-green" : "clr-red"}`}>
            {totalPaidAmount || 0}
          </span>
        </div>
        <div>
          Total Sell Amount ={" "}
          <span className={`${totalSellAmount >= 0 ? "clr-green" : "clr-red"}`}>
            {totalSellAmount || 0}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PackageStatement;
