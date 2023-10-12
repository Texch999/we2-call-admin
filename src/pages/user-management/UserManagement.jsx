import { useState, useEffect } from "react";
import { FaPercent } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
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
} from "../../config/endpoints";
import CreateReferral from "./CreateReferral";

function UserManagement() {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");

  const [existingClients, setExistingClients] = useState([]);
  const [clientDetails, setClientDetails] = useState({});
  const [editStatus, setEditStatus] = useState(false);
  const [addClientStatus, setAddClientStatus] = useState(false);
  const [clientData, setClientData] = useState({});
  const [allClients, setAllClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState({});
  const [refferalData, setRefferalData] = useState([]);
  const [selectedRefferal, setSelectedRefferal] = useState({});
  const [showClientTypeDropdoen, setShowClientTypeDropdoen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [depositOrwidthdraw, setDepositOrwidthdraw] = useState("");
  const [depositeDropdown, setDepositeDropdown] = useState(false);
  const [clientTypeSelected, setClientTypeSelected] = useState({});
  const [showClientDropdown, setShowClientDropdown] = useState(false);
  const [referalDropDown, setRefferalDropDown] = useState(false);
  const [userCreationSubmitPopup, setUserCreationSubmitPopup] = useState(false);
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [refStatus, setRefStatus] = useState(false);

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
  const handleSubmitUser = () => {
    setCreateUserSubmit(true);
  };

  const userColumns = [
    { header: "USER NAME", field: "client_name" },
    { header: "TYPE", field: "client_type" },
    { header: "ALIAS NAME", field: "alias_name" },
    { header: "LOCATION", field: "location" },
    { header: "ACTION", field: "editButton" },
  ];

  const editButtons = (
    <div className="d-flex justify-content-between">
      <GoPencil className="edit-icon" />
      <RiDeleteBin6Fill className="edit-icon" />
      <ImBlocked className="edit-icon" />
      <BiLock className="edit-icon" />
    </div>
  );

  const handleChange = (name, value) => {
    console.log(name, value);
  };
  const getOfflineClients = async () => {
    await call(GET_OFFLINE_CLIENTS, { register_id })
      .then((res) => {
        setExistingClients(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const getClientDetails = async (clientID) => {
    // console.log({clientID})
    await call(GET_OFFLINE_CLIENT_DETAILS, {
      register_id,
      client_id: clientID,
    })
      .then((res) => {
        let results = res?.data?.data;
        // console.log({results})
        setClientDetails(results);
      })
      .catch((err) => {
        console.log(err);
      });
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

  useEffect(() => {
    getAllClients();
    getRefferalData();
    // getClientDetails();
  }, []);

  useEffect(() => {
    getOfflineClients();
  }, [addClientStatus]);

  console.log(clientData, ".......existing Users DatA");

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
              onChange={(e) => {
                const selectedIndex = e.target.selectedIndex;
                setClientTypeSelected(clientSelection[selectedIndex]);
                setClientData({
                  ...clientData,
                  client_type: selectedIndex,
                });
              }}
            >
              <option className="w-90 ms-1 cursor-pointer" value="">
                Select...
              </option>
              {clientSelection?.map((type, index) => {
                return (
                  <option
                    className="w-90 ms-1 cursor-pointer"
                    value={type}
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
            <select className="sport-management-input d-flex  w-100 sport-management-select cursor-pointer">
              <option className="w-90 ms-1 cursor-pointer" value="">
                Select...
              </option>
              {allClients?.length &&
                allClients
                  .filter(
                    (obj) =>
                      !existingClients.some(
                        (o) => o.existing_user_id === obj.register_id
                      )
                  )
                  ?.map(({ register_id, user_name }, index) => (
                    <option
                      className="w-90 ms-1 cursor-pointer"
                      value={register_id}
                      key={index}
                    >
                      {user_name}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>Alias Name</div>
            <div className="sport-management-input d-flex ">
              <input className="w-90 ms-2 " placeholder="Enter"></input>
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
              onChange={(e) => {
                setClientData({
                  ...clientData,
                  referral_name: e.target.value,
                });
              }}
            >
              <option className="w-90 ms-1 cursor-pointer" value="">
                Select...
              </option>
              {refferalData?.map((type, index) => {
                return (
                  <option
                    className="w-90 ms-1 cursor-pointer"
                    value={type}
                    key={index}
                  >
                    {type?.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-30">
            <div>Deposit/Credit</div>
            <div className="sport-management-input d-flex ">
              <input placeholder="Enter" className="w-90" />
              <FaPercent className="me-1" />
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-between">
          <div className="w-40">
            <div>Rf Fancy Comm</div>
            <div className="sport-management-input d-flex ">
              <input className="w-90" placeholder="Enter"></input>
              <FaPercent className="me-1" />
            </div>
          </div>
          <div className="w-55">
            <div>Rf Comm</div>
            <div className="sport-management-input d-flex w-100">
              <div className="w-90">Enter</div>
              <FaPercent className="me-1" />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div>
            <div>Deposit/Credit</div>
            <select className="sport-management-input d-flex  w-100 sport-management-select meetings-heading">
              <option>Widthdraw</option>
              <option>Deposite</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-3 meetings-heading">
        <div className="col-7 pr-3">
          <div className="row gutter-1rem">
            <div className="col">
              <div>Location</div>
              <div className="sport-management-input d-flex ">
                <input className="w-90 ms-2 " placeholder="Enter"></input>
                <GrLocation />
              </div>
            </div>
            <div className="col">
              <div>Match Risk Limit</div>
              <div className="sport-management-input d-flex ">
                <input className="w-90 ms-2 " placeholder="Enter"></input>
                {/* <AiOutlineUser /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-3 d-flex align-items-end">
          <div
            className="sport-management-input w-100 d-flex justify-content-center align-items-center bg-yellow"
            onClick={() => handleSubmitUser()}
          >
            Submit
          </div>
        </div>
      </div>
      <hr className="mt-4" />

      <Table
        data={existingClients}
        columns={userColumns}
        editButtons={editButtons}
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
