import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const ShareButtons = ({ refId, meetId }) => {
  const shareText = "RefferId:" + refId;
  const shareUrl = ",MeetingID:" + meetId;
  const handleInstagramShare = () => {
    // Instagram share URL
    const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
      shareUrl
    )}&caption=${encodeURIComponent(shareText)}`;
    window.open(instagramShareUrl, "_blank");
  };

  const handleWhatsAppShare = () => {
    const whatsappShareUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(
      `${shareText} ${shareUrl}`
    )}`;
    window.open(whatsappShareUrl, "_blank");
  };

  return (
    <div className="d-flex justify-content-between mt-2">
      <div className="w-48 h-38px rounded instagram d-flex align-items-center justify-content-center">
        <BsInstagram onClick={handleInstagramShare} />
      </div>
      <div className="w-48 h-38px rounded whatsapp d-flex align-items-center justify-content-center">
        <BsWhatsapp onClick={handleWhatsAppShare} />
      </div>
    </div>
  );
};

export default ShareButtons;
