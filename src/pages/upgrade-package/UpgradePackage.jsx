import React, { useState } from "react";
import UpgradeYourPackage from "./UpgradeYourPackage";
import YourPackageTicket from "./YourPackageTicket";

function UpgradePackage() {
  const [upgradeYourPackage, setUpgradeYourPackage] = useState(true);
  const [yourPackageTickets, setYourPackageTickets] = useState(false);
  const handleUpgradeYourPackage = () => {
    setUpgradeYourPackage(true);
    setYourPackageTickets(false);
  };
  const handleYourPackageTickets = () => {
    setYourPackageTickets(true);
    setUpgradeYourPackage(false);
  };
  return (
    <div>
      <div className="p-3">
        <h4 className="h4 fw-semibold">Upgrade Package</h4>
        <div className="row">
          <div className="col-2">
            <div
              className={`fw-semibold btn-bg medium-font text-white text-center p-3 m-1 rounded ${
                upgradeYourPackage ? "yellow-btn" : ""
              }`}
              onClick={() => handleUpgradeYourPackage()}
            >
              Upgrade Your Package
            </div>
          </div>
          <div className="col-2">
            <div
              className={`fw-semibold btn-bg medium-font text-white text-center p-3 m-1 rounded ${
                yourPackageTickets ? "yellow-btn" : ""
              }`}
              onClick={() => handleYourPackageTickets()}
            >
              Your Package Ticket
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="p-3">
        {upgradeYourPackage && <UpgradeYourPackage />}
        {yourPackageTickets && <YourPackageTicket />}
      </div>
    </div>
  );
}

export default UpgradePackage;
