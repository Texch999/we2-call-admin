import React, { useState } from "react";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { MdModeEditOutline, MdArrowDownward } from "react-icons/md";
import AddNewMeetingsPopUp from "./AddNewMeetingsPopUp";
import CustomPagination from "../pagination/CustomPagination";

const SuperAdminCallManagement = () => {
  const [modalShow, setModalShow] = useState(false);
  const upcomingMeetingsData = [
    {
      title: "Ramkrishna - SA",
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
      title: "Ramkrishna - SA",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Lokesh, Srinivas",
      status: "Join",
    },
  ];
  const adminNewMeetingsData = [
    {
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      admin_status: "Active",
    },
    {
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      admin_status: "In - Active",
    },
    {
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      admin_status: "Active",
    },
    {
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      admin_status: "In - Active",
    },
  ];
  const meetingType = ["Personal", "Professional", "Admins Meetings"];
  const addusersData = ["select", "ind-120", "srilanka-200", "nz-100"];
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

  return (
    <div className="p-4">
      <div className="d-flex align-items-center justify-content-between">
        <h5 className="meetings-heading">Super Admin Call Management</h5>
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
                        <MdArrowDownward size={14} />
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
        <h5 className="mb-3 meetings-heading">Admin New Meetings</h5>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th scope="col" className="w-50 text-center">
                EVENT NAME
              </th>
              <th scope="col" className="w-25 text-center">
                START DATE & TIME
              </th>
              <th scope="col" className="w-25 text-center">
                ADMINS
              </th>
            </tr>
          </thead>
          <tbody>
            {adminNewMeetingsData?.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data?.event_name}</td>
                <td className="text-center">{data?.date}</td>
                <td className="text-center">
                  <Button
                    className={`rounded-pill w-50 ${
                      data?.admin_status === "Active"
                        ? "active-status-btn"
                        : "inactive-status-btn"
                    }`}
                  >
                    {data?.admin_status}
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
          label="Add Live Scoreboard*"
          show={modalShow}
          selectData={addusersData}
          onHide={() => setModalShow(false)}
        />
      )}
    </div>
  );
};

export default SuperAdminCallManagement;
