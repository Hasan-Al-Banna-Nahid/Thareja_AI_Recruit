"use client";
import { useEffect, useRef, useState } from "react";

const MicrophoneTest: React.FC<{
  onMicTestComplete: (isWorking: boolean) => void;
}> = ({ onMicTestComplete }) => {
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
      analyserRef.current.fftSize = 2048;
      microphoneRef.current.connect(analyserRef.current);
      dataArrayRef.current = new Uint8Array(
        analyserRef.current.frequencyBinCount
      );

      updateMicLevel();
    } catch (err) {
      console.error("Error accessing microphone", err);
      onMicTestComplete(false);
    }
  };

  const stopMic = () => {
    if (microphoneRef.current) {
      microphoneRef.current.disconnect();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setMicLevel(0);
  };

  const updateMicLevel = () => {
    analyserRef.current?.getByteFrequencyData(dataArrayRef.current!);
    const sum = dataArrayRef.current!.reduce((a, b) => a + b, 0);
    const average = sum / dataArrayRef.current!.length;
    setMicLevel(average);

    if (average > 20) {
      onMicTestComplete(true);
      setIsRecording(false);
    } else if (isRecording) {
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
    </div>
  );
};

export default MicrophoneTest;
