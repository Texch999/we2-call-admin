import React, { useState } from "react";
import copy from "clipboard-copy";

const CopyButton = () => {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = "Hello";
  // const shareText = "Check out this awesome content!";
  // const shareUrl = "https://your-website.com";
  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  return (
    <div>
      <p>{textToCopy}</p>
      <button onClick={handleCopyClick}>
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CopyButton;
