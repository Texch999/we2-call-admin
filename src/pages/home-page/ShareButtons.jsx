import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const ShareButtons = ({ data }) => {
  const handleInstagramShare = () => {
    const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
      `${data}`
    )}&caption=${encodeURIComponent(data)}`;
    window.open(instagramShareUrl, "_blank");
  };

  const handleWhatsAppShare = () => {
    const whatsappShareUrl = `https://web.whatsapp.com/send?text=${encodeURIComponent(
      `${data}`
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
