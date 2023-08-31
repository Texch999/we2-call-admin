import React, { useState } from "react";
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
