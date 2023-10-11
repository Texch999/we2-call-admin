import React, { useEffect, useState } from "react";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { MdModeEditOutline, MdArrowDownward } from "react-icons/md";
import AddNewMeetingsPopUp from "./AddNewMeetingsPopUp";
import { call } from "../../config/axios";
import CustomPagination from "../pagination/CustomPagination";

import {
  CREATE_MEETING,
  GET_ADMIN_PACKAGES,
  GET_ALL_CLIENTS,
  GET_ALL_MEETINGS,
  UPDATE_MEETING,
} from "../../config/endpoints";

const CallManagement = () => {
  const register_id = localStorage.getItem("register_id");
  const account_role = localStorage.getItem("account_role");
  const [modalShow, setModalShow] = useState(false);
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);

  const getAdminUsersList = async () => {
    await call(GET_ALL_CLIENTS, { register_id, account_role })
      .then((res) => {
        const resp = res?.data?.data;
        setListOfUsers(
          resp?.length > 0 &&
            resp?.map((obj) => {
              return {
                user_name: obj?.user_name,
                register_id: obj?.register_id,
              };
            })
        );
      })
      .catch((err) => console.log(err));
  };

  const getAllMeetingsData = async () => {
    await call(GET_ALL_MEETINGS, { register_id })
      .then((res) => setUpcomingMeetings(res?.data?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllMeetingsData();
    getAdminUsersList();
  }, []);

  const upcomingMeetingsData =
    upcomingMeetings?.length >= 0 &&
    upcomingMeetings
      ?.filter((obj) => obj.p_id == register_id)
      ?.sort(
        (a, b) => new Date(b.given_time_stamp) - new Date(a.given_time_stamp)
      )
      ?.map((obj) => {
        const meetingUserData = listOfUsers?.filter((item) =>
          obj.meetingUserIds.includes(item.register_id)
        );
        return {
          ...obj,
          urs: obj?.createdBy,
          event_name: obj?.event_name,
          date: obj?.date,
          time: obj?.time,
          user: meetingUserData.map((obj) => <>{obj?.user_name}</>),
          recording_status: obj?.recording_status,
          action: "edit",
        };
      });

  const ulMeetingsData =
    (upcomingMeetings?.length > 0 &&
      upcomingMeetings
        ?.filter((obj) => obj?.p_id !== register_id)
        ?.sort(
          (a, b) => new Date(b.given_time_stamp) - new Date(a.given_time_stamp)
        )
        ?.map((obj) => {
          return {
            ...obj,
            ul: obj?.createdBy,
            event_name: obj?.event_name,
            date: obj?.date,
            time: obj?.time,
            user: localStorage.getItem("user_name"),
            action: "JOIN",
          };
        })) ||
    [];
  console.log(ulMeetingsData, "ulMeetingsData");

  // const upcomingMeetingsData = [
  //   {
  //     title: "Sri Agent",
  //     event_name:
  //       "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
  //     date: "19 July 2023, 10:00:00 PM",
  //     user: "Lokesh, Srinivas",
  //     status: "Join",
  //   },
  //   {
  //     title: "Sriagent",
  //     event_name:
  //       "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
  //     date: "19 July 2023, 10:00:00 PM",
  //     user: "Lokesh, Srinivas",
  //     status: "Join",
  //   },
  //   {
  //     title: "Sri Agent",
  //     event_name:
  //       "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
  //     date: "19 July 2023, 10:00:00 PM",
  //     user: "Lokesh, Srinivas",
  //     status: "Join",
  //   },
  // ];

  // const ulNewMeetingsData = [
  //   {
  //     title: "UL",
  //     event_name:
  //       "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
  //     date: "19 July 2023, 10:00:00 PM",
  //     user: "Sri Agent",
  //     status: "Join",
  //   },
  //   {
  //     title: "UL",
  //     event_name:
  //       "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
  //     date: "19 July 2023, 10:00:00 PM",
  //     user: "Sri Agent",
  //     status: "Join",
  //   },
  //   {
  //     title: "UL",
  //     event_name:
  //       "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
  //     date: "19 July 2023, 10:00:00 PM",
  //     user: "Sri Agent",
  //     status: "Join",
  //   },
  // ];
  const meetingType = ["Personal", "Professional"];
  const addusersData = ["select", "animesh", "sri", "jayanth"];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  return (
    <div className="p-4">
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="meetings-heading">Call Management</h5>
        <Button
          className="add-new-meetings-button"
          onClick={() => setModalShow(true)}
        >
          + Add New Meetings
        </Button>
      </div>
      <hr />
      <div>
        <h5 className="mb-3 meetings-heading">Upcoming Meetings</h5>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th className="text-center">URS</th>
              <th className="text-center">EVENT NAME</th>
              <th className="text-center">START DATE & TIME</th>
              <th className="text-center">USER</th>
              <th className="text-center">STATUS</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {upcomingMeetingsData?.length > 0 &&
              upcomingMeetingsData?.map((data, index) => (
                <tr key={index}>
                  <td className="text-center">{data?.urs}</td>
                  <td className="text-center">{data?.event_name}</td>
                  <td className="text-center">
                    {data?.date},{data?.time}
                  </td>
                  <td className="text-center">
                    <Dropdown size="lg" className="user-dropdown-toggle">
                      <Dropdown.Toggle>
                        {data?.user[0]}
                        <span className="ms-1 user-count-number">
                          + {data?.user?.length - 1}
                        </span>
                        <Button
                          type="button"
                          size="sm"
                          className="ms-2 text-warning bg-transparent rounded-circle border border-warning arrow-dropdown-icon-button"
                        >
                          <MdArrowDownward size={16} />
                        </Button>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {data?.user?.map((userObj) => (
                          <Dropdown.Item href="#action1">
                            {userObj}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td className="text-center">
                    {data?.recording_status === "started" ? (
                      <Button className="rounded-pill meeting-status-button">
                        Started
                      </Button>
                    ) : (
                      <Button className="rounded-pill meeting-status-button">
                        Upcoming
                      </Button>
                    )}
                    {data?.recording_status === "upcoming" && (
                      <Button className="rounded-pill meeting-status-button">
                        Upcoming
                      </Button>
                    )}
                    {data?.recording_status === "join" && (
                      <Button className="rounded-pill meeting-status-button">
                        Join
                      </Button>
                    )}
                  </td>
                  <td className="text-center">
                    <Button
                      type="button"
                      className="text-warning rounded-circle border-0 meetings-edit-button"
                    >
                      <MdModeEditOutline size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
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

      <div>
        <h5 className="mb-3 meetings-heading">UL New Meetings</h5>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th className="text-center">UL</th>
              <th className="text-center">EVENT NAME</th>
              <th className="text-center">START DATE & TIME</th>
              <th className="text-center">USER</th>
              <th className="text-center">STATUS</th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {ulMeetingsData?.length > 0 &&
              ulMeetingsData?.map((data, index) => (
                <tr key={index}>
                  <td className="text-center">{data?.ul}</td>
                  <td className="text-center">{data?.event_name}</td>
                  <td className="text-center">
                    {data?.date},{data?.time}
                  </td>
                  <td className="text-center">{data?.user}</td>
                  <td className="text-center" colSpan={2}>
                    <Button className="rounded-pill meeting-status-button">
                      {data?.action}
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
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

      {modalShow && (
        <AddNewMeetingsPopUp
          meetingType={meetingType}
          label="Add Users*"
          show={modalShow}
          selectData={addusersData}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
};

export default CallManagement;
