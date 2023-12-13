import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminPopReports from "./AdminPopReports";
import { GiClick } from "react-icons/gi";
import CustomPagination from "../pagination/CustomPagination";
import {
  GET_LIVE_MATCH_RISK_POSITION,
  GET_OFFLINE_CLIENTS,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import moment from "moment";

const AdminOnePageReport = () => {
  const register_id = localStorage.getItem("register_id");
  const [allUsers, setAllUsers] = useState([]);
  const [induvisualUserReport, setInduvisualUserReport] = useState([]);
  const [success, setSuccess] = useState(false);
  const [adminOnePageReportPopUp, setAdminOnePageReportPopUp] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [ulShare, setUlShare] = useState(0);
  const [role, setRole] = useState("");
  const [adminsData, setAdminsData] = useState("");
  const [adminsHeadings, setAdminsHeadings] = useState("");
  const reports = [
    { name: "Admin One Page Report", isActive: true },
    { name: "UL/Platform Comm Report", isActive: false },
  ];
  const [activeReport, setActiveReport] = useState("Admin One Page Report");
  const [popupHeading, setPopupHeading] = useState(false);
  const [isAdminActive, setIsAdminActive] = useState(true);

  const getUlShare = (netPl, ulShare) => {
    const netAmount = (+netPl || 0 * +ulShare || 0) / 100;
    return netAmount;
  };

  const onePageReportNetPL =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.reduce((acc, obj) => acc + (+obj?.total_amount || 0), 0);
  const onePageReportUlNet =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.reduce(
      (acc, obj) => acc + (+getUlShare(obj?.total_amount, obj?.ul_share) || 0),
      0
    );
  const totalPlatForm =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.reduce((acc, obj) => acc + (+obj?.totalPlatformNet || 0), 0);

  const adminOnePageReportData =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.map((user) => {
      const netPL = getUlShare(user?.total_amount, user?.ul_share);
      return {
        admin_name: user?.client_name,
        admin_role: user?.account_role,
        profit_loss: (
          <div className={user?.total_amount > 0 ? "clr-green" : "clr-red"}>
            {user?.total_amount ? user?.total_amount?.toFixed(2) : 0}
          </div>
        ),
        ul_share: (
          <div className={netPL > 0 ? "clr-green" : "clr-red"}>
            {isAdminActive
              ? netPL
                ? netPL?.toFixed(2)
                : 0
              : user?.totalPlatformNet
              ? user?.totalPlatformNet?.toFixed(2)
              : 0}
          </div>
        ),
      };
    });

  //   [
  //   {
  //     admin_name: "Animesh",
  //     admin_role: "Agent",
  //     profit_loss: 500000.0,
  //     ul_share: 200000.0,
  //   },
  //   {
  //     admin_name: "Sri8647",
  //     admin_role: "Master",
  //     profit_loss: 500000.0,
  //     ul_share: 200000.0,
  //   },
  //   {
  //     admin_name: "Ganesh",
  //     admin_role: "Super Master",
  //     profit_loss: 500000.0,
  //     ul_share: 200000.0,
  //   },
  //   {
  //     admin_name: "Lokesh",
  //     admin_role: "Super Admin",
  //     profit_loss: 500000.0,
  //     ul_share: 200000.0,
  //   },
  //   {
  //     admin_name: "Lokesh",
  //     admin_role: "Super Admin",
  //     profit_loss: 500000.0,
  //     ul_share: 200000.0,
  //   },
  //   {
  //     admin_name: "Dona456",
  //     admin_role: "Super Master",
  //     profit_loss: 500000.0,
  //     ul_share: 200000.0,
  //   },
  // ];
  const adminOnePageReportIndividualData =
    induvisualUserReport &&
    induvisualUserReport?.length &&
    induvisualUserReport?.map((match) => {
      return {
        series_name: match?.series_name,
        date_time: `${moment(match?.matchTimeStamp).format(
          "DD-MM-YYYY"
        )}  ${moment(match?.matchTimeStamp).format("mm:ss A")}`,
        team: `${match?.team1} vs ${match?.team2}`,
        win_team: match?.winTeam,
        profit_loss: match?.totalAmount?.totalLossOrProfit || 0,
        urs_profilt_loss:
          (+match?.totalAmount?.totalLossOrProfit * +ulShare) / 100,
      };
    });
  // [
  //   {
  //     series_name: "T20 world cup",
  //     date_time: "02/08/2023 11:32:00 AM",
  //     team: "india",
  //     win_team: "india",
  //     profit_loss: 50000000,
  //     urs_profilt_loss: 50000000,
  //   },
  //   {
  //     series_name: "T20 world cup",
  //     date_time: "02/08/2023 11:32:00 AM",
  //     team: "india",
  //     win_team: "india",
  //     profit_loss: 50000000,
  //     urs_profilt_loss: 50000000,
  //   },
  //   {
  //     series_name: "T20 world cup",
  //     date_time: "02/08/2023 11:32:00 AM",
  //     team: "india",
  //     win_team: "india",
  //     profit_loss: 50000000,
  //     urs_profilt_loss: 50000000,
  //   },
  //   {
  //     series_name: "T20 world cup",
  //     date_time: "02/08/2023 11:32:00 AM",
  //     team: "india",
  //     win_team: "india",
  //     profit_loss: 50000000,
  //     urs_profilt_loss: 50000000,
  //   },
  // ];
  const adminOnePageReportIndividualHeadings = [
    { header: "Series Name", field: "series_name" },
    { header: "Date & Time", field: "date_time" },
    { header: "Team", field: "team" },
    { header: "Win Team", field: "win_team" },
    { header: "Admin P/L", field: "profit_loss" },
    { header: "Urs P/L", field: "urs_profilt_loss" },
  ];
  const adminUlPlatformCommData = [
    {
      series_name: "T20 world cup",
      date_time: "02/08/2023 11:32:00 AM",
      team: "india",
      win_team: "india",
      profit_loss: 50000000,
      urs_profilt_loss: 50000000,
    },
    {
      series_name: "T20 world cup",
      date_time: "02/08/2023 11:32:00 AM",
      team: "india",
      win_team: "india",
      profit_loss: 50000000,
      urs_profilt_loss: 50000000,
    },
    {
      series_name: "T20 world cup",
      date_time: "02/08/2023 11:32:00 AM",
      team: "india",
      win_team: "india",
      profit_loss: 50000000,
      urs_profilt_loss: 50000000,
    },
    {
      series_name: "T20 world cup",
      date_time: "02/08/2023 11:32:00 AM",
      team: "india",
      win_team: "india",
      profit_loss: 50000000,
      urs_profilt_loss: 50000000,
    },
  ];
  const adminUlPlatformCommHeadings = [
    { header: "Series Name", field: "series_name" },
    { header: "Date & Time", field: "date_time" },
    { header: "Team", field: "team" },
    { header: "Win Team", field: "win_team" },
    { header: "Admin P/L", field: "profit_loss" },
    { header: "UL/Plat Comm", field: "urs_profilt_loss" },
  ];
  const handleReport = (report) => {
    setActiveReport(report);
  };
  const handleAdminReports = (data) => {
    if (activeReport === "Admin One Page Report") {
      getUserMatches(data?.admin_name);
      setAdminName(data?.admin_name);
      setUlShare(isNaN(+data?.ul_share) ? 0 : data?.ul_share);
      setRole(data?.admin_role);
      setAdminOnePageReportPopUp(true);
      setAdminsData(adminOnePageReportIndividualData);
      setAdminsHeadings(adminOnePageReportIndividualHeadings);
      setPopupHeading("Match Wise Share P/L");
    } else {
      setAdminName(data?.admin_name);
      setRole(data?.admin_role);
      setAdminOnePageReportPopUp(true);
      setAdminsData(adminUlPlatformCommData);
      setAdminsHeadings(adminUlPlatformCommHeadings);
      setPopupHeading("Match Wise UL/Platform Com");
    }
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages =
    (adminOnePageReportData && adminOnePageReportData?.length / 5) || 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  const getAllUsers = async () => {
    await call(GET_OFFLINE_CLIENTS, { register_id })
      .then((res) => {
        // console.log(res.data);
        let results = res?.data?.data?.filter(
          (item) => item.user_status !== "deleted"
        );
        setAllUsers(results);
      })
      .catch((err) => console.log(err));
  };
  const getUserMatches = async (username) => {
    await call(GET_LIVE_MATCH_RISK_POSITION, { user_name: username })
      .then((res) => {
        // console.log(res,"GET_LIVE_MATCH_RISK....");
        setInduvisualUserReport(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, [success]);

  return (
    <div>
      {/* <h5 className="meetings-heading mb-3">Your Share In Admin Book</h5>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          {reports.map(({ isActive, name }, index) => (
            <Button
              key={index}
              className={`me-2 admin-reports-button ${
                name === activeReport ? "active-report-button" : ""
              }`}
              onClick={() => {
                handleReport(name);
                setIsAdminActive(isActive);
              }}
            >
              {name}
            </Button>
          ))}
        </div>
        <Button className="all-match-button">All Match</Button>
      </div>
      <hr /> */}

      <div>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th>ADMINS NAME</th>
              <th>ADMINS ROLE</th>
              {isAdminActive && <th>ADMINS NET P/L</th>}
              <th>{!isAdminActive ? "UL /PLATFORM COMM" : "UL SHARE"}</th>
            </tr>
          </thead>
          <tbody>
            {adminOnePageReportData &&
              adminOnePageReportData?.length > 0 &&
              adminOnePageReportData?.map((data, index) => (
                <tr key={index}>
                  <td
                    className="cursor-pointer"
                    onClick={() => isAdminActive && handleAdminReports(data)}
                  >
                    {data?.admin_name}{" "}
                    {isAdminActive && (
                      <GiClick className="custom-click-icon ms-1 mt-2" />
                    )}
                  </td>
                  <td>{data?.admin_role}</td>
                  {isAdminActive && <td>{data?.profit_loss}</td>}
                  <td>{data?.ul_share}</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}>TOTAL</th>
              {isAdminActive && (
                <th className="clr-green">
                  {onePageReportNetPL ? onePageReportNetPL?.toFixed(2) : 0}
                </th>
              )}
              {isAdminActive && (
                <th className="clr-green">
                  {onePageReportUlNet ? onePageReportUlNet?.toFixed(2) : 0}
                </th>
              )}
              {!isAdminActive && (
                <th className="clr-green">
                  {totalPlatForm ? totalPlatForm?.toFixed(2) : 0}
                </th>
              )}
            </tr>
          </tfoot>
          {adminOnePageReportPopUp && (
            <AdminPopReports
              show={adminOnePageReportPopUp}
              onHide={() => setAdminOnePageReportPopUp(false)}
              data={adminOnePageReportIndividualData}
              columns={adminsHeadings}
              adminName={adminName}
              role={role}
              heading={popupHeading}
              totalPosition="series_name"
            />
          )}
        </Table>
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
};

export default AdminOnePageReport;
