"use client";
import FileUpload from "@/components/shared/fileUpload/FileUpload";
import {
  GradientCheckboxSquareActive,
  GradientCheckboxSquareInactive,
} from "@/components/shared/icons/Icons";
import Link from "next/link";
import { useState } from "react";

const TermsAndCondition = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="my-7 md:my-10 lg:mt-[48px] lg:mb-[54px] w-full  text-[18px] md:text-[20px] leading-normal tracking-[0.4px]">
      <button
        className="mr-[15px] inline float-left mt-0.5"
        onClick={() => setChecked(!checked)}
      >
        {checked ? (
          <GradientCheckboxSquareActive />
        ) : (
          <GradientCheckboxSquareInactive />
        )}
      </button>
      <span className="inline">
        Yes, I understand and agree to the Upwork Terms of Service, including
        the User Agreement and Privacy Policy.
      </span>
    </div>
  );
};

//  ============ root component ================
const WorkDescription = () => {
  return (
    <div className="w-full">
      <h2 className="mb-1.5 text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]">
        Work description
      </h2>
      <p className="mb-1.5 text-base md:text-[18px] leading-[25px]">
        Related job listing
      </p>
      <Link href="#" className="text-base md:text-[18px] leading-[25px]">
        <span className="text-[#005AFF]">Blog Post Writer SEO ChatGPT </span>{" "}
        <span>(#1009406507)</span>
      </Link>
      <p className="mb-1.5 mt-5 md:mt-6 text-base md:text-[18px] leading-[25px]">
        Contract title
      </p>
      <p className="mb-5 md:mb-6 text-base md:text-[18px] leading-[25px]">
        Blog Post Writer SEO ChatGPT
      </p>

      <p className="mb-1.5 text-base md:text-[18px] leading-[25px]">
        Add a description of the work
      </p>
      <p className="mb-5 md:mb-6 text-base md:text-[18px] leading-[25px]">
        I need someone to create Blog posts for me. I will provide a list. The
        list will have a sample of another article same topic. I need someone to
        create a better version using ChatGPT. Use ChatGPT in Web search mode.
        Also create an image using Dalle for featured images. If needed add more
        images. Check for SEO, spelling, plagiarism and Al detection
      </p>
      <FileUpload />

      <TermsAndCondition />
    </div>
  );
};

export default WorkDescription;
