import { MdCallEnd } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { GET_ALL_CLIENTS } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect, useState } from "react";

function UserList() {
  const register_id = localStorage.getItem("register_id");
  const account_role = localStorage.getItem("account_role");
  const [listOfUsers, setListOfUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState();

  const handleSearch = (searchTerm) => {
    const filtered = listOfUsers?.filter((data) =>
      data?.user_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const getAdminUsersList = async () => {
    await call(GET_ALL_CLIENTS, { register_id, account_role })
      .then((res) => {
        setListOfUsers(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAdminUsersList();
    handleSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <div className="rounded mt-2 font-14 w-100 num-btn-bg p-2">
        <div className="mt-1">All Users</div>
        <input
          className="w-100 font-14 rounded p-2 bg-blue border-none mt-1 all-none"
          placeholder="Search..."
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="user-list-height mt-1">
          {filteredUsers?.length > 0 &&
            filteredUsers?.map((data, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between font-14 border-top-bottom py-1"
              >
                <div>{data?.user_name}</div>
                <div className="red-bg p-1 px-2 rounded">
                  <MdCallEnd className="font-1rem" />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="rounded mt-2 font-14 w-100 num-btn-bg p-2">
        <div className="mt-1">Join Users</div>
        <input
          className="w-100 font-14 rounded p-2 bg-blue border-none mt-1 all-none"
          placeholder="Search..."
        />
        <div className="user-list-height mt-1">
          <div className="d-flex align-items-center justify-content-between font-14 border-top-bottom py-1">
            <div>Texch Admin</div>
            <div className="green-bg p-1 px-2 rounded">
              <FaPlus className="font-1rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserList;
