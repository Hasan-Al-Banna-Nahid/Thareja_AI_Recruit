"use client";
import { useState } from "react";
const Card = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-full ">
      <h3 className="text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]">
        Senior UX/UI designer | Upwork
      </h3>
      <p className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px] my-2.5">
        March 2023 - Present
      </p>
      <p className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px]">
        As a Senior UX/UI Designer specializing in AI projects, I lead the
        design efforts to create intelligent, intuitive, and user-friendly
        interfaces for AI-powered applications. My role involves collaborating
        with cross-functional teams, including AI engineers and...
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-[#005AFF] ml-2"
        >
          {showMore ? "less" : "more"}
        </button>
      </p>
    </div>
  );
};

//  ============= root component =================
const EmploymentHistory = () => {
  return (
    <div className="mt-10 md:mt-[50px] w-full  p-5 py-6 md:p-[40px] lg:p-[50px] border border-[#005aff08 ] rounded-[20px] ">
      <h2 className="text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px] ">
        Employment history
      </h2>
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33]"></span>
      <Card />
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33]"></span>
      <Card />
    </div>
  );
};

export default EmploymentHistory;
