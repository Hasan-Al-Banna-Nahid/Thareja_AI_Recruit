import Image from "next/image";
import Link from "next/link";
import React from "react";
import photo from "@/../public/img/CandidateEmailPhoto.png";
import { FaLinkedinIn } from "react-icons/fa6";

const page: React.FC = () => (
  <div className="w-[900px] mx-auto my-8">
    <div>
      <Image src={photo} alt="candidate" className="rounded-md" />
      <h2 className="my-4">Hi Ali,</h2>
      <p className="my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
        sollicitudin consequat dui nec Pellentesque ut rhoncus nibh.
      </p>
      <p className="my-4">
        Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum,
        luctus ante dignissim, interdum
      </p>
      <h2 className="text-blue-700 my-4">Important Information</h2>
      <li className="my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque
        sollicitudin consequat dui nec Pellentesque ut rhoncus nibh.
      </li>
      <p className="my-4">
        We appreciate your time and will get back to you after you’ve completed
        the assessment.
      </p>
      <Link href="/gpt-vetting/interview-iframe">
        <button className="btn my-2 mb-4 bg-blue-200  hover:btn-primary rounded-[100px] border-2 border-blue-500 shadow-2xl">
          Start now
        </button>
      </Link>

      <h5>Best Wishes,</h5>
      <h2>Thareja Recruit</h2>
    </div>
    <div className="mt-8 flex justify-between items-center">
      <p>
        If you experience any issues with the assessment, contact us at:
        <span className="link link-primary">ali@recruit.ai</span>
      </p>
      <button className="shadow-2xl">
        <FaLinkedinIn className="rounded-[50px] w-[40px] h-[40px] shadow-lg bg-blue-300 text-2xl" />
      </button>
    </div>
  </div>
);

export default page;
