import { useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import PaymentSettelmentPopup from "./PaymentSettelmentPopup";
import { GET_OFFLINE_CLIENTS } from "../../config/endpoints";
import { useEffect } from "react";
import { call } from "../../config/axios";

function Settelment() {
  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");
  const [settlementData, setSettlementData] = useState([]);
  const getSettlementData = async () => {
    await call(GET_OFFLINE_CLIENTS, {
      register_id,
      account_role,
    })
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          setSettlementData(res?.data?.data);
        }
      })
      .catch((err) => {
        throw err;
      });
  };

  useEffect(() => {
    getSettlementData();
  }, []);

  const SETTELMENT_DETAILS = settlementData.map((item) => {
    return {
      ClientName: item.client_name,
      RolePosition: item.account_role,
      Amount: item.client_risk_limit,
      CreditDebit: item.client_risk_limit,
      Balance: item.client_risk_limit,
      File: (
        <AiFillFileText
          className="custom-icon"
          onClick={() => handlePaymentModal()}
        />
      ),
    };
  });

  const columns = [
    { header: "CLIENT NAME", field: "ClientName" },
    { header: "ROLE/POSTION", field: "RolePosition" },
    { header: "AMOUNT", field: "Amount" },
    { header: "CREDIT/DEBIT", field: "CreditDebit" },
    { header: "BALANCE", field: "Balance" },
    { field: "File" },
  ];

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handlePaymentModal = () => {
    setShowPaymentModal(true);
  };
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Settlement</h5>
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
      <div className="table-body-height">
        <table className="fixed-table w-100 match-position-table text-center medium-font">
          <thead id="home-table-head">
            <tr>
              {columns.map((item, i) => {
                return (
                  <th scope="col" className="text-center">
                    {item.header}
                  </th>
                );
              })}
            </tr>
          </thead>
          {SETTELMENT_DETAILS.map((item, index) => (
            <tbody key={index + item.Balance}>
              <tr>
                {columns.map((val, i) => {
                  return <td className="text-center">{item[val.field]}</td>;
                })}
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
        buttonOne={`Match : IND vs SL`}
        role="Client Name"
        buttonTwo={`Date : 27/07/23`}
      />
    </div>
  );
}

export default Settelment;
