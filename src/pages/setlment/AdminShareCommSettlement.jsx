import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillFileText } from "react-icons/ai";
import PaymentSettelmentPopup from "./PaymentSettelmentPopup";
import CustomPagination from "../pagination/CustomPagination";

const AdminShareCommSettlement = ({
  AdminCommSattlementStatementData,
  totalNetPl,
  totalCD,
  totalBalance,
  getUlShare,
  setRerender,
}) => {
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

  const adminShareCommSettlementData =
    AdminCommSattlementStatementData &&
    AdminCommSattlementStatementData.length > 0 &&
    AdminCommSattlementStatementData?.map((item) => {
      return {
        admin_name: item.admin_name,
        role: item.admin_role,
        amountul: item.amount,
        credit_debit: item.credit_debit,
        balance: item.balance,
        pay: item.pay,
      };
    });
  // const netPL =
  //   getUlShare(user?.total_amount, user?.ul_share) +
  //   (+user?.totalPlatformNet || 0);
  // const [showAdminPaymentModal, setShowAdminPaymentModal] = useState(false);
  // const [selectedUser, setSelectedUser] = useState("");
  // const [totalAmount, setTotalAmount] = useState(0);
  // const [pendinAmount, setPendingAmount] = useState(0);

  // const handlePaymentModal = (user) => {
  //   setSelectedUser(user);
  //   const resultAmount =
  //     getUlShare(user?.total_amount, user?.ul_share) +
  //     (+user?.totalPlatformNet || 0);
  //   const pendinAmount =
  //     user?.pending_settlement_platform_amount ||
  //     user?.pending_settlement_platform_amount == 0
  //       ? user?.pending_settlement_platform_amount
  //         ? user?.pending_settlement_platform_amount?.toFixed(2)
  //         : 0
  //       : resultAmount
  //       ? resultAmount?.toFixed(2)
  //       : 0;
  //   setTotalAmount(resultAmount);
  //   setPendingAmount(pendinAmount);
  //   // setShowPaymentModal(true);
  // };

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
              <th className="text-center">Share + U/L comm</th>
              <th className="text-center">CREDIT/DEBIT</th>
              <th className="text-center">BALANCE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adminShareCommSettlementData.length > 0 &&
              adminShareCommSettlementData?.map((data, index) => (
                <tr key={index}>
                  <td className="text-center">{data?.admin_name}</td>
                  <td className="text-center">{data?.role}</td>
                  <td className="text-center">{data?.amountul}</td>
                  <td className="text-center">{data?.credit_debit}</td>
                  <td className="text-center">{data?.balance}</td>
                  <td className="text-center">{data?.pay}</td>
                  {/* <td className="text-center">
                  <Button
                    type="button"
                    className="text-warning rounded-circle border-0 settlement-file-button"
                    onClick={() => handlePaymentModal()}
                  >
                    Pay
                    {+netPL === 0 ? "N/A" : "pay"}
                  </Button>
                </td> */}
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2} className="text-center">
                TOTAL
              </th>
              <th className="text-center clr-green">
                {totalNetPl ? totalNetPl?.toFixed(2) : 0}
              </th>
              <th className="text-center clr-green">
                {totalCD ? totalCD?.toFixed(2) : 0}
              </th>
              <th className="text-center clr-green">
                {totalBalance ? totalBalance?.toFixed(2) : 0}
              </th>
              <th className="text-center"></th>
            </tr>
          </tfoot>
          {/* <PaymentSettelmentPopup
            showPaymentModal={showPaymentModal}
            setShowPaymentModal={setShowPaymentModal}
            buttonOne={`Date : 27/07/23`}
            role="Admins Name"
            buttonTwo={`Time : 17:46:00 PM`}
            selectedUser={selectedUser}
            totalAmount={totalAmount}
            pendinAmount={pendinAmount}
          /> */}
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
