import { useState } from "react";
import PurchaseAdminPackages from "./PurchaseAdminPackages";
import PurchaseTopupHours from "./PurchaseTopupHours";
import AdminPackageTickets from "./AdminPackageTickets";
import AdminSaleTickets from "./AdminSaleTickets";

function AdminPackageTransaction() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };
  const ADMIN_PACKAGE_BUTTONS = [
    { buttonName: "Purchase Admin Packages" },
    { buttonName: "Purchase Topup Hours" },
    { buttonName: "Admin Package Tickets" },
    { buttonName: "Admins Pkgs Sale Tickets" },
  ];
  return (
    <div className="p-3">
      <div className="row w-75">
        {ADMIN_PACKAGE_BUTTONS?.map((item, index) => (
          <div
            className="col"
            key={index}
            onClick={() => handleActiveIndex(index)}
          >
            <div
              className={`fw-semibold btn-bg medium-font text-white text-center py-3 px-1 m-1 rounded ${
                activeIndex === index ? "yellow-btn" : ""
              }`}
            >
              {item.buttonName}
            </div>
          </div>
        ))}
      </div>
      <div>
        {activeIndex === 0 && <PurchaseAdminPackages />}
        {activeIndex === 1 && <PurchaseTopupHours />}
        {activeIndex === 2 && <AdminPackageTickets />}
        {activeIndex === 3 && <AdminSaleTickets />}
      </div>
    </div>
  );
}

export default AdminPackageTransaction;
