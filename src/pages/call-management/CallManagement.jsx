import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { MdModeEditOutline } from "react-icons/md";

const CallManagement = () => {
  const callManagementData = [
    {
      title: "Sriagent",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Lokesh, Srinivas + 10",
      status: "Join",
      edit: "edit",
    },
    {
      title: "Sriagent",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Lokesh, Srinivas + 10",
      status: "Join",
      edit: "edit",
    },
    {
      title: "Sriagent",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Lokesh, Srinivas + 10",
      status: "Join",
      edit: "edit",
    },
  ];
  return (
    <div className="p-2">
      <div
        className="d-flex align-items-center justify-content-between
    "
      >
        <h3 className="mr-4">Call Management</h3>
        <Button variant="warning">+ Add New Meetings</Button>
      </div>
      <hr />
      <div>
        <h3>Upcoming Meetings</h3>
        <Table className="call-management-data">
          <thead>
            <tr>
              <th>URS</th>
              <th>EVENT NAME</th>
              <th>START DATE & TIME</th>
              <th>USER</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {callManagementData.map((data, index) => (
              <tr key={index}>
                <td>{data?.title}</td>
                <td>{data?.event_name}</td>
                <td>{data?.date}</td>
                <td>{data?.user}</td>
                <td>
                  <Button variant="success" className="rounded-pill">
                    {data?.status}
                  </Button>
                </td>
                <td>
                  <Button
                    type="button"
                    className="bg-secondary text-warning rounded-circle border-0"
                  >
                    <MdModeEditOutline size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default CallManagement;
