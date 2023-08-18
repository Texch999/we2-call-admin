import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { MdModeEditOutline } from "react-icons/md";

const CallManagement = () => {
  const upcomingMeetingsData = [
    {
      title: "Ramkrishna - SA",
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
      title: "Ramkrishna - SA",
      event_name:
        "Newzelend vs South Africa Test Series Newzelend Onquard  Stadium",
      date: "19 July 2023, 10:00:00 PM",
      user: "Lokesh, Srinivas + 10",
      status: "Join",
      edit: "edit",
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
  return (
    <div className="p-2">
      <div className="d-flex align-items-center justify-content-between">
        <h4>Call Management</h4>
        <Button variant="warning">+ Add New Meetings</Button>
      </div>
      <hr />
      <div>
        <h4 className="mb-3">Upcoming Meetings</h4>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr className="text-center">
              <th>URS</th>
              <th>EVENT NAME</th>
              <th>START DATE & TIME</th>
              <th>USER</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {upcomingMeetingsData?.map((data, index) => (
              <tr key={index} className="text-center">
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
      <div>
        <h4 className="mb-3">Admin New Meetings</h4>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th scope="col">EVENT NAME</th>
              <th scope="col">START DATE & TIME</th>
              <th scope="col">ADMINS</th>
            </tr>
          </thead>
          <tbody>
            {adminNewMeetingsData?.map((data, index) => (
              <tr key={index}>
                <td>{data?.event_name}</td>
                <td>{data?.date}</td>
                <td>
                  <Button className="rounded-pill w-75">
                    {data?.admin_status}
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
