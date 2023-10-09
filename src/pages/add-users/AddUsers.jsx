import { useEffect, useState } from "react";
import { Button, Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FiSearch } from "react-icons/fi";
import AddUserPopUp from "./AddUserPopUp";
import ChangePassword from "./ChangePassword";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
import { call } from "../../config/axios";
import { GET_ALL_CLIENTS,BLOCKUNBLOCK} from "../../config/endpoints";

const AddUsers = () => {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");
  let user_name = localStorage?.getItem("user_name");

  const [filteredValue, setFilteredValue] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [showChangePopup, setShowChangePopup] = useState(false);

  const [usersData, setUsersData] = useState([]);
  const [isUserAdded, setIsUserAdded] = useState(false);

  const handleCpButton = () => {
    console.log("testing....")

       setShowChangePopup(true);
    
  };
  const addUsersData =
    usersData?.length > 0 &&
    usersData
      ?.filter((i) => i.account_role === "client")
      ?.map((user, index) => {
        return {
          s_no: index + 1,
          user_name: user?.user_name,
          share: user?.share,
          ul_share: user?.ul_share,
          type: user?.account_role,
          location: user?.location,
          register_id:user?.register_id,
          creator_id:user?.creator_id,
          active:user?.active,
          user: "",
          profit_loss: 0,
        };
      });
  
const handleBlock = async (data) => {
       {console.log(data)}
        await call(BLOCKUNBLOCK, {
          register_id: data?.register_id,
          creator_id: register_id,
          active: !data?.active,
          account_role: data?.type,
        })
          .then((res) => {
            getAllClients();
          })
          .catch((err) => console.log(err));
      }
const ACTION_LABELS = [
        {
          name: "CP",
    
        },
        {name: "EDIT"},
        // b: "B",
        {
          name: "UB",
          onclick: handleBlock
        }
];

  const [changePasswordSubmit, setChangePasswordSubmit] = useState(false);
  const handleUserChange = (e) => {
    setFilteredValue(e.target.value);
  };
  const getAllClients = async () => {
    await call(GET_ALL_CLIENTS, { register_id, account_role })
      .then((res) => {
        // console.log(res?.data?.data);
        setUsersData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllClients();
  }, [isUserAdded]);

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
              <th class="text-center">S NO</th>
              <th className="text-center">USER NAME</th>
              <th className="text-center">TYPE</th>
              <th className="text-center">LOCATION</th>
              <th className="text-center">REFERRAL</th>
              <th className="text-center">P/L</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {addUsersData?.length > 0 &&
              addUsersData?.map((data, index) => (
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
                      <Button className="text-center rounded meeting-status-button EDIT-button me-2" onClick={()=>handleCpButton()}>CP</Button>
                      <Button className="text-center rounded meeting-status-button EDIT-button me-2" >EDIT</Button>
                      <Button className={`text-center rounded meeting-status-button EDIT-button me-2 ${data?.active ? "clr-blue" : "clr-red"}`} onClick={()=>handleBlock(data)}>{data?.active ? "UB" : "B"}</Button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={5} className="text-center">
                TOTAL
              </th>
              <th className="clr-green text-center">
                {addUsersData?.length > 0 &&
                  addUsersData
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
              setIsUserAdded={setIsUserAdded}
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
