import Table from "../home-page/Table";
import { Images } from "./../../images/index";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";
import { PiHandbagBold } from "react-icons/pi";
import { GET_ADMIN_PACKAGES, GET_ALL_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPackages } from "../../redux/actions/commonActions";
import UpgradeYourPackagePopup from "./UpgradeYourPackagePopup";

function PurchaseTopupHours() {
  const adminPackageTable = "admin-package-table";
  const register_id = localStorage.getItem("register_id");
  const [adminPackages, setAdminPackages] = useState([]);
  const [showPackagePopup, setShowPackagePopup] = useState(false);
  const [selectPackage, setSelectPackage] = useState(false);


  let PACKAGES_DATA = [
    {
      package: (
        <div className="d-flex align-items-center">
          <img
            className="discount-img"
            src={Images.StandardSmallImg}
            alt="Standard_Small"
          />
          <div className="px-2"> Standard</div>
        </div>
      ),
      purchased: <div>0h</div>,
      used: <div className="yellow-clr">0h</div>,
      available: <div className="green-color">0h</div>,
      package_name: "standard",
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
      purchased: <div>0h</div>,
      used: <div className="yellow-clr">0h</div>,
      available: <div className="green-color">0h</div>,
      package_name: "silver",
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
      purchased: <div>0h</div>,
      used: <div className="yellow-clr">0h</div>,
      available: <div className="green-color">0h</div>,
      package_name: "gold",
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
      purchased: <div>0h</div>,
      used: <div className="yellow-clr">0h</div>,
      available: <div className="green-color">0h</div>,
      package_name: "diamond",
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
      purchased: <div>0h</div>,
      used: <div className="yellow-clr">0h</div>,
      available: <div className="green-color">0h</div>,
      package_name: "vip",
    },
  ];

  const PACKAGES_HEADING = [
    { header: "Packages", field: "package" },
    { header: "Purchased", field: "purchased" },
    { header: "Used", field: "used" },
    { header: "Available", field: "available" },
  ];

  const getAdminPackages = async () => {
    await call(GET_ADMIN_PACKAGES, { register_id })
      .then((res) => {
        const hoursPackages = res?.data?.data?.bulk_subscriptions.filter(
          (obj) =>
            obj.duration === "hourly" || obj.package_duration === "hourly"
        );
        setAdminPackages(hoursPackages || []);
      })
      .catch((err) => console.log(err));
  };
  PACKAGES_DATA = PACKAGES_DATA.map((obj) => {
    let numOfHour = 0,
      usedHours = 0;
    adminPackages.forEach((obj1) => {
      if (obj?.package_name === obj1?.package_name) {
        numOfHour += obj1?.no_of_packages || 0;
        usedHours += obj1?.used_packages || 0;
        obj = {
          ...obj,
          purchased: <div>{numOfHour}h</div>,
          used: <div className="yellow-clr">{usedHours}h</div>,
          available: (
            <div className="green-color">{numOfHour - usedHours}h</div>
          ),
        };
      }
    });
    return obj;
  });
  useEffect(() => {
    getAdminPackages();
  }, []);

  // const PACKAGES_HOURS_DATA = [
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.StandardSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Standard</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.SilverSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Silver</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.GoldSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Gold</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.DiamondSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Diamond</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.VIPSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">VIP</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //   },
  // ];
  // const PACKAGES_HOURS_HEADING = [
  //   { header: "Return Packages", field: "returnPackage" },
  //   { header: "Value", field: "value" },
  //   { header: "Hours", field: "hours" },
  //   { header: "Available", field: "available" },
  // ];

  // const PACKAGES_HOURS_DATA_TWO = [
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.StandardSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Standard</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //     add: (
  //       <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
  //         <div>ADD</div>
  //         <FaPlus />
  //       </div>
  //     ),
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.SilverSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Silver</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //     add: (
  //       <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
  //         <div>ADD</div>
  //         <FaPlus />
  //       </div>
  //     ),
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.GoldSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Gold</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //     add: (
  //       <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
  //         <div>ADD</div>
  //         <FaPlus />
  //       </div>
  //     ),
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.DiamondSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Diamond</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //     add: (
  //       <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
  //         <div>ADD</div>
  //         <FaPlus />
  //       </div>
  //     ),
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.VIPSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">VIP</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //     add: (
  //       <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
  //         <div>ADD</div>
  //         <FaPlus />
  //       </div>
  //     ),
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.StandardSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Standard</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //     add: (
  //       <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
  //         <div>ADD</div>
  //         <FaPlus />
  //       </div>
  //     ),
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.SilverSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Silver</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //     add: (
  //       <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
  //         <div>ADD</div>
  //         <FaPlus />
  //       </div>
  //     ),
  //   },
  //   {
  //     returnPackage: (
  //       <div className="d-flex align-items-center">
  //         <img
  //           className="discount-img"
  //           src={Images.GoldSmallImg}
  //           alt="Standard_Small"
  //         />
  //         <div className="px-2">Gold</div>
  //       </div>
  //     ),
  //     value: <div>4000</div>,
  //     hours: <div className="yellow-clr">15</div>,
  //     available: <div className="green-color">2000</div>,
  //     add: (
  //       <div className="add-button rounded p-1 d-flex align-items-center justify-content-evenly fw-semibold">
  //         <div>ADD</div>
  //         <FaPlus />
  //       </div>
  //     ),
  //   },
  // ];
  // const PACKAGES_HOURS_HEADING_TWO = [
  //   { header: "Return Packages", field: "returnPackage" },
  //   { header: "Value", field: "value" },
  //   { header: "Hours", field: "hours" },
  //   { header: "Available", field: "available" },
  //   { header: "", field: "add" },
  // ];

  const SELECT_PACKAGE = [
    {
      packageImg: Images.StandardPackage,
      packageName: "Standard Package",
      package_name: "standard",
      cost: 0,
      packageAmount: 100,
    },
    {
      packageImg: Images.SilverSelectPackage,
      packageName: "Silver Package",
      package_name: "silver",
      cost: 0,
      packageAmount: 200,
    },
    {
      packageImg: Images.GoldPackage,
      packageName: "Gold Package",
      package_name: "gold",
      cost: 0,
      packageAmount: 300,
    },
    {
      packageImg: Images.DiamondPackage,
      packageName: "Diamond Package",
      package_name: "diamond",
      cost: 0,
      packageAmount: Intl.NumberFormat("en-IN").format(400),
    },
    {
      packageImg: Images.VIPPackage,
      packageName: "VIP Package",
      package_name: "vip",
      cost: 0,
      packageAmount: Intl.NumberFormat("en-IN").format(500),
    },
  ];

  const [allHourspackages, setAllHourspackages] = useState([]);

  const dispatch = useDispatch();
  const packageList =
    useSelector((State) => State.common.selected_packages) || [];
  const selectedPackages = packageList.reduce(
    (acc, obj) => acc + obj.no_of_packages,
    0
  );

  const handleSubHourly = (itm) => {
    console.log(itm, ".......item");
    const updatedSelectedPackagesHourly = allHourspackages.map((i) =>
      i.package_name === itm?.package_name
        ? { ...i, no_of_packages: i.no_of_packages - 1 }
        : i
    );
    setAllHourspackages(updatedSelectedPackagesHourly);
    const packageForRedux = updatedSelectedPackagesHourly
      .filter((obj) => obj.no_of_packages > 0)
      .map((obj) => {
        return {
          cost: obj.cost,
          package_id: obj.package_id,
          no_of_packages: obj.no_of_packages,
          package_name: obj.package_name,
          duration: obj.package_duration,
          discount: obj.discount || 0,
          total_pKg_discount: (obj.cost * obj.no_of_packages) / obj.discount,
        };
      });
    dispatch(setSelectedPackages(packageForRedux));
  };

  const handleAddHourly = (itm) => {
    const updatedSelectedPackagesHourly = allHourspackages.map((i) =>
      i.package_name === itm?.package_name
        ? { ...i, no_of_packages: (i.no_of_packages || 0) + 1 }
        : i
    );
    setAllHourspackages(updatedSelectedPackagesHourly);

    const packageForRedux = updatedSelectedPackagesHourly
      .filter((obj) => obj.no_of_packages > 0)
      .map((obj) => {
        return {
          cost: obj.cost,
          package_id: obj.package_id,
          no_of_packages: obj.no_of_packages,
          package_name: obj.package_name,
          duration: obj.duration,
          discount: obj.discount || 0,
          total_pKg_discount: (obj?.cost * obj?.no_of_packages) / obj.discount,
        };
      });
    dispatch(setSelectedPackages(packageForRedux));
  };

  const getAllPackages = async () => {
    await call(GET_ALL_PACKAGES, { package_type: "hourly" })
      .then((res) => {
        if (res.data.status === 200) {
          const response = res.data.data;
          const updateResponse = getUpdatedPackData(response);
          setAllHourspackages(updateResponse);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllPackages();
  }, []);

  const getUpdatedPackData = (allPackagesInfo) => {
    return SELECT_PACKAGE.map((itm) => {
      const responseObj = allPackagesInfo?.find(
        (obj) => itm.package_name === obj.package_name
      );
      if (responseObj) {
        return {
          ...itm,
          cost: responseObj.package_cost,
          package_id: responseObj.package_id,
          no_of_packages: responseObj.no_of_packages || 0,
          package_name: responseObj.package_name,
          duration: responseObj.package_duration,
          discount: responseObj.discount || 0,
        };
      } else return itm;
    });
  };

  const handlePayments = () => {
    packageList.length > 0 ? setShowPackagePopup(true) : setSelectPackage(true);
  };

  return (
    <div>
      <div className="row mt-3">
        {/* <div className="col">
          <Table
            data={PACKAGES_HOURS_DATA_TWO}
            columns={PACKAGES_HOURS_HEADING_TWO}
            tableClassname={adminPackageTable}
          />
        </div> */}
        {/* <div className="col">
          <Table
            data={PACKAGES_HOURS_DATA}
            columns={PACKAGES_HOURS_HEADING}
            tableClassname={adminPackageTable}
          />
        </div> */}
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
          {allHourspackages?.map((item, index) => (
            <div
              className="select-package-div rounded p-1 px-3 mt-2"
              key={index}
            >
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-sm-7 col-lg-5 d-flex align-items-center">
                  <img
                    className="select-package-img"
                    src={item.packageImg}
                    alt="Standard_Img"
                  />
                  <div className="medium-font fw-semibold">
                    <div>{item.packageName}</div>
                    <div>{item.cost}</div>
                  </div>
                </div>
                <div className="col-sm-4 col-lg-3">
                  <div className="add-button rounded p-2 d-flex align-items-center justify-content-evenly">
                    <FaMinus
                      onClick={() =>
                        item?.no_of_packages ? handleSubHourly(item) : null
                      }
                    />
                    <div className="fw-semibold">
                      {item?.no_of_packages ? item?.no_of_packages : " Add"}
                    </div>
                    <FaPlus onClick={() => handleAddHourly(item)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col mt-2">
          <Table
            data={PACKAGES_DATA}
            columns={PACKAGES_HEADING}
            tableClassname={adminPackageTable}
          />
        </div>
      </div>
      <div className="w-95 package-cart-div rounded p-2 m-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-around">
          <PiHandbagBold className="h4 mb-0" />
          <div className="h5 mb-0 fw-semibold d-flex">
            <div className="selected-numbers p-1">{selectedPackages}</div>
            <div className="p-1">Hours Selected</div>
          </div>
        </div>
        <div
          className="next-div rounded-pill p-1 px-2 d-flex align-items-center justify-content-around"
          onClick={() => handlePayments()}
        >
          <div className="h5 mb-0 fw-semibold">Next</div>
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

export default PurchaseTopupHours;
