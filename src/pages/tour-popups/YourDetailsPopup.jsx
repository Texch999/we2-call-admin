import { useEffect, useState } from "react";
import "./styles.css";
import PaymentDetails from "./PaymentDetails";
import FillDetails from "./FillDetails";
import BookingCompleteMsg from "./BookingCompleteMsg";
import { Modal } from "react-bootstrap";
import AddedUserList from "./AddedUserList";
import { GET_TOUR_BY_ID } from "../../config/endpoints";
import { call } from "../../config/axios";
import { ADD_GUESTDOCS_FOR_TOURS } from "../../config/endpoints";

function YourDetailsPopup(props) {
  const { yourDetailsPopup, setYourDetailsPopup, tour } = props;
  const [fillDetails, setFillDetails] = useState(true);
  const [paymentDetails, setPaymentDetails] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [addedUsersList, setAddedUsersList] = useState(false);
  const [usersDetails, setusersDetails] = useState([]);
  const [packageCount, setPackageCount] = useState({});
  const [packMembers, setPackMembers] = useState({});
  const [individualPackageMembersCount, setIndividualPackageMembersCount] =
    useState({});
  const [eachPackageTotalamount, setEachPackageTotalamount] = useState({});

  const regularpacks = usersDetails.filter((item) => {
    if (Object.keys(item)[0]?.includes("regular")) {
      return item;
    }
  });
  const premiumpacks = usersDetails.filter((item) => {
    if (Object.keys(item)[0]?.includes("premium")) {
      return item;
    }
  });
  const luxurypacks = usersDetails.filter((item) => {
    if (Object.keys(item)[0]?.includes("luxury")) {
      return item;
    }
  });
  // console.log(luxurypacks,'......luxury')
  const vippacks = usersDetails.filter((item) => {
    if (/^vip/i.test(Object.keys(item)[0])) {
      return item;
    }
  });
  const vvippacks = usersDetails.filter((item) => {
    if (/^vvip/i.test(Object.keys(item)[0])) {
      return item;
    }
  });
  const regularpack = regularpacks.length;
  const premiumpack = premiumpacks.length;
  const luxurypack = luxurypacks.length;
  const vippack = vippacks.length;
  const vvippack = vvippacks.length;
  const regularpacktotalamount =
    tour[0]?.packages.regularpack.minamount * regularpack;
  const premiumpacktotalamount =
    tour[0]?.packages.premiumpack.minamount * premiumpack;
  const luxurypacktotalamount =
    tour[0]?.packages.luxurypack.minamount * luxurypack;
  const vippacktotalamount = tour[0]?.packages.vippack.minamount * vippack;
  const vvippacktotalamount = tour[0]?.packages.vvippack.minamount * vvippack;
  const regularpackmembers = [];
  const premiumpackmembers = [];
  const luxurypackmembers = [];
  const vippackmembers = [];
  const vvippackmembers = [];
  for (let i of regularpacks) {
    for (let j in i) {
      if (j.includes("username")) {
        regularpackmembers.push(i[j]);
      }
    }
  }
  for (let i of premiumpacks) {
    for (let j in i) {
      if (j.includes("username")) {
        premiumpackmembers.push(i[j]);
      }
    }
  }
  for (let i of luxurypacks) {
    for (let j in i) {
      if (j.includes("username")) {
        luxurypackmembers.push(i[j]);
      }
    }
  }
  for (let i of vippacks) {
    for (let j in i) {
      if (j.includes("username")) {
        vippackmembers.push(i[j]);
      }
    }
  }
  for (let i of vvippacks) {
    for (let j in i) {
      if (j.includes("username")) {
        vvippackmembers.push(i[j]);
      }
    }
  }
  const regularpackmemberscount = regularpackmembers.length;
  const premiumpackmemberscount = premiumpackmembers.length;
  const luxurypackmemberscount = luxurypackmembers.length;
  const vippackmemberscount = vippackmembers.length;
  const vvippackmemberscount = vvippackmembers.length;
  // console.log(packageCount,'.......usersdetailsfrommaincomponent')
  const packagesDetailsinuseState = () => {
    setPackageCount({
      regularpack,
      premiumpack,
      luxurypack,
      vippack,
      vvippack,
    });
    setPackMembers({
      regularpackmembers,
      premiumpackmembers,
      luxurypackmembers,
      vippackmembers,
      vvippackmembers,
    });
    setIndividualPackageMembersCount({
      regularpackmemberscount,
      premiumpackmemberscount,
      luxurypackmemberscount,
      vippackmemberscount,
      vvippackmemberscount,
    });
    setEachPackageTotalamount({
      regularpacktotalamount,
      premiumpacktotalamount,
      luxurypacktotalamount,
      vippacktotalamount,
      vvippacktotalamount,
    });
  };

  useEffect(() => {
    packagesDetailsinuseState();
  }, [usersDetails]);

  const handleFillDetails = () => {
    setFillDetails(true);
    setAddedUsersList(false);
    setPaymentDetails(false);
    setBookingComplete(false);
  };
  const handlePaymentDetails = (inputData) => {
    setFillDetails(false);
    setAddedUsersList(true);
    setPaymentDetails(false);
    setBookingComplete(false);
    setusersDetails([...usersDetails, inputData]);
  };
  const handleAddedUserList = () => {
    setAddedUsersList(false);
    setPaymentDetails(true);
    setFillDetails(false);
    setBookingComplete(false);
  };

  const handleBookingComplete = async (paymentdetails) => {
    // console.log(paymentdetails,'........paymentdetails')

    setPaymentDetails(false);
    setFillDetails(false);
    addingAllData(paymentdetails);
  };
  const handleCancel = () => {
    setYourDetailsPopup(false);
    setBookingComplete(false);
    setFillDetails(true);
    window.location.reload(true);
  };
  console.log(packageCount, "........packagecount");
  const addingAllData = async (paymentdetails) => {
    const register_id = localStorage.getItem("register_id");
    const account_role = localStorage.getItem("account_role");
    const user_name = localStorage.getItem("user_name");
    const payload = {
      paymentDetails: paymentdetails,
      usersDetails: usersDetails,
      packageCount: packageCount,
      eachPackageTotalamount: eachPackageTotalamount,
      tourDetails: tour,
      register_id: register_id,
      account_role: account_role,
      user_name: user_name,
      website: "www.we2call.com",
    };
    // console.log(payload,'......payload')
    await call(ADD_GUESTDOCS_FOR_TOURS, payload)
      .then((res) => {
        if (res?.data?.status === 200) {
          setBookingComplete(true);
          setusersDetails([]);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Modal
      show={yourDetailsPopup}
      className="add-user-modal z-index"
      footer={null}
      centered
      onHide={() => handleCancel()}
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="p-3">
        {fillDetails === true && (
          <FillDetails
            handlePaymentDetails={handlePaymentDetails}
            tour={tour}
          />
        )}
        {addedUsersList === true && (
          <AddedUserList
            handleFillDetails={handleFillDetails}
            handleAddedUserList={handleAddedUserList}
            packageCount={packageCount}
            packMembers={packMembers}
            individualPackageMembersCount={individualPackageMembersCount}
            eachPackageTotalamount={eachPackageTotalamount}
          />
        )}

        {paymentDetails === true && (
          <PaymentDetails
            handleBookingComplete={handleBookingComplete}
            eachPackageTotalamount={eachPackageTotalamount}
            individualPackageMembersCount={individualPackageMembersCount}
            packMembers={packMembers}
            packageCount={packageCount}
            usersDetails={usersDetails}
          />
        )}
        {bookingComplete === true && (
          <BookingCompleteMsg handleCancel={handleCancel} />
        )}
      </div>
    </Modal>
  );
}
export default YourDetailsPopup;
