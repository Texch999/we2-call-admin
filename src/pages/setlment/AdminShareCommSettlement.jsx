import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillFileText } from "react-icons/ai";
import PaymentSettelmentPopup from "./PaymentSettelmentPopup";
import CustomPagination from "../pagination/CustomPagination";
import { GET_OFFLINE_CLIENTS } from "../../config/endpoints";
import { call } from "../../config/axios";
import PaymentSuccessPopup from "./PaymentSuccessPopup";
// totalNetPl={totalNetPl}
// totalCD={totalCD}
// totalBalance={totalBalance}
// getUlShare={getUlShare}
const AdminShareCommSettlement = ({
  AdminCommSattlementStatementData,
  totalNetPl,
  totalCD,
  totalBalance,
}) => {
  const register_id = localStorage.getItem("register_id");
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [pendinAmount, setPendingAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentPopupOpen, setPaymentPopupOpen] = useState(false);
  const [paymentSuccessPopUp, setPaymentSuccessPopUp] = useState(false);
  const [success, setSuccess] = useState(false);

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
  // const adminShareSummaryData = AdminCommSattlementStatementData.map(
  //   (item, index) => {
  //     return
  //     admin_name : "";
  //   }
  // );
  const adminShareCommSettlementData =
    AdminCommSattlementStatementData?.length &&
    AdminCommSattlementStatementData?.map((item) => {
      return {
        admin_name: item.admin_name,
        role: item.admin_role,
        amount: item?.amount,
        credit_debit: item?.credit_debit,
        balance: item?.balance,
        pay: item?.pay,
      };
    });
  const getUlShare = (netPl, ulShare) => {
    const netAmount = (+netPl || 0 * +ulShare || 0) / 100;
    return netAmount;
  };

  // const adminShareCommSettlementData =
  //   allUsers &&
  //   allUsers?.length > 0 &&
  //   allUsers?.map((user) => {
  //     const netPL = getUlShare(user?.total_amount, user?.ul_share);
  //     return {
  //       amount: netPL ? netPL?.toFixed(2) : 0,
  //       credit_debit: user?.settled_platform_amount || 0,
  //       balance:
  //         user?.pending_settlement_platform_amount ||
  //         user?.pending_settlement_platform_amount == 0
  //           ? user?.pending_settlement_platform_amount
  //             ? user?.pending_settlement_platform_amount?.toFixed(2)
  //             : 0
  //           : netPL
  //           ? netPL?.toFixed(2)
  //           : 0,
  //       admin_name: user?.client_name,
  //       role: user?.account_role,
  //       userDetails: user,
  //     };
  //   });
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
  //   setPaymentPopupOpen(true);
  // };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

  const getAllUsers = async () => {
    await call(GET_OFFLINE_CLIENTS, { register_id })
      .then((res) => {
        // console.log(res.data);
        let results = res?.data?.data?.filter(
          (item) => item.user_status !== "deleted"
        );
        setAllUsers(results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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
              <th>ROLE/POSITION</th>
              <th>AMOUNT</th>
              <th>CREDIT/DEBIT</th>
              <th>BALANCE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {adminShareCommSettlementData &&
              adminShareCommSettlementData?.length > 0 &&
              adminShareCommSettlementData?.map((data, index) => (
                <tr key={index}>
                  <td>{data?.admin_name}</td>
                  <td>{data?.role}</td>
                  <td>{data?.amount}</td>
                  <td
                    className={` ${
                      data?.admin_name === "Sri23465" ? "clr-red" : "clr-green"
                    }`}
                  >
                    {data?.credit_debit}
                  </td>
                  <td className=" clr-green">{data?.balance}</td>
                  <td>
                    <Button
                      type="button"
                      className="text-warning rounded-circle border-0 settlement-file-button"
                    >
                      {data?.pay}
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}>TOTAL</th>

              <th className={totalNetPl > 0 ? "clr-green" : "clr-red"}>
                {totalNetPl ? totalNetPl.toFixed(2) : 0}
                {/* {adminShareCommSettlementData &&
                  adminShareCommSettlementData?.length > 0 &&
                  adminShareCommSettlementData
                    .reduce(
                      (total, data) => total + parseFloat(data?.amount),
                      0
                    )
                    .toFixed(2)} */}
              </th>
              <th className={totalCD > 0 ? "clr-green" : "clr-red"}>
                {" "}
                {totalCD ? totalCD.toFixed(2) : 0}
                {/* {adminShareCommSettlementData &&
                  adminShareCommSettlementData?.length > 0 &&
                  adminShareCommSettlementData
                    ?.reduce(
                      (total, data) => total + parseFloat(data?.credit_debit),
                      0
                    )
                    .toFixed(2)} */}
              </th>
              <th className={totalBalance > 0 ? "clr-green" : "clr-red"}>
                {totalBalance ? totalBalance.toFixed(2) : 0}
                {/* {adminShareCommSettlementData &&
                  adminShareCommSettlementData?.length > 0 &&
                  adminShareCommSettlementData
                    ?.reduce(
                      (total, data) => total + parseFloat(data?.balance),
                      0
                    )
                    ?.toFixed(2)} */}
              </th>
              <th></th>
            </tr>
          </tfoot>
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
