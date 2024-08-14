"use client";
import React, { useState, useRef, useEffect } from "react";

// Microphone Test Component
const MicrophoneTest: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [micLevel, setMicLevel] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);

  useEffect(() => {
    if (isRecording) {
      startMic();
    } else {
      stopMic();
    }
    return () => {
      stopMic();
    };
  }, [isRecording]);

  const startMic = async () => {
    try {
      audioContextRef.current = new (window.AudioContext ||
        window.AudioContext)();
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      microphoneRef.current =
        audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 1024;
      microphoneRef.current.connect(analyserRef.current);
      dataArrayRef.current = new Uint8Array(
        analyserRef.current.frequencyBinCount
      );

      // Start analyzing the audio data
      updateMicLevel();
    } catch (err) {
      console.error("Error accessing microphone", err);
    }
  };

  const stopMic = () => {
    if (microphoneRef.current) {
      microphoneRef.current.disconnect();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setMicLevel(0); // Reset mic level when stopped
  };

  const updateMicLevel = () => {
    analyserRef.current?.getByteFrequencyData(dataArrayRef.current!);
    const sum = dataArrayRef.current!.reduce((a, b) => a + b, 0);
    const average = sum / dataArrayRef.current!.length;
    setMicLevel(average);

    if (isRecording) {
      requestAnimationFrame(updateMicLevel);
    }
  };

  const handleToggleRecording = () => {
    setIsRecording((prevState) => !prevState);
  };

  return (
    <div className="mic-test-container">
      <h2>Test your microphone</h2>
      <div className="mic-level-display">
        <div className="mic-level-bar" style={{ width: `${micLevel}%` }}></div>
      </div>
      <button onClick={handleToggleRecording}>
        {isRecording ? "Stop Speaking" : "Start Speaking"}
      </button>
      <button className="my-4" onClick={onNext} disabled={micLevel < 20}>
        Next
      </button>
    </div>
  );
};

// Video Test Component
const VideoTest: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraOn(true);
    } catch (err) {
      console.error("Error accessing webcam", err);
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
      <button className="my-4" onClick={onNext} disabled={!isCameraOn}>
        Next
      </button>
    </div>
  );
};

// Screen Share Component
const ScreenShare: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      console.log("Screen sharing started", stream);
    } catch (err) {
      console.error("Error starting screen share", err);
    }
  };

  return (
    <div>
      <h2>Screen Share</h2>
      <button onClick={startScreenShare}>Start Screen Share</button>
      <button className="my-4" onClick={onNext}>
        Next
      </button>
    </div>
  );
};

// Main TestPage Component
const TestPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      <h1>Test Your Microphone, Camera, and Screen Share</h1>
      {currentStep === 1 && <MicrophoneTest onNext={handleNextStep} />}
      {currentStep === 2 && <VideoTest onNext={handleNextStep} />}
      {currentStep === 3 && <ScreenShare onNext={handleNextStep} />}
      {currentStep > 3 && (
        <div>
          <p>All tests are complete! Please proceed to the next task.</p>
        </div>
      )}
    </div>
  );
};

export default TestPage;
