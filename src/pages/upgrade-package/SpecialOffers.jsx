import React from "react";
import { Images } from "../../images";

function SpecialOffers() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="offers-div rounded p-3">
            <div className="row">
              <div className="col">
                <h4 className="h4 fw-semibold">
                  Special Package for New Admins.
                </h4>
              </div>
              <div className="col">
                <img src={Images.Percentage} />
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default SpecialOffers;
