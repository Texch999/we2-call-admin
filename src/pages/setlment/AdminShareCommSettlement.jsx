import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillFileText } from "react-icons/ai";

const AdminShareCommSettlement = () => {
  const adminShareSummaryData = [
    {
      title: "Account Summary Client/Referal",
      balance_title: "Total Amount",
      amount: 1000000.0,
    },
    {
      title: "Admins Share Summary",
      balance_title: "Total Settled Bal C/D",
      amount: 1000000.0,
    },
    {
      title: "Total Settled Bal C/D",
      balance_title: "Total Balance",
      amount: 1000000.0,
    },
  ];
  const adminShareCommSettlementData = [
    {
      admin_name: "Animesh",
      role: "agent",
      amount: 1000000.0,
      credit_debit: 1000000.0,
      balance: 1000000.0,
    },
    {
      admin_name: "Sri23465",
      role: "Master",
      amount: 1000000.0,
      credit_debit: 1000000.0,
      balance: 1000000.0,
    },
    {
      admin_name: "Srinivash",
      role: "SM",
      amount: 1000000.0,
      credit_debit: 1000000.0,
      balance: 1000000.0,
    },

    {
      admin_name: "Sri23465",
      role: "Master",
      amount: 1000000.0,
      credit_debit: 1000000.0,
      balance: 1000000.0,
    },
    {
      admin_name: "Srikanth",
      role: "Sub A",
      amount: 1000000.0,
      credit_debit: 1000000.0,
      balance: 1000000.0,
    },
  ];

  return (
    <div className="p-4">
      <div>
        <h5 className="meetings-heading mb-3">Admins Share/Comm Settlement</h5>
      </div>

      <div className="d-flex mb-2">
        {adminShareSummaryData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-25 border rounded admin-account-summary-container me-3 p-2"
            >
              <p>{item?.title}</p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <p>{item?.balance_title}</p>
                <p className="clr-yellow">
                  {parseFloat(item?.amount).toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th>ADMIN NAME</th>
              <th className="text-center">ROLE/POSITION</th>
              <th className="text-center">AMOUNT</th>
              <th className="text-center">CREDIT/DEBIT</th>
              <th className="text-center">BALANCE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adminShareCommSettlementData?.map((data, index) => (
              <tr key={index}>
                <td>{data?.admin_name}</td>
                <td className="text-center">{data?.role}</td>
                <td className="text-center">
                  {parseFloat(data?.amount).toFixed(2)}
                </td>
                <td
                  className={`text-center ${
                    data?.admin_name === "Sri23465" ? "clr-red" : "clr-green"
                  }`}
                >
                  {parseFloat(data?.credit_debit).toFixed(2)}
                </td>
                <td className="text-center clr-green">
                  {parseFloat(data?.balance).toFixed(2)}
                </td>
                <td className="text-center">
                  <Button
                    type="button"
                    className="text-warning rounded-circle border-0 settlement-file-button"
                  >
                    <AiFillFileText size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}>TOTAL</th>
        
              <th className="text-center clr-green">
                {adminShareCommSettlementData
                  .reduce((total, data) => total + parseFloat(data?.amount), 0)
                  .toFixed(2)}
              </th>
              <th className="text-center clr-green">
                {" "}
                {adminShareCommSettlementData
                  .reduce(
                    (total, data) => total + parseFloat(data?.credit_debit),
                    0
                  )
                  .toFixed(2)}
              </th>
              <th className="text-center clr-green">
                {" "}
                {adminShareCommSettlementData
                  .reduce((total, data) => total + parseFloat(data?.balance), 0)
                  .toFixed(2)}
              </th>
              <th className="text-center"></th>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
};

export default AdminShareCommSettlement;
