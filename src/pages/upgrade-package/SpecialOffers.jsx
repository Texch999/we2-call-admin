import React from "react";
import { Images } from "../../images";
import { useState, useEffect } from "react";
import { GET_ALL_PACKAGES } from "../../config/endpoints";
import { call } from "../../config/axios";

function SpecialOffers() {
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

  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-3">
          <div className="offers-div p-3">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-column">
                  <h4 className="h4 fw-semibold">
                    Special Package for New Admins.
                  </h4>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="w-45 d-flex rounded package-btn-clr align-items-center justify-content-around">
                      <div className="small-font">Monthly</div>
                      <div className="medium-font fw-semibold">5999</div>
                    </div>
                    <div className="w-45 d-flex rounded package-btn-clr align-items-center justify-content-around">
                      <div className="small-font">Monthly</div>
                      <div className="medium-font fw-semibold">6000</div>
                    </div>
                  </div>
                  <div className="w-50 d-flex align-items-center justify-content-center view-details-btn rounded-pill medium-font text-center fw-semibold mt-3">
                    View Details
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-end">
                  <div>
                    <div className="font-10 offer-percentage-div">
                      <div>FLAT</div>
                      <div>10%</div>
                      <div>OFF</div>
                    </div>
                    <img
                      className="percentage-img"
                      src={Images.Percentage}
                      alt="Percentage"
                    />
                  </div>
                  <div>
                    <img
                      className="giftbox-img"
                      src={Images.GiftBox}
                      alt="GiftBox"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mt-3">
          <div className="offers-blue-div p-3">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-column">
                  <h4 className="h4 fw-semibold">
                    Special Package for New Admins.
                  </h4>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <div className="w-45 d-flex rounded package-btn-blue-clr align-items-center justify-content-around">
                      <div className="small-font">Monthly</div>
                      <div className="medium-font fw-semibold">5999</div>
                    </div>
                    <div className="w-45 d-flex rounded package-btn-blue-clr align-items-center justify-content-around">
                      <div className="small-font">Monthly</div>
                      <div className="medium-font fw-semibold">6000</div>
                    </div>
                  </div>
                  <div className="w-50 d-flex align-items-center justify-content-center view-details-blue-btn rounded-pill medium-font text-center fw-semibold mt-3">
                    View Details
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-end">
                  <div>
                    <div className="font-10 offer-percentage-div">
                      <div>FLAT</div>
                      <div>10%</div>
                      <div>OFF</div>
                    </div>
                    <img
                      className="percentage-img"
                      src={Images.Percentage}
                      alt="Percentage"
                    />
                  </div>
                  <div>
                    <img
                      className="giftbox-img"
                      src={Images.GiftBox}
                      alt="GiftBox"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffers;
