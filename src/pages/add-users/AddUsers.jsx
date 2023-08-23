import React, { useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import AddUserPopUp from "./AddUserPopUp";

const AddUsers = () => {
  const [filteredValue, setFilteredValue] = useState("");
  const [modalShow, setModalShow] = useState(false);

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
      user_name: "Sangram",
      type: "User",
      location: "Hyderabad",
      user: "Sriagent",
      profit_loss: "500000000",
    },
    {
      s_no: 3,
      user_name: "Srikanth",
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
  const handleUserChange = (e) => {
    setFilteredValue(e.target.value);
  };
  const filteredUsersData = addUsersData.filter((data) => {
    return data?.user_name.toLowerCase().includes(filteredValue.toLowerCase());
  });
  return (
    <div className="p-4">
      <div>
        <h5 className="meetings-heading">Add Users</h5>
        <div className="d-flex flex-column add-users-date">
          <span>Wednesday, 2nd August, 2023</span>
          <span>12:22:34 PM</span>
        </div>

        <div className="mt-3 d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Button className="me-2 agent-button">Agent</Button>
            <span className="mb-0 add-user-name">Sri Agent</span>
          </div>

          <Form className="d-flex position-relative">
            <Form.Control
              type="text"
              placeholder="Search User..."
              className="me-3 user-search-input cursor-pointer"
              value={filteredValue}
              onChange={(e) => handleUserChange(e)}
            />
            <FiSearch className="user-search-icon position-absolute" />
            <Button
              className="add-new-meetings-button"
              onClick={() => setModalShow(true)}
            >
              + Add Users
            </Button>
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
            {filteredUsersData?.map((data, index) => (
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
          {modalShow && (
            <AddUserPopUp show={modalShow} onHide={() => setModalShow(false)} />
          )}
        </Table>
      </div>
    </div>
  );
};

export default AddUsers;
