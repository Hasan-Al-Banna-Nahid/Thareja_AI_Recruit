"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Redux/store";
import {
  startTesting,
  finishTesting,
} from "@/Redux/Features/GptVettilngSlice/microphoneSlice";
import { checkMicrophone } from "@/app/utils/mediaUtils";

const MicrophoneTest = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.microphone.status);
  const [isTesting, setIsTesting] = useState(false);

  const handleStart = async () => {
    dispatch(startTesting());
    setIsTesting(true);
    await checkMicrophone();
    dispatch(finishTesting());
    setIsTesting(false);
  };

  useEffect(() => {
    if (status === "finished") {
      alert("Microphone test completed!");
    }
  }, [status]);

  return (
    <div>
      <h2>Microphone Test</h2>
      <button onClick={handleStart} disabled={isTesting}>
        {isTesting ? "Testing..." : "Start Test"}
      </button>
    </div>
  );
};

export default MicrophoneTest;
