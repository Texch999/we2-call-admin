import { useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import PaymentSettelmentPopup from "./PaymentSettelmentPopup";
import {
  GET_OFFLINE_CLIENTS,
  OFFLINE_PAYMENT_SETTLEMENT,
} from "../../config/endpoints";
import { useEffect } from "react";
import { call } from "../../config/axios";
import CustomPagination from "../pagination/CustomPagination";
import { sumOfData } from "../../utils";
import moment from "moment/moment";

function Settelment() {
  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");
  const [settlementData, setSettlementData] = useState([]);
  const [clientId, setClientId] = useState([]);
  const [offlineSettlePayload, setOfflineSettlePayload] = useState({});
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const handlePaymentModal = (data) => {
    setShowPaymentModal(true);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

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
  const handleSettlement = async () => {
    await call(OFFLINE_PAYMENT_SETTLEMENT, {
      ...offlineSettlePayload,
      register_id,
      settledDate: moment(new Date()).format("DD/MM/YYYY"),
      setteledTime: moment(new Date()).format("hh:mm:ss"),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const SETTELMENT_DETAILS = settlementData?.map((item) => {
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

  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Settlement</h5>
      <div className="medium-font mt-1 mb-4">Account Summary</div>
      <div className="d-flex flex-row justify-content-around mb-4 w-50">
        <div className="d-flex flex-column settelment-container justify-content-around p-2 rounded">
          <div className="medium-font">Total Amount</div>
          <div className="clr-yellow medium-font">
            {sumOfData(settlementData, "total_amount")}
          </div>
        </div>
        <div className="d-flex flex-column settelment-container justify-content-around p-2 rounded">
          <div className="medium-font">Total Settled Bal C/D</div>
          <div className="clr-yellow medium-font">
            {sumOfData(settlementData, "total_amount") -
              sumOfData(settlementData, "pending_amount")}
          </div>
        </div>
        <div className="d-flex flex-column settelment-container justify-content-around p-2 rounded">
          <div className="medium-font">Total Balance</div>
          <div className="clr-yellow medium-font">
            {sumOfData(settlementData, "pending_amount")}
          </div>
        </div>
      </div>
      <div className="settelment-table-body-height">
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
          {SETTELMENT_DETAILS?.map((item, index) => (
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
