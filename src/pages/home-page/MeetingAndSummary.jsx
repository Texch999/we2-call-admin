import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import Table from "./Table";
import { call } from "../../config/axios";
import { GET_ALL_CLIENTS, GET_ALL_MEETINGS } from "../../config/endpoints";
import moment from "moment";

function MeetingAndSummary() {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [liveMeetings, setLiveMeetings] = useState([]);
  const [allAdmins, setAllAdmins] = useState([]);
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
    data1?.map((meeting, index) => {
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
        user: meetingUserData.map((obj) => (
          <div>
            {obj.user_name} +<br />
            {meetingUserData.length - 1} others
          </div>
        )),
        status: <div>{meeting.recording_status}</div>,
      };
    });

  const columns = [
    { header: "Admin", field: "admin" },
    { header: "Event Name", field: "event" },
    { header: "User", field: "user" },
    { header: "Status", field: "status" },
  ];

  const summaryContent = [
    {
      users: "Active Users",
      count: "00",
    },
    {
      users: "Active Agents",
      count: "00",
    },
    {
      users: "Turn Over",
      count: "00",
    },
    {
      users: "Profit/Loss",
      count: "00",
    },
    {
      users: "Total Bets",
      count: "00",
    },
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

  useEffect(() => {
    if (register_id) {
      getLiveMeetings();
      getAllAdmins();
    }
  }, []);

  console.log(meetingUserData, ".......heloLIveMeeting");
  return (
    <div className="row meet-box-height ">
      <div className="col-6 p-2">
        <div className="meetings-container ">
          <div className="row p-3 align-center">
            <h5 className="col-9 meetings-heading">Live/Upcoming Meetings</h5>
            <div className="col-3 d-flex">
              <h6 className="meetings-heading">See All</h6>
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
            <div className="col-3 d-flex">
              <h6 className="meetings-heading">See All</h6>
              <AiOutlineRight />
            </div>
          </div>
          {summaryContent.map((item, index) => {
            return (
              <div key={index} className="w-100 summary-line d-flex">
                <h6 className="meetings-heading">{item.users}</h6>
                <h6 className="meetings-heading">{item.count}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MeetingAndSummary;
