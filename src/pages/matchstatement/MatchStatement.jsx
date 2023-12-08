import React, { useEffect, useState } from "react";
import Statement from "./Statement";
import FinancialStatement from "./FinancialStatement";
import { Button } from "react-bootstrap";
import {
  GET_FINANCIAL_STATEMENT_BY_DATE,
  GET_OFFLINE_CLIENTS,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function MatchStatement() {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [isProcessing, setIsProcessing] = useState(false);

  const [financialStatementData, setFinancialStatementData] = useState([]);
  const [existingUsers, setExistingUsers] = useState([]);

  const [statementPayload, setStatementPayload] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const getStatementData = async () => {
    setIsProcessing(true);
    await call(GET_FINANCIAL_STATEMENT_BY_DATE, {
      register_id,
      account_role,
      ...statementPayload,
    })
      .then((res) => {
        setIsProcessing(false);

        // const result = res?.data?.data?.Items;
        setFinancialStatementData(
          res?.data?.data?.filter((item) => item?.match_declared === "Y")
        );
      })
      .catch((err) => {
        setIsProcessing(false);

        throw err;
      });
  };

  const getAllClientsData = async () => {
    call(GET_OFFLINE_CLIENTS, {
      register_id,
      account_role,
    })
      .then((res) => {
        setExistingUsers(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllClientsData();
    getStatementData();
  }, []);

  const reportList = ["Statement", "Financial Statement"];
  const [activeReport, setActiveReport] = useState("Statement");
  const handleReport = (report) => {
    setActiveReport(report);
  };

  return (
    <div className="p-3">
      <h5 className="meetings-heading">Match Statement</h5>
      <Statement
        statementPayload={statementPayload}
        setStatementPayload={setStatementPayload}
        financialStatementData={financialStatementData}
        isProcessing={isProcessing}
        getStatementData={getStatementData}
      />
    </div>
  );
}

export default MatchStatement;
