import { HiThumbUp } from "react-icons/hi";
import { Images } from "../../images";
import "./styles.css";
import { useHistory } from "react-router";
import { useState } from "react";
import { call } from "../../config/axios";
import { ADD_INTERESTED } from "../../config/endpoints";

function TakeTour(props) {
  const history = useHistory();
  const { data } = props
  const [interested, setInterested] = useState(false)
  // data.forEach(element => {console.log(element)});
  const handleClick = async (tour_id) => {
    setInterested(true);
    let register_id = localStorage?.getItem("register_id");
    let user_name = localStorage?.getItem("user_name");
    let account_role = localStorage?.getItem("account_role");
    const payload = {
      register_id: register_id,
      account_role: account_role,
      user_name: user_name,
      tour_id: tour_id,
      im_interested: interested,
      website: "www.we2call.com",
    };
    try {
      await call(ADD_INTERESTED, payload).then(() =>
        console.log("you clicked the interested button")
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row  p-2 tour-cricket">
      <div className="col-sm-12 col-md-7">
        <div className="w-100 h-100per take-tour row d-flex align-items-center">
          <div className="col-5 p-3" onClick={() => history.push("/offers")}>
            <h3 className="meetings-heading mt-3">Take a Part in Our Tour</h3>
            <h4 className="large-font meetings-heading">hello
            </h4>
            <div className="w-90 like-button mt-2 d-flex">
              <div className="w-60 intrested meetings-heading">
                I’m Interested
              </div>
              <div className="w-40">
                <HiThumbUp />
                <span className="meetings-heading">179.1K</span>
                <br />
                <span className="small-font">are interested</span>
              </div>
            </div>
            <div className="small-font meetings-heading mt-3">
              Tour Start Date: ----
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <img className="banner" src={Images.travel_banner}></img>
          </div>
        </div>
      </div>
      {data.map((item)=>{
        return(
          <div className="col-sm-12 col-md-5">
            <div className="w-100 h-100per cricket-cup row d-flex align-items-center">
              <div className="col-6 d-flex align-items-center">
                <img className="banner" src={Images.BatBall}></img>
              </div>
              <div className="col-6 p-3">
                <h3 className="meetings-heading mt-3">{item.tour_name}</h3>
                <span className="medium-font meetings-heading">
                  {item.poster_title}
                </span>
                <div className={
                        interested
                          ? "afterintrested w-60 intrested meetings-heading"
                          : "w-60 intrested meetings-heading"
                      }
                      onClick={()=>handleClick(item.tour_id)}
                >
                  I’m Interested
                </div>
                <div className="small-font meetings-heading mt-2">
                  Tour Starting Date: {item.scheduled_date}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default TakeTour;
