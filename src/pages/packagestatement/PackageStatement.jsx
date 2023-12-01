import React, { useEffect, useState } from "react";
import Table from "../home-page/Table";
import Pagination from "react-bootstrap/Pagination";
import "./styles.css";
import { call } from "../../config/axios";
import { GET_ALL_PACKAGES_APPROVED_HSITORY } from "../../config/endpoints";

function PackageStatement() {
  const packageStatementColumns = [
    {
      field: "pkg_trans",
      header: "Pkg Trans...",
    },
    {
      field: "date_time",
      header: "Date & Time",
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
  const [summary, setSummary] = useState({});
  const [packagesStatement, setPackagesStatement] = useState([]);

  const creator_id = localStorage.getItem("creator_id");
  const register_id = localStorage.getItem("register_id");
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
  const packageStatementData = packagesStatement.map((obj, index) => {
    return {
      pkg_trans: obj?.summary.requester_name,
      date_time: (
        <div>
          <div>{obj.created_date}</div>
          <div>{obj.created_time}</div>
        </div>
      ),
      paid_amount:
        obj?.register_id !== register_id
          ? obj?.summary.final_package_cost
          : "--",
      sell_amount:
        obj?.register_id === register_id
          ? obj?.summary.final_package_cost
          : "--",
    };
  });
  const [onePackageStatementData, setPackageStatementData] = useState([]);

  return (
    <div>
      <h3>Package-Statement</h3>
      <Table columns={packageStatementColumns} data={packageStatementData} />
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> 1 </b> 0f <b> 200 </b> Entries....
          </span>
        </div>
      </div>
      <div className="d-flex flex-column mt-2">
        <div className="d-flex flex-justify-between flex-row total-count-container mt-4 py-2 rounded">
          <div className="w-50 text-end">Total</div>
          <div className="d-flex flex-space-between flex-row w-50">
            <div className="clr-green w-50 text-center">
              {summary.totalPaidAmmount || 0}
            </div>
            <div className="clr-green w-50 text-center">
              {summary.totalSellAmmount || 0}
            </div>
          </div>
        </div>
        <div className="d-flex flex-justify-between flex-row total-count-container mt-4 w-100 py-2 rounded">
          <div className="w-50 text-end">Net P/L</div>
          <div
            className={`clr-green w-50 text-center ${
              summary.lossOrProfitAmmount > 0 ? "clr-red" : ""
            }`}
          >
            {summary.lossOrProfitAmmount || 0}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageStatement;
