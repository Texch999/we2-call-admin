import React, { useState } from "react";
import UpgradeYourPackage from "./UpgradeYourPackage";
import YourPackageTicket from "./YourPackageTicket";
import "./styles.css";
import YourPackageTransaction from "./YourPackageTransaction";
import AdminPackageTransaction from "./AdminPackageTransaction";

function UpgradePackage() {
  const [upgradeYourPackage, setUpgradeYourPackage] = useState(true);
  const [yourPackageTickets, setYourPackageTickets] = useState(false);
  const [packageTransaction, setPackageTransaction] = useState(false);
  const [adminPackageTrasaction, setAdminPackageTrasaction] = useState(false);
  const handleUpgradeYourPackage = () => {
    setUpgradeYourPackage(true);
    setYourPackageTickets(false);
    setPackageTransaction(false);
    setAdminPackageTrasaction(false);
  };
  const handleYourPackageTickets = () => {
    setYourPackageTickets(true);
    setUpgradeYourPackage(false);
    setPackageTransaction(false);
    setAdminPackageTrasaction(false);
  };
  const handlePackageTrasaction = () => {
    setPackageTransaction(true);
    setUpgradeYourPackage(false);
    setYourPackageTickets(false);
    setAdminPackageTrasaction(false);
  };
  const handleAdminPackageTrasaction = () => {
    setAdminPackageTrasaction(true);
    setPackageTransaction(false);
    setUpgradeYourPackage(false);
    setYourPackageTickets(false);
  };
  return (
    <div>
      <div className="p-3">
        <h4 className="h4 fw-semibold">Upgrade Package</h4>
        <div className="row">
          <div className="col-sm-3 col-lg-2 col-xl-2">
            <div
              className={`fw-semibold btn-bg medium-font text-white text-center py-3 px-1 m-1 rounded ${
                upgradeYourPackage ? "yellow-btn" : ""
              }`}
              onClick={() => handleUpgradeYourPackage()}
            >
              Upgrade Your Package
            </div>
          </div>
          <div className="col-sm-3 col-lg-2 col-xl-2">
            <div
              className={`fw-semibold btn-bg medium-font text-white text-center py-3 px-1 m-1 rounded ${
                yourPackageTickets ? "yellow-btn" : ""
              }`}
              onClick={() => handleYourPackageTickets()}
            >
              Your Package Ticket
            </div>
          </div>
          <div className="col-sm-3 col-lg-3 col-xl-3">
            <div
              className={`fw-semibold btn-bg medium-font text-white text-center py-3 px-1 m-1 rounded ${
                packageTransaction ? "yellow-btn" : ""
              }`}
              onClick={() => handlePackageTrasaction()}
            >
              Your Package Transaction
            </div>
          </div>
          <div className="col-sm-3 col-lg-3 col-xl-3">
            <div
              className={`fw-semibold btn-bg medium-font text-white text-center py-3 m-1 rounded ${
                adminPackageTrasaction ? "yellow-btn" : ""
              }`}
              onClick={() => handleAdminPackageTrasaction()}
            >
              Admin Packages/Transaction
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      {upgradeYourPackage && <UpgradeYourPackage />}
      {yourPackageTickets && <YourPackageTicket />}
      {packageTransaction && <YourPackageTransaction />}
      {adminPackageTrasaction && <AdminPackageTransaction />}
    </div>
  );
}

export default UpgradePackage;
