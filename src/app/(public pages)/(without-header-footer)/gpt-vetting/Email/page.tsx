import Image from "next/image";
import Link from "next/link";
import React from "react";
import photo from "@/../public/img/CandidateEmailPhoto.png";
import { FaLinkedinIn } from "react-icons/fa6";

const Page: React.FC = () => (
  <div className="w-full max-w-[900px] mx-auto my-8 px-4 sm:px-6 lg:px-8">
    <div>
      <Image src={photo} alt="candidate" className="rounded-md " />
      <h2 className="my-4 text-lg sm:text-xl lg:text-2xl">Hi Ali,</h2>
      <p className="my-4 text-sm sm:text-base lg:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
        sollicitudin consequat dui nec Pellentesque ut rhoncus nibh.
      </p>
      <p className="my-4 text-sm sm:text-base lg:text-lg">
        Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum,
        luctus ante dignissim, interdum
      </p>
      <h2 className="text-blue-700 my-4 text-lg sm:text-xl lg:text-2xl">
        Important Information
      </h2>
      <ul className="list-disc list-inside my-2 text-sm sm:text-base lg:text-lg">
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
          sollicitudin consequat dui nec Pellentesque ut rhoncus nibh.
        </li>
      </ul>
      <p className="my-4 text-sm sm:text-base lg:text-lg">
        We appreciate your time and will get back to you after you’ve completed
        the assessment.
      </p>
      <Link href="/gpt-vetting/interview-iframe">
        <button className="my-2 mb-4 rounded-full border-[1px] border-blue-500 text-blue-500 shadow-2xl px-6 py-2 text-sm sm:text-base">
          Start now
        </button>
      </Link>

      <h5 className="text-sm sm:text-base lg:text-lg">Best Wishes,</h5>
      <h2 className="text-lg sm:text-xl lg:text-2xl">Thareja Recruit</h2>
    </div>
    <div className="mt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <p className="text-sm sm:text-base lg:text-lg text-center sm:text-left">
        If you experience any issues with the assessment, contact us at:{" "}
        <span className="link link-primary">ali@recruit.ai</span>
      </p>
      <div className="p-[5px] bg-gradient-to-r from-[#E1E5FF] to-[#FAFCFF] w-[50px] h-[50px] shadow-2xl rounded-full flex justify-center items-center">
        <FaLinkedinIn className="text-blue-600 text-xl" />
      </div>
    </div>
  </div>
);

export default Page;
