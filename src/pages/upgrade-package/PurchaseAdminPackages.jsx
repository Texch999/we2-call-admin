import { useEffect, useState } from "react";
import Table from "../home-page/Table";
import { Images } from "./../../images/index";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import PackageAvailablePopup from "./PackageAvailablePopup";
import { GET_ALL_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPackages } from "../../redux/actions/commonActions";
import UpgradeYourPackagePopup from "./UpgradeYourPackagePopup";

function PurchaseAdminPackages() {
  const [packageAvailablePopup, setPackageAvailablePopup] = useState(false);
  const [showPackagePopup, setShowPackagePopup] = useState(false);
  const [yearly, setYearly] = useState(false);
  const [allPackages, setAllPackages] = useState([]);
  const [selectPackage, setSelectPackage] = useState(false);
  const dispatch = useDispatch();
  const handlePackageAvailable = () => {
    setPackageAvailablePopup(!packageAvailablePopup);
  };

  const handleYear = (e) => {
    setYearly(e.target.checked);
  };
  console.log(allPackages, ".......allPackages");
  const packageList =
    useSelector((State) => State.common.selected_packages) || [];
  const selectedPackages = packageList.reduce(
    (acc, obj) => acc + obj.no_of_packages,
    0
  );
  const handleAddAndSubtract = (selectedPack, packageType, value) => {
    const selectedNewPackages = allPackages.map((obj) => {
      if (obj?.[packageType]?.package_id === selectedPack?.package_id) {
        obj[packageType] = {
          ...obj?.[packageType],
          no_of_packages: obj?.[packageType]?.no_of_packages + value,
          total_pKg_discount:
            (obj?.[packageType]?.cost *
              (value + obj?.[packageType]?.no_of_packages)) /
            obj?.[packageType]?.discount,
        };
      }
      return obj;
    });
    let selectedPackList = [];
    let monthly = [],
      yearly = [];
    allPackages.forEach((obj) => {
      if (obj["monthly"].no_of_packages > 0) {
        obj["monthly"].package_name = obj.name;
        obj["monthly"].duration = "monthly";
        monthly.push(obj["monthly"]);
      }
      if (obj["yearly"].no_of_packages > 0) {
        obj["yearly"].package_name = obj.name;
        obj["yearly"].duration = "yearly";
        yearly.push(obj["yearly"]);
      }
    });
    selectedPackList = [...monthly, ...yearly];
    dispatch(setSelectedPackages(selectedPackList));
    setAllPackages(selectedNewPackages);
  };

  const getAllPackages = async () => {
    await call(GET_ALL_PACKAGES)
      .then((res) => {
        if (res.data.status === 200) {
          const response = res.data.data;
          const updateResponse = getUpdatedPackData(response);
          setAllPackages(updateResponse);
        }
      })
      .catch((err) => console.log(err));
  };

  const getUpdatedPackData = (allPackagesInfo) => {
    return SELECT_PACKAGE.map((itm) => {
      let monthly, yearly;
      allPackagesInfo.forEach((obj) => {
        if (
          obj.package_name === itm.name &&
          obj.package_duration === "monthly"
        ) {
          monthly = obj;
        }
        if (
          obj.package_name === itm.name &&
          obj.package_duration === "yearly"
        ) {
          yearly = obj;
        }
      });
      return {
        ...itm,
        monthly: {
          discount: monthly?.discount,
          cost: monthly?.package_cost,
          package_id: monthly?.package_id,
          no_of_packages: 0,
          total_pKg_discount: 0,
        },
        yearly: {
          discount: yearly?.discount,
          cost: yearly?.package_cost,
          package_id: yearly?.package_id,
          no_of_packages: 0,
          total_pKg_discount: 0,
        },
      };
    });
  };

  useEffect(() => {
    getAllPackages();
  }, []);

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
      purchased: <div onClick={() => handlePackageAvailable()}>2</div>,
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
      packageAmount: 5000,
      name: "standard",
      value: 0,
    },
    {
      packageImg: Images.SilverSelectPackage,
      packageName: "Silver Package",
      packageAmount: 10000,
      name: "silver",
      value: 0,
    },
    {
      packageImg: Images.GoldPackage,
      packageName: "Gold Package",
      packageAmount: 15000,
      name: "gold",
      value: 0,
    },
    {
      packageImg: Images.DiamondPackage,
      packageName: "Diamond Package",
      packageAmount: Intl.NumberFormat("en-IN").format(20000),
      name: "diamond",
      value: 0,
    },
    {
      packageImg: Images.VIPPackage,
      packageName: "VIP Package",
      packageAmount: Intl.NumberFormat("en-IN").format(25000),
      name: "vip",
      value: 0,
    },
  ];

  const handlePayments = () => {
    packageList.length > 0 ? setShowPackagePopup(true) : setSelectPackage(true);
  };

  return (
    <div>
      <div className="row mt-3">
        <div className="col">
          <Table
            data={PACKAGES_DATA}
            columns={PACKAGES_HEADING}
            tableClassname={adminPackageTable}
          />
          {packageAvailablePopup && (
            <PackageAvailablePopup
              handlePackageAvailable={handlePackageAvailable}
            />
          )}
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
      <div className="mt-1">
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
              onClick={(e) => handleYear(e)}
            />
          </div>
          <div className="col-sm-2 col-lg-1 d-flex align-items-center">
            <div className="medium-font">Yearly</div>
          </div>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col">
          {allPackages?.map((item, index) => (
            <div className="select-package-div rounded px-3 mt-2" key={index}>
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-sm-7 col-lg-5 d-flex align-items-center">
                  <img
                    className="select-package-img"
                    src={item.packageImg}
                    alt="Standard_Img"
                  />
                  <div className="medium-font fw-semibold">
                    <div>{item.packageName}</div>
                    <div>
                      {yearly === true ? item.yearly?.cost : item.monthly?.cost}
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-3">
                  <div className="add-button rounded py-1 d-flex align-items-center justify-content-evenly">
                    <FaMinus
                      onClick={() =>
                        yearly === false
                          ? item.monthly.no_of_packages
                            ? handleAddAndSubtract(item.monthly, "monthly", -1)
                            : null
                          : item.yearly?.no_of_packages
                          ? handleAddAndSubtract(item.yearly, "yearly", -1)
                          : null
                      }
                    />
                    <div className="fw-semibold">
                      {yearly === true
                        ? item.yearly?.no_of_packages
                          ? item.yearly.no_of_packages
                          : " Add"
                        : item.monthly?.no_of_packages
                        ? item.monthly.no_of_packages
                        : "Add"}
                    </div>
                    <FaPlus
                      onClick={() =>
                        yearly === true
                          ? handleAddAndSubtract(item.yearly, "yearly", 1)
                          : handleAddAndSubtract(item.monthly, "monthly", 1)
                      }
                    />
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
      <div className="w-95 package-cart-div rounded p-2 m-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-around">
          <PiHandbagBold className="h4 mb-0" />
          <div className="h5 mb-0 fw-semibold d-flex">
            <div className="selected-numbers p-1">{selectedPackages}</div>
            <div className="p-1">Package Selected</div>
          </div>
        </div>
        {selectPackage && <div className="clr-red">Please Select Packages</div>}
        <div
          className="next-div rounded-pill  d-flex align-items-center justify-content-around"
          onClick={() => handlePayments()}
        >
          <div className=" mb-0 fw-semibold p-1">Next</div>
          <FaArrowRight className="h4 mb-0" />
        </div>
      </div>
      <UpgradeYourPackagePopup
        showPackagePopup={showPackagePopup}
        setShowPackagePopup={setShowPackagePopup}
      />
    </div>
  );
}

export default PurchaseAdminPackages;
