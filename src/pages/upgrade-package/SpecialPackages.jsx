import { BiSolidCheckCircle } from "react-icons/bi";
import { Images } from "../../images";
import { useState, useEffect } from "react";
import { GET_ALL_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";

function SpecialPackages(props) {
  const { setOpenPopup, setSelectPackageName, setYearly, yearly } = props;

  const [allPackages, setAllPackages] = useState([]);

  // const [yearly, setYearly] = useState();

  const handleMonthly = (e) => {
    setYearly(e.target.checked);
  };

  const yearlyPacks = allPackages.filter(
    (item) => item.package_duration === "yearly"
  );
  const montlyPacks = allPackages.filter(
    (item) => item.package_duration === "monthly"
  );

  const standardPack =
    yearly === true
      ? yearlyPacks.filter((item) => item.package_name === "standard")
      : montlyPacks.filter((item) => item.package_name === "standard");
  const silverPack =
    yearly === true
      ? yearlyPacks.filter((item) => item.package_name === "silver")
      : montlyPacks.filter((item) => item.package_name === "silver");
  const goldPack =
    yearly === true
      ? yearlyPacks.filter((item) => item.package_name === "gold")
      : montlyPacks.filter((item) => item.package_name === "gold");
  const diamondPack =
    yearly === true
      ? yearlyPacks.filter((item) => item.package_name === "diamond")
      : montlyPacks.filter((item) => item.package_name === "diamond");
  const vipPack =
    yearly === true
      ? yearlyPacks.filter((item) => item.package_name === "vip")
      : montlyPacks.filter((item) => item.package_name === "vip");

  console.log("yearlyPacks===>", yearlyPacks);
  console.log("montlyPacks===>", yearlyPacks);

  const PACKAGE_DETAILS = [
    {
      id: 1,
      packageBackGroundColor: "standard-package-bg",
      addPackageBtnColor: "add-package-btn",
      upgradeBtnColor: "upgrade-btn",
      discountDivColor: "standard-discount-div",
      packageName: "Standard Package",
      rate: standardPack.map((item) => item.package_cost),
      offerImage: Images.DiscountImg,
      offerPercentage: standardPack.map((item) => item.discount + "% OFF"),
      videoText: "",
      addPackageBtn: "Add Package",
      packageImage: Images.StandardPackage,
      packageBackGroundImage: Images.StandardPackageBG,
      hours: standardPack.map((item) => item.package_limits.duration),
      usersText: (
        <div>
          <BiSolidCheckCircle /> Join call with{" "}
          {standardPack.map((item) => item.package_limits.members)} users
        </div>
      ),
      meetingsText: (
        <div>
          <BiSolidCheckCircle /> Monthly 10 meetings
        </div>
      ),
      personalMeetingsText: (
        <div>
          <BiSolidCheckCircle /> Use 5 personal meetings
        </div>
      ),
      audioText: (
        <div>
          <BiSolidCheckCircle /> Audio Calls
        </div>
      ),
    },
    {
      id: 2,
      packageBackGroundColor: "silver-package-bg",
      addPackageBtnColor: "add-package-black-btn",
      upgradeBtnColor: "upgrade-btn",
      discountDivColor: "silver-discount-div",
      packageName: "Silver Package",
      rate: silverPack.map((item) => item.package_cost),
      offerImage: Images.DiscountBlackImg,
      offerPercentage: silverPack.map((item) => item.discount + "% OFF"),
      addPackageBtn: "Add Package",
      packageImage: Images.SilverPackage,
      packageBackGroundImage: Images.SilverPackageBG,
      hours: silverPack.map((item) => item.package_limits.duration),
      usersText: (
        <div>
          <BiSolidCheckCircle /> Join call with{" "}
          {silverPack.map((item) => item.package_limits.members)} users
        </div>
      ),
      meetingsText: (
        <div>
          <BiSolidCheckCircle /> Monthly 15 meetings
        </div>
      ),
      personalMeetingsText: (
        <div>
          <BiSolidCheckCircle /> Use 10 personal meetings
        </div>
      ),
      audioText: (
        <div>
          <BiSolidCheckCircle /> Audio Calls
        </div>
      ),
      videoText: (
        <div>
          <BiSolidCheckCircle /> Video Calls
        </div>
      ),
    },
    {
      id: 3,
      packageBackGroundColor: "gold-package-bg",
      addPackageBtnColor: "add-package-black-btn",
      upgradeBtnColor: "upgrade-btn",
      discountDivColor: "gold-discount-div",
      packageName: "Gold Package",
      rate: goldPack.map((item) => item.package_cost),
      offerImage: Images.DiscountBlackImg,
      offerPercentage: goldPack.map((item) => item.discount + "% OFF"),
      addPackageBtn: "Add Package",
      packageImage: Images.GoldPackage,
      packageBackGroundImage: Images.GoldPackageBG,
      hours: silverPack.map((item) => item.package_limits.duration),
      usersText: (
        <div>
          <BiSolidCheckCircle /> Join call with{" "}
          {goldPack.map((item) => item.package_limits.members)} users
        </div>
      ),
      meetingsText: (
        <div>
          <BiSolidCheckCircle /> Monthly 20 meetings
        </div>
      ),
      personalMeetingsText: (
        <div>
          <BiSolidCheckCircle /> Use 20 personal meetings
        </div>
      ),
      audioText: (
        <div>
          <BiSolidCheckCircle /> Audio Calls
        </div>
      ),
      videoText: (
        <div>
          <BiSolidCheckCircle /> Video Calls
        </div>
      ),
    },
    {
      id: 4,
      packageBackGroundColor: "diamond-package-bg",
      addPackageBtnColor: "add-package-black-btn",
      upgradeBtnColor: "upgrade-btn",
      discountDivColor: "diamond-discount-div",
      packageName: "Diamond Package",
      rate: 20000,
      offerImage: Images.DiscountBlackImg,
      offerPercentage: "10% OFF",
      addPackageBtn: "Add Package",
      packageImage: Images.DiamondPackage,
      packageBackGroundImage: Images.DiamondPackageBG,
      hours: diamondPack.map((item) => item.package_limits.duration),
      usersText: (
        <div>
          <BiSolidCheckCircle />
          Join call with{" "}
          {diamondPack.map((item) => item.package_limits.members)} users
        </div>
      ),
      meetingsText: (
        <div>
          <BiSolidCheckCircle /> Monthly 25 meetings
        </div>
      ),
      personalMeetingsText: (
        <div>
          <BiSolidCheckCircle /> Unlimited personal meetings
        </div>
      ),
      audioText: (
        <div>
          <BiSolidCheckCircle /> Audio Calls
        </div>
      ),
      videoText: (
        <div>
          <BiSolidCheckCircle /> Video Calls
        </div>
      ),
    },
    {
      id: 5,
      packageBackGroundColor: "vip-package-bg",
      addPackageBtnColor: "add-package-white-btn",
      upgradeBtnColor: "upgrade-white-btn",
      discountDivColor: "vip-discount-div",
      packageName: "VIP Package",
      rate: vipPack.map((item) => item.package_cost),
      offerImage: Images.DiscountImg,
      offerPercentage: "10% OFF",
      addPackageBtn: "Add Package",
      packageImage: Images.VIPPackage,
      packageBackGroundImage: Images.VIPPackageBG,
      hours: vipPack.map((item) => item.package_limits.duration),
      usersText: (
        <div>
          <BiSolidCheckCircle /> Join call with{" "}
          {diamondPack.map((item) => item.package_limits.members)} users
        </div>
      ),
      meetingsText: (
        <div>
          <BiSolidCheckCircle /> Monthly Unlimited meetings
        </div>
      ),
      personalMeetingsText: (
        <div>
          <BiSolidCheckCircle /> Use 20 personal meetings
        </div>
      ),
      audioText: (
        <div>
          <BiSolidCheckCircle /> Audio Calls
        </div>
      ),
      videoText: (
        <div>
          <BiSolidCheckCircle /> Video Calls
        </div>
      ),
    },
  ];

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

  const handleButtonClick = (item) => {
    setOpenPopup(true);
    setSelectPackageName(item);
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-2 col-lg-1 d-flex align-items-center">
          <div className="medium-font">Monthly</div>
        </div>
        <div className="col-sm-2 col-lg-1 form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onChange={(e) => handleMonthly(e)}
            id="flexSwitchCheckDefault"
          />
        </div>
        <div className="col-sm-2 col-lg-1 d-flex align-items-center">
          <div className="medium-font">Yearly</div>
        </div>
      </div>
      <div className="row mt-3">
        {PACKAGE_DETAILS?.map((item, index) => (
          <div
            className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-3"
            key={index}
          >
            <div className={`package-div ${item.packageBackGroundColor}`}>
              <div className="row p-3">
                <div className="col-sm-9 col-md-10 d-flex flex-column">
                  <div className="row">
                    <div className="d-flex">
                      <div className="d-flex flex-column align-items-center justify-content-center rounded-circle amount-border p-1">
                        <img
                          className="discount-img"
                          src={item.offerImage}
                          alt="Discount_Img"
                        />
                        <h6 className="fw-bold">{item.offerPercentage}</h6>
                      </div>
                      <div className="p-2 px-4 d-flex flex-column">
                        <div
                          className={`rounded-pill p-2 ${item.discountDivColor}`}
                        >
                          <h5 className="fw-bold mb-0">Rs {item.rate}</h5>
                        </div>
                        <div>
                          <h5 className="fw-bold d-flex align-items-end">
                            {item.packageName}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row w-90 medium-font mt-3">
                    <div className="col">{item.usersText}</div>
                    <div className="col">{item.meetingsText}</div>
                  </div>
                  <div className="row w-90 medium-font mt-3">
                    <div className="col-5">{item.personalMeetingsText}</div>
                    <div className="col">{item.audioText}</div>
                    {item.videoText === "" ? null : (
                      <div className="col">{item.videoText}</div>
                    )}
                  </div>
                  <div className="row w-90 d-flex align-items-end mt-3">
                    <div className="col-4">
                      <div
                        className={`rounded-pill p-2 text-center medium-font fw-semibold ${item.addPackageBtnColor}`}
                      >
                        {item.addPackageBtn}
                      </div>
                    </div>
                    <div className="col-3">
                      <div
                        className={`rounded-pill p-2 text-center medium-font fw-bold ${item.upgradeBtnColor}`}
                        onClick={() => handleButtonClick(item)}
                      >
                        upgrade
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className={`rounded-pill p-2 text-center medium-font fw-semibold ${item.addPackageBtnColor}`}
                      >
                        <div>Top Up Hours</div>
                        <div>Hours -{item.hours}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col-md-2 d-flex flex-column align-items-end">
                  <img
                    className="standard-star-img"
                    src={item.packageImage}
                    alt="Star"
                  />
                  <img
                    className="standard-star-img"
                    src={item.packageBackGroundImage}
                    alt="Star_BG"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialPackages;
