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
import recordIcon from "@/../public/svgs/recordIcon.svg";
import { FaRegStopCircle } from "react-icons/fa";
import Image from "next/image";

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

  const startRecordingHandler = async () => {
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
  };

  const stopRecordingHandler = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }

    if (screenStreamRef.current) {
      screenStreamRef.current.getTracks().forEach((track) => track.stop());
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
    dispatch(nextQuestion());
  };

  return (
    <div>
      <div className="exam-page flex flex-col items-center py-6">
        <h2 className="text-center text-xl font-bold mb-2">
          Question {currentQuestionIndex + 1}/10
        </h2>
        <p className="text-center text-lg mb-4">
          Can you explain the concept of {currentQuestion} in Node.js?
        </p>

        <div className="recording-container flex flex-col items-center justify-center p-6 mb-6 border-2 bg-[#EDF4FF] w-[1200px] h-[240px] rounded-2xl">
          <button
            onClick={startRecordingHandler}
            className={`start-recording-button w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-blue-500 ${
              isRecording ? "bg-blue-600" : "hover:bg-blue-400"
            } ${isUploadingMessageShown || isUploading ? "hidden" : ""}`}
            disabled={isRecording}
          >
            {isRecording ? (
              <div
                className={`recording-animation flex items-center justify-center ${
                  isUploadingMessageShown || isUploading ? "hidden" : ""
                }`}
              >
                <span className="text-white animate-ping absolute inline-flex h-5 w-5 rounded-full bg-blue-700 opacity-75"></span>
                <span className="text-white">Recording...</span>
              </div>
            ) : (
              <div
                className={`flex flex-col items-center ${
                  isUploadingMessageShown || isUploading ? "hidden" : ""
                }`}
              >
                <i
                  className={`fas fa-microphone text-2xl ${
                    isUploadingMessageShown || isUploading ? "hidden" : ""
                  }`}
                ></i>
                <Image
                  className={`${
                    isUploadingMessageShown || isUploading ? "hidden" : ""
                  }`}
                  src={recordIcon}
                  alt="record"
                />
              </div>
            )}
          </button>

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
          ) : null}
        </div>

        <button
          onClick={stopRecordingHandler}
          className="btn btn-primary mb-4"
          disabled={!isRecording}
        >
          Stop Recording
        </button>

        <div className="flex justify-between items-center gap-6">
          <button
            onClick={handleSave}
            className="btn rounded-[50px] text-white bg-blue-600"
            disabled={isRecording || !chunksRef.current.length}
          >
            Save & Continue <FaRegStopCircle />
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
