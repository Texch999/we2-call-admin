import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import SpecialOffers from "./SpecialOffers";
import SpecialPackages from "./SpecialPackages";
import { useState, useEffect } from "react";
import { GET_ADMIN_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";
import PopupUpgradePackages from "./PopupUpgradePackages";

function UpgradeYourPackage() {
  const [specialOffer, setSpecialOffer] = useState(false);
  const [specialPackage, setSpecialPackage] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectPackageName, setSelectPackageName] = useState();
  const [upgradeType, setUpgradeType] = useState("packages");
  const packageUserList = [localStorage.getItem("user_name")];
  console.log("packageUserList===>", packageUserList);

  const [adminSubscription, setAdminSubscription] = useState(false);
  const register_id = localStorage.getItem("register_id");

  const getAdminPackages = async () => {
    await call(GET_ADMIN_PACKAGES, { register_id })
      .then((res) => {
        setAdminSubscription(res?.data?.data?.subscriptions?.[0] || []);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAdminPackages();
  }, []);

  const handleSpecialOffer = () => {
    setSpecialOffer(true);
    setSpecialPackage(false);
  };

  const [yearly, setYearly] = useState();

  const handleSpecialPackage = () => {
    setSpecialPackage(true);
    setSpecialOffer(false);
  };

  // const handlePopup = () => {
  //   setOpenPopup(true);
  // };
  return (
    <div>
      <div className="pt-3 px-3">
        <div className="row">
          <div className="col your-package-div rounded p-1 me-1">
            <div className="row">
              <div className="col d-flex flex-column medium-font">
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-around p-1">
                    <div>User Name</div>
                    <div>Role</div>
                  </div>
                  <hr className="hr-line" />
                  <div className="d-flex align-items-center justify-content-around p-1">
                    <div className="yellow-clr">Sai-Offline</div>
                    <div className="yellow-clr">Agent</div>
                  </div>
                </div>
              </div>
              <div className="col d-flex align-items-center justify-content-around">
                <div
                  className="w-35 d-flex align-items-center justify-content-around fw-semibold medium-font text-white p-2 rounded yellow-btn"
                  // onClick={() => handlePopup()}
                >
                  <div>Upgrade</div>
                  <div>
                    <BsFillRocketTakeoffFill className="d-flex large-font" />
                  </div>
                </div>
                <div className="w-35 d-flex align-items-center justify-content-around fw-semibold medium-font text-white p-2 rounded num-btn-bg">
                  <div>9999/-</div>
                  <div>
                    <CiPercent className="d-flex large-font" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col w-100 your-package-div rounded p-1 ms-1 d-flex align-items-center justify-content-between">
            <div className="row w-100 d-flex align-items-center">
              <div className="col d-flex align-items-center">
                <div className="col d-flex align-items-center justify-content-center medium-font">
                  Trial Pack
                </div>
              </div>
              <div className="col d-flex align-items-center">
                <div className="w-75 d-flex align-items-center justify-content-around fw-semibold medium-font text-white p-2 rounded yellow-btn">
                  <div>Upgrade</div>
                  <div>
                    <BsFillRocketTakeoffFill className="d-flex large-font" />
                  </div>
                </div>
              </div>
              <div className="col d-flex align-items-center">
                <div className="w-75 d-flex align-items-center justify-content-around fw-semibold medium-font text-white p-2 rounded num-btn-bg">
                  <div>9999/-</div>
                  <div>
                    <CiPercent className="d-flex large-font" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m">
          <h6 className="h6 fw-semibold">Upgrade</h6>
          <div className="w-20 d-flex align-items-center justify-content-between medium-font fw-semibold">
            <div
              className={`py-1 ${specialOffer ? "yellow-border-bottom" : ""}`}
              onClick={() => handleSpecialOffer()}
            >
              Offers
            </div>
            <div>|</div>
            <div
              className={`py-1 ${specialPackage ? "yellow-border-bottom" : ""}`}
              onClick={() => handleSpecialPackage()}
            >
              Packages
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="p-3">
        {specialOffer && <SpecialOffers />}
        {specialPackage && (
          <SpecialPackages
            setOpenPopup={setOpenPopup}
            setYearly={setYearly}
            yearly={yearly}
            setSelectPackageName={setSelectPackageName}
          />
        )}
      </div>
      <PopupUpgradePackages
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        selectPackageName={selectPackageName}
        yearly={yearly}
        // setOpenPopup={setOpenPopup}
      />
    </div>
  );
}

export default UpgradeYourPackage;
