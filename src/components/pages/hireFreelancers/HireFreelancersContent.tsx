"use client";
import { RootState } from "@/Redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import FreelancerFAQ from "./FreelancerFAQ";
import HiredFreelancerDetailsCard from "./HiredFreelancerDetailsCard";
import OffersFreelancerCard from "./OffersFreelancerCard";
import PaymentInfo from "./paymentsInfo";
import WorkDescription from "./WorkDescription";

const OfferedFreelancers = () => {
  return (
    <div className="w-full">
      <OffersFreelancerCard />
      <div className="w-full mt-9 md:mt-10">
        <h2 className=" text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px] mb-[18px]">
          Send an offer
        </h2>
        <Link
          href="/contact-form"
          className="text-[#005AFF] text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]"
        >
          Contract terms
        </Link>
        <p className=" text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px]">
          <Link href="/contact-form" className="float-left text-[#005AFF] mr-1">
            Upwork Payment Protection.
          </Link>
          <span>Only pay for the work you authorize.</span>
        </p>
      </div>
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0000001f]"></span>
      <PaymentInfo />
      <FreelancerFAQ />

      {/* ========== double seperator ============= */}
      <span className="w-full h-6 md:h-7 lg:h-[30px] block my-6 md:my-7 lg:my-[30px] border border-l-0 border-r-0 border-[#0000001f]"></span>
      <WorkDescription />
      <div className="w-full flex items-center justify-end">
        <button className="text-[18px] md:text-[20px] leading-[25px] py-2.5 md:py-3 px-5 md:px-8 lg:py-[16px] lg:px-[40px]">
          Cancel
        </button>
        <button className="text-[18px] md:text-[20px] leading-[25px] text-white py-2.5 md:py-3 px-5 md:px-8 lg:py-[16px] lg:px-[40px] rounded-[100px] bg-[#005AFF]">
          Continue
        </button>
      </div>
    </div>
  );
};

const HiredFreelancers = () => {
  return (
    <div className="w-full">
      <HiredFreelancerDetailsCard />
    </div>
  );
};

//  ============= root component =============
const HireFreelancersContent = () => {
  const active = useSelector(
    (state: RootState) => state.hireFreelancersActiveStages.activeTabBtn
  );
  switch (active) {
    case "OFFERS":
      return <OfferedFreelancers />;
    case "HIRED":
      return <HiredFreelancers />;
  }
};

export default HireFreelancersContent;
