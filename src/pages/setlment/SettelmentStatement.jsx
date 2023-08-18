import React from "react";
import "./styles.css";

function SettelmentStatement() {
  const UPCOMING_SETTELMENT_DETAILS = [
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Animesh - Client",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Sri23465 - Refere",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
    {
      DateTime: "27/07/2023, 18:31:00 PM",
      ClientName: "Srinivash - UL",
      ModeofPayment: "Phone Pay",
      dayBalance: "1000000.00",
      SettledAmount: "1000000.00",
      Balance: "1000000.00",
    },
  ];
  return (
    <div className="p-4">
      <div className="xx-large-font mb-4">Settelment Statement</div>
      <div>
        <table className="table">
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
              <tr>
                <td className="text-center">{item.DateTime}</td>
                <td className="text-center">{item.ClientName}</td>
                <td className="text-center">{item.ModeofPayment}</td>
                <td className="text-center">{item.dayBalance}</td>
                <td className="text-center">{item.SettledAmount}</td>
                <td className="text-centert">{item.Balance}</td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th colSpan={4} className="text-center">
                Total
              </th>
              <th colSpan={2} className="text-center clr-green">
                500000.00
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default SettelmentStatement;
