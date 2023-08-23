import React from "react";
import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FiSearch } from "react-icons/fi";

const AddUsers = () => {
  const addUsersData = [
    {
      s_no: 1,
      user_name: "Sai Offline",
      type: "User",
      location: "Hyderabad",
      user: "Sriagent",
      profit_loss: "500000000",
    },
    {
      s_no: 2,
      user_name: "Sai Offline",
      type: "User",
      location: "Hyderabad",
      user: "Sriagent",
      profit_loss: "500000000",
    },
    {
      s_no: 3,
      user_name: "Sai Offline",
      type: "User",
      location: "Hyderabad",
      user: "Sriagent",
      profit_loss: "500000000",
    },
  ];
  const ACTION_LABELS = {
    cp: "CP",
    edit: "EDIT",
    b: "B",
    ub: "UB",
  };
  return (
    <div className="p-4">
      <div>
        <h5 className="meetings-heading">Add Users</h5>
        <div className="d-flex flex-column">
          <span>Wednesday, 2nd August, 2023</span>
          <span>12:22:34 PM</span>
        </div>

        <div className="mt-3 d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Button className="me-2">Agent</Button>
            <p className="mb-0 fs-6">Sri Agent</p>
          </div>

          <Form className="d-flex position-relative">
            <Form.Control
              type="text"
              placeholder="Search User..."
              className="me-3 user-search-input cursor-pointer"
            />
            <FiSearch className="user-search-icon position-absolute" />
            <Button className="add-new-meetings-button">+ Add Users</Button>
          </Form>
        </div>
      </div>
      <hr />
      <div>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th></th>
              <th className="text-center">USER NAME</th>
              <th className="text-center">TYPE</th>
              <th className="text-center">LOCATION</th>
              <th className="text-center">REFERRAL</th>
              <th className="text-center">P/L</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {addUsersData?.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data?.s_no}</td>
                <td className="text-center">{data?.user_name}</td>
                <td className="text-center">{data?.type}</td>
                <td className="text-center">{data?.location}</td>
                <td className="text-center">{data?.user}</td>
                <td className="text-center">{data?.profit_loss}</td>
                <td className="text-center">
                  {Object.keys(ACTION_LABELS).map((action, index) => (
                    <Button
                      key={index}
                      className={`rounded meeting-status-button ${action}-button me-2`}
                    >
                      {ACTION_LABELS[action]}
                    </Button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AddUsers;
