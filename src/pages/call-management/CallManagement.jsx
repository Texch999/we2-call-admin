import React, { useEffect, useState } from "react";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { MdModeEditOutline, MdArrowDownward } from "react-icons/md";
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
import SelectYourPackagePopup from "./SelectYourPackagePopup";
import CallEditPopup from "./CallEditPopup";
import MatchSubmitPopup from "./../match-popups/MatchSubmitPopup";
import MeetingEditPopup from "./MeetingEditPopup";
import { useHistory } from "react-router";

const CallManagement = () => {
  const register_id = localStorage.getItem("register_id");
  const account_role = localStorage.getItem("account_role");
  const history = useHistory();
  const [status, setStatus] = useState(false);
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [personalMeeting, setPersonalMeeting] = useState(false);
  const [professionalMeeting, setprofessionalMeeting] = useState(true);
  const [meetingType, setMeetingType] = useState("Professional");
  const [meetingList, setMeetingList] = useState();
  const [matchesData, setMatchesData] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState();
  const [meetingInput, setMeetingInput] = useState({});
  const [adminSubscription, setAdminSubscription] = useState([]);
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [error, setError] = useState("");
  const [meetingEditPopup, setMeetingEditPopup] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState("");
  const [meetingSuccessPopup, setMeetingSuccessPopup] = useState(false);
  const [selectYourPackagePopup, setSelectYourPackagePopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const packageLimits = adminSubscription?.package_limits;

  const handleChange = (e) => {
    setMeetingInput({ ...meetingInput, [e.target.name]: e.target.value });
  };

  const handleOpenEditPopup = (data) => {
    setEditPopup(!editPopup);
    setSelectedMeeting(data);
    if (data?.meeting_type == "Professional") {
      setprofessionalMeeting(true);
      setPersonalMeeting(false);
    }
    if (data?.meeting_type == "Personal") {
      setPersonalMeeting(true);
      setprofessionalMeeting(false);
    }
  };

  const onEditClick = (flag) => {
    setEditPopup(!editPopup);
    if (flag) {
      const obj = {
        ...selectedMeeting,
        date: moment(selectedMeeting.date).format("YYYY-MM-DD"),
        time: moment(selectedMeeting.time, ["h:mm:ss A"]).format("HH:mm"),
        video_call_type: selectedMeeting?.video_call_type == true ? 1 : 0,
      };
      const list = (
        listOfUsers?.length &&
        listOfUsers?.filter(
          (item) =>
            selectedMeeting?.meetingUserIds.includes &&
            selectedMeeting?.meetingUserIds.includes(item.register_id)
        )
      )?.map((item) => {
        return { value: item?.register_id, label: item?.user_name };
      });
      setSelectedUsers(list);
      console.log(list, "USER LIST");
      const activeMeetingIndex =
        selectedMeeting?.meeting_type == "Professional"
          ? "Professional"
          : "Personal";
      setMeetingType(activeMeetingIndex);
      setMeetingList({
        value: selectedMeeting?.match_id,
        label: (
          <div className="d-flex align-items-center justify-content-between medium-font">
            <div>{selectedMeeting?.match_name}</div>
          </div>
        ),
      });

      setMeetingInput({ ...meetingInput, ...obj });
    }
  };

  const handlePackageSelection = (e) => {
    setSelectedPackages(e);
  };

  const resetFields = () => {
    setMeetingInput({});
    setMeetingList("");
    setSelectedUsers([]);
  };

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

  const handleMatchSelect = (data) => {
    setMeetingList(data);
    const selectedManagementMeeting = matchesData?.find(
      (obj) => obj?.match_id == data?.value
    );
    setMeetingInput({
      ...meetingInput,
      event_name: selectedManagementMeeting?.series_name,
      match_name: selectedManagementMeeting?.match_name,
      date: moment(selectedManagementMeeting?.date).format("YYYY-MM-DD"),
      time: moment(selectedManagementMeeting?.matchTimeStamp, [
        "h:mm:ss A",
      ]).format("hh:mm"),
      match_id: selectedManagementMeeting?.match_id,
    });
  };
  const usersList =
    listOfUsers?.length > 0 &&
    listOfUsers?.map((item) => {
      return { value: item?.register_id, label: item?.user_name };
    });
  const handleSelectedUsers = (data) => {
    setSelectedUsers(data);
  };

  const handlePersonalMeeting = () => {
    setMeetingType("Personal");
    setPersonalMeeting(true);
    setprofessionalMeeting(false);
  };
  const handleProfessionalMeeting = () => {
    setMeetingType("Professional");
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
      .then((res) => {
        setUpcomingMeetings(res?.data?.data);
      })
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

  const upcomingMeetingsData =
    upcomingMeetings?.length >= 0 &&
    upcomingMeetings
      ?.filter((obj) => obj.p_id == register_id)
      ?.map((item) => {
        const dateTimeString = `${item.given_time_stamp}`;
        const timestamp = new Date(dateTimeString).getTime();
        item.timestamp = timestamp;
        return item;
      })
      ?.sort((a, b) => b.timestamp - a.timestamp)
      ?.map((obj) => {
        const meetingUserData =
          (listOfUsers.length &&
            listOfUsers?.filter(
              (item) =>
                obj?.meetingUserIds.includes &&
                obj?.meetingUserIds.includes(item.register_id)
            )) ||
          [];
        return {
          ...obj,
          urs: obj?.createdBy,
          event_name: obj?.event_name,
          date: obj?.date,
          time: obj?.time,
          user:
            meetingUserData?.length > 0 &&
            meetingUserData?.map((obj) => obj?.user_name),
          recording_status: obj?.recording_status,
          action: "--",
        };
      });
  console.log(meetingInput, "===>upcomingMeetings");
  const ulMeetingsData =
    (upcomingMeetings?.length >= 0 &&
      upcomingMeetings
        ?.filter((obj) => obj.p_id !== register_id)
        ?.map((item) => {
          const dateTimeString = `${item.given_time_stamp}`;
          const timestamp = new Date(dateTimeString).getTime();
          item.timestamp = timestamp;
          return item;
        })
        ?.sort((a, b) => b.timestamp - a.timestamp)
        ?.map((obj) => {
          return {
            ...obj,
            ul: obj?.createdBy,
            event_name: obj?.event_name,
            date: moment(obj?.date).format("DD-MM-YYYY"),
            time: obj?.time,
            user: localStorage.getItem("user_name"),
            action: "--",
          };
        })) ||
    [];

  const getAdminPackages = async () => {
    await call(GET_ADMIN_PACKAGES, { register_id })
      .then((res) => {
        setAdminSubscription(res?.data?.data?.subscriptions || []);
      })
      .catch((err) => console.log(err));
  };

  const handleOpenSelectYourPackage = () => {
    if (
      !meetingList ||
      !selectedUsers ||
      !meetingInput?.date ||
      !meetingInput?.time ||
      !meetingInput?.video_call_type
    ) {
      setError("Please Enter Required Fields");
      return;
    }
    setSelectYourPackagePopup(true);
  };

  const handleSubmitButton = async () => {
    console.log("UPDATE TWO");
    if (!selectedPackages?.package_id) {
      setError("Please Select Package");
      return;
    }
    const payload = {
      ...meetingInput,
      meetingUserIds: selectedUsers?.map((obj) => obj?.value),
      register_id,
      isvideo_enable: "yes",
      meeting_type: meetingType,
      package_id: selectedPackages?.package_id,
      video_call_type: meetingInput?.video_call_type == 1 ? true : false,
    };
    setIsProcessing(true);
    console.log(payload, "PAYLOAD");
    const url = selectedMeeting ? UPDATE_MEETING : CREATE_MEETING;
    await call(url, payload)
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          setIsProcessing(false);
          setSelectedPackages({});
          setSelectedMeeting({});
          getAllMeetingsData();
          resetFields();
          setMeetingSuccessPopup(true);
          setTimeout(() => {
            setMeetingSuccessPopup(false);
          }, 1000);
          setError(
            res?.data?.message ? res?.data?.message : "Something Went Wrong"
          );
          setTimeout(() => {
            setError("");
          }, 1000);
        } else {
          setIsProcessing(false);
          setError(
            res?.data?.message ? res?.data?.message : "Something Went Wrong"
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        console.log(err);
      });
  };

  const handleOpenJoinPopup = (data, isNotCreated) => {
    if (isNotCreated) {
      history.push(`/meeting/${data?.meeting_id}`);
      localStorage.setItem("isAdminMeeting", false);
      return;
    }
    if (parseInt(packageLimits?.duration) < 0) {
      setError({ message: "Insuffient package hrs, Please upgarde hrs!" });
      return;
    }
    if (packageLimits?.members < data.meetingUserIds?.length) {
      setError({ message: "Users Limit exceeded, Please Update" });
      return;
    }
    if (!packageLimits) {
      history.push(`/meeting/${data?.meeting_id}`);
      localStorage.setItem("isAdminMeeting", true);
    } else {
      setError({
        message: "you don't have any subscription, Please upgarde !",
      });
    }
  };

  const handleJoinMeeting = (data) => {
    history.push(`/meeting/${data?.meeting_id}`);
  };

  useEffect(() => {
    getAdminUsersList();
    getAllAdminMatches();
    getAdminPackages();
  }, []);

  useEffect(() => {
    getAllMeetingsData();
  }, [status]);

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
          <div className="col-lg-2 col-md-2 col-sm-4">
            <div className="d-flex flex-column">
              <div className="medium-font">Meeting\Event Name</div>
              {professionalMeeting && (
                <Select
                  className="w-100"
                  placeholder="Meeting Name..."
                  options={meetingOptionsList}
                  value={meetingList}
                  onChange={handleMatchSelect}
                  isSearchable={true}
                />
              )}
              {personalMeeting && (
                <input
                  className="custom-select medium-font btn-bg  all-none p-2 rounded"
                  placeholder="Meeting Name"
                  type="text"
                  name="event_name"
                  value={meetingInput?.event_name || ""}
                  onChange={(e) => handleChange(e)}
                />
              )}
            </div>
          </div>
          <div className="col-lg-2 col-md-2  col-sm-4">
            <div className="d-flex flex-column">
              <div className="medium-font">Date</div>
              <input
                className="custom-select medium-font btn-bg  all-none p-2 rounded"
                placeholder="Enter Meeting Name"
                type="date"
                name="date"
                value={meetingInput?.date || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2  col-sm-4">
            <div className="d-flex flex-column">
              <div className="medium-font">Time</div>
              <input
                className="custom-select medium-font btn-bg  all-none p-2 rounded"
                placeholder="Enter Meeting Name"
                type="time"
                name="time"
                value={meetingInput?.time || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2  col-sm-4">
            <div className="d-flex flex-column">
              <div className="medium-font">Select Call Type</div>
              <select
                className="custom-select medium-font btn-bg  all-none p-2 rounded pb-2"
                name="video_call_type"
                value={meetingInput?.video_call_type}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select</option>
                <option value={0}>Audio Only</option>
                <option value={1}>Audio + Video</option>
              </select>
            </div>
          </div>
          <div className="col-lg-3 col-md-3  col-sm-6">
            <div className="d-flex flex-column">
              <div className="medium-font">Add Users</div>
              <Select
                className="w-100"
                placeholder="User Names"
                options={usersList}
                value={selectedUsers}
                onChange={handleSelectedUsers}
                isSearchable={true}
                closeMenuOnSelect={false}
                isMulti={true}
              />
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-2 d-flex align-items-end">
            <div
              className="cursor-pointer w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold"
              onClick={() => handleOpenSelectYourPackage()}
            >
              {isProcessing
                ? "Processing..."
                : Object.keys(selectedMeeting)?.length === 0
                ? "Submit"
                : "Update"}
            </div>
          </div>
        </div>
        {error && (
          <div className="red-color text-center medium-font mt-1">{error}</div>
        )}
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
                <th className="text-center">ACTION</th>
                <th className="text-center">EDIT</th>
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
                        <Dropdown.Menu className="meeting-user-list">
                          {data?.user?.length > 0 &&
                            data?.user?.map((userObj) => (
                              <Dropdown.Item href="#action1">
                                {userObj}
                              </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className="text-center">
                      <Button
                        className="rounded-pill meeting-status-button"
                        onClick={() => handleOpenJoinPopup(data)}
                      >
                        JOIN
                      </Button>
                    </td>
                    <td className="text-center">
                      {register_id == data?.p_id && (
                        <Button
                          type="button"
                          className="text-warning rounded-circle border-0 meetings-edit-button p-2"
                          onClick={() => handleOpenEditPopup(data)}
                        >
                          <MdModeEditOutline className="d-flex" size={18} />
                        </Button>
                      )}
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
                      <Button
                        className="rounded-pill meeting-status-button"
                        onClick={() => handleJoinMeeting(data)}
                      >
                        JOIN
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
      <SelectYourPackagePopup
        selectYourPackagePopup={selectYourPackagePopup}
        setSelectYourPackagePopup={setSelectYourPackagePopup}
        error={error}
        adminSubscription={adminSubscription}
        handlePackageSelection={(e) => handlePackageSelection(e)}
        handleSubmitButton={() => handleSubmitButton()}
      />
      <CallEditPopup
        meetingEditPopup={meetingEditPopup}
        setMeetingEditPopup={setMeetingEditPopup}
      />
      <MatchSubmitPopup
        header={"Meeting Created Succesfully"}
        state={meetingSuccessPopup}
        setState={setMeetingSuccessPopup}
      />
      <MeetingEditPopup
        openPopup={editPopup}
        closePopup={setEditPopup}
        onEditClick={onEditClick}
        displayData={"Are You Sure You Want To Edit This Meeting"}
      />
    </div>
  );
};

export default CallManagement;
