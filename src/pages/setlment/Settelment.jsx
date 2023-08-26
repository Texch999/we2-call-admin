import React, { useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import PaymentSettelmentPopup from "./PaymentSettelmentPopup";

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
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handlePaymentModal = () => {
    setShowPaymentModal(true);
  };
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">One Page Report</h5>
      <div className="medium-font mt-1 mb-4">Account Summary</div>
      <div className="d-flex flex-row justify-content-around mb-4 w-50">
        <div className="d-flex flex-column settelment-container justify-content-around p-2 rounded">
          <div className="medium-font">Total Amount</div>
          <div className="clr-yellow medium-font">1000000.00</div>
        </div>
        <div className="d-flex flex-column settelment-container justify-content-around p-2 rounded">
          <div className="medium-font">Total Settled Bal C/D</div>
          <div className="clr-yellow medium-font">1000000.00</div>
        </div>
        <div className="d-flex flex-column settelment-container justify-content-around p-2 rounded">
          <div className="medium-font">Total Balance</div>
          <div className="clr-yellow medium-font">1000000.00</div>
        </div>
      </div>
      <div>
        <table className="w-100 match-position-table medium-font">
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
                <td className="text-center ">{item.RolePosition}</td>
                <td className="text-center">{item.Amount}</td>
                <td className="text-center clr-green ">{item.CreditDebit}</td>
                <td className="text-center clr-green ">{item.Balance}</td>
                <td className="text-center">
                  <AiFillFileText
                    className="custom-icon"
                    onClick={() => handlePaymentModal()}
                  />
                </td>
              </tr>
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th colSpan={2} className="text-end medium-font">
                Total
              </th>
              <th className="text-center medium-font clr-green">500000.00</th>
              <th className="text-center medium-font clr-green">500000.00</th>
              <th className="text-center medium-font clr-green">500000.00</th>
              <th className="text-center medium-font clr-green"></th>
            </tr>
          </tfoot>
        </table>
      </div>
      <PaymentSettelmentPopup
        showPaymentModal={showPaymentModal}
        setShowPaymentModal={setShowPaymentModal}
      />
    </div>
  );
}

export default Settelment;
