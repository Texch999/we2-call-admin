import React, { useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import AddUserPopUp from "./AddUserPopUp";
import ChangePassword from "./ChangePassword";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

const AddUsers = () => {
  const [filteredValue, setFilteredValue] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showChangePopup, setShowChangePopup] = useState(false);

  const handleCpButton = (value) => {
    {
      value === "CP" && setShowChangePopup(true);
    }
  };
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
    {
      s_no: 4,
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

  const [changePasswordSubmit, setChangePasswordSubmit] = useState(false);
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
            <span className="mb-0 add-user-name">Srikanth</span>
          </div>

          <Form className="d-flex">
            <div className="position-relative">
              <Form.Control
                type="text"
                placeholder="Search User..."
                className="me-3 user-search-input cursor-pointer"
                value={filteredValue}
                onChange={(e) => handleUserChange(e)}
              />
              <FiSearch className="user-search-icon position-absolute" />
            </div>

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
                <td className="text-center">
                  {data?.user_name}{" "}
                  <Button className="ms-1 border-0 status-button"></Button>
                </td>
                <td className="text-center">{data?.type}</td>
                <td className="text-center">{data?.location}</td>
                <td className="text-center">{data?.user}</td>
                <td className="text-center">{data?.profit_loss}</td>
                <td className="text-center">
                  {Object.keys(ACTION_LABELS).map((action, index) => (
                    <Button
                      key={index}
                      className={`rounded meeting-status-button ${action}-button me-2`}
                      onClick={() => handleCpButton(ACTION_LABELS[action])}
                    >
                      {ACTION_LABELS[action]}
                    </Button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={5} className="text-center">TOTAL</th>
              <th className="clr-green text-center" >
                {filteredUsersData
                  ?.reduce(
                    (total, data) => total + parseFloat(data?.profit_loss),
                    0
                  )
                  .toFixed(2)}
              </th>
              <th></th>
            </tr>
          </tfoot>
          {modalShow && (
            <AddUserPopUp
              show={modalShow}
              onHide={() => setModalShow(false)}
              filteredUsersData={filteredUsersData}
            />
          )}
        </Table>
      </div>
      <ChangePassword
        showChangePopup={showChangePopup}
        setShowChangePopup={setShowChangePopup}
        setChangePasswordSubmit={setChangePasswordSubmit}
      />
      <MatchSubmitPopup
        header={"You Are Successfully Changed your Password"}
        state={changePasswordSubmit}
        setState={setChangePasswordSubmit}
      />
    </div>
  );
};

export default AddUsers;
