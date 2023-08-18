import React from "react";
import { AiFillFileText } from "react-icons/ai";

function Settelment() {
  const SETTELMENT_DETAILS = [
    {
      ClientName: "Animesh",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Sri23465",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Srinivash",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Jayanta",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Animesh",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Sri23465",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Srinivash",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Jayanta",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Animesh",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Sri23465",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Srinivash",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Jayanta",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Animesh",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Sri23465",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Srinivash",
      RolePosition: "Client",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
    {
      ClientName: "Jayanta",
      RolePosition: "Referal",
      Amount: "1000000.00",
      CreditDebit: "1000000.00",
      Balance: "1000000.00",
      File: "",
    },
  ];
  return (
    <div className="p-4">
      <div className="heading font-weight-bold">Settelment</div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                CLIENT NAME
              </th>
              <th scope="col" className="text-center">
                ROLE/POSITION
              </th>
              <th scope="col" className="text-center">
                AMOUNT
              </th>
              <th scope="col" className="text-center">
                CREDIT/DEBIT
              </th>
              <th scope="col" className="text-center">
                BALANCE
              </th>
              <th scope="col" className="text-center"></th>
            </tr>
          </thead>

          {SETTELMENT_DETAILS.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td className="text-center">{item.ClientName}</td>
                <td className="text-center">{item.RolePosition}</td>
                <td className="text-center">{item.Amount}</td>
                <td className="text-center clr-green">{item.CreditDebit}</td>
                <td className="text-center clr-green">{item.Balance}</td>
                <td className="text-center">
                  <AiFillFileText className="custom-icon" />
                </td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th colSpan={4} className="text-center">
                Total
              </th>
              <th colSpan={2} className="text-center">
                500000.00
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Settelment;
