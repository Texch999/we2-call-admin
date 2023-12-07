import React, { useState } from "react";
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
import { useEffect } from "react";
import moment from "moment";

const AdminOnePageReport = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [adminOnePageReportPopUp, setAdminOnePageReportPopUp] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [role, setRole] = useState("");
  const [adminsData, setAdminsData] = useState("");
  const [adminsHeadings, setAdminsHeadings] = useState("");
  const reports = ["Admin One Page Report", "UL/Platform Comm Report"];
  const [activeReport, setActiveReport] = useState("Admin One Page Report");
  const [popupHeading, setPopupHeading] = useState(false);
  const register_id = localStorage.getItem("register_id");
  const [induvisualUserReport, setInduvisualUserReport] = useState([]);

  // const adminOnePageReportData = [
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
  const getUlShare = (netPl, ulShare) => {
    const netAmount = (+netPl || 0 * +ulShare || 0) / 100;
    return netAmount;
  };
  const [ulShare, setUlShare] = useState(0);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");

  // const handleIndividualAdminOnePageReport = (
  //   userId,
  //   ulShare,
  //   username,
  //   role
  // )
  //  => {
  //   getUserMatches(userId);
  //   setUlShare(ulShare);
  //   setUserName(username);
  //   setUserRole(role);

  // };

  const handleIndividualAdminOnePageReport = (user) => {
    console.log(user, ".......user sangram");
  };
  // const handleIndividualAdminOnePageReport = (user) => {
  //   console.log(user, ".......user");
  // };

  console.log(allUsers, "........allUsers");

  const adminOnePageReportData =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.map((user) => {
      const netPL = getUlShare(user?.total_amount, user?.ul_share);
      return {
        admin_name: (
          <div onClick={() => handleAdminReports(user)}>
            {user?.client_name}
          </div>
        ),
        admin_role: <div>{`${user?.account_role}`}</div>,
        net_pl: (
          <div className={user?.total_amount >= 0 ? "clr-green" : "clr-red"}>
            {user?.total_amount || 0}
          </div>
        ),
        ul_share: (
          <div className={netPL >= 0 ? "clr-green" : "clr-red"}>{netPL}</div>
        ),
      };
    });

  // const adminOnePageReportIndividualData =
  //   induvisualUserReport.length > 0 &&
  //   induvisualUserReport.map((item) => {
  //     return {
  //       series_name: item.series_name,
  //       date_time: "02/08/2023 11:32:00 AM",
  //       team: "india",
  //       win_team: "india",
  //       profit_loss: 50000000,
  //       urs_profilt_loss: 50000000,
  //     };
  //   });

  // const adminOnePageReportIndividualData = [
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

  const AdminOnePagePoupupData =
    induvisualUserReport &&
    induvisualUserReport?.length &&
    induvisualUserReport?.map((match) => {
      // console.log(match?.totalAmount?.totalLossOrProfit, ulShare)
      return {
        series_name: match?.series_name,
        match_place: match?.match_place,
        date: moment(match?.matchTimeStamp).format("DD-MM-YYYY"),
        time: moment(match?.matchTimeStamp).format("mm:ss A"),
        team: `${match?.team1} vs ${match?.team2}`,
        win_team: match?.winTeam,
        admin_pl: match?.totalAmount?.totalLossOrProfit || 0,
        urs_pl: (+match?.totalAmount?.totalLossOrProfit * +ulShare) / 100,
      };
    });
  const adminOnePageReportIndividualData =
    AdminOnePagePoupupData &&
    AdminOnePagePoupupData?.length > 0 &&
    AdminOnePagePoupupData?.map((adminUldata) => ({
      series_name: <div>{adminUldata?.series_name}</div>,
      match_place: <div>{adminUldata?.match_place}</div>,
      date_time: (
        <div className="d-flex flex-column">
          <div>{adminUldata?.date}</div>
          <div>{adminUldata?.time}</div>
        </div>
      ),
      team: <div>{adminUldata?.team}</div>,
      win_team: (
        <div>
          <span className="clr-green">{adminUldata?.win_team}</span>
        </div>
      ),
      admin_pl: (
        <div
          className={`${+adminUldata?.admin_pl >= 0 ? "clr-green" : "clr-red"}`}
        >
          {adminUldata?.admin_pl ? adminUldata?.admin_pl?.toFixed(2) : 0}
        </div>
      ),
      urs_pl: (
        <div
          className={`${+adminUldata?.urs_pl >= 0 ? "clr-green" : "clr-red"}`}
        >
          {adminUldata?.urs_pl ? adminUldata?.urs_pl?.toFixed(2) : 0}
        </div>
      ),
    }));

  console.log(
    adminOnePageReportIndividualData,
    "adminOnePageReportIndividualData..................................."
  );

  const adminOnePageReportIndividualHeadings = [
    { header: "Series Name", field: "series_name" },
    { header: "Match Place", field: "match_place" },
    { header: "Date & Time", field: "date_time" },
    { header: "Team", field: "team" },
    { header: "Win Team", field: "win_team" },
    { header: "Admin P/L", field: "admin_pl" },
    { header: "Urs P/L", field: "urs_pl" },
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
  const getAllUsers = async () => {
    await call(GET_OFFLINE_CLIENTS, { register_id })
      .then((res) => {
        // console.log(res.data);
        // let results = res?.data?.data?.filter(
        //   (item) => item.user_status !== "deleted"
        // );
        let results = res?.data?.data;
        setAllUsers(results);
      })
      .catch((err) => console.log(err));
  };
  const getUserMatches = async (userId) => {
    await call(GET_LIVE_MATCH_RISK_POSITION, { user_id: userId })
      .then((res) => {
        console.log(res.data.data, "Response from popup");
        setInduvisualUserReport(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const handleReport = (report) => {
    setActiveReport(report);
  };

  const [induvisualAdminData, setInduvisualAdminData] = useState({});
  const handleAdminReports = (data) => {
    console.log(data, "......data");
    setAdminOnePageReportPopUp(true);
    setInduvisualAdminData(data);
    getUserMatches(data.register_id);
    setAdminName(data?.admin_name);
    setRole(data?.admin_role);
    setAdminsData(adminOnePageReportIndividualData);
    setAdminsHeadings(adminOnePageReportIndividualHeadings);
    setPopupHeading("Match Wise Share P/L");
  };
  const ulPlatformComm =
    allUsers &&
    allUsers?.length > 0 &&
    allUsers?.map((user) => {
      const netPL = getUlShare(user?.total_amount, user?.ul_share);
      return {
        admin_name: user?.client_name,
        admin_role: user?.account_role,
        ul_platform_comm: (
          <div className={netPL >= 0 ? "green-clr" : "red-clr"}>
            {netPL ? netPL?.toFixed(2) : 0}
          </div>
        ),
      };
    });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  return (
    <div>
      <h6 className="meetings-heading mb-3">Your Share In Admin Book</h6>
      <div className="d-flex align-items-center justify-content-between">
        {/* <div>
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
        </div> */}
        <Button className="all-match-button">All Match</Button>
      </div>
      <hr />

      <div>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th className="text-center">ADMINS NAME</th>
              <th className="text-center">ADMINS ROLE</th>
              <th className="text-center">ADMINS NET P/L</th>
              <th className="text-center">
                {activeReport === "UL/Platform Comm Report"
                  ? "UL /PLATFORM COMM"
                  : "UL SHARE"}
              </th>
            </tr>
          </thead>
          <tbody>
            {adminOnePageReportData.length &&
              adminOnePageReportData?.map((data, index) => (
                <tr key={index}>
                  <td className="cursor-pointer d-flex flex-row justify-content-center align-items-center">
                    {data?.admin_name}{" "}
                    <GiClick className="custom-click-icon ms-1 mt-2" />
                  </td>
                  <td className="text-center">{data?.admin_role}</td>
                  <td className="text-center">{data?.net_pl} </td>
                  <td className="text-center">{data?.ul_share} </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2} className="text-center">
                TOTAL
              </th>
              <th className="text-center clr-green">
                {adminOnePageReportData.length &&
                  adminOnePageReportData
                    ?.reduce(
                      (total, data) => total + parseFloat(data?.profit_loss),
                      0
                    )
                    .toFixed(2)}
              </th>
              <th className="text-center clr-green">
                {adminOnePageReportData.length &&
                  adminOnePageReportData
                    ?.reduce(
                      (total, data) => total + parseFloat(data?.ul_share),
                      0
                    )
                    .toFixed(2)}
              </th>
            </tr>
          </tfoot>
          {adminOnePageReportPopUp && (
            <AdminPopReports
              show={adminOnePageReportPopUp}
              induvisualAdminData={induvisualAdminData}
              onHide={() => setAdminOnePageReportPopUp(false)}
              adminOnePageReportIndividualData={
                adminOnePageReportIndividualData
              }
              data={adminsData}
              columns={adminsHeadings}
              adminName={adminName}
              role={role}
              heading={popupHeading}
              // totalPosition="series_name"
            />
          )}
        </Table>
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
    </div>
  );
};

export default AdminOnePageReport;
