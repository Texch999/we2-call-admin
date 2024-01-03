import { MdCallEnd } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import {
  GET_ALL_CLIENTS,
  GET_LIVE_MEETING,
  UPDATE_MEETING,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect, useState } from "react";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";

function UserList(props) {
  const { isAdminCreated, meetingId, liveMeeting } = props;
  const [activeIndex, setActiveIndex] = useState();
  const [micOff, setMicOff] = useState(false);
  const [allUserListToJoin, setAllUserListToJoin] = useState([]);
  const [liveMeetings, setLiveMeetings] = useState({});
  const handleMicOff = (index) => {
    setMicOff(!micOff);
    setActiveIndex(index);
  };
  const getAllUsers = async () => {
    await call(GET_ALL_CLIENTS, {
      register_id: localStorage.getItem("register_id"),
      account_role: localStorage.getItem("account_role"),
    })
      .then((res) => {
        let result = res?.data?.data;
        result = result.map((itm) => {
          return { id: itm.register_id, name: itm.user_name };
        });
        setAllUserListToJoin(result);
      })
      .catch((err) => {
        throw err;
      });
  };
  const getLiveMeetingData = async () => {
    const creator_id = isAdminCreated
      ? localStorage.getItem("register_id")
      : localStorage.getItem("register_id");
    await call(GET_LIVE_MEETING, { creator_id, meeting_id: meetingId })
      .then((res) => {
        const data = res?.data?.data?.Items?.[0];
        setLiveMeetings(data);
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {
    getAllUsers();
    getLiveMeetingData();
  }, []);

  const addUserInMeeting = async (id) => {
    liveMeetings?.meetingUserIds?.push(id);
    await call(UPDATE_MEETING, { ...liveMeetings })
      .then((res) => {
        if (res.data.statusCode === 200) {
          getLiveMeetingData();
          getAllUsers();
        } else {
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  const removeUserInMeeting = async (id) => {
    liveMeetings.meetingUserIds = liveMeetings.meetingUserIds.filter(
      (itm) => itm !== id
    );
    await call(UPDATE_MEETING, { ...liveMeetings })
      .then((res) => {
        if (res.data.statusCode === 200) {
          getLiveMeetingData();
          getAllUsers();
        } else {
        }
      })
      .catch((err) => {
        throw err;
      });
  };
  const meetingOutSideUsers = allUserListToJoin.filter(
    (itm) => !liveMeetings?.meetingUserIds?.includes(itm.id)
  );
  const meetingInSideUsers = allUserListToJoin.filter((itm) =>
    liveMeetings?.meetingUserIds?.includes(itm.id)
  );

  const [insideUsersTerm, setInsideUsersTerm] = useState("");
  const [filteredInsideUsers, setFilteredInsideUsers] = useState([]);
  const handleInsideFilterUsers = (insideUsersTerm) => {
    const insideFilter = meetingInSideUsers?.filter((item) =>
      item?.name?.toLowerCase().includes(insideUsersTerm.toLowerCase())
    );
    setFilteredInsideUsers(insideFilter);
  };
  useEffect(() => {
    handleInsideFilterUsers(insideUsersTerm);
  }, [insideUsersTerm]);

  const [outsideUsersTerm, setOutsideUsersTerm] = useState("");
  const [filteredOutsideUsers, setFilteredOutsideUsers] = useState([]);
  const handleOutsideFilterUsers = (outsideUsersTerm) => {
    const outSideFilter = meetingOutSideUsers?.filter((item) =>
      item?.name?.toLowerCase().includes(outsideUsersTerm.toLowerCase())
    );
    setFilteredOutsideUsers(outSideFilter);
  };
  useEffect(() => {
    handleOutsideFilterUsers(outsideUsersTerm);
  }, [outsideUsersTerm]);

  return (
    <div>
      <div className="rounded mt-2 font-14 w-100 num-btn-bg p-2">
        <div className="mt-1">Meeting Users</div>
        <input
          className="w-100 font-14 rounded p-2 bg-blue border-none mt-1 all-none"
          placeholder="Search..."
          type="text"
          value={insideUsersTerm}
          onChange={(e) => setInsideUsersTerm(e.target.value)}
        />
        <div className="user-list-height mt-1">
          {filteredInsideUsers?.length > 0 &&
            filteredInsideUsers?.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between font-14 border-top-bottom py-1"
              >
                <div>{item?.name}</div>
                <div className="d-flex">
                  <div
                    className="mic-bg p-1 px-2 mx-1 rounded cursor-pointer"
                    onClick={() => handleMicOff(index)}
                  >
                    {activeIndex === index && micOff ? (
                      <BsFillMicMuteFill className="flex" />
                    ) : (
                      <BsFillMicFill className="flex" />
                    )}
                  </div>
                  <div
                    className="red-bg p-1 px-2 mx-1 rounded cursor-pointer"
                    onClick={() => removeUserInMeeting(item?.id)}
                  >
                    <MdCallEnd className="font-1rem" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="rounded mt-2 font-14 w-100 num-btn-bg p-2">
        <div className="mt-1">Outside Users</div>
        <input
          className="w-100 font-14 rounded p-2 bg-blue border-none mt-1 all-none"
          placeholder="Search..."
          type="text"
          value={outsideUsersTerm}
          onChange={(e) => setOutsideUsersTerm(e.target.value)}
        />
        <div className="user-list-height mt-1">
          {filteredOutsideUsers?.length > 0 &&
            filteredOutsideUsers?.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between font-14 border-top-bottom py-1"
              >
                <div>{item?.name}</div>
                <div
                  className="green-bg p-1 px-2 mx-1 rounded cursor-pointer"
                  onClick={() => addUserInMeeting(item.id)}
                >
                  <FaPlus className="font-1rem" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;
