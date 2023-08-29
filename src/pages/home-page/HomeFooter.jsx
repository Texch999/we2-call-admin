import React from "react";
import { Images } from "../../images";
import { BiLogoTelegram } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

function HomeFooter() {
  return (
    <div className="row footer-height">
      <hr className="mt-3" />
      <div className="col-5 p-3 footer-left">
        <img className="footer-image" src={Images.header_logo} />
        <h5 className="mt-1 meetings-heading">Regd by Costa Rica</h5>
        <h6 className="meetings-heading medium-font">All Above 18+ Years</h6>
        <p className="meetings-heading small-font">© 2023 We2Call. All rights reserved.</p>
      </div>
      <div className="col-7 p-3 ">
        <h4 className="meetings-heading">
          Secure calls with end-to-end encryption
        </h4>
        <span className="small-font">
          Your privacy is our priority. With end-to-end encryption, you can be
          sure that your conversations stay between you and the person you're
          talking to.
        </span>
        <div className="meetings-heading mt-2">Social Networks</div>
        <div className="d-flex mt-2">
          <div className="icons-div telegram">
            <BiLogoTelegram />
          </div>
          <div className="icons-div instagram">
            <BsInstagram />
          </div>
          <div className="icons-div facebook">
            <BsFacebook />
          </div>
          <div className="icons-div twitter">
            <AiOutlineTwitter />
          </div>
          <div className="icons-div linked-in">
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
