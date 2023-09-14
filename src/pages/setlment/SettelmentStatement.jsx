import React, { useEffect, useState } from "react";
import "./styles.css";
import { GET_SETTLEMENT_HISTORY } from "../../config/endpoints";
import { call } from "../../config/axios";

function SettelmentStatement() {
  let register_id = localStorage.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [settlementHistory, setSettlementHistory] = useState([]);
  const settlementStatementColumns = [
    {
      header: "DATE & TIME",
      name: "date_time",
    },
    {
      header: "CLIENT NAME/ROLE",
      name: "client_name",
    },
    {
      header: "MODE OF PAYMENT",
      name: "Payment_mode",
    },
    {
      header: "TILL DAY BALALNCE",
      name: "till_balance",
    },
    {
      header: "SETTELED AMOUNT ",
      name: "setteled_balance",
    },
    {
      header: "BALANCE",
      name: "balance",
    },
  ];

  console.log(settlementHistory, "Hitt");

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

  const UPCOMING_SETTELMENT_DETAILS = [
    {
      date_time: "27/07/2023, 18:31:00 PM",
      client_name: "Animesh - Client",
      Payment_mode: "Phone Pay",
      till_balance: "1000000.00",
      setteled_balance: "1000000.00",
      balance: "1000000.00",
    },
  ];

  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Settlement Statement</h5>
      <div>
        <table className="w-100 match-position-table medium-font">
          <thead>
            <tr>
              {settlementStatementColumns.map((item, index) => {
                return <th key={index} className="text-center">{item.header}</th>;
              })}
            </tr>
          </thead>
          {UPCOMING_SETTELMENT_DETAILS.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                {settlementStatementColumns.map((colItem, i) => {
                  return <td key={i}>{item[colItem.name]}</td>;
                })}
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th colSpan={3} className="text-end">
                Total
              </th>
              <th className="text-center clr-green">500000.00</th>{" "}
              <th className="text-center clr-green">500000.00</th>{" "}
              <th className="text-center clr-green">500000.00</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default SettelmentStatement;
