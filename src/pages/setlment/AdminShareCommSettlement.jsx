import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillFileText } from "react-icons/ai";
import PaymentSettelmentPopup from "./PaymentSettelmentPopup";
import CustomPagination from "../pagination/CustomPagination";

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
      title: "UL/Platform Comm Summary",
      balance_title: "Total Balance",
      amount: 1000000.0,
    },
  ];
  const adminShareCommSettlementData = [
    {
      admin_name: "Animesh",
      role: "agent",
      amount: 1000000.0,
      ulplatfrom: 100000.0,
      amountul: 100000.0,
      credit_debit: 1000000.0,
      balance: 1000000.0,
    },
    {
      admin_name: "Sri23465",
      role: "Master",
      amount: 1000000.0,
      ulplatfrom: 100000.0,
      amountul: 100000.0,

      credit_debit: 1000000.0,
      balance: 1000000.0,
    },
    {
      admin_name: "Srinivash",
      role: "SM",
      amount: 1000000.0,
      ulplatfrom: 100000.0,
      amountul: 100000.0,

      credit_debit: 1000000.0,
      balance: 1000000.0,
    },

    {
      admin_name: "Sri23465",
      role: "Master",
      amount: 1000000.0,
      ulplatfrom: 100000.0,
      amountul: 100000.0,

      credit_debit: 1000000.0,
      balance: 1000000.0,
    },
    {
      admin_name: "Srikanth",
      role: "Sub A",
      amount: 1000000.0,
      ulplatfrom: 100000.0,
      amountul: 100000.0,

      credit_debit: 1000000.0,
      balance: 1000000.0,
    },
  ];
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handlePaymentModal = () => {
    setShowPaymentModal(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

  return (
    <div>
      <div>
        <h6 className="meetings-heading mb-3">Admins Share/Comm Settlement</h6>
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
              <th className="text-center">ADMIN NAME</th>
              <th className="text-center">ROLE/POSITION</th>
              <th className="text-center">AMOUNT</th>
              <th className="text-center">U/L Platfrom Comm</th>
              <th className="text-center">Amount + U/L comm</th>
              <th className="text-center">CREDIT/DEBIT</th>
              <th className="text-center">BALANCE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adminShareCommSettlementData?.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data?.admin_name}</td>
                <td className="text-center">{data?.role}</td>
                <td className="text-center">
                  {parseFloat(data?.amount).toFixed(2)}
                </td>
                <td className="text-center">{data?.ulplatfrom}</td>
                <td className="text-center">{data?.amountul}</td>
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
                    onClick={() => handlePaymentModal()}
                  >
                    <AiFillFileText size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2} className="text-center">
                TOTAL
              </th>

              <th className="text-center clr-green">
                {adminShareCommSettlementData
                  .reduce((total, data) => total + parseFloat(data?.amount), 0)
                  .toFixed(2)}
              </th>
              <th className="text-center clr-green">
                {adminShareCommSettlementData
                  .reduce(
                    (total, data) => total + parseFloat(data?.ulplatfrom),
                    0
                  )
                  .toFixed(2)}
              </th>
              <th className="text-center clr-green">
                {adminShareCommSettlementData
                  .reduce(
                    (total, data) => total + parseFloat(data?.amountul),
                    0
                  )
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
          <PaymentSettelmentPopup
            showPaymentModal={showPaymentModal}
            setShowPaymentModal={setShowPaymentModal}
            buttonOne={`Date : 27/07/23`}
            role="Admins Name"
            buttonTwo={`Time : 17:46:00 PM`}
          />
        </Table>
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
};

export default AdminShareCommSettlement;
