import { BiSolidCheckCircle } from "react-icons/bi";
import { Images } from "../../images";

function SpecialPackages() {
  const PACKAGE_DETAILS = [
    {
      id: 1,
      packageBackGroundColor: "standard-package-bg",
      addPackageBtnColor: "add-package-btn",
      upgradeBtnColor: "upgrade-btn",
      discountDivColor: "standard-discount-div",
      packageName: "Standard Package",
      rate: 5000000,
      offerImage: Images.DiscountImg,
      offerPercentage: "10% OFF",
      videoText: "",
      addPackageBtn: "Add Package",
      upgradeBtn: "",
      packageImage: Images.StandardPackage,
      packageBackGroundImage: Images.StandardPackageBG,
      usersText: (
        <div>
          <BiSolidCheckCircle /> Join call with 10 users
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
      rate: 10000,
      offerImage: Images.DiscountBlackImg,
      offerPercentage: "10% OFF",
      addPackageBtn: "Add Package",
      upgradeBtn: "Upgrade",
      packageImage: Images.SilverPackage,
      packageBackGroundImage: Images.SilverPackageBG,
      usersText: (
        <div>
          <BiSolidCheckCircle /> Join call with 15 users
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
      rate: 15000,
      offerImage: Images.DiscountBlackImg,
      offerPercentage: "10% OFF",
      addPackageBtn: "Add Package",
      upgradeBtn: "Upgrade",
      packageImage: Images.GoldPackage,
      packageBackGroundImage: Images.GoldPackageBG,
      usersText: (
        <div>
          <BiSolidCheckCircle /> Join call with 15 users
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
      upgradeBtn: "Upgrade",
      packageImage: Images.DiamondPackage,
      packageBackGroundImage: Images.DiamondPackageBG,
      usersText: (
        <div>
          <BiSolidCheckCircle /> Unlimited users
        </div>
      ),
      meetingsText: (
        <div>
          <BiSolidCheckCircle /> Monthly Unlimited meetings
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
      rate: 25000000,
      offerImage: Images.DiscountImg,
      offerPercentage: "10% OFF",
      addPackageBtn: "Add Package",
      upgradeBtn: "Upgrade",
      packageImage: Images.VIPPackage,
      packageBackGroundImage: Images.VIPPackageBG,
      usersText: (
        <div>
          <BiSolidCheckCircle /> Join call with 15 users
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
  ];
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
                        <div className="large-font fw-bold">
                          {item.offerPercentage}
                        </div>
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
                      {item.upgradeBtn === "" ? null : (
                        <div
                          className={`rounded-pill p-2 text-center medium-font fw-bold ${item.upgradeBtnColor}`}
                        >
                          {item.upgradeBtn}
                        </div>
                      )}
                    </div>
                    <div className="col">
                      <div
                        className={`rounded-pill p-2 text-center medium-font fw-semibold ${item.addPackageBtnColor}`}
                      >
                        <div>Top Up Hours</div>
                        <div>Per Hour - 100 Rs</div>
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
