import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";

// import { faEdit } from "@fortawesome/free-solid-svg-icons";

const CallManagement = () => {
  const callManagementColumns = [
    {
      title: "URS",
      event_name: "EVENT NAME",
      date: "START DATE & TIME",
      user: "USER",
      status: "STATUS",
      edit: "",
    },
  ];
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
        <Table>
          <thead>
            {callManagementColumns.map((header, index) => (
              <tr key={index}>
                <th>{header.title}</th>
                <th>{header.event_name}</th>
                <th>{header.date}</th>

                <th>{header.user}</th>
                <th>{header.status}</th>
                <th>{header.edit}</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {callManagementData.map((data, index) => (
              <tr key={index}>
                <td>{data.title}</td>
                <td>{data.event_name}</td>
                <td>{data.date}</td>

                <td>{data.user}</td>
                <td>
                  <Button variant="success">{data.status}</Button>
                </td>
                <td>
                  <Button type="button" className="rounded-circle">
                    edit
                    {/* <FontAwesomeIcon icon={faEdit} className="mr-1" /> */}
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
