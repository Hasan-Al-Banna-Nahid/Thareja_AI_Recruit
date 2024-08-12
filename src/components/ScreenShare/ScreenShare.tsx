"use client";
import React, { useState } from "react";

const ScreenShare: React.FC<{ onScreenShareComplete: () => void }> = ({
  onScreenShareComplete,
}) => {
  const [isSharing, setIsSharing] = useState(false);

  const handleStartScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      setIsSharing(true);
      stream.getTracks()[0].addEventListener("ended", () => {
        setIsSharing(false);
        onScreenShareComplete();
      });
    } catch (err) {
      console.error("Error accessing screen share", err);
    }
  };

  return (
    <div className="screen-share-container">
      <h2>Share your screen</h2>
      <button onClick={handleStartScreenShare}>
        {isSharing ? "Stop Sharing" : "Start Screen Share"}
      </button>
    </div>
  );
};

export default ScreenShare;
