import React, { useEffect, useState } from "react";
import "./styles.css";
import { GET_SETTLEMENT_HISTORY } from "../../config/endpoints";
import { call } from "../../config/axios";

function SettelmentStatement() {
  let register_id = localStorage?.getItem("register_id");

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

  const UPCOMING_SETTELMENT_DETAILS = settlementHistory.map((item) => {
    return {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    };
  });

  console.log(settlementHistory, ".......settlementHistory");

  // const UPCOMING_SETTELMENT_DETAILS = [
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Animesh - Client",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Sri23465 - Refere",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Srinivash - UL",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Animesh - Client",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Sri23465 - Refere",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Srinivash - UL",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Animesh - Client",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Sri23465 - Refere",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Srinivash - UL",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Animesh - Client",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Sri23465 - Refere",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Srinivash - UL",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Animesh - Client",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Sri23465 - Refere",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  //   {
  //     DateTime: "27/07/2023, 18:31:00 PM",
  //     ClientName: "Srinivash - UL",
  //     ModeofPayment: "Phone Pay",
  //     dayBalance: "1000000.00",
  //     SettledAmount: "1000000.00",
  //     Balance: "1000000.00",
  //   },
  // ];

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

          {UPCOMING_SETTELMENT_DETAILS.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td>{item.DateTime}</td>
                <td>{item.ClientName}</td>
                <td>{item.ModeofPayment}</td>
                <td>{item.dayBalance}</td>
                <td>{item.SettledAmount}</td>
                <td className="clr-green">{item.Balance}</td>
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
