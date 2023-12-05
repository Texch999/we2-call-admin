import React, { useEffect, useState } from "react";
import "./styles.css";
import { GET_SETTLEMENT_HISTORY } from "../../config/endpoints";
import { call } from "../../config/axios";
import CustomPagination from "../pagination/CustomPagination";

function SettelmentStatement() {
  let register_id = localStorage?.getItem("register_id");

  const [settlementHistory, setSettlementHistory] = useState([]);
  const totalTillDayBalance =
    settlementHistory &&
    settlementHistory?.length > 0 &&
    settlementHistory?.reduce(
      (acc, obj) => acc + (+obj?.till_day_balance || 0),
      0
    );
  const totalSettleAmount =
    settlementHistory &&
    settlementHistory?.length > 0 &&
    settlementHistory?.reduce(
      (acc, obj) => acc + (+obj?.settled_amount || 0),
      0
    );
  const totalPendingAmount =
    settlementHistory &&
    settlementHistory?.length > 0 &&
    settlementHistory?.reduce(
      (acc, obj) => acc + (+obj?.pending_amount || 0),
      0
    );
  const getSettlementStatement = async () => {
    await call(GET_SETTLEMENT_HISTORY, {
      register_id,
    })
      .then((res) => {
        if (res?.data?.statusCode == 200) {
          setSettlementHistory(res?.data?.data?.Items);
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getSettlementStatement();
  }, []);
  // settlementHistory;
  const UPCOMING_SETTELMENT_DETAILS =
    settlementHistory?.length &&
    settlementHistory?.map((settlementData) => {
      return {
        Date: settlementData.date,
        Time: settlementData.time,
        ClientName: settlementData.client_name,
        ModeofPayment: settlementData.payment_type,
        till_day_balance: (
          <div
            className={
              settlementData?.till_day_balance >= 0 ? "clr-green" : "clr-red"
            }
          >
            {settlementData?.till_day_balance
              ? settlementData?.till_day_balance?.toFixed(2)
              : 0}
          </div>
        ),
        settled_amount: (
          <div
            className={
              settlementData?.settled_amount >= 0 ? "clr-green" : "clr-red"
            }
          >
            {-settlementData?.settled_amount
              ? settlementData?.settled_amount.toFixed(2)
              : 0}
          </div>
        ),
        pending_amount: (
          <div
            className={
              settlementData?.pending_amount >= 0 ? "clr-green" : "clr-red"
            }
          >
            {settlementData?.pending_amount
              ? settlementData?.pending_amount.toFixed(2)
              : 0}
          </div>
        ),
      };
    });
  // const UPCOMING_SETTELMENT_DETAILS =
  //   settlementHistory &&
  //   settlementHistory.length > 0 &&
  //   settlementHistory?.map((settlementData) => ({
  //     client_name: (
  //       <div>
  //         <div>{settlementData?.client_name}</div>
  //         <div>Client</div>
  //         <div>Phonepe</div>
  //         <div>{settlementData?.date}</div>
  //         <div>{settlementData?.time}</div>
  //       </div>
  //     ),
  // till_day_balance: (
  //   <div
  //     className={
  //       settlementData?.till_day_balance >= 0 ? "clr-green" : "clr-red"
  //     }
  //   >
  //     {settlementData?.till_day_balance
  //       ? settlementData?.till_day_balance?.toFixed(2)
  //       : 0}
  //   </div>
  // ),
  // settled_amount: (
  //   <div
  //     className={
  //       settlementData?.settled_amount >= 0 ? "clr-red" : "clr-green"
  //     }
  //   >
  //     {-settlementData?.settled_amount
  //       ? settlementData?.settled_amount.toFixed(2)
  //       : 0}
  //   </div>
  // ),
  // pending_amount: (
  //   <div
  //     className={
  //       settlementData?.pending_amount >= 0 ? "clr-green" : "clr-red"
  //     }
  //   >
  //     {settlementData?.pending_amount
  //       ? settlementData?.pending_amount.toFixed(2)
  //       : 0}
  //   </div>
  // ),
  //   }));

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Settlement Statement</h5>
      <div>
        <table className="w-100 match-position-table medium-font">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                DATE & TIME
              </th>
              <th scope="col" className="text-center">
                CLIENT NAME/ROLE
              </th>
              <th scope="col" className="text-center">
                MODE OF PAYMENT
              </th>
              <th scope="col" className="text-center">
                TILL DAY BALANCE
              </th>
              <th scope="col" className="text-center">
                SETTELED AMOUNT
              </th>
              <th scope="col" className="text-center">
                BALANCE
              </th>
            </tr>
          </thead>
          {UPCOMING_SETTELMENT_DETAILS.length &&
            UPCOMING_SETTELMENT_DETAILS?.map((item, index) => (
              <tbody key={index}>
                <tr className="text-center">
                  <td>
                    {item.Date}
                    {item.Time}
                  </td>
                  <td>{item.ClientName}</td>
                  <td>{item.ModeofPayment}</td>
                  <td>{item.till_day_balance}</td>
                  <td>{item.settled_amount}</td>
                  <td className="clr-green">{item.pending_amount}</td>
                </tr>
              </tbody>
            ))}
          <tfoot>
            <tr>
              <th colSpan={3} className="text-end">
                Total
              </th>
              <th
                className={`text-center ${
                  totalTillDayBalance > 0 ? "clr-green" : "clr-red"
                }`}
              >
                {totalTillDayBalance ? totalTillDayBalance.toFixed(2) : 0}
              </th>{" "}
              <th
                className={`text-center ${
                  totalSettleAmount > 0 ? "clr-green" : "clr-red"
                }`}
              >
                {totalSettleAmount ? totalSettleAmount.toFixed(2) : 0}
              </th>{" "}
              <th
                className={`text-center ${
                  totalPendingAmount > 0 ? "clr-green" : "clr-red"
                }`}
              >
                {totalPendingAmount ? totalPendingAmount.toFixed(2) : 0}
              </th>
            </tr>
          </tfoot>
        </table>
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

export default SettelmentStatement;
