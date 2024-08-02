import JobsPagination from "@/components/shared/pagination/JobsPagination";
import Image from "next/image";
import { useState } from "react";

const PortFilios = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  return (
    <div className="w-full">
      <h2 className="text-[28px] md:text-[30px] lg:text-[34px] leading_normal tracking-[-1.02px] text-[#005AFF] mb-5">
        Portfolio
      </h2>
      <div className="flex items-start justify-between gap-8 flex-wrap">
        <div className="w-full md:max-w-[300px] 2xl:max-w-[320px]">
          <Image
            alt="portfolio image"
            src="/img/portfolio/portfolio-1.png"
            width={320}
            height={320}
            className="w-full min-w-[250px] md:max-w-[300px] 2xl:min-w-[320px] h-[250px] md:h-[300px] lg:h-[320px]  "
          />
          <p className="text-base md:text-[18px] leading-[25px] mt-[18px]">
            Landing page for Travelling
          </p>
        </div>
        <div className="w-full md:max-w-[300px] 2xl:max-w-[320px]">
          <Image
            alt="portfolio image"
            src="/img/portfolio/portfolio-2.png"
            width={320}
            height={320}
            className="w-full min-w-[250px] md:max-w-[300px] 2xl:min-w-[320px] h-[250px] md:h-[300px] lg:h-[320px]  "
          />
          <p className="text-base md:text-[18px] leading-[25px] mt-[18px]">
            The banner template is color of the year 2022, color
          </p>
        </div>
        <div className="w-full md:max-w-[300px] 2xl:max-w-[320px]">
          <Image
            alt="portfolio image"
            src="/img/portfolio/portfolio-3.png"
            width={320}
            height={320}
            className="w-full min-w-[250px] md:max-w-[300px] 2xl:min-w-[320px] h-[250px] md:h-[300px] lg:h-[320px]  "
          />
          <p className="text-base md:text-[18px] leading-[25px] mt-[18px]">
            banner template is the Delicious salad and fresh
          </p>
        </div>
      </div>
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-9 lg:my-[48px] bg-[#0059ff33]"></span>
      <JobsPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-9 lg:my-[48px] bg-[#0059ff33]"></span>
    </div>
  );
};

export default PortFilios;
