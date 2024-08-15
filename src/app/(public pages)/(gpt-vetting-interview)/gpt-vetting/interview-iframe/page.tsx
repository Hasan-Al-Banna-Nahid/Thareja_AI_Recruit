import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const InterViewIFrame = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <header className="text-center py-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Interview
        </h1>
      </header>
      <main className="mt-6 mx-auto max-w-screen-lg">
        <p className="text-center p-4 text-base sm:text-lg lg:text-xl">
          The difficulty of the questions is based on how you rate yourself on
          each skill. Please note that this test is timed, with an approximate
          allocation of 2 minutes per question. You will answer each question
          using a voice recording. Please make sure you have a stable internet
          connection and clear audio.
        </p>
        <h5 className="text-center text-lg sm:text-xl lg:text-2xl my-4 text-blue-700">
          Best Of Luck
        </h5>
        <div className="flex justify-center">
          <div className="relative w-full  sm:max-h-[560px]  sm:max-w-[560px] aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/TlB_eWDSMt4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </main>
      <footer className="flex justify-center my-4">
        <Link href="/gpt-vetting/skills">
          <button className="btn btn-primary rounded-full flex items-center gap-2 px-6 py-2">
            <span>Continue</span>
            <FaArrowRight />
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default InterViewIFrame;
