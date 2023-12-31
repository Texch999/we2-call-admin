import React, { useEffect, useState } from "react";
import "./styles.css";
import { GET_SETTLEMENT_HISTORY } from "../../config/endpoints";
import { call } from "../../config/axios";
import CustomPagination from "../pagination/CustomPagination";
import { totalSum } from "../../utils";

function SettelmentStatement() {
  const register_id = localStorage?.getItem("register_id");

  const [settlementHistory, setSettlementHistory] = useState([]);

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

  const UPCOMING_SETTELMENT_DETAILS =
    settlementHistory?.length &&
    settlementHistory?.map((item) => {
      return {
        Date: item.date,
        Time: item.time,
        ClientName: item?.client_name,
        ModeofPayment: item?.payment_type,
        dayBalance: item?.till_day_balance,
        SettledAmount: item?.settled_amount,
        Balance: item?.pending_amount,
      };
    });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages =
    (UPCOMING_SETTELMENT_DETAILS && UPCOMING_SETTELMENT_DETAILS?.length / 5) ||
    0;
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  const totalDayBalance = totalSum(UPCOMING_SETTELMENT_DETAILS, "dayBalance");
  const totalSettledBalance = totalSum(
    UPCOMING_SETTELMENT_DETAILS,
    "SettledAmount"
  );
  const totalBalance = totalSum(UPCOMING_SETTELMENT_DETAILS, "Balance");
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
          {UPCOMING_SETTELMENT_DETAILS &&
            UPCOMING_SETTELMENT_DETAILS.length &&
            UPCOMING_SETTELMENT_DETAILS?.map((item, index) => (
              <tbody key={index}>
                <tr className="text-center">
                  <td>
                    <div>{item?.Date}</div>
                    <div>{item?.Time}</div>
                  </td>
                  <td>{item?.ClientName}</td>
                  <td>{item?.ModeofPayment}</td>
                  <td
                    className={item?.dayBalance >= 0 ? "clr-green" : "clr-red"}
                  >
                    {item?.dayBalance ? item?.dayBalance?.toFixed(2) : 0}
                  </td>
                  <td
                    className={
                      item?.SettledAmount >= 0 ? "clr-green" : "clr-red"
                    }
                  >
                    {item?.SettledAmount ? item?.SettledAmount?.toFixed(2) : 0}
                  </td>
                  <td className={item?.Balance >= 0 ? "clr-green" : "clr-red"}>
                    {item?.Balance ? item?.Balance?.toFixed(2) : 0}
                  </td>
                </tr>
              </tbody>
            ))}
          <tfoot>
            <tr>
              <th colSpan={3} className="text-end">
                Total
              </th>
              <th
                className={
                  totalDayBalance >= 0
                    ? "clr-green text-center"
                    : "clr-red text-center"
                }
              >
                {totalDayBalance}
              </th>
              <th
                className={
                  totalSettledBalance >= 0
                    ? "clr-green text-center"
                    : "clr-red text-center"
                }
              >
                {totalSettledBalance}
              </th>{" "}
              <th
                className={
                  totalBalance >= 0
                    ? "clr-green text-center"
                    : "clr-red text-center"
                }
              >
                {totalBalance}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        {totalPages > 1 && (
          <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
            <span>
              Showing <b> {currentPage} </b> 0f <b> {totalPages} </b>{" "}
              Entries....
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
    </div>
  );
}

export default SettelmentStatement;
