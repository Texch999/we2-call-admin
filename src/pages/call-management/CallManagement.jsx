import React, { useEffect, useState } from "react";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { MdModeEditOutline, MdArrowDownward } from "react-icons/md";
import AddNewMeetingsPopUp from "./AddNewMeetingsPopUp";
import { call } from "../../config/axios";
import CustomPagination from "../pagination/CustomPagination";
import Select from "react-select";
import moment from "moment";
import {
  CREATE_MEETING,
  GET_ADMIN_PACKAGES,
  GET_ALL_CLIENTS,
  GET_ALL_MEETINGS,
  UPDATE_MEETING,
  GET_ALL_MATCHES,
  MANAGEMENT_MATCHES,
} from "../../config/endpoints";

const CallManagement = () => {
  const register_id = localStorage.getItem("register_id");
  const account_role = localStorage.getItem("account_role");
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [personalMeeting, setPersonalMeeting] = useState(false);
  const [professionalMeeting, setprofessionalMeeting] = useState(true);
  const [meetingList, setMeetingList] = useState();
  const [matchesData, setMatchesData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState();

  const meetingOptionsList = matchesData?.map((item) => {
    return {
      value: item?.match_id,
      label: (
        <div className="d-flex align-items-center justify-content-between medium-font">
          <div>{item.sport_name}</div>
          <div>{item.match_name}</div>
        </div>
      ),
    };
  });

  const usersList =
    listOfUsers?.length > 0 &&
    listOfUsers?.map((item) => {
      return { value: item?.register_id, label: item?.user_name };
    });

  const handleSelectedUsers = (data) => {
    setSelectedUsers(data);
  };

  const handlePersonalMeeting = () => {
    setPersonalMeeting(true);
    setprofessionalMeeting(false);
  };
  const handleProfessionalMeeting = () => {
    setprofessionalMeeting(true);
    setPersonalMeeting(false);
  };

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

  const getAllMatches = async () => {
    return await call(MANAGEMENT_MATCHES, {
      account_role: "management",
    })
      .then((res) => {
        return res?.data?.data;
      })
      .catch((err) => console.log(err));
  };

  const getAllAdminMatches = async () => {
    await call(GET_ALL_MATCHES, { account_role, register_id })
      .then(async (res) => {
        const getManagementMatches = await getAllMatches();
        let result = res?.data?.data;
        setMatchesData([...result?.liveMatches, ...getManagementMatches]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllMeetingsData();
    getAdminUsersList();
    getAllAdminMatches();
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

  const meetingType = ["Personal", "Professional"];
  const addusersData = ["select", "animesh", "sri", "jayanth"];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-3 py-2">
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="meetings-heading">Add New Meeting</h5>
      </div>
      <div className="mt-1">
        <div className="w-25 d-flex align-items-center justify-content-between">
          <div
            className={`cursor-pointer fw-semibold btn-bg medium-font text-white text-center py-1 px-3 rounded-pill ${
              professionalMeeting ? "yellow-btn" : ""
            }`}
            onClick={() => handleProfessionalMeeting()}
          >
            Professional
          </div>
          <div
            className={`cursor-pointer fw-semibold btn-bg medium-font text-white text-center py-1 px-3 rounded-pill ${
              personalMeeting ? "yellow-btn" : ""
            }`}
            onClick={() => handlePersonalMeeting()}
          >
            Personal
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <div className="d-flex flex-column">
              <div className="medium-font">Meeting\Event Name</div>
              {professionalMeeting && (
                <Select
                  className="w-100"
                  options={meetingOptionsList}
                  placeholder="Professional Meeting Name..."
                  value={meetingList}
                  // onChange={handleMatchSelect}
                  isSearchable={true}
                />
              )}
              {personalMeeting && (
                <input
                  className="custom-select medium-font btn-bg  all-none p-2 rounded"
                  placeholder="Personal Meeting Name"
                  type="text"
                />
              )}
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <div className="medium-font">Date</div>
              <input
                className="custom-select medium-font btn-bg  all-none p-2 rounded"
                placeholder="Enter Meeting Name"
                type="date"
              />
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <div className="medium-font">Time</div>
              <input
                className="custom-select medium-font btn-bg  all-none p-2 rounded"
                placeholder="Enter Meeting Name"
                type="time"
              />
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <div className="medium-font">Add Users</div>
              <Select
                className="w-100"
                placeholder="Enter Users Name"
                isSearchable={true}
                isMulti={true}
                options={usersList}
                value={selectedUsers}
                onChange={() => handleSelectedUsers()}
              />
            </div>
          </div>
          <div className="col">
            <div className="d-flex flex-column">
              <div className="medium-font">Select Call Type</div>
              <select className="custom-select medium-font btn-bg  all-none p-2 rounded pb-2">
                <option>Select</option>
                <option>Audio Only</option>
                <option>Audio + Video</option>
              </select>
            </div>
          </div>
          <div className="col d-flex align-items-end">
            <div className="cursor-pointer w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold">
              Submit
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h5 className="mb-3 meetings-heading">Upcoming Meetings</h5>
        <div className="call-management-table-height">
          <Table responsive="md" className="call-management-data fixed-table">
            <thead className="z-index-small">
              <tr>
                <th className="text-center">URS</th>
                <th className="text-center">EVENT NAME</th>
                <th className="text-center">START DATE & TIME</th>
                <th className="text-center">USERS</th>
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
        </div>
        {/* <div className="d-flex justify-content-between align-items-center mt-4">
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
        </div> */}
      </div>
      <div className="mt-3">
        <h5 className="mb-3 meetings-heading">UL New Meetings</h5>
        <div className="call-management-table-height">
          <Table responsive="md" className="call-management-data fixed-table">
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
      </div>
      {/* <div className="d-flex justify-content-between align-items-center mt-4">
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
      </div> */}
    </div>
  );
};

export default CallManagement;
