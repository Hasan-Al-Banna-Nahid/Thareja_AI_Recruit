"use client";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import {
  startRecording,
  stopRecording,
  saveRecording,
  nextQuestion,
  setTimeLeft,
} from "@/Redux/Features/GptVettilngSlice/examSlice";
import { FaMicrophone } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { FaRegCircleStop } from "react-icons/fa6";

const ExamPage: React.FC = () => {
  const dispatch = useDispatch();
  const [isRecording, setIsRecording] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingMessageShown, setIsUploadingMessageShown] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const screenStreamRef = useRef<MediaStream | null>(null);
  const { currentQuestionIndex, timeLeft, recording, skills } = useSelector(
    (state: RootState) => state.exam
  );

  const currentQuestion = skills[currentQuestionIndex]?.skill || "";

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        dispatch(setTimeLeft(timeLeft - 1));
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSaveAndContinue();
    }
  }, [timeLeft, dispatch]);

  useEffect(() => {
    // Set the total time to 20 minutes (1200 seconds) when the component mounts
    dispatch(setTimeLeft(1200));
  }, [dispatch]);

  const toggleRecordingHandler = async () => {
    if (isRecording) {
      // Stop recording
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
        setIsRecording(false);
      }

      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    } else {
      // Start recording
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
          const audioStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: false,
          });

          const screenStream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
          });

          // Combine screen and audio streams
          const combinedStream = new MediaStream([
            ...audioStream.getTracks(),
            ...screenStream.getTracks(),
          ]);

          const mediaRecorder = new MediaRecorder(combinedStream);
          mediaRecorder.ondataavailable = (e) => {
            chunksRef.current.push(e.data);
          };
          mediaRecorderRef.current = mediaRecorder;
          screenStreamRef.current = screenStream;
          mediaRecorder.start();
          setIsRecording(true);
          dispatch(startRecording(mediaRecorder));
        } catch (err) {
          console.error("Error accessing media devices.", err);
        }
      }
    }
  };

  const handleSave = () => {
    if (!chunksRef.current.length) return;

    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setIsUploadingMessageShown(true);

      setTimeout(() => {
        setIsUploadingMessageShown(false);
        handleSaveAndContinue();
      }, 2000); // Simulate delay before moving to the next question
    }, 2000); // Simulate upload delay
  };

  const handleSaveAndContinue = async () => {
    if (currentQuestionIndex < skills.length - 1) {
      dispatch(nextQuestion());
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <div className="exam-page flex flex-col items-center py-6 relative">
        <div className="absolute top-4 right-4 text-xl font-semibold rounded-[100px] bg-[#EDF4FF] p-2 flex justify-center items-center gap-2 text-blue-500">
          <span>
            <CiClock1 />
          </span>{" "}
          <span>{formatTime(timeLeft)}</span>
        </div>
        <h2 className="text-center text-xl font-bold mb-2">
          Question {currentQuestionIndex + 1}/10
        </h2>
        <p className="text-center text-lg mb-4">
          Can you explain the concept of {currentQuestion} in Node.js?
        </p>

        <div className="recording-container flex flex-col items-center justify-center p-6 mb-6 border-2 bg-[#EDF4FF] w-[1200px] h-[240px] rounded-2xl">
          {isUploadingMessageShown ? (
            <div className="uploading-placeholder text-center text-lg font-semibold mb-4 flex justify-center items-center flex-col">
              <span className="loading loading-dots w-[50px] text-blue-500 mx-auto"></span>
              <span> Upload complete. Moving to the next question...</span>
            </div>
          ) : isUploading ? (
            <div className="uploading-placeholder text-center text-lg font-semibold mb-4 flex justify-center items-center flex-col">
              <span className="loading loading-dots w-[50px] text-blue-500 mx-auto"></span>
              <span> Uploading your answer...</span>
            </div>
          ) : (
            <>
              <button
                onClick={toggleRecordingHandler}
                className={`start-recording-button w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-blue-500 relative ${
                  isRecording ? "animate-wave" : ""
                }`}
              >
                <FaMicrophone className="text-white text-4xl" />

                {isRecording && (
                  <div className="absolute w-full h-full rounded-full animate-wave">
                    <span className="absolute inset-0 w-full h-full rounded-full border-4 border-blue-300 animate-ping"></span>
                  </div>
                )}
              </button>

              <div className="mt-4 text-center text-lg font-semibold">
                {isRecording ? (
                  <span>Recording...</span>
                ) : (
                  <span>Click to start recording</span>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between items-center gap-6">
          <button
            onClick={handleSave}
            className=" flex justify-center items-center gap-2 btn rounded-[50px] text-white bg-blue-600"
            disabled={isRecording || !chunksRef.current.length}
          >
            <span>Save & Continue</span> <FaRegCircleStop />
          </button>
        </div>

        <div className="note text-center text-gray-500 mt-4">
          <p>Note: please do not refresh the page or you’ll lose the data.</p>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
