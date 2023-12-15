import React, { useEffect, useState } from "react";
import { HiThumbUp } from "react-icons/hi";
import { call } from "../../config/axios";
import { GET_TOUR_PAYMENT_DOCUMENTS } from "../../config/endpoints";
import PaymentDocumentsPopup from "../tour-popups/PaymentDocumentsPopup";

function MyTours() {
  const [upcomingTours, setUpcomingTours] = useState(true);
  const [completedTours, setCompletedTours] = useState(false);
  const [documentUploadedTours, setDocumentUploadedTours] = useState([]);
  const [messagePopup, setMessagePopup] = useState(false);
  const [itemData, setItemData] = useState({});
  // console.log(itemData,'itemData')

  const getApprovedUsers = async () => {
    const regId = localStorage.getItem("register_id");
    const payload = {
      register_id: regId,
    };
    await call(GET_TOUR_PAYMENT_DOCUMENTS, payload)
      .then((res) => setDocumentUploadedTours(res?.data?.data?.Items))
      .catch((error) => console.log(error));
  };
  // console.log(documentUploadedTours, "......documentUploadedTours");
  const upcomingApprovedTours = documentUploadedTours?.filter((item) => {
    const presentTimestamp = Date.now();
    const scheduleDateObject = new Date(item.date);
    const scheduleTimestamp = scheduleDateObject.getTime();
    if (presentTimestamp < scheduleTimestamp) {
      return item;
    }
  });
  // console.log(upcomingApprovedTours, ".....upcomingApprovedTours");
  const completedApprovedTours = documentUploadedTours?.filter((item) => {
    const presentTimestamp = Date.now();
    const scheduleDateObject = new Date(item.date);
    const scheduleTimestamp = scheduleDateObject.getTime();
    if (presentTimestamp > scheduleTimestamp) {
      return item;
    }
  });
  // console.log(completedApprovedTours, ".....completedApprovedTours");

  useEffect(() => {
    getApprovedUsers();
  }, []);

  const handleUpcomingTours = () => {
    setUpcomingTours(true);
    setCompletedTours(false);
  };
  const handleCompletedTours = () => {
    setCompletedTours(true);
    setUpcomingTours(false);
  };
  const handlePopupOpen = (item) => {
    setItemData(item);
    setMessagePopup(true);
  };

  return (
    <div className="p-1">
      <div className="w-40 d-flex justify-content-between p-1 mt-2">
        <div
          className={
            upcomingTours
              ? "hilight-button  font-14"
              : "normal-button w-40 font-14"
          }
          onClick={() => handleUpcomingTours()}
        >
          Upcoming Tours
        </div>
        <div
          className={
            completedTours
              ? "hilight-button  font-14"
              : "normal-button w-40 font-14"
          }
          onClick={() => handleCompletedTours()}
        >
          Completed Tours
        </div>
      </div>
      <hr className="hr-line mt-2" />
      {upcomingTours && (
        <div>
          <div className="p-1 font-14 fw-600 title-color pb-3">
            Your upcoming tours will be displayed here:
          </div>
          <div className="row text-center">
            <div className="col-1 text-center">S NO</div>
            <div className="col-3">TOUR TITLE</div>
            <div className="col-1">STARTDATE</div>
            <div className="col-1">STATUS</div>
            <div className="col-2">REJECTION REASON</div>
            <div className="col-2">PAID AMOUNT</div>
            <div className="col-2">DOCUMENTS</div>
          </div>
          {upcomingApprovedTours &&
            upcomingApprovedTours.length > 0 &&
            upcomingApprovedTours.map((item, index) => {
              return (
                <div style={{ padding: "10px" }}>
                  <div className="tour-button row">
                    {/* {item.tour_id} */}
                    <div className="col-1 flex-center">{index + 1}</div>
                    <div className="col-3 flex-center">{item.tour_name}</div>
                    <div className="col-1 flex-center">{item.date}</div>
                    <div className="col-1 p-0 flex-center">
                      <div
                        className={
                          item?.confirm_payment_status === "Approved"
                            ? "approve-button text-center"
                            : item?.confirm_payment_status === "Pending"
                            ? " pending-button text-center"
                            : item?.confirm_payment_status === "Rejected"
                            ? "reject-button text-center"
                            : ""
                        }
                      >
                        {item.confirm_payment_status}
                      </div>
                    </div>
                    <div className="col-2 flex-center">
                      {item.rejection_reason}
                    </div>
                    <div className="col-1 flex-center">{item.paid_amount}</div>
                    <div
                      className={
                        item.confirm_payment_status ===
                        ("Rejected" || "Pending")
                          ? "col-2 clickhere-deactive-btn flex-center"
                          : "col-2 clickhere-btn flex-center"
                      }
                      onClick={
                        item.confirm_payment_status ===
                        ("Rejected" || "Pending")
                          ? null
                          : () => handlePopupOpen(item)
                      }
                    >
                      Click here
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="p-1 font-12">
            This company established under the laws of Costa Rica, with
            registered address at Costa Rica and having its gaming sublicence
            No. 1669/KAV issued by Costa Rica e-Gaming and all rights to operate
            the gaming software. Freestyle is a company established under the
            laws of Cyprus, with registered address at Flamoudiou, 13, Strovolos
            2036, Nicosia, Cyprus. These Terms & Conditions apply to you, and
            are binding upon you, if you Participate at T EXCHANGE. By
            Participating, you agree that you have read and understood these
            Terms & Conditions and you acknowledge that these Terms & Conditions
            shall apply to you.
          </div>
        </div>
      )}
      {completedTours && (
        <div>
          <div className="p-1 font-14 fw-600 title-color pb-3">
            Your completed tours will be displayed here:
          </div>
          <div className="row text-center">
            <div className="col-1 text-center">S NO</div>
            <div className="col-3">TOUR TITLE</div>
            <div className="col-1">STARTDATE</div>
            <div className="col-1">STATUS</div>
            <div className="col-2">REJECTION REASON</div>
            <div className="col-2">PAID AMOUNT</div>
            <div className="col-2">DOCUMENTS</div>
          </div>
          {completedApprovedTours &&
            completedApprovedTours.length > 0 &&
            completedApprovedTours.map((item, index) => {
              return (
                <div style={{ padding: "10px" }}>
                  <div className="tour-button row text-center">
                    {/* {item.tour_id} */}
                    <div className="col-1">{index + 1}</div>
                    <div className="col-3">{item.tour_title}</div>
                    <div className="col-1">{item.date}</div>
                    <div className="col-1 p-0 flex-center">
                      <div
                        className={
                          item?.confirm_payment_status === "Approved"
                            ? "approve-button text-center"
                            : item?.confirm_payment_status === "Pending"
                            ? " pending-button text-center"
                            : item?.confirm_payment_status === "Rejected"
                            ? "reject-button text-center"
                            : ""
                        }
                      >
                        {item.confirm_payment_status}
                      </div>
                    </div>
                    <div className="col-2 flex-center">
                      {item.rejection_reason}
                    </div>
                    <div className="col-1">{item.paid_amount}</div>
                    <div
                      className={
                        item.confirm_payment_status ===
                        ("Rejected" || "Pending")
                          ? "col-2 clickhere-deactive-btn flex-center"
                          : "col-2 clickhere-btn flex-center"
                      }
                      onClick={
                        item.confirm_payment_status ===
                        ("Rejected" || "Pending")
                          ? null
                          : () => handlePopupOpen(item)
                      }
                    >
                      Click here
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="p-1 font-12">
            This company established under the laws of Costa Rica, with
            registered address at Costa Rica and having its gaming sublicence
            No. 1669/KAV issued by Costa Rica e-Gaming and all rights to operate
            the gaming software. Freestyle is a company established under the
            laws of Cyprus, with registered address at Flamoudiou, 13, Strovolos
            2036, Nicosia, Cyprus. These Terms & Conditions apply to you, and
            are binding upon you, if you Participate at T EXCHANGE. By
            Participating, you agree that you have read and understood these
            Terms & Conditions and you acknowledge that these Terms & Conditions
            shall apply to you.
          </div>
        </div>
      )}
      <PaymentDocumentsPopup
        messagePopup={messagePopup}
        setMessagePopup={setMessagePopup}
        itemData={itemData}
      />
    </div>
  );
}

export default MyTours;
