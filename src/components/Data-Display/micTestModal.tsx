import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MicVideoScreenModal: React.FC<{
  onClose: () => void;
  onSubmit?: () => void;
}> = ({ onClose, onSubmit }) => {
  const router = useRouter();
  const [micTested, setMicTested] = useState(false);
  const [videoTested, setVideoTested] = useState(false);
  const [screenShared, setScreenShared] = useState(false);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
  const [currentStep, setCurrentStep] = useState<
    "mic" | "video" | "screen" | "done"
  >("mic");
  const [micActive, setMicActive] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const screenRef = useRef<HTMLVideoElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationIdRef = useRef<number | null>(null);

  const NUM_BARS = 20;

  // Microphone Test
  const handleMicTest = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const microphone = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      microphone.connect(analyser);
      analyser.fftSize = 256; // Higher FFT size for better precision
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;

      const updateAudioLevel = () => {
        if (analyserRef.current && micActive) {
          analyserRef.current.getByteFrequencyData(dataArray);

          // Calculate average level
          const sum = dataArray.reduce((a, b) => a + b, 0);
          const averageLevel = sum / bufferLength;
          const normalizedLevel = Math.min(
            Math.floor((averageLevel / 255) * NUM_BARS),
            NUM_BARS
          );

          setAudioLevel(normalizedLevel);
          animationIdRef.current = requestAnimationFrame(updateAudioLevel);
        }
      };

      updateAudioLevel();
      setMicTested(true);
      setMicActive(true);
    } catch (error) {
      console.error("Microphone test failed:", error);
    }
  };

  const toggleMicTest = () => {
    if (micActive) {
      cancelAnimationFrame(animationIdRef.current!);
      setMicActive(false);
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    } else {
      handleMicTest();
    }
  };

  // Video Test
  const handleVideoTest = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
      setVideoTested(true);
    } catch (error) {
      console.error("Video test failed:", error);
    }
  };

  // Screen Share Test
  const handleScreenShareTest = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });
      setScreenStream(stream);
      setScreenShared(true);
    } catch (error) {
      console.error("Screen sharing test failed:", error);
    }
  };

  useEffect(() => {
    if (videoStream && videoRef.current) {
      videoRef.current.srcObject = videoStream;
    }
  }, [videoStream]);

  useEffect(() => {
    if (screenStream && screenRef.current) {
      screenRef.current.srcObject = screenStream;
    }
  }, [screenStream]);

  useEffect(() => {
    if (micTested && videoTested && screenShared) {
      setCurrentStep("done");
      handleFinishTests();
    }
  }, [micTested, videoTested, screenShared]);

  useEffect(() => {
    return () => {
      videoStream?.getTracks().forEach((track) => track.stop());
      screenStream?.getTracks().forEach((track) => track.stop());
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      cancelAnimationFrame(animationIdRef.current!);
    };
  }, [videoStream, screenStream]);

  const handleFinishTests = () => {
    // toast.success("All tests completed successfully!");
    router.push("/gpt-vetting/exam");
    setTimeout(() => {
      onClose(); // Close the modal before redirecting
      setTimeout(() => {
        if (onSubmit) onSubmit(); // Call the onSubmit if provided
      }, 100); // Small delay to ensure the modal is closed
    }, 2500); // 2.5 seconds delay before redirecting
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 pointer-events-none">
      <div className="bg-white p-6 rounded-md w-[600px] relative z-10 pointer-events-auto">
        <div className="flex flex-col gap-4">
          {/* Step 1: Microphone Test */}
          {currentStep === "mic" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Test your microphone</h2>
              </div>
              <p className="text-center text-sm mb-4">
                Speak and pause, do you hear a reply?
              </p>
              {/* Input Level Bar */}
              <div className="flex justify-center items-center">
                <div className="flex gap-1 p-1 bg-gray-200 rounded-lg w-full max-w-[320px]">
                  {Array.from({ length: NUM_BARS }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-4 flex-1 rounded-md ${
                        index < audioLevel ? "bg-blue-500" : "bg-white"
                      }`}
                      style={{
                        transition: "background-color 0.1s ease",
                        border: "none",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              {/* Pause and Yes Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <p
                  className=" text-blue-600 px-6 py-2 "
                  onClick={toggleMicTest}
                >
                  {micActive ? (
                    <span className="link link-primary no-underline text-xl">
                      Pause
                    </span>
                  ) : (
                    <span className="link link-primary no-underline text-xl">
                      Speak
                    </span>
                  )}
                </p>
                <button
                  className="bg-blue-700 text-white px-6 py-2 rounded-full"
                  onClick={() => setCurrentStep("video")}
                >
                  Yes
                </button>
              </div>
            </>
          )}

          {/* Step 2: Video Test */}
          {currentStep === "video" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Test your video</h2>
                <button onClick={onClose}>
                  <IoIosClose size={24} />
                </button>
              </div>

              <div className="mb-4">
                <button
                  className="border rounded-[12px] bg-[rgba(0,90,255,0.1)] p-4 text-center w-full"
                  onClick={handleVideoTest}
                >
                  Start Video Test
                </button>
              </div>
              {videoStream && (
                <div className="w-full h-[300px]">
                  <video
                    ref={videoRef}
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex justify-center mt-6">
                <button
                  className="bg-blue-500 text-white px-6 py-2 rounded-full"
                  onClick={() => setCurrentStep("screen")}
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 3: Screen Share Test */}
          {currentStep === "screen" && (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Test Screen Sharing</h2>
                <button onClick={onClose}>
                  <IoIosClose size={24} />
                </button>
              </div>

              <div className="mb-4">
                <button
                  className="border rounded-[12px] bg-[rgba(0,90,255,0.1)] p-4 text-center w-full"
                  onClick={handleScreenShareTest}
                >
                  Start Screen Share Test
                </button>
              </div>
              {screenStream && (
                <div className="w-full h-[300px]">
                  <video
                    ref={screenRef}
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex justify-center mt-6">
                <button
                  className="bg-blue-500 text-white px-6 py-2 rounded-full"
                  onClick={handleFinishTests}
                >
                  Done
                </button>
              </div>
            </>
          )}

          {/* Step 4: Done */}
          {currentStep === "done" && (
            <div className="flex flex-col items-center justify-center gap-4">
              <h2 className="text-lg font-semibold lg:rounded-[12px] p-4 bg-[rgba(0,90,255,0.03)] my-2">
                Camera & Microphone Access
              </h2>
              <p className="text-sm text-justify my-2">
                You're about to share your screen, give camera and microphone
                access. We only use this information to generate a trust score
                and prevent cheating.
              </p>

              <p className="text-sm my-2 text-justify">
                Once you've shared your screen and your camera is on, you can
                click on <span className="text-blue-600">'Record'</span> and
                start answering your first question.
              </p>
              <div className="lg:w-[400px] flex justify-end">
                <button className="btn btn-primary rounded-[12px] w-[100px]">
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MicVideoScreenModal;
