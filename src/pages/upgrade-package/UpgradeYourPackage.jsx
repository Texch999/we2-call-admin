import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import SpecialOffers from "./SpecialOffers";
import SpecialPackages from "./SpecialPackages";
import { useState, useEffect } from "react";
import { GET_ALL_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";

function UpgradeYourPackage() {
  const [specialOffer, setSpecialOffer] = useState(false);
  const [specialPackage, setSpecialPackage] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [selectPackageName, setSelectPackageName] = useState();
  const [allPackages, setAllPackages] = useState([]);

  const getAllPackages = async () => {
    await call(GET_ALL_PACKAGES)
      .then((res) => {
        if (res.data.status === 200) {
          const response = res.data.data;
          setAllPackages(response);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllPackages();
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
        <div className="your-package-div w-50 rounded p-1">
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
        <div className="mt-3">
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
    </div>
  );
}

export default UpgradeYourPackage;
