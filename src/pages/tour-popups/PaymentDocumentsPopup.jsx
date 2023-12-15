import { RiDownloadLine, RiEyeLine } from "react-icons/ri";
import { PiShareFatFill } from "react-icons/pi";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import ShowImagePopup from "./ShowImagePopup";

function PaymentDocumentsPopup(props) {
  const { messagePopup, setMessagePopup, itemData } = props;
  const [showScreenshotImg, setShowScreenshotImg] = useState(false);
  const [imageurl, setImageurl] = useState("");

  const handleShowImagePopupClick = (imageUrl) => {
    setImageurl(imageUrl);
    setShowScreenshotImg(true);
  };
  const handleDownloadClick = async (imageUrl, imageName) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.setAttribute("download", imageName || "image.png");
    link.target = "blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Modal
      show={messagePopup}
      className="add-user-modal "
      footer={null}
      centered
      onHide={() => setMessagePopup(false)}
    >
      <div className="p-3">
        <Modal.Header className="p-0" closeButton>
          <Modal.Title className="w-100 text-center">DOCUMENTS</Modal.Title>
        </Modal.Header>
        <hr className="hr-line mt-1" />
        <div className="font-12 mt-1">Travel Bookings</div>
        <div className="message-text-div medium-font mt-1 p-2">
          {itemData?.travel_bookings === false ? (
            <div>Your documents will be uploaded soon</div>
          ) : (
            <div className="row">
              <div className="col-8">
                <img
                  className="w-100 h-8vh rounded"
                  src={itemData?.travel_bookings}
                  alt="Img"
                />
              </div>
              <div className="col-2 flex-center">
                <div
                  className="download-icon-div flex-center"
                  onClick={() =>
                    handleShowImagePopupClick(itemData?.travel_bookings)
                  }
                >
                  <RiEyeLine />
                </div>
              </div>
              <div className="col-2 flex-center">
                <div
                  className="download-icon-div flex-center"
                  onClick={() =>
                    handleDownloadClick(
                      itemData?.travel_bookings,
                      "travel_bookings"
                    )
                  }
                >
                  <RiDownloadLine />
                </div>
              </div>
            </div>
          )}
        </div>
        <hr className="hr-line mt-1" />
        <div className="font-12 mt-1">Hotel Bookings</div>
        <div className="message-text-div medium-font mt-1 p-2">
          {itemData?.hotel_bookings === false ? (
            <div>Your documents will be uploaded soon</div>
          ) : (
            <div className="row">
              <div className="col-8">
                <img
                  className="w-100 h-8vh rounded"
                  src={itemData?.hotel_bookings}
                  alt="Img"
                />
              </div>
              <div className="col-2 flex-center">
                <div
                  className="download-icon-div flex-center"
                  onClick={() =>
                    handleShowImagePopupClick(itemData?.hotel_bookings)
                  }
                >
                  <RiEyeLine />
                </div>
              </div>
              <div className="col-2 flex-center">
                <div
                  className="download-icon-div flex-center"
                  onClick={() =>
                    handleDownloadClick(
                      itemData?.hotel_bookings,
                      "hotel_bookings"
                    )
                  }
                >
                  <RiDownloadLine />
                </div>
              </div>
            </div>
          )}
          {/* <div className="row">
            <div className="col-10">
              <img
                className="w-100 h-8vh rounded"
                src={itemData.hotel_bookings}
                alt="Img"
              />
            </div>
            <div className="col-2 flex-center">
              <div className="download-icon-div flex-center">
                <RiDownloadLine />
              </div>
            </div>
            <div className="col-1 flex-center">
              <div className="download-icon-div flex-center">
                <PiShareFatFill />
              </div>
            </div>
          </div> */}
        </div>
        <hr className="hr-line mt-1" />
        <div className="font-12 mt-1">Tour Guidance</div>
        <div className="message-text-div medium-font mt-1 p-2">
          {itemData?.tour_guidance === false ? (
            <div>Your documents will be uploaded soon</div>
          ) : (
            <div className="row">
              <div className="col-8">
                <img
                  className="w-100 h-8vh rounded"
                  src={itemData?.tour_guidance}
                  alt="Img"
                />
              </div>
              <div className="col-2 flex-center">
                <div
                  className="download-icon-div flex-center"
                  onClick={() =>
                    handleShowImagePopupClick(itemData?.tour_guidance)
                  }
                >
                  <RiEyeLine />
                </div>
              </div>
              <div className="col-2 flex-center">
                <div
                  className="download-icon-div flex-center"
                  onClick={() =>
                    handleDownloadClick(itemData?.tour_guidance, "tour_guidance")
                  }
                >
                  <RiDownloadLine />
                </div>
              </div>
            </div>
          )}
        </div>
        <ShowImagePopup
          showScreenshotImg={showScreenshotImg}
          setShowScreenshotImg={setShowScreenshotImg}
          imageurl={imageurl}
        />
      </div>
    </Modal>
  );
}

export default PaymentDocumentsPopup;
