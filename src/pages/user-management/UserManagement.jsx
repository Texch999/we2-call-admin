import { useState, useEffect } from "react";
import { FaPercent } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import Table from "../home-page/Table";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { ImBlocked } from "react-icons/im";
import { BiLock } from "react-icons/bi";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
import { GrLocation } from "react-icons/gr";
import { call } from "../../config/axios";
import {
  GET_OFFLINE_CLIENTS,
  GET_OFFLINE_CLIENT_DETAILS,
  GET_ALL_CLIENTS,
  GET_REFFERAL_DATA,
  CREATE_OFFLINE_CLIENT,
  DELETE_OFFLINE_CLIENT,
  UPDATE_OFFLINE_CLIENT,
  ACTIVE_INACTIVE_USERS,
} from "../../config/endpoints";
import CreateReferral from "./CreateReferral";
import UserDeletePopup from "./UserDeletePopup";
import UserEditPopup from "./UserEditPopup";
import UserSubmitPopup from "./UserSubmitPopup";
import ChangePassword from "../add-users/ChangePassword";
import PasswordSubmitPopup from "./PasswordSubmitPopup";

function UserManagement() {
  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");

  const [existingClients, setExistingClients] = useState([]);
  const [editStatus, setEditStatus] = useState(false);
  const [addClientStatus, setAddClientStatus] = useState(false);
  const [allClients, setAllClients] = useState([]);
  const [refferalData, setRefferalData] = useState([]);
  const [userCreationSubmitPopup, setUserCreationSubmitPopup] = useState(false);
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [refStatus, setRefStatus] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [selectId, setSelectId] = useState();
  const [showChangePopup, setShowChangePopup] = useState(false);
  const [registerID, setRegisterID] = useState("");
  const [clientID, setClientID] = useState("");
  const [status, setStatus] = useState(false);
  const [changePasswordPopup, setChangePasswordPopup] = useState(false);
  // const [isProcessing, setIsProcessing] = useState();

  const clientSelection = [
    { name: "Regulor", value: 0 },
    { name: "Book", value: 1 },
    { name: "Agent", value: 2 },
    { name: "Dami", value: 3 },
  ];

  const shareList = [
    {
      title: "UL Comm",
      name: "ul_comm",
      id: "ul_comm",
      value: localStorage.getItem("ul_comm"),
    },
    {
      title: "UL Share",
      name: "ul_share",
      id: "ul_share",
      value: localStorage.getItem("ul_share"),
    },
    {
      title: "Owner Share",
      name: "owner_share",
      id: "owner_share",
      value: localStorage.getItem("owner_share"),
    },
  ];
  const [createUserSubmit, setCreateUserSubmit] = useState(false);
  const [showCreateRefer, setShowCreateRefer] = useState(false);

  const handleSubmitUser = async () => {
    setIsProcessing(true);
    if (
      (!userDetails?.alias_name,
      !userDetails?.client_name,
      !userDetails?.referral_name,
      !userDetails?.referral_share,
      !userDetails?.fancy_refferal_comm,
      !userDetails?.referral_comm,
      !userDetails?.deposit_type,
      !userDetails?.location,
      !userDetails?.client_risk_limit,
      !userDetails?.match_race_comm,
      !userDetails?.client_share,
      !userDetails?.fancy_comm)
    ) {
      return setError("Please Enter All Field");
    }
    let userDeatailsPayload = {
      existing_user_id: clientId[0]?.register_id,
      register_id,
      account_role,
      client_type: userDetails?.client_type,
      client_name: userDetails?.client_name,
      referral_name: userDetails?.referral_name,
      client_risk_limit: userDetails?.client_risk_limit,
      referal_id: rId[0]?.refferal_id,
      referral_comm: userDetails?.referral_comm,
      fancy_refferal_comm: userDetails?.fancy_refferal_comm,
      referral_share: userDetails?.referral_share,
      alias_name: userDetails?.alias_name,
      master_share: localStorage?.getItem("share") || 0,
      ul_share: localStorage?.getItem("ul_share") || 0,
      deposit_type: userDetails?.deposit_type,
      location: userDetails?.location,
      match_race_comm: userDetails?.match_race_comm,
      client_share: userDetails?.client_share,
      fancy_comm: userDetails?.fancy_comm,
    };
    await call(CREATE_OFFLINE_CLIENT, userDeatailsPayload)
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          setIsProcessing(false);
          setAddClientStatus((prev) => !prev);
          setUserCreationSubmitPopup(true);
          setTimeout(() => {
            setUserCreationSubmitPopup(false);
          }, 1000);
          setEditStatus(false);
          setUserDetails([]);
        } else {
          setError(
            res?.data?.message ? res?.data?.message : `something wen't wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        console.log(err);
        setError(err?.message ? err?.message : `something wen't wrong`);
      });
  };

  const handleUpdateUser = async () => {
    setIsProcessing(true);
    if (
      (!userDetails?.alias_name,
      !userDetails?.client_name,
      !userDetails?.client_type,
      !userDetails?.referral_name,
      !userDetails?.referral_share,
      !userDetails?.fancy_refferal_comm,
      !userDetails?.referral_comm,
      !userDetails?.deposit_type,
      !userDetails?.location,
      !userDetails?.client_risk_limit,
      !userDetails?.match_race_comm,
      !userDetails?.client_share,
      !userDetails?.fancy_comm)
    ) {
      return setError("Please Enter All Field");
    }
    let userDeatailsPayload = {
      client_id: upadateClientId,
      register_id,
      account_role,
      client_type: userDetails?.client_type,
      client_name: userDetails?.client_name,
      referral_name: userDetails?.referral_name,
      client_risk_limit: userDetails?.client_risk_limit,
      referal_id: updateReferId,
      referral_comm: userDetails?.referral_comm,
      fancy_refferal_comm: userDetails?.fancy_refferal_comm,
      referral_share: userDetails?.referral_share,
      alias_name: userDetails?.alias_name,
      master_share: localStorage?.getItem("share") || 0,
      ul_share: localStorage?.getItem("ul_share") || 0,
      deposit_type: userDetails?.deposit_type,
      location: userDetails?.location,
      match_race_comm: userDetails?.match_race_comm,
      client_share: userDetails?.client_share,
      fancy_comm: userDetails?.fancy_comm,
    };

    await call(UPDATE_OFFLINE_CLIENT, userDeatailsPayload)
      .then((res) => {
        if (res?.data?.statusCode === 200) {
          setIsProcessing(false);
          setAddClientStatus((prev) => !prev);
          setUserCreationSubmitPopup(true);
          setTimeout(() => {
            setUserCreationSubmitPopup(false);
          }, 1000);
          setEditStatus(false);
          setUserDetails([]);
        } else {
          setError(
            res?.data?.message ? res?.data?.message : `something wen't wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        console.log(err);
        setError(err?.message ? err?.message : `something wen't wrong`);
      });
  };

  const clientId = allClients.filter((item) => {
    return item.first_name === userDetails?.client_name;
  });

  const rId = refferalData?.filter((item) => {
    return item.referral_name === userDetails?.referral_name;
  });

  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [openEditConfirm, setOpenEditConfirm] = useState(false);
  const [editClientName, setEditClientName] = useState();
  const [updateUser, setUpdateUser] = useState(false);
  const [upadateClientId, setUpadateClientId] = useState();
  const [updateReferId, setUpdateReferId] = useState();

  const userColumns = [
    { header: "USER NAME", field: "client_name" },
    { header: "TYPE", field: "client_type" },
    { header: "ALIAS NAME", field: "alias_name" },
    { header: "LOCATION", field: "location" },
    { header: "ACTION", field: "editButton" },
  ];

  const handleEditTable = (item) => {
    setUpadateClientId(item.client_id);
    setUpdateReferId(item.referal_id);
    setOpenEditConfirm(true);
    setEditClientName(item.client_name);
    setSelectId(item.client_id);
  };

  const handleConfirmEdit = async () => {
    getOfflineClients();
    setOpenEditConfirm(false);
    setUpdateUser(true);
    await call(GET_OFFLINE_CLIENT_DETAILS, {
      register_id,
      client_id: selectId,
    })
      .then((res) => {
        let results = res?.data?.data;
        setUserDetails(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBlockUnblockUser = async (item) => {
    setClientID(item);
    console.log(clientID, "CLIENT");
    await call(ACTIVE_INACTIVE_USERS, {
      register_id,
      client_id: clientID,
      active: `${status}`,
    })
      .then((res) => {
        setStatus((prev) => !prev);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteUser = (clientId) => {
    setOpenDeletePopup(true);
    setSelectId(clientId);
  };

  const handleConfirmDelete = async () => {
    setOpenDeletePopup(false);
    await call(DELETE_OFFLINE_CLIENT, {
      register_id,
      client_id: selectId,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };
  // console.log(existingClients, "EEEEE");

  // console.log(userDetails, "userDetails..");

  const exsitedUsers =
    existingClients &&
    existingClients?.length > 0 &&
    existingClients
      .filter((i) => i.user_status !== "deleted")
      .map((item) => {
        return {
          client_name: item.client_name,
          client_type: item.client_type,
          alias_name: item.alias_name,
          location: item.location,
          editButton: (
            <div className="d-flex justify-content-between">
              <GoPencil
                className="edit-icon"
                onClick={() => handleEditTable(item)}
              />
              <RiDeleteBin6Fill
                className="edit-icon"
                onClick={() => handleDeleteUser(item.client_id)}
              />
              <ImBlocked
                className={`${
                  item?.active === "true" ? "edit-icon" : "edit-icon red-color"
                }`}
                onClick={() => handleBlockUnblockUser(item?.client_id)}
              />
              <BiLock
                className="edit-icon"
                onClick={() => handleChangePassword(item?.register_id)}
              />
            </div>
          ),
        };
      });

  const handleChangePassword = (item) => {
    setShowChangePopup(true);
    setRegisterID(item);
  };

  const handleChange = (e) => {
    // console.log(name, value);
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  console.log(userDetails, ".......userDetails");
  const getOfflineClients = async () => {
    await call(GET_OFFLINE_CLIENTS, { register_id })
      .then((res) => {
        setExistingClients(res?.data?.data);
        setStatus((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const handleCreateRefer = () => {
    setShowCreateRefer(true);
  };

  const getAllClients = async () => {
    await call(GET_ALL_CLIENTS, { register_id, account_role })
      .then((res) => {
        // console.log(res?.data?.data);
        setAllClients(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const getRefferalData = async () => {
    await call(GET_REFFERAL_DATA, { register_id })
      .then((res) => {
        // console.log(res.data);
        setRefferalData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  // const clientSelect =
  //   clientSelection.filter((i) => i.value === userDetails?.client_type)[0]
  //     ?.name || "Select...";

  useEffect(() => {
    getAllClients();
    getRefferalData();
    // getClientDetails();
  }, []);

  useEffect(() => {
    getOfflineClients();
  }, [addClientStatus]);

  return (
    <div className="p-3">
      <h5 className="meetings-heading">User Management/Creation</h5>
      <div className="row gutter-1rem meetings-heading">
        <div className="col-5 d-flex justify-content-between">
          {shareList.map((share, index) => {
            return (
              <div index={index} className="w-30">
                <div>{share?.title}</div>
                <div className="sport-management-input d-flex ">
                  <input
                    placeholder={share?.title}
                    value={share?.value || 0}
                    id={share?.id}
                    name={share?.id}
                    disabled
                    className="w-90"
                  />
                  <FaPercent className="me-1" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-4 d-flex justify-content-between">
          <div className="w-40">
            <div>Client Type</div>
            <select
              className="sport-management-input d-flex  w-100 sport-management-select cursor-pointer"
              name="client_type"
              onChange={(e) => handleChange(e)}
            >
              <option className="w-90 ms-1 cursor-pointer" value="">
                {clientSelection.filter(
                  (i) => i.value === userDetails?.client_type
                )[0]?.name || "Select..."}
              </option>
              {clientSelection?.map((type, index) => {
                return (
                  <option
                    className="w-90 ms-1 cursor-pointer"
                    value={type?.value}
                    key={index}
                  >
                    {type?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-55">
            <div>Client Name</div>
            <select
              className="sport-management-input d-flex  w-100 sport-management-select cursor-pointer"
              onChange={(e) => handleChange(e)}
              name="client_name"
            >
              <option className="w-90 ms-1 cursor-pointer">
                {userDetails?.client_name || "Select..."}
              </option>
              {allClients?.length &&
                allClients
                  .filter(
                    (obj) =>
                      existingClients &&
                      existingClients?.length > 0 &&
                      !existingClients?.some(
                        (o) => o.existing_user_id === obj.register_id
                      )
                  )
                  ?.map((item, index) => (
                    <option
                      className="w-90 ms-1 cursor-pointer"
                      value={item.first_name}
                      key={index}
                    >
                      {item.first_name}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>Alias Name</div>
            <div className="sport-management-input d-flex ">
              <input
                className="w-90 ms-2 "
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
                name="alias_name"
                value={userDetails?.alias_name || ""}
              ></input>
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>
      <div className="row gutter-1rem mt-3 meetings-heading">
        <div className="col-5 d-flex justify-content-between">
          <div className="w-70">
            <div className="d-flex justify-content-between">
              <div>Select Referral</div>
              <div className="create-new" onClick={() => handleCreateRefer()}>
                Create New
              </div>
            </div>
            <select
              className="sport-management-input d-flex  w-100 sport-management-select cursor-pointer"
              onChange={(e) => handleChange(e)}
              name="referral_name"
            >
              <option className="w-90 ms-1 cursor-pointer" value="">
                {userDetails.referral_name || "Select..."}
              </option>
              {refferalData?.map((type, index) => {
                return (
                  <option
                    className="w-90 ms-1 cursor-pointer"
                    value={type.referral_name}
                    key={index}
                  >
                    {type?.referral_name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-30">
            <div>Rf Share</div>
            <div className="sport-management-input d-flex ">
              <input
                placeholder="Enter"
                className="w-90"
                onChange={(e) => handleChange(e)}
                name="referral_share"
                type="number"
                defaultValue={userDetails?.referral_share || ""}
              />
              <FaPercent className="me-1" />
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-between">
          <div className="w-40">
            <div>Rf Fancy Comm</div>
            <div className="sport-management-input d-flex ">
              <input
                className="w-90"
                placeholder="Enter"
                type="number"
                onChange={(e) => handleChange(e)}
                name="fancy_refferal_comm"
                defaultValue={userDetails?.fancy_refferal_comm || ""}
              ></input>
              <FaPercent className="me-1" />
            </div>
          </div>
          <div className="w-55">
            <div>Rf Comm</div>
            <div className="sport-management-input d-flex ">
              <input
                className="w-90"
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
                name="referral_comm"
                type="number"
                defaultValue={userDetails?.referral_comm || ""}
              ></input>
              <FaPercent className="me-1" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>Deposit/Credit</div>
            <select
              className="sport-management-input d-flex  w-100 sport-management-select meetings-heading"
              onChange={(e) => handleChange(e)}
              name="deposit_type"
            >
              <option>
                {userDetails?.deposit_type === "0"
                  ? "Credite"
                  : userDetails?.deposit_type === "1"
                  ? "Deposite"
                  : "Select.."}
                {/* Select... */}
              </option>
              <option value="0">Credit</option>
              <option value="1">Deposit</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-3 meetings-heading">
        <div className="col-5 d-flex justify-content-between">
          <div className="w-30">
            <div>Location</div>
            <div className="sport-management-input d-flex ">
              <input
                placeholder="Enter Location"
                onChange={(e) => handleChange(e)}
                name="location"
                value={userDetails?.location || ""}
                className="w-90"
              />
              <GrLocation className="me-1" />
            </div>
          </div>
          <div className="w-30">
            <div>Match Risk Limit</div>
            <div className="sport-management-input d-flex ">
              <input
                placeholder="Enter value"
                onChange={(e) => handleChange(e)}
                name="client_risk_limit"
                defaultValue={userDetails?.client_risk_limit || ""}
                className="w-90"
              />
            </div>
          </div>
          <div className="w-30">
            <div>Share</div>
            <div className="sport-management-input d-flex ">
              <input
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
                name="client_share"
                value={userDetails?.client_share || ""}
                className="w-90"
              />
              <FaPercent className="me-1" />
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-between">
          <div className="w-40">
            <div>Fancy Role Comm</div>
            <div className="sport-management-input d-flex ">
              <input
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
                name="fancy_comm"
                value={userDetails?.fancy_comm || ""}
                className="w-90"
              />
              <FaPercent className="me-1" />
            </div>
          </div>
          <div className="w-55">
            <div>Mat+Fa-comm</div>
            <div className="sport-management-input d-flex ">
              <input
                placeholder="Enter"
                onChange={(e) => handleChange(e)}
                name="match_race_comm"
                value={userDetails?.match_race_comm || ""}
                className="w-90"
              />
              <FaPercent className="me-1" />
            </div>
          </div>
        </div>
        <div className="col-3 d-flex align-items-end">
          <div
            className="sport-management-input w-100 d-flex justify-content-center align-items-center bg-yellow"
            onClick={
              updateUser === true
                ? () => handleUpdateUser()
                : () => handleSubmitUser()
            }
          >
            {isProcessing === true
              ? "Processing..."
              : updateUser === true
              ? "Update"
              : "Submit"}
          </div>
        </div>
      </div>
      {error && <div className="danger">{error}</div>}
      <hr className="mt-4" />
      <UserDeletePopup
        openDeletePopup={openDeletePopup}
        handleConfirmDelete={handleConfirmDelete}
        setOpenDeletePopup={setOpenDeletePopup}
      />
      <UserEditPopup
        openEditConfirm={openEditConfirm}
        setOpenEditConfirm={setOpenEditConfirm}
        editClientName={editClientName}
        handleConfirmEdit={handleConfirmEdit}
      />

      <UserSubmitPopup
        userCreationSubmitPopup={userCreationSubmitPopup}
        setUserCreationSubmitPopup={setUserCreationSubmitPopup}
      />

      <Table
        data={exsitedUsers}
        columns={userColumns}
        // editButtons={editButtons}
      />
      <ChangePassword
        registerID={registerID}
        showChangePopup={showChangePopup}
        setShowChangePopup={setShowChangePopup}
        // setChangePasswordSubmit={setChangePasswordSubmit}
        setChangePasswordPopup={setChangePasswordPopup}
      />
      <PasswordSubmitPopup
        state={changePasswordPopup}
        setState={setChangePasswordPopup}
        error={error}
        header={"You Successfully Changed Password"}
      />
      <MatchSubmitPopup
        header={"You Are Successfully Created User"}
        state={createUserSubmit}
        setState={setCreateUserSubmit}
      />
      <CreateReferral
        showCreateRefer={showCreateRefer}
        setShowCreateRefer={setShowCreateRefer}
        refStatus={refStatus}
        setRefStatus={setRefStatus}
      />
    </div>
  );
}

export default UserManagement;
