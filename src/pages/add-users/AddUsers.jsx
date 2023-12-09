import { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import AddUserPopUp from "./AddUserPopUp";
import ChangePassword from "./ChangePassword";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
import { call } from "../../config/axios";
import { GET_ALL_CLIENTS, BLOCKUNBLOCK } from "../../config/endpoints";
import AddUserSuccessPopUp from "./AddUserSuccessPopUp";
import BlockUnBlockPopUp from "./BlockUnBlockPopUp";
import ChangePasswordSuccessPopUp from "./ChangePasswordSuccessPopUp";
import { TfiSharethis } from "react-icons/tfi";
import AdminDetailsSharePopup from "./AdminDetailsSharePopup";

const AddUsers = () => {
  const register_id = localStorage?.getItem("register_id");
  const creator_id = localStorage?.getItem("creator_id");
  const account_role = localStorage?.getItem("account_role");
  const user_name = localStorage?.getItem("user_name");

  const [filteredValue, setFilteredValue] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showChangePopup, setShowChangePopup] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [isUserAdded, setIsUserAdded] = useState(false);
  const [editData, setEditData] = useState(false);
  const [inputData, setInputData] = useState({});
  const [editStatus, setEditStatus] = useState(false);
  const [addSuccessPopUp, setAddSuccessPopUp] = useState(false);
  const [blockStatus, setBlockStatus] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleEditButton = (data) => {
    setEditStatus(true);
    setInputData(data);
    setModalShow(true);
  };

  const handleAddUsers = () => {
    setModalShow(true);
  };
  const allUsersData =
    usersData?.length > 0 &&
    usersData?.map((user, index) => {
      return {
        s_no: index + 1,
        user_name: user?.user_name,
        share: user?.share,
        ul_share: user?.ul_share,
        type: user?.account_role,
        location: user?.location,
        register_id: user?.register_id,
        creator_id: user?.creator_id,
        active: user?.active,
        user: "",
        profit_loss: 0,
        first_name: user?.first_name,
        password: user?.password,
      };
    });

  const handleBlock = async () => {
    setIsProcessing(true);
    await call(BLOCKUNBLOCK, {
      register_id: selectedUser?.register_id,
      creator_id: register_id,
      active: !selectedUser?.active,
      account_role: selectedUser?.type,
    })
      .then((res) => {
        setIsProcessing(false);
        setBlockStatus(false);
        setIsUserAdded((prev) => !prev);
      })
      .catch((err) => {
        setSelectedUser("");
        setIsProcessing(false);
        console.log(err);
      });
  };

  const [changePasswordSubmit, setChangePasswordSubmit] = useState(false);
  const handleUserChange = (e) => {
    setFilteredValue(e.target.value);
  };
  const getAllClients = async () => {
    await call(GET_ALL_CLIENTS, { register_id, account_role })
      .then((res) => {
        const results =
          res?.data &&
          res?.data?.data?.length > 0 &&
          res?.data?.data?.filter((i) => i.account_role === "client");
        setUsersData(results);
      })
      .catch((err) => console.log(err));
  };

  const getFilteredUsers = () => {
    if (!filteredValue) {
      return allUsersData; // If search value is empty, return all data
    }

    // Filter users based on the search input
    const filteredUsers =
      allUsersData &&
      allUsersData?.length > 0 &&
      allUsersData?.filter((user) =>
        user.user_name.toLowerCase().includes(filteredValue.toLowerCase())
      );

    return filteredUsers;
  };

  const filteredUsersData = getFilteredUsers();

  useEffect(() => {
    getAllClients();
  }, [isUserAdded]);

  const [adminDetailsPopup, setAdminDetailsPopup] = useState(false);
  const [adminDetailsData, setAdminDetailsData] = useState();
  const handleAdminDetailsSharePopup = (data) => {
    setAdminDetailsPopup(true);
    setAdminDetailsData(data);
  };

  return (
    <div className="p-3">
      <div>
        <h5 className="meetings-heading">Add Users</h5>
        <div className="d-flex flex-column add-users-date">
          <span>Wednesday, 2nd August, 2023</span>
          <span>12:22:34 PM</span>
        </div>
        <div className="mt-3 d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Button className="me-2 agent-button">{account_role}</Button>
            <span className="mb-0 add-user-name">{user_name}</span>
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
              onClick={() => handleAddUsers()}
            >
              + Add Users
            </Button>
          </Form>
        </div>
      </div>
      <hr />
      <div className="admin-table-body-height">
        <table className="fixed-table w-100 match-position-table text-center medium-font">
          <thead>
            <tr>
              <th className="text-center">S NO</th>
              <th className="text-center">USER NAME</th>
              <th className="text-center">TYPE</th>
              {/* <th className="text-center">LOCATION</th> */}
              {/* <th className="text-center">REFERRAL</th> */}
              {/* <th className="text-center">P/L</th> */}
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsersData &&
              filteredUsersData?.length > 0 &&
              filteredUsersData?.map((data, index) => (
                <tr key={index}>
                  <td className="text-center">{data?.s_no}</td>
                  <td className="text-center">
                    {data?.user_name}{" "}
                    <Button className="ms-1 border-0 status-button"></Button>
                  </td>
                  <td className="text-center">{data?.type}</td>
                  {/* <td className="text-center">{data?.location}</td> */}
                  {/* <td className="text-center">{data?.user}</td> */}
                  {/* <td className="text-center">{data?.profit_loss}</td> */}
                  <td className="text-center">
                    <Button
                      className="text-center rounded meeting-status-button EDIT-button me-2"
                      onClick={() => {
                        setShowChangePopup(true);
                        setSelectedUser(data);
                      }}
                    >
                      CP
                    </Button>
                    <Button
                      className="text-center rounded meeting-status-button EDIT-button me-2"
                      onClick={() => handleEditButton(data)}
                    >
                      EDIT
                    </Button>
                    <Button
                      className={`text-center rounded meeting-status-button EDIT-button me-2 ${
                        data?.active ? "clr-blue" : "clr-red"
                      }`}
                      onClick={() => {
                        setBlockStatus(true);
                        setSelectedUser(data);
                      }}
                    >
                      {data?.active ? "UB" : "B"}
                    </Button>
                    <Button
                      className="text-center rounded meeting-status-button EDIT-button me-2"
                      onClick={() => handleAdminDetailsSharePopup(data)}
                    >
                      <TfiSharethis />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
          {modalShow && (
            <AddUserPopUp
              heading={`${editStatus ? "Update User" : "Add User"} `}
              show={modalShow}
              usersData={usersData}
              setModalShow={setModalShow}
              editStatus={editStatus}
              editData={editData}
              onhideClick={(e) => {
                setModalShow(e);
                setInputData({});
                setEditStatus(false);
              }}
              onHide={() => setModalShow(false)}
              setIsUserAdded={setIsUserAdded}
              setInputData={setInputData}
              inputData={inputData}
              setAddSuccessPopUp={setAddSuccessPopUp}
              setEditStatus={setEditStatus}
            />
          )}
        </table>
      </div>
      {addSuccessPopUp && (
        <AddUserSuccessPopUp
          open={addSuccessPopUp}
          handleConfimr={() => setAddSuccessPopUp(false)}
          handleCancel={() => setAddSuccessPopUp()}
          heading="Successfully Added"
          flag={false}
        />
      )}

      {blockStatus && (
        <BlockUnBlockPopUp
          open={blockStatus}
          isProcessing={isProcessing}
          handleConfirm={() => handleBlock()}
          handleCancel={() => {
            setSelectedUser("");
            setBlockStatus(false);
          }}
          heading={`Are you sure you want to "${selectedUser?.first_name}" ${
            selectedUser?.active ? "block" : "un-block"
          }`}
          flag={true}
        />
      )}

      <ChangePassword
        showChangePopup={showChangePopup}
        setShowChangePopup={setShowChangePopup}
        setChangePasswordSubmit={setChangePasswordSubmit}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <ChangePasswordSuccessPopUp
        header={"You Are Successfully Changed your Password"}
        state={changePasswordSubmit}
        setState={setChangePasswordSubmit}
      />
      <AdminDetailsSharePopup
        adminDetailsPopup={adminDetailsPopup}
        setAdminDetailsPopup={setAdminDetailsPopup}
        adminDetailsData={adminDetailsData}
      />
    </div>
  );
};

export default AddUsers;
