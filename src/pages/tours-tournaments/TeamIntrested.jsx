import React, { useState } from "react";
import YourUsersTable from "./YourUsersTable";
import YourAdminsTable from "./YourAdminsTable";

function TeamIntrested() {
  const [yourUsers, setYourUsers] = useState(true);
  const [yourAdmins, setYourAdmins] = useState(false);
  const handleYourUsers = () => {
    setYourUsers(true);
    setYourAdmins(false);
  };
  const handleYourAdmins = () => {
    setYourAdmins(true);
    setYourUsers(false);
  };
  return (
    <div>
      <div className="w-30 d-flex justify-content-between p-1">
        <div
          className={`${
            yourUsers ? "normal-button active-btn font-14" : "normal-button font-14"
          }`}
          onClick={() => handleYourUsers()}
        >
          Your Users
        </div>
        <div
          className={`${
            yourAdmins ? "normal-button active-btn font-14" : "normal-button font-14"
          }`}
          onClick={() => handleYourAdmins()}
        >
          Your Admins
        </div>
      </div>
      {yourUsers && <YourUsersTable />}
      {yourAdmins && <YourAdminsTable />}
    </div>
  );
}

export default TeamIntrested;
