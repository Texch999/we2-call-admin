import Table from "../home-page/Table";
import { Images } from "./../../images/index";
import { FaPlus, FaMinus } from "react-icons/fa6";

function PurchaseAdminPackages() {
  const adminPackageTable = "admin-package-table";
  const PACKAGES_DATA = [
    {
      package: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.StandardSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Standard</div>
        </div>
      ),
      purchased: <div>2</div>,
      used: <div className="yellow-clr">2</div>,
      available: <div className="green-color">0</div>,
    },
    {
      package: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.SilverSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Silver</div>
        </div>
      ),
      purchased: <div>4</div>,
      used: <div className="yellow-clr">2</div>,
      available: <div className="green-color">2</div>,
    },
    {
      package: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.GoldSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Gold</div>
        </div>
      ),
      purchased: <div>2</div>,
      used: <div className="yellow-clr">2</div>,
      available: <div className="green-color">2</div>,
    },
    {
      package: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.DiamondSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Diamond</div>
        </div>
      ),
      purchased: <div>2</div>,
      used: <div className="yellow-clr">2</div>,
      available: <div className="green-color">2</div>,
    },
    {
      package: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.VIPSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">VIP</div>
        </div>
      ),
      purchased: <div>2</div>,
      used: <div className="yellow-clr">2</div>,
      available: <div className="green-color">2</div>,
    },
  ];
  const PACKAGES_HEADING = [
    { header: "Packages", field: "package" },
    { header: "Purchased", field: "purchased" },
    { header: "Used", field: "used" },
    { header: "Available", field: "available" },
  ];

  const PACKAGES_HOURS_DATA = [
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.StandardSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Standard</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
    },
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.SilverSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Silver</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
    },
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.GoldSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Gold</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
    },
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.DiamondSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Diamond</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
    },
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.VIPSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">VIP</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
    },
  ];
  const PACKAGES_HOURS_HEADING = [
    { header: "Return Packages", field: "returnPackage" },
    { header: "Value", field: "value" },
    { header: "Hours", field: "hours" },
    { header: "Available", field: "available" },
  ];

  const PACKAGES_HOURS_DATA_TWO = [
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.StandardSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Standard</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
      add: (
        <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
          <div>ADD</div>
          <FaPlus />
        </div>
      ),
    },
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.SilverSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Silver</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
      add: (
        <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
          <div>ADD</div>
          <FaPlus />
        </div>
      ),
    },
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.GoldSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Gold</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
      add: (
        <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
          <div>ADD</div>
          <FaPlus />
        </div>
      ),
    },
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.DiamondSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">Diamond</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
      add: (
        <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
          <div>ADD</div>
          <FaPlus />
        </div>
      ),
    },
    {
      returnPackage: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.VIPSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2">VIP</div>
        </div>
      ),
      value: <div>4000</div>,
      hours: <div className="yellow-clr">15</div>,
      available: <div className="green-color">2000</div>,
      add: (
        <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
          <div>ADD</div>
          <FaPlus />
        </div>
      ),
    },
  ];
  const PACKAGES_HOURS_HEADING_TWO = [
    { header: "Return Packages", field: "returnPackage" },
    { header: "Value", field: "value" },
    { header: "Hours", field: "hours" },
    { header: "Available", field: "available" },
    { header: "", field: "add" },
  ];
  return (
    <div>
      <div className="row mt-3">
        <div className="col">
          <Table
            data={PACKAGES_DATA}
            columns={PACKAGES_HEADING}
            tableClassname={adminPackageTable}
          />
        </div>
        <div className="col">
          <Table
            data={PACKAGES_HOURS_DATA}
            columns={PACKAGES_HOURS_HEADING}
            tableClassname={adminPackageTable}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="package-banner rounded"></div>
        </div>
        <div className="col">
          <div className="package-banner rounded"></div>
        </div>
      </div>
      <div className="mt-3">
        <h5>Select Package</h5>
        <div className="row">
          <div className="col-sm-2 col-lg-1 d-flex align-items-center">
            <div className="medium-font">Monthly</div>
          </div>
          <div className="col-sm-2 col-lg-1 form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
          <div className="col-sm-2 col-lg-1 d-flex align-items-center">
            <div className="medium-font">Yearly</div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="select-package-div rounded p-2">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-sm-7 col-lg-5 d-flex align-items-center">
                <img
                  className="select-package-img"
                  src={Images.StandardPackage}
                  alt="Standard_Img"
                />
                <div className="medium-font fw-semibold">
                  <div>Standard Package</div>
                  <div>50000000</div>
                </div>
              </div>
              <div className="col-sm-4 col-lg-3">
                <div className="add-button rounded p-2 d-flex align-items-center justify-content-evenly">
                  <FaMinus />
                  <div className="fw-semibold">ADD</div>
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <Table
            data={PACKAGES_HOURS_DATA_TWO}
            columns={PACKAGES_HOURS_HEADING_TWO}
            tableClassname={adminPackageTable}
          />
        </div>
      </div>
    </div>
  );
}

export default PurchaseAdminPackages;
