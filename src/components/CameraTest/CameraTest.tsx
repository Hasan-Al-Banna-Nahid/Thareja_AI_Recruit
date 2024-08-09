"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/Redux/store";
import {
  startTesting,
  finishTesting,
} from "@/Redux/Features/GptVettilngSlice/cameraSlice";
import { checkCamera } from "@/app/utils/mediaUtils";

const CameraTest = () => {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: RootState) => state.camera.status);
  const [isTesting, setIsTesting] = useState(false);

  const handleStart = async () => {
    dispatch(startTesting());
    setIsTesting(true);
    await checkCamera();
    dispatch(finishTesting());
    setIsTesting(false);
  };

  useEffect(() => {
    if (status === "finished") {
      alert("Camera test completed!");
    }
  }, [status]);

  return (
    <div>
      <h2>Camera Test</h2>
      <button onClick={handleStart} disabled={isTesting}>
        {isTesting ? "Testing..." : "Start Test"}
      </button>
    </div>
  );
};

export default CameraTest;
