import React, { useEffect, useState } from "react";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { MdModeEditOutline, MdArrowDownward } from "react-icons/md";
import AddNewMeetingsPopUp from "./AddNewMeetingsPopUp";

const CallManagement = () => {
  const [modalShow, setModalShow] = useState(false);
  const upcomingMeetingsData = [
    {
      title: "Sri Agent",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Lokesh, Srinivas",
      status: "Join",
    },
    {
      title: "Sriagent",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Lokesh, Srinivas",
      status: "Join",
    },
    {
      title: "Sri Agent",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Lokesh, Srinivas",
      status: "Join",
    },
  ];
  const ulNewMeetingsData = [
    {
      title: "UL",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Sri Agent",
      status: "Join",
    },
    {
      title: "UL",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Sri Agent",
      status: "Join",
    },
    {
      title: "UL",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Sri Agent",
      status: "Join",
    },
  ];
  const meetingType = ["Personal", "Professional"];
  const addusersData = ["select", "animesh", "sri", "jayanth"];
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
                  placeholder="Professional Meeting Name..."
                  isSearchable={true}
                  options={meetingOptionsList}
                  value={meetingList || ""}
                  onChange={(e) => handleMatchSelect(e)}
                />
              )}
              {personalMeeting && (
                <input
                  className="custom-select medium-font btn-bg  all-none p-2 rounded"
                  placeholder="Personal Meeting Name"
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
              <div className="medium-font">Add Users</div>
              <Select
                className="w-100"
                placeholder="Enter Users Name"
                isSearchable={true}
                closeMenuOnSelect={false}
                isMulti
                options={usersList}
                value={selectedUsers || ""}
                onChange={(e) => handleSelectedUsers(e)}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-2  col-sm-4">
            <div className="d-flex flex-column">
              <div className="medium-font">Select Call Type</div>
              <select
                className="custom-select medium-font btn-bg  all-none p-2 rounded pb-2"
                name="video_call_type"
                value={meetingInput?.video_call_type || ""}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select</option>
                <option value={0}>Audio Only</option>
                <option value={1}>Audio + Video</option>
              </select>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-4 d-flex align-items-end">
            <div
              className="cursor-pointer w-100 text-center rounded medium-font p-2 yellow-btn fw-semibold"
              onClick={() => handleOpenSelectYourPackage()}
            >
              Submit
            </div>
          </div>
        </div>
        {error && (
          <div className="red-color text-center medium-font mt-1">{error}</div>
        )}
      </div>
      <div className="mt-3">
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
            {upcomingMeetingsData?.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data?.title}</td>
                <td className="text-center">{data?.event_name}</td>
                <td className="text-center">{data?.date}</td>
                <td className="text-center">
                  <Dropdown size="lg" className="user-dropdown-toggle">
                    <Dropdown.Toggle>
                      {data?.user}{" "}
                      <span className="ms-1 user-count-number"> +10 </span>
                      <Button
                        type="button"
                        size="sm"
                        className="ms-2 text-warning bg-transparent rounded-circle border border-warning arrow-dropdown-icon-button"
                      >
                        <MdArrowDownward size={16} />
                      </Button>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#action1">Demo 01</Dropdown.Item>
                      <Dropdown.Item href="#action2">Lokesh</Dropdown.Item>
                      <Dropdown.Item href="#action3">Jayanth</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
                <td className="text-center">
                  <Button className="rounded-pill meeting-status-button">
                    {data?.status}
                  </Button>
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
            {ulNewMeetingsData?.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data?.title}</td>
                <td className="text-center">{data?.event_name}</td>
                <td className="text-center">{data?.date}</td>
                <td className="text-center">{data?.user}</td>
                <td className="text-center" colSpan={2}>
                  <Button className="rounded-pill meeting-status-button">
                    {data?.status}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
