import { useState } from "react";
import YourDetailsPopup from "./../tour-popups/YourDetailsPopup";

function YourIntrested() {
  const [yourDetailsPopup, setYourDetailsPopup] = useState();
  const handleYourDetailsPopupOpen = () => {
    setYourDetailsPopup(true);
  };
  return (
    <div>
      <div className="pad-tb-1rem font-14 fw-600">
        You have Interested on this check details
      </div>
      <div className="pad-tb-1rem font-12">
        This company established under the laws of Costa Rica, with registered
        address at Costa Rica and having its gaming sublicence No. 1669/KAV
        issued by Costa Rica e-Gaming and all rights to operate the gaming
        software. Freestyle is a company established under the laws of Cyprus,
        with registered address at Flamoudiou, 13, Strovolos 2036, Nicosia,
        Cyprus. These Terms & Conditions apply to you, and are binding upon you,
        if you Participate at T EXCHANGE. By Participating, you agree that you
        have read and understood these Terms & Conditions and you acknowledge
        that these Terms & Conditions shall apply to you.
        <br />
        <br /> This company established under the laws of Costa Rica, with
        registered address at Costa Rica and having its gaming sublicence No.
        1669/KAV issued by Costa Rica e-Gaming and all rights to operate the
        gaming software. Freestyle is a company established under the laws of
        Cyprus, with registered address at Flamoudiou, 13, Strovolos 2036,
        Nicosia, Cyprus. These Terms & Conditions apply to you, and are binding
        upon you, if you Participate at T EXCHANGE. By Participating, you agree
        that you have read and understood these Terms & Conditions and you
        acknowledge that these Terms & Conditions shall apply to you.
      </div>
      <div className="w-30 pad-tb-1rem">
        <div
          className="normal-button yellow-clr font-14"
          onClick={() => handleYourDetailsPopupOpen()}
        >
          Book Now
        </div>
      </div>
      <YourDetailsPopup
        yourDetailsPopup={yourDetailsPopup}
        setYourDetailsPopup={setYourDetailsPopup}
      />
    </div>
  );
}

export default YourIntrested;
