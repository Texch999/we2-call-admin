import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import Table from "./Table";
import { call } from "../../config/axios";
import {
  GET_ALL_CLIENTS,
  GET_ALL_MEETINGS,
  SUMMARY_DATA,
} from "../../config/endpoints";
import moment from "moment";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "react-bootstrap";

function MeetingAndSummary() {
  const history = useHistory();
  let register_id = localStorage?.getItem("register_id");
  const [liveMeetings, setLiveMeetings] = useState([]);
  const [allAdmins, setAllAdmins] = useState([]);
  const [summaryData, setSummaryData] = useState({});

  let meetingUserData;
  const data1 = liveMeetings?.map((obj) => {
    meetingUserData = allAdmins?.filter((item) =>
      obj.meetingUserIds.includes(item.register_id)
    );
    return {
      ...obj,
      meetingUserData: meetingUserData?.map((obj) => obj.user_name),
    };
  });

  const data2 =
    data1?.length > 0 &&
    data1?.map((meeting) => {
      return {
        admin: meeting?.createdBy || "",
        event: (
          <div>
            {meeting?.event_name}
            <br />
            {moment(meeting?.given_time_stamp).format("DD-MM-YYY")} -{" "}
            {moment(meeting?.given_time_stamp).format("hh:mm:s")}
          </div>
        ),
        user: (
          <div>
            {meetingUserData[0]?.user_name} +<br />
            {meetingUserData.length - 1} Others
          </div>
        ),
        status: (
          <td className="text-center">
            {meeting?.recording_status === "started" ? (
              <Button className="rounded-pill meeting-status-button">
                Started
              </Button>
            ) : (
              <Button className="rounded-pill meeting-status-button">
                Upcoming
              </Button>
            )}
            {meeting?.recording_status === "upcoming" && (
              <Button className="rounded-pill meeting-status-button">
                Upcoming
              </Button>
            )}
            {meeting?.recording_status === "join" && (
              <Button className="rounded-pill meeting-status-button">
                Join
              </Button>
            )}
          </td>
        ),
      };
    });

  const columns = [
    { header: "Admin", field: "admin" },
    { header: "Event Name", field: "event" },
    { header: "User", field: "user" },
    { header: "Status", field: "status" },
  ];


  const getAllAdmins = async () => {
    await call(GET_ALL_CLIENTS, { register_id })
      .then((res) => {
        setAllAdmins(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const getLiveMeetings = async () => {
    await call(GET_ALL_MEETINGS, { register_id })
      .then((res) => {
        setLiveMeetings(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const getAllSummaryData = async () => {
    await call(SUMMARY_DATA, { register_id })
      .then((res) => setSummaryData(res?.data?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (register_id) {
      getLiveMeetings();
      getAllAdmins();
      getAllSummaryData();
    }
  }, []);
  const summaryArray = [summaryData];

  return (
    <div className="row meet-box-height ">
      <div className="col-6 p-2">
        <div className="meetings-container ">
          <div className="row p-3 align-center">
            <h5 className="col-10 meetings-heading">Live/Upcoming Meetings</h5>
            <div
              className="col-2 d-flex align-items-center justify-content-center see-all"
              onClick={() => history.push("/call-management")}
            >
              <div className="meetings-heading me-1">See All</div>
              <AiOutlineRight />
            </div>
          </div>
          <Table data={data2} columns={columns} />
        </div>
      </div>
      <div className="col-6 p-2">
        <div className="meetings-container p-3">
          <div className="row  align-center mb-3">
            <h5 className="col-9 meetings-heading">Summary</h5>
            <select className="col-3 d-flex align-items-center justify-content-center see-all">
              <option value="">Today</option>
              <option value="">This Week</option>
              <option value="">This Month</option>
            </select>
          </div>
          {summaryArray?.length > 0 &&
            summaryArray?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="w-100 summary-line d-flex">
                    <h6 className="meetings-heading">Total Bets</h6>
                    <h6 className="meetings-heading">{item?.TotalBets}</h6>
                  </div>
                  <div className="w-100 summary-line d-flex">
                    <h6 className="meetings-heading">Active Agents</h6>
                    <h6 className="meetings-heading">{item?.activeAgents}</h6>
                  </div>
                  <div className="w-100 summary-line d-flex">
                    <h6 className="meetings-heading">Active Users</h6>
                    <h6 className="meetings-heading">{item?.activeUsers}</h6>
                  </div>
                  <div className="w-100 summary-line d-flex">
                    <h6 className="meetings-heading">Total Profit Loss</h6>
                    <h6
                      className={`${
                        item?.totalLossOrProfit >= 0
                          ? "clr-green meetings-heading "
                          : "meetings-heading clr-red"
                      }`}
                    >
                      {item?.totalLossOrProfit}
                    </h6>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default MeetingAndSummary;
