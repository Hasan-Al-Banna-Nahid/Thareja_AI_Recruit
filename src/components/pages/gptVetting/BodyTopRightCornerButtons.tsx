"use client";

import React from "react";
import { useDispatch } from "react-redux";
import InfoCircleSVG from "@/app/../../public/svgs/info-circle.svg";
import VideoSquareSVG from "@/app/../../public/svgs/video-square.svg";
import SmsSVG from "@/app/../../public/svgs/sms.svg";
import Button from "@/components/shared/Buttons/gptVettingInviteACandiate";
import GptVettingInviteACandidateButton from "@/components/shared/Buttons/gptVettingInviteACandidateButton";
import { openModal } from "@/Redux/Features/GptVettilngSlice/modalSlice";

const BodyTopRightCornerButtons: React.FC = () => {
  const dispatch = useDispatch();

  const handleInviteClick = () => {
    dispatch(openModal());
  };

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button svgSrc={InfoCircleSVG} text="Customize Content" />
      <button className="commonButton mx-2">Manage Access</button>
      <Button svgSrc={VideoSquareSVG} text="Quick Demo" />
      <GptVettingInviteACandidateButton
        svgSrc={SmsSVG}
        text="Invite A Candidate"
        onClick={handleInviteClick}
        buttonClassName="commonButtonForInviteCandidate"
      />
    </div>
  );
};

export default BodyTopRightCornerButtons;
