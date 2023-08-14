import { useState } from "react";
import { Row, Col } from "antd";
import { BiCalendar } from "react-icons/bi";
import { HiThumbUp } from "react-icons/hi";
import { Images } from "../../images";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function ToursAndTournaments() {
  const navigate = useNavigate();
  const [interestButton, setInterestButton] = useState(false);
  const [cricketButtton, setCricketButton] = useState(false);
  const [footballButton, setFootballButton] = useState(false);
  const [casinoButton, setCasinoButton] = useState(false);
  const [entertainmentButton, setEntertainmentButton] = useState(false);
  const handleInterestButtonClick = () => {
    setInterestButton(true);
  };
  const handleCricketButtonClick = () => {
    setCricketButton(true);
  };
  const handleFootballButtonClick = () => {
    setFootballButton(true);
  };
  const handleCasinoButtonClick = () => {
    setCasinoButton(true);
  };
  const handleEntertainmentButtonClick = () => {
    setEntertainmentButton(true);
  };
  const [interestCount, setInterestCount] = useState(1000);
  const handleCount = () => {
    setInterestCount(interestCount + 1);
  };
  return (
    <div className="meetings-container">
      <Row gutter={[24, 24]}>
        <Col span={14} onClick={() => navigate("/offers")}>
          <Row>
            <div className="w-100 flex-space-between take-tour-div">
              <Col span={10}>
                <div className="tour-content">
                  <div className="tour-heading-text">
                    Take a part in our <br /> tour
                  </div>
                  <div className="w-80 fw-600 font-clr-white font-14 mt-5">
                    Play and get a chance to join with tour
                  </div>
                  <div
                    className="w-100 flex-center intrested-container"
                    onClick={() => handleCount()}
                  >
                    <button
                      onClick={handleInterestButtonClick}
                      disabled={interestButton}
                      className={`${
                        interestButton
                          ? "w-50 disable-clr font-clr-white flex-center intrested-div font-14 fw-600 tour-btn"
                          : "w-50 active-clr font-clr-white flex-center intrested-div font-14 fw-600 tour-btn"
                      }`}
                    >
                      {interestButton ? "Interested" : "I’m Interested"}
                    </button>
                    <div className="w-50 flex-center flex-column">
                      <div className="font-clr-white flex-center font-14">
                        <HiThumbUp className="font-clr-white thumbsup-icon mr-5 font-14 fw-600" />
                        {interestCount}K
                      </div>
                      <div className="font-clr-white font-14">
                        are interested
                      </div>
                    </div>
                  </div>
                  <div className="font-clr-white font-14 mt-5">
                    Tour Start Date:<b> 2nd Aug, 2023</b>
                  </div>
                </div>
              </Col>
              <Col span={14}>
                <div className="flex-center suitcase-img-div p-1rem">
                  <img
                    className="suitcase-image"
                    src={Images.SuitcaseImage}
                    alt="Suitcase_Img"
                  />
                </div>
              </Col>
            </div>
          </Row>
        </Col>
        <Col span={10}>
          <div className="cricket-tour-div flex-space-between">
            <Row>
              <Col span={12}>
                <div className="flex-center p-1rem">
                  <img
                    className="football-image"
                    src={Images.CricketBanner}
                    alt="Cricket_Banner"
                  />
                </div>
              </Col>
              <Col span={12} className="flex-center">
                <div className="tour-content cricket-text-div pr-5">
                  <div className="tour-heading-text">
                    Cricket Cup Tour
                  </div>
                  <div className="font-clr-white font-14 fw-600 mt-5">
                    Click on interest buttons to get a changce to a part of our
                    tour
                  </div>
                  <button
                    onClick={handleCricketButtonClick}
                    disabled={cricketButtton}
                    className={`${
                      cricketButtton
                        ? "disable-clr flex-center cricket-intrested-div mt-5 tour-btn"
                        : "active-clr flex-center cricket-intrested-div mt-5 tour-btn"
                    }`}
                  >
                    {cricketButtton ? "Interested" : "I’m Interested"}
                  </button>
                  <div className="font-clr-white font-14 mt-5 fw-600">
                    Tour Start Date
                  </div>
                  <div className="flex-center font-14 fw-600 mt-5">
                    <BiCalendar className="flex tour-calender-icon" />
                    Coming Soon!
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col span={8}>
          <Row>
            <div className="w-100 football-tour-div flex-space-between mt-10">
              <Col span={8}>
                <div className="flex-center flex-column p-1rem">
                  <img
                    className="football-image"
                    src={Images.FootBallBanner}
                    alt="Cricket_Banner"
                  />
                </div>
              </Col>
              <Col span={16}>
                <div className="tour-content football-text-div">
                  <div className="tour-heading-text">
                    Football Cup Tour
                  </div>
                  <div className="fw-600 font-clr-white font-14 mt-5">
                    Click on interest buttons to get a changce to a part of our
                    tour
                  </div>
                  <button
                    onClick={handleFootballButtonClick}
                    disabled={footballButton}
                    className={`${
                      footballButton
                        ? "disable-clr flex-center cricket-intrested-div mt-5 tour-btn"
                        : "active-clr bg-black flex-center cricket-intrested-div mt-5 tour-btn"
                    }`}
                  >
                    {footballButton ? "Interested" : "I’m Interested"}
                  </button>
                  <div className="font-clr-white font-14 mt-5 fw-600">
                    Tour Start Date
                  </div>
                  <div className="flex-center font-14 fw-600 mt-5">
                    <BiCalendar className="flex tour-calender-icon" />
                    Coming Soon!
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Col>
        <Col span={16}>
          <Row>
            <div className="w-100 flex-space-between casino-tour-div mt-10">
              <Col span={10}>
                <div className="tour-content">
                  <div className="clr-black tour-heading-text">
                    {" "}
                    Casino <br /> Tournament
                  </div>
                  <div className="clr-black font-14 mt-5">
                    Play and get a chance to join with tour
                  </div>
                  <div className="w-100 flex-center casino-container mt-5">
                    <button
                      onClick={handleCasinoButtonClick}
                      disabled={casinoButton}
                      className={`${
                        casinoButton
                          ? "disable-clr font-clr-white flex-center ent-div w-50 font-14 tour-btn"
                          : "casino-btn-clr font-clr-white flex-center ent-div w-50 font-14 tour-btn"
                      }`}
                    >
                      {casinoButton ? "Interested" : "I’m Interested"}
                    </button>
                    <div className="flex-center flex-column w-50">
                      <div className="clr-black flex-center font-14 fw-600">
                        <HiThumbUp className="thumbsup-icon mr-5 font-14" />
                        179.1K
                      </div>
                      <div className="clr-black font-14 fw-600">
                        are interested
                      </div>
                    </div>
                  </div>
                  <div className="clr-black font-14 mt-5">
                    Tour Start Date:<b> 2nd Aug, 2023</b>
                  </div>
                </div>
              </Col>
              <Col span={14}>
                <div className="p-1rem flex-center casino-img-div">
                  <img
                    className="suitcase-image"
                    src={Images.CasinoBanner}
                    alt="Suitcase_Img"
                  />
                </div>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="w-100 mb-10vh ent-tour-div mt-10">
            <Row>
              <Col span={8}>
                <div className="p-1rem ent-img-div">
                  <img
                    className="suitcase-image"
                    src={Images.EntBanner}
                    alt="Suitcase_Img"
                  />
                </div>
              </Col>
              <Col span={8}>
                <div className="align-center tour-content">
                  <div className="tour-heading-text mt-5">
                    Entertainment Tour
                  </div>
                  <div className="font-clr-white font-14 mt-5">
                    Play and get a chance to join with tour
                  </div>
                  <button
                    onClick={handleEntertainmentButtonClick}
                    disabled={entertainmentButton}
                    className={`${
                      entertainmentButton
                        ? "disable-clr font-clr-white flex-center ent-div w-50 font-14 fw-600 tour-btn"
                        : "ent-btn-clr font-clr-white flex-center ent-div w-50 font-14 fw-600 tour-btn"
                    }`}
                  >
                    {entertainmentButton ? "Interested" : "I’m Interested"}
                  </button>
                  <div className="w-65 flex-center ent-container mt-5">
                    <div className="flex-center flex-column w-50">
                      <div className="font-clr-white flex-center font-14">
                        <HiThumbUp className="font-clr-white mr-5 font-14" />
                        179.1K
                      </div>
                      <div className="font-clr-white font-14">
                        are interested
                      </div>
                    </div>
                  </div>
                  <div className="font-clr-white font-14 mt-5">
                    Tour Start Date:<b> 2nd Aug, 2023</b>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="p-1rem">
                  <img
                    className="suitcase-image"
                    src={Images.EmojiBanner}
                    alt="Suitcase_Img"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ToursAndTournaments;
