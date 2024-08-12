"use client";
import React, { useState, useRef } from "react";

// Define the props interface
interface VideoTestProps {
  onCameraTestComplete: (isWorking: boolean) => void;
}

const VideoTest: React.FC<VideoTestProps> = ({ onCameraTestComplete }) => {
  const [isCameraOn, setIsCameraOn] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraOn(true);
      onCameraTestComplete(true);
    } catch (err) {
      console.error("Error accessing webcam", err);
      onCameraTestComplete(false);
    }
  };

  const handleStopCamera = () => {
    const stream = videoRef.current?.srcObject as MediaStream;
    const tracks = stream?.getTracks();
    tracks?.forEach((track) => track.stop());
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
  };

  return (
    <div className="video-test-container">
      <h2>Test your camera</h2>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{ width: "100%", maxHeight: "400px", marginBottom: "20px" }}
      ></video>
      <button onClick={isCameraOn ? handleStopCamera : handleStartCamera}>
        {isCameraOn ? "Stop Camera" : "Start Camera"}
      </button>
    </div>
  );
};

export default VideoTest;
