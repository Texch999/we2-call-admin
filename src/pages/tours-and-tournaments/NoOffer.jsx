import React from "react";
import { Images } from "../../images";

function NoOffer() {
  return (
    <center className="flex-center flex-column w-100">
      <div className="w-50 mt-20">
        <img
          className="tour-gift-img"
          src={Images.TourGiftBox}
          alt="Gift_Box"
        />
        <div className="clickhere-text font-12 fw-600 mt-10 w-50">
          We travel not escape life, but for life not escape us Please{" "}
          <span> click here </span> what you are interested.
        </div>
      </div>
    </center>
  );
}

export default NoOffer;
