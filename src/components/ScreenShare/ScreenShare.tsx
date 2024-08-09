"use client";
import React from "react";

const ScreenShare = () => {
  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      // Handle the stream as needed
      console.log("Screen sharing started", stream);
    } catch (err) {
      console.error("Error starting screen share", err);
    }
  };

  return (
    <div>
      <h2>Screen Share</h2>
      <button onClick={startScreenShare}>Start Screen Share</button>
    </div>
  );
};

export default ScreenShare;
