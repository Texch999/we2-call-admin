import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminPopReports from "../onepagereport/AdminPopReports";
import CustomPagination from "../pagination/CustomPagination";
import AdminOnePageReport from "../onepagereport/AdminOnePageReport";
import AdminShareCommSettlement from "../setlment/AdminShareCommSettlement";
import AdminComissionReport from "../onepagereport/AdminComissionReport";
import {
  GET_FINANCIAL_STATEMENT_BY_DATE,
  GET_OFFLINE_CLIENTS,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect } from "react";
import PaymentSettelmentPopup from "../setlment/PaymentSettelmentPopup";
import AdminPaymentPopup from "../setlment/AdminPaymentPopup";

const AdminSharesMatchStatement = () => {
  const [adminShareStatementMatchPopUp, setAdminShareStatementMatchPopUp] =
    useState(false);
  const [activeReport, setActiveReport] = useState("Admins OnePageReport");
  const [selectedOptions, setSelectedOptions] = useState({});
  const [clientsData, setClientsData] = useState([]);
  const [adminShareStatement, setadminShareStatement] = useState({});

  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");

  const reports = [
    "Admins OnePageReport",
    "U/L Comm Report",
    "Admins Share/Comm Settlement-Statement Report",
  ];

  // const reports = ["Share Statement", "Statement", "Financial Statement"];
  const inputFields = [
    {
      label: "From",
      type: "date",
      name: "start_date",
      id: "startDate",
    },
    {
      label: "To",
      type: "date",
      name: "end_date",
      id: "endDate",
    },
    {
      label: "Series Name",
      options: ["Enter Series Name", "WTC", "ODI", "IPL"],
      name: "series_name",
      id: "seriesName",
    },
    {
      label: "Match Name",
      options: ["Select Match   ", "WTC", "ODI", "IPL"],
      name: "match_name",
      id: "matchName",
    },
    {
      label: "Fancy",
      options: ["Fancy", "1st Innings", "2nd Innings", "10th over"],
      name: "fancy",
      id: "fancy",
    },
    {
      label: "Name",
      options: ["Select", "Sri1234", "Jayantha", "srikanth"],
      name: "client_name",
      id: "clientName",
    },
  ];
  const adminSharesMatchStatementData =
    // adminShareStatement.map((item)=>{
    //   return {
    //     date_time : item.date,
    //     series_name : item?.series_name,
    //     team_name : item?.team1,
    //     match_place : item?.match_place,
    //     win_team :item?.win_team,
    //     profit_loss : item?.profit_loss,
    //   }
    // })
    [
      {
        date_time: "19 July 2023, 10:00:00 PM",
        series_name: "T20 World Cup 2023",
        team_name: "India vs England",
        match_place: "Hyderabad",
        win_team: "India",
        profit_loss: 1000000.0,
      },
      {
        date_time: "19 July 2023, 10:00:00 PM",
        series_name: "T20 World Cup 2023",
        team_name: "India vs England",
        match_place: "Hyderabad",
        win_team: "India",
        profit_loss: 1000000.0,
      },
      {
        date_time: "19 July 2023, 10:00:00 PM",
        series_name: "T20 World Cup 2023",
        team_name: "India vs England",
        match_place: "Hyderabad",
        win_team: "India",
        profit_loss: 1000000.0,
      },
      {
        date_time: "19 July 2023, 10:00:00 PM",
        series_name: "T20 World Cup 2023",
        team_name: "India vs England",
        match_place: "Hyderabad",
        win_team: "India",
        profit_loss: 1000000.0,
      },
    ];

  const getAdminShare = async () => {
    await call(GET_FINANCIAL_STATEMENT_BY_DATE, {
      register_id,
      account_role,
      ...adminShareStatement,
    })
      .then((res) => {
        setadminShareStatement(
          res?.data?.filter((items) => items.match_declared === "Y")
        );
      })
      .catch((err) => console.log(err));
  };

  const getAllClientsData = async () => {
    call(GET_OFFLINE_CLIENTS, {
      register_id,
      account_role,
    })
      .then((res) => {
        setClientsData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAdminShare();
    getAllClientsData();
  }, []);

  const adminSharepopupHeadings = [
    { header: "Admins Name", field: "admin_name" },
    { header: "Role", field: "role" },
    { header: "Admin Net P/L", field: "profit_loss" },
    { header: "U/L Share", field: "ul_share" },
  ];
  const adminSharepopupData = [
    {
      admin_name: "Animesh",
      role: "Agent",
      profit_loss: 50000000,
      ul_share: 50000000,
    },
    {
      admin_name: "Animesh",
      role: "Master",
      profit_loss: 50000000,
      ul_share: 50000000,
    },
    {
      admin_name: "Animesh",
      role: "SM",
      profit_loss: 50000000,
      ul_share: 50000000,
    },
    {
      admin_name: "Animesh",
      role: "SA",
      profit_loss: 50000000,
      ul_share: 50000000,
    },
  ];

  const handleReport = (report) => {
    setActiveReport(report);
  };
  const handleSelect = (fieldName, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [fieldName]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  const [showMatchesStatement, setShowMatchStatement] = useState(false);
  const handleMatchStatementButton = () => {
    setShowMatchStatement((prev) => !prev);
  };
  const [allUsers, setAllUsers] = useState([]);
  const [rerender, setRerender] = useState(false);
  const getAllUsers = async () => {
    await call(GET_OFFLINE_CLIENTS, { register_id })
      .then((res) => {
        let results = res?.data?.data;
        setAllUsers(results);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUsers();
  }, [rerender]);
  const getUlShare = (netPl, ulShare) => {
    const netAmount = (+netPl || 0 * +ulShare || 0) / 100;
    return netAmount;
  };
  const totalNetPl = allUsers.reduce(
    (acc, obj) =>
      acc +
      (getUlShare(obj?.total_amount, obj?.ul_share) +
        (+obj?.totalPlatformNet || 0) || 0),
    0
  );
  const totalCD =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.reduce(
      (acc, obj) => acc + (+obj?.settled_platform_amount || 0),
      0
    );
  const totalBalance =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.reduce(
      (acc, obj) => acc + (+obj?.pending_settlement_platform_amount || 0),
      0
    );
  const totalPlatForm =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.reduce((acc, obj) => acc + (+obj?.totalPlatformNet || 0), 0);

  const ulPlatformComm =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.map((user) => {
      const netPL = getUlShare(user?.total_amount, user?.ul_share);
      return {
        admin_name: user?.client_name,
        admin_role: user?.account_role,
        ul_platform_comm: (
          <div className={`${netPL >= 0 ? "clr-green" : "clr-red"}`}>
            {user?.totalPlatformNet ? user?.totalPlatformNet?.toFixed(2) : 0}
          </div>
        ),
      };
    });
  const [showAdminPaymentModal, setShowAdminPaymentModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [pendinAmount, setPendingAmount] = useState(0);

  const handlePaymentModal = (user) => {
    setSelectedUser(user);
    const resultAmount =
      getUlShare(user?.total_amount, user?.ul_share) +
      (+user?.totalPlatformNet || 0);
    const pendinAmount =
      user?.pending_settlement_platform_amount ||
      user?.pending_settlement_platform_amount == 0
        ? user?.pending_settlement_platform_amount
          ? user?.pending_settlement_platform_amount?.toFixed(2)
          : 0
        : resultAmount
        ? resultAmount?.toFixed(2)
        : 0;
    setTotalAmount(resultAmount);
    setPendingAmount(pendinAmount);
    setShowAdminPaymentModal(true);
  };
  const AdminCommSattlementStatementData =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.map((user) => {
      const netPL =
        getUlShare(user?.total_amount, user?.ul_share) +
        (+user?.totalPlatformNet || 0);
      return {
        admin_name: <div>{user?.client_name}</div>,
        admin_role: <div> {user?.account_role}</div>,
        amount: (
          <div className={netPL >= 0 ? "clr-green" : "clr-red"}>
            {netPL ? netPL?.toFixed(2) : 0}
          </div>
        ),
        // credit_debit: user?.settled_platform_amount || 0,
        credit_debit: (
          <div
            className={
              user?.settled_platform_amount > 0 ? "clr-green" : "clr-red"
            }
          >
            {user?.settled_platform_amount
              ? user?.settled_platform_amount.toFixed(2)
              : 0}
          </div>
        ),

        balance: (
          <div className={netPL >= 0 ? "clr-green" : "clr-red"}>
            {user?.pending_settlement_platform_amount ||
            user?.pending_settlement_platform_amount == 0
              ? user?.pending_settlement_platform_amount
                ? user?.pending_settlement_platform_amount?.toFixed(2)
                : 0
              : netPL
              ? netPL?.toFixed(2)
              : 0}
          </div>
        ),
        pay: (
          <div
            className="text-warning rounded-circle border-0 settlement-file-button"
            onClick={() => +netPL !== 0 && handlePaymentModal(user)}
          >
            {+netPL === 0 ? "N/A" : "pay"}
          </div>
        ),
      };
    });
  return (
    <div className="p-4">
      <div className="mb-3">
        {reports.map((report, index) => (
          <Button
            key={index}
            className={`me-2 admin-reports-button ${
              report === activeReport ? "active-report-button" : ""
            }`}
            onClick={() => handleReport(report)}
          >
            {report}
          </Button>
        ))}
      </div>

      {/* {activeReport === "Admins Share Statement" && (
        <div>
          {" "}
          <div>
            <h6 className="meetings-heading mb-3">
              Admin Shares Match Statement
            </h6>
            <hr />
            <Form onSubmit={(e) => handleFormSubmit(e)}>
              <div className="d-flex flex-sm-row container-fluid">
                {inputFields?.map((inputData, index) => (
                  <div key={index} className="d-flex me-1 row">
                    <Form.Group className="d-flex flex-column admin-match-statement col">
                      <Form.Label htmlFor={inputData?.id} className="ms-1">
                        {inputData?.label}
                      </Form.Label>
                      {inputData?.options ? (
                        <Form.Select
                          id={inputData?.id}
                          size="lg"
                          value={selectedOptions[inputData?.name] || ""}
                          onChange={(e) =>
                            handleSelect(inputData?.name, e.target.value)
                          }
                        >
                          {inputData?.options?.map((option, index) => (
                            <option
                              className="w-100"
                              key={index}
                              value={option}
                            >
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                      ) : (
                        <Form.Control
                          type={inputData?.type}
                          value={selectedOptions[inputData?.name] || ""}
                          id={inputData?.id}
                          onChange={(e) =>
                            handleSelect(inputData?.name, e.target.value)
                          }
                          size="lg"
                        />
                      )}
                    </Form.Group>
                  </div>
                ))}
                <div className="mt-4">
                  <Button
                    type="submit"
                    className="active-report-button verify-button"
                  >
                    Verify
                  </Button>
                </div>
              </div>
            </Form>
          </div>
          <hr />
          <div>
            <Table responsive="md" className="call-management-data">
              <thead>
                <tr>
                  <th className="text-center">DATE & TIME</th>
                  <th className="text-center">SERIES NAME</th>
                  <th className="text-center">TEAM NAME</th>
                  <th className="text-center">MATCH PLACE</th>
                  <th className="text-center">WIN TEAM</th>
                  <th className="text-center">SHARE P/L</th>
                </tr>
              </thead>
              <tbody>
                {adminSharesMatchStatementData?.map((data, index) => (
                  <tr key={index}>
                    <td className="text-center">{data?.date_time}</td>
                    <td className="text-center">{data?.series_name}</td>
                    <td className="text-center">{data?.team_name}</td>
                    <td className="text-center">{data?.match_place}</td>
                    <td className="text-center">{data?.win_team}</td>
                    <td
                      className="text-center clr-green cursor-pointer"
                      onClick={() => setAdminShareStatementMatchPopUp(true)}
                    >
                      {parseFloat(data?.profit_loss).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={5} className="text-center">
                    TOTAL
                  </th>

                  <th className="text-center clr-green">
                    {adminSharesMatchStatementData
                      .reduce(
                        (total, data) => total + parseFloat(data?.profit_loss),
                        0
                      )
                      .toFixed(2)}
                  </th>
                </tr>
              </tfoot>
              {adminShareStatementMatchPopUp && (
                <AdminPopReports
                  show={adminShareStatementMatchPopUp}
                  onHide={() => setAdminShareStatementMatchPopUp(false)}
                  data={adminSharepopupData}
                  columns={adminSharepopupHeadings}
                  heading={`Admin Share`}
                  totalPosition="admin_name"
                />
              )}
            </Table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
              <span>
                Showing <b> {currentPage} </b> 0f <b> {totalPages} </b>{" "}
                Entries....
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
      )} */}
      {activeReport === "Admins OnePageReport" && <AdminOnePageReport />}
      {activeReport === "U/L Comm Report" && (
        <AdminComissionReport
          ulPlatformComm={ulPlatformComm}
          totalPlatForm={totalPlatForm}
        />
      )}
      {activeReport === "Admins Share/Comm Settlement-Statement Report" && (
        <AdminShareCommSettlement
          AdminCommSattlementStatementData={AdminCommSattlementStatementData}
          totalNetPl={totalNetPl}
          totalCD={totalCD}
          totalBalance={totalBalance}
          getUlShare={getUlShare}
        />
      )}
      <AdminPaymentPopup
        showAdminPaymentModal={showAdminPaymentModal}
        setShowAdminPaymentModal={setShowAdminPaymentModal}
        selectedUser={selectedUser}
        totalAmount={totalAmount}
        pendinAmount={pendinAmount}
        setRerender={setRerender}
      />
    </div>
  );
};

export default AdminSharesMatchStatement;
