import JobsPagination from "@/components/shared/pagination/JobsPagination";
import { useState } from "react";

const InProgressJobDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  return (
    <div className="w-full">
      <h2 className="text-[#005AFF] w-full text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px] mb-5">
        Design Web App
      </h2>
      <p className="text-[#A1A5AD] text-base md:text-[18px] leading-[25px] ">
        May 24, 2024 - Present
      </p>

      <p className="text-[#525966] text-base md:text-[18px] leading-[25px] mt-4">
        Job in progress
      </p>
      <p className="text-[#525966] text-base md:text-[18px] leading-[25px] mt-2">
        Private earnings
      </p>
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-5 md:my-6 lg:my-8 bg-[#0059ff33]"></span>
      <h2 className="text-[#005AFF] w-full text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px] mb-5">
        Firma drawings for existing software
      </h2>
      <p className="text-[#A1A5AD] text-base md:text-[18px] leading-[25px] ">
        May 24, 2024 - Present
      </p>

      <p className="text-[#525966] text-base md:text-[18px] leading-[25px] mt-4">
        Job in progress
      </p>
      <p className="text-[#525966] text-base md:text-[18px] leading-[25px] mt-2">
        Private earnings
      </p>
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-5 md:my-6 lg:my-8 bg-[#0059ff33]"></span>
      <h2 className="text-[#005AFF] w-full text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px] mb-5">
        Ongoing design work
      </h2>
      <p className="text-[#A1A5AD] text-base md:text-[18px] leading-[25px] ">
        May 24, 2024 - Present
      </p>

      <p className="text-[#525966] text-base md:text-[18px] leading-[25px] mt-4">
        Job in progress
      </p>
      <p className="text-[#525966] text-base md:text-[18px] leading-[25px] mt-2">
        Private earnings
      </p>
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-5 md:my-6 lg:my-8 bg-[#0059ff33]"></span>

      <JobsPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </div>
  );
};

export default InProgressJobDetails;
