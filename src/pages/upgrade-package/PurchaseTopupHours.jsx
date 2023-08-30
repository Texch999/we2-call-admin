import Table from "../home-page/Table";
import { Images } from "./../../images/index";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";

function PurchaseTopupHours() {
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
      purchased: <div>20h</div>,
      used: <div className="yellow-clr">20h</div>,
      available: <div className="green-color">0h</div>,
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
      purchased: <div>4h</div>,
      used: <div className="yellow-clr">2h</div>,
      available: <div className="green-color">2h</div>,
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
      purchased: <div>2h</div>,
      used: <div className="yellow-clr">2h</div>,
      available: <div className="green-color">2h</div>,
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
      purchased: <div>2h</div>,
      used: <div className="yellow-clr">2h</div>,
      available: <div className="green-color">2h</div>,
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
      purchased: <div>2h</div>,
      used: <div className="yellow-clr">2h</div>,
      available: <div className="green-color">2h</div>,
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
  ];
  const PACKAGES_HOURS_HEADING_TWO = [
    { header: "Return Packages", field: "returnPackage" },
    { header: "Value", field: "value" },
    { header: "Hours", field: "hours" },
    { header: "Available", field: "available" },
    { header: "", field: "add" },
  ];

  const SELECT_PACKAGE = [
    {
      packageImg: Images.StandardPackage,
      packageName: "Standard Package",
      packageAmount: 100,
    },
    {
      packageImg: Images.SilverSelectPackage,
      packageName: "Silver Package",
      packageAmount: 200,
    },
    {
      packageImg: Images.GoldPackage,
      packageName: "Gold Package",
      packageAmount: 300,
    },
    {
      packageImg: Images.DiamondPackage,
      packageName: "Diamond Package",
      packageAmount: Intl.NumberFormat("en-IN").format(400),
    },
    {
      packageImg: Images.VIPPackage,
      packageName: "VIP Package",
      packageAmount: Intl.NumberFormat("en-IN").format(500),
    },
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
          <div className="package-banner w-100 d-flex">
            <div className="w-35 orange-banner d-flex align-items-center justify-content-around">
              <img
                className="gold-percentage-img"
                src={Images.SaleForGold}
                alt="Gold"
              />
              <div className="black-color">
                <h6 className="mb-0">Flat</h6>
                <h5 className="fw-semibold">15% OFF</h5>
              </div>
            </div>
            <div className="w-65 d-flex align-items-center justify-content-around">
              <img
                className="gold-medal-img mt-3"
                src={Images.GoldPackage}
                alt="Gold"
              />
              <h5 className="fw-semibold gold-color">
                Gold <span>Package</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="package-banner w-100 d-flex">
            <div className="w-35 blue-banner d-flex align-items-center justify-content-around">
              <img
                className="gold-percentage-img"
                src={Images.SaleForVIP}
                alt="Gold"
              />
              <div>
                <h6 className="mb-0">Flat</h6>
                <h5 className="fw-semibold">30% OFF</h5>
              </div>
            </div>
            <div className="w-65 d-flex align-items-center justify-content-around">
              <img
                className="gold-medal-img mt-3"
                src={Images.VIPPackage}
                alt="Gold"
              />
              <h5 className="fw-semibold vip-color">
                VIP <span>Package</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h5>Select Package</h5>
        <div className="select-package-div rounded-pill p-1 px-2 medium-font w-fit-content">
          Hourly
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          {SELECT_PACKAGE?.map((item, index) => (
            <div className="select-package-div rounded p-2 mt-2" key={index}>
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-sm-7 col-lg-5 d-flex align-items-center">
                  <img
                    className="select-package-img"
                    src={item.packageImg}
                    alt="Standard_Img"
                  />
                  <div className="medium-font fw-semibold">
                    <div>{item.packageName}</div>
                    <div>{item.packageAmount}</div>
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
          ))}
        </div>
        <div className="col mt-2">
          <Table
            data={PACKAGES_HOURS_DATA_TWO}
            columns={PACKAGES_HOURS_HEADING_TWO}
            tableClassname={adminPackageTable}
          />
        </div>
      </div>
      <div className="w-100 package-cart-div rounded p-2 mt-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-around">
          <PiHandbagBold className="h4 mb-0" />
          <div className="h5 mb-0 fw-semibold">1 Package Selected</div>
        </div>
        <div className="next-div rounded-pill p-1 px-2 d-flex align-items-center justify-content-around">
          <div className="h5 mb-0 fw-semibold">Next</div>
          <FaArrowRight className="h4 mb-0" />
        </div>
      </div>
    </div>
  );
}

export default PurchaseTopupHours;
