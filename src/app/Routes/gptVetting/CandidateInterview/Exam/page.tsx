"use client";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import {
  startRecording,
  pauseRecording,
  stopRecording,
  saveRecording,
  nextQuestion,
  setTimeLeft,
} from "@/Redux/Features/GptVettilngSlice/examSlice";

const ExamPage: React.FC = () => {
  const dispatch = useDispatch();
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
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

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = (e) => {
          chunksRef.current.push(e.data);
        };
        dispatch(startRecording(mediaRecorder));
        mediaRecorder.start();
        setIsRecording(true);
      } catch (err) {
        console.error("Error accessing media devices.", err);
      }
    }
  };

  const pauseRecording = () => {
    dispatch(pauseRecording());
    setIsRecording(false);
  };

  const stopRecording = () => {
    dispatch(stopRecording());
    setIsRecording(false);
  };

  const handleSaveAndContinue = () => {
    dispatch(saveRecording());
    dispatch(nextQuestion());
  };

  return (
    <div className="exam-page p-6">
      <div className="header mb-6">
        <h2 className="text-center text-xl font-bold mb-2">
          Question {currentQuestionIndex + 1}
        </h2>
        <div className="text-center text-lg mb-4">
          Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
        </div>
        <div className="text-center">
          {isRecording && <span className="text-red-500">Recording...</span>}
        </div>
      </div>
      <div className="question mb-6 text-center">
        <p className="text-lg">Describe your expertise in: {currentQuestion}</p>
      </div>
      <div className="controls flex justify-center gap-4">
        <button
          onClick={startRecording}
          className="btn btn-primary"
          disabled={recording}
        >
          Start Recording
        </button>
        <button
          onClick={pauseRecording}
          className="btn btn-secondary"
          disabled={!recording}
        >
          Pause Recording
        </button>
        <button
          onClick={stopRecording}
          className="btn btn-danger"
          disabled={!recording}
        >
          Stop Recording
        </button>
        <button
          onClick={handleSaveAndContinue}
          className="btn btn-success"
          disabled={recording}
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default ExamPage;
