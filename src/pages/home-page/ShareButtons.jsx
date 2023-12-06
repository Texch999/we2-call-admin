import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const ShareButtons = () => {
  const shareText = "Check out this awesome content!";
  const shareUrl = "https://your-website.com";
  const handleInstagramShare = () => {
    // Instagram share URL
    const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(
      shareUrl
    )}&caption=${encodeURIComponent(shareText)}`;
    window.open(instagramShareUrl, "_blank");
  };

  const handleWhatsAppShare = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${shareText} ${shareUrl}`
    )}`;
    window.open(whatsappShareUrl, "_blank");
  };

  return (
    <div className="float-right mt-3">
      <FaInstagramSquare
        onClick={handleInstagramShare}
        className="soc-media-icons"
      />
      <FaWhatsappSquare
        Square
        onClick={handleWhatsAppShare}
        className="soc-media-icons"
      />
    </div>
  );
};

export default ShareButtons;
