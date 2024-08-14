import React from "react";
import HeaderWithNameAndProfile from "../HeaderWithNameAndProfile/HeaderWithNameAndProfile";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const InterViewIFrame = () => {
  return (
    <div>
      <HeaderWithNameAndProfile />
      <div className="mt-6 mx-auto w-[1200px]">
        <p className="text-center wrap p-6">
          The difficulty of the questions are based on how you rate yourself on
          each skill. Please note that this test is timed, with an approximate
          allocation of 2 minutes per question. You will answer each question
          using a voice recording, please make sure you have a stable internet
          connection and clear audio. TESTINGGGGGGGGGinging
        </p>
        <h5 className="text-center text-[20px] my-4 text-blue-700">
          Best Of Luck
        </h5>
        <iframe
          width="560"
          height="315"
          className="mx-auto rounded-lg"
          src="https://www.youtube.com/embed/TlB_eWDSMt4?si=F31NA6Xd8TQiK06j"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="w-[200px] mx-auto my-2">
        <Link href={"/Routes/gptVetting/CandidateInterview/skills"}>
          <button className="btn btn-primary rounded-[80px] mx-auto text-center flex justify-center items-center gap-2">
            <span>Continue</span>
            <FaArrowRight />
          </button>
        </Link>
      </div>
      <p className="text-center my-2">
        Powered by{" "}
        <span className="link link-primary no-underline">Recruit</span>
      </p>
    </div>
  );
};

export default InterViewIFrame;
