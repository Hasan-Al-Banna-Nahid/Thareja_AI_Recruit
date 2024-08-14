"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosClose } from "react-icons/io";

// interface MicTestModalProps {
//   onClose: () => void;
// }

const MicTestModal: React.FC = () => {
  const [micTested, setMicTested] = useState(false);
  const [videoTested, setVideoTested] = useState(false);
  const [screenShared, setScreenShared] = useState(false);
  const [audioLevel, setAudioLevel] = useState<number[]>([]);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [screenStream, setScreenStream] = useState<MediaStream | null>(null);
  const [currentStep, setCurrentStep] = useState<
    "mic" | "video" | "screen" | "done"
  >("mic");

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const screenRef = useRef<HTMLVideoElement | null>(null);
  const router = useRouter();

  // Microphone Test
  const handleMicTest = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const microphone = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      microphone.connect(analyser);
      analyser.fftSize = 64; // Reduced fftSize for better visualization
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const updateAudioLevel = () => {
        analyser.getByteFrequencyData(dataArray);
        setAudioLevel([...dataArray]);
        requestAnimationFrame(updateAudioLevel);
      };

      updateAudioLevel();
      setMicTested(true);
    } catch (error) {
      console.error("Microphone test failed:", error);
    }
  };

  const handleVideoTest = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
      setVideoTested(true);
    } catch (error) {
      console.error("Video test failed:", error);
    }
  };

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
    };
  }, [videoStream, screenStream]);

  const handleFinishTests = () => {
    // toast.success("All tests completed successfully! Close The ");
    setTimeout(() => {
      // onClose();
      setTimeout(() => {
        router.push("/gpt-vetting/Exam");
      }, 500);
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-[600px] relative z-50">
        <div className="flex flex-col gap-4">
          {currentStep === "mic" && (
            <>
              <div className="mb-4">
                <button
                  className="border rounded-[12px] bg-[rgba(0,90,255,0.03)] p-[10px_18px] self-stretch flex justify-between items-center gap-8 mx-auto w-[400px]"
                  onClick={handleMicTest}
                >
                  <p>Test your Microphone</p>
                  <IoIosClose className="text-2xl" />
                </button>
              </div>
              <p className="text-center mt-2">
                We will protect your allowed data, and it is required to
                complete these tests.
              </p>
              {micTested && (
                <>
                  <div className="relative mb-4 mx-auto w-full">
                    <div className="flex gap-1 justify-center">
                      {audioLevel.map((level, index) => (
                        <div
                          key={index}
                          className="bg-blue-500"
                          style={{
                            width: "10px",
                            height: `${level}px`,
                            borderRadius: "2px",
                            margin: "0 2px",
                            transition: "height 0.1s",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between gap-4"></div>
                </>
              )}

              {!micTested ||
                (micTested && (
                  <div className="flex justify-center gap-4 mt-4 items-center">
                    <button
                      className="link link-primary no-underline py-2 px-4 rounded"
                      onClick={handleMicTest}
                    >
                      Speak
                    </button>
                    <button
                      className={`${
                        !micTested && "bg-slate-400"
                      } bg-blue-500 text-white py-2 px-4 rounded-[50px]`}
                      onClick={() => setCurrentStep("video")}
                      disabled={!micTested}
                    >
                      Yes
                    </button>
                  </div>
                ))}
            </>
          )}

          {currentStep === "video" && (
            <>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleVideoTest}
              >
                Test Video
              </button>
              {videoTested && videoStream && (
                <div className="flex justify-center mt-4">
                  <video
                    ref={videoRef}
                    width="300"
                    height="200"
                    autoPlay
                    muted
                    playsInline
                    className="rounded-md border border-gray-300"
                  />
                </div>
              )}
              <p className="text-center mt-4">
                We will protect your allowed data, and it is required to
                complete these tests.
              </p>
              {videoTested && (
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                  onClick={() => setCurrentStep("screen")}
                >
                  Next
                </button>
              )}
            </>
          )}

          {currentStep === "screen" && (
            <>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleScreenShareTest}
              >
                Test Screen Sharing
              </button>
              {screenShared && screenStream && (
                <div className="flex justify-center mt-4">
                  <video
                    ref={screenRef}
                    width="300"
                    height="200"
                    autoPlay
                    playsInline
                    className="rounded-md border border-gray-300"
                  />
                </div>
              )}
              <p className="text-center mt-4">
                We will protect your allowed data, and it is required to
                complete these tests.
              </p>
              {screenShared && (
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                  onClick={handleFinishTests}
                >
                  Finish and Start Test
                </button>
              )}
            </>
          )}

          {currentStep === "done" && (
            <>
              <p className="text-center text-green-500 mt-4">
                All tests completed successfully! Redirecting to the exam
                page...
              </p>
            </>
          )}
        </div>

        {/* <div className="flex justify-between mt-6">
          <button className="bg-gray-300 py-2 px-4 rounded" onClick={onClose}>
            Close
          </button> */}
        {/* </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MicTestModal;
