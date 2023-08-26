import { BiSolidCheckCircle } from "react-icons/bi";
import { Images } from "../../images";

function SpecialPackages() {
  const PACKAGE_DETAILS = [
    {
      packageName: "Standard Package",
      discountPer: "10% OFF",
    },
  ];
  return (
    <div>
      <div className="w-25 d-flex align-items-center justify-content-between form-check form-switch">
        <div>Monthly</div>
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <div>Yearly</div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="standard-package-div">
            <div className="row p-3">
              <div className="col-9 d-flex flex-column">
                <div className="row">
                  <div className="d-flex">
                    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle amount-border p-1">
                      <div className="fw-semibold">Rs</div>
                      <h5 className="fw-bold">5000</h5>
                    </div>
                    <div className="p-2 px-4">
                      <div className="w-75 d-flex align-items-center justify-content-evenly discount-div rounded-pill p-2">
                        <img
                          className="discount-img"
                          src={Images.DiscountImg}
                          alt="Discount_Img"
                        />
                        <span className="fw-semibold">10% OFF</span>
                      </div>
                      <h5 className="fw-bold d-flex align-items-end">
                        Standard Package
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row medium-font mt-3">
                  <div className="col">
                    <BiSolidCheckCircle />
                    Join call with 10 users
                  </div>
                  <div className="col">
                    <BiSolidCheckCircle />
                    Monthly 10 meetings
                  </div>
                </div>
                <div className="row medium-font mt-3">
                  <div className="col">
                    <BiSolidCheckCircle />
                    Use 5 personal meetings
                  </div>
                  <div className="col">
                    <BiSolidCheckCircle />
                    Audio calls
                  </div>
                  <div className="col">
                    <BiSolidCheckCircle />
                    Video calls
                  </div>
                </div>
                <div className="row w-75 mt-3">
                  <div className="col">
                    <div className="add-package-btn rounded-pill p-2 text-center medium-font">
                      Add Package
                    </div>
                  </div>
                  <div className="col">
                    <div className="upgrade-btn rounded-pill p-2 text-center medium-font">
                      Upgrade
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 d-flex flex-column align-items-end">
                <img
                  className="standard-star-img"
                  src={Images.StandardStar}
                  alt="Star"
                />
                <img
                  className="standard-star-img"
                  src={Images.StandardStarBG}
                  alt="Star_BG"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialPackages;
