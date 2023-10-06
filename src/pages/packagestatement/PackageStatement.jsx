import React from "react";
import Table from "../home-page/Table";

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
  const packageStatementData = [
    {
      pkg_trans: "By Bulk Pkgs",
      date_time: (
        <div>
          <div>29-09-23</div>
          <div>11.45pm</div>
        </div>
      ),
      paid_amount: "10,000",
      sell_amount: "--",
    },
    {
      pkg_trans: "Sale S7 Admin",
      date_time: (
        <div>
          <div>29-09-23</div>
          <div>11.45pm</div>
        </div>
      ),
      paid_amount: "--",
      sell_amount: "15,000",
    },
    {
      pkg_trans: "By Regular Pkgs",
      date_time: (
        <div>
          <div>29-09-23</div>
          <div>11.45pm</div>
        </div>
      ),
      paid_amount: "1,00,000",
      sell_amount: "--",
    },
    {
      pkg_trans: "Sale S7 Admin",
      date_time: (
        <div>
          <div>29-09-23</div>
          <div>11.45pm</div>
        </div>
      ),
      paid_amount: "--",
      sell_amount: "1,25,000",
    },
  ];
  return (
    <div>
      <h3>Package-Statement</h3>
      <Table columns={packageStatementColumns} data={packageStatementData} />
       <div className="d-flex flex-column mt-2">
          <div className="d-flex flex-justify-between flex-row total-count-container mt-4 py-2 rounded">
            <div className="w-50 text-end">Total</div>
            <div className="d-flex flex-space-between flex-row w-50">
              <div className="clr-green w-50 text-center">1,10,000.00</div>
              <div className="clr-green w-50 text-center">1,30,000.00</div>
            </div>
          </div>
          <div className="d-flex flex-justify-between flex-row total-count-container mt-4 w-100 py-2 rounded">
            <div className="w-50 text-end">Net P/L</div>
            <div className="clr-green w-50 text-center">+20,000.00</div>
          </div>
        </div>
    </div>
  );
}

export default PackageStatement;
