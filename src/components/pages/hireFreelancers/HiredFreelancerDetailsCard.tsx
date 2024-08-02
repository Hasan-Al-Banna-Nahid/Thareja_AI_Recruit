"use client";
import { CrownSVG, LocationSVG } from "@/components/shared/card/Icons";
import { FreelancerProfileHoverDescriptionModal } from "@/components/shared/modal/FreelancersCardHoverModals";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MailSVG, RightArrowSVG } from "./Icons";

const HiredFreelancerDetailsCard = () => {
  const [activeModal, setActiveModal] = useState<
    "RATING" | "JOB_SUCCESS" | null
  >(null);
  return (
    <div className="relative w-full p-5  md:p-10 border border-[#005aff33] bg-[#005aff05] rounded-[20px]  flex flex-col lg:flex-row gap-5 md:gap-[30px] items-start">
      <div className="relative w-full lg:max-w-[94px] flex flex-col gap-[25px]">
        <div className="relative w-full h-auto max-w-[94px]">
          <Image
            src="/svgs/freelancer-profile.svg"
            width={84.27}
            height={84.27}
            alt="Profile"
            className="p-[4.86px] rounded-full w-[94.27px] h-[94.27px] border-[1.62px] border-[#A8B7C1]"
          />
          <span className="absolute z-50 right-[3.24px] bottom-[3.24px] w-[22.69px] h-[22.69px] rounded-full border-[1.62px] border-white bg-[#A8B7C1]"></span>
        </div>
        <p className="absolute lg:relative top-5 lg:right-0 lg:top-0 right-5 w-auto max-w-[98px] block py-2 px-2.5 rounded-[10px] bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] text-base md:text-[18px] leading-[25px]">
          Invited
        </p>
      </div>
      <div className="w-full">
        {/* ===========  top container =========== */}
        <div className="w-full mb-5 flex  items-start justify-between flex-wrap gap-5">
          <div>
            <h2 className="text-[22px] md:text-[25px] lg:text-[27px] leading-normal mb-1.5">
              Muhammad I.
            </h2>
            <p className="text-base md:text-[18px] leading-[25px] mb-1.5">
              Senior UI UX Designer | Product Designer | SaaS | Figma
            </p>
            <p className="text-base md:text-[18px] leading-[25px] flex items-center gap-1 mr-[30px]">
              <LocationSVG />
              <span>India</span>
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="text-[#005AFF] text-[18px] md:text-[20px] leading-[25px] py-2.5 md:py-3 lg:py-[18px] px-[20px] md:px-[30px] lg:px-10 rounded-[30px] md:rounded-[100px] border border-[#005AFF]">
              Rehire
            </button>
          </div>
        </div>

        {/* ===========  bottom container =========== */}

        <div className="w-full">
          <div className="flex items-center flex-wrap gap-y-2.5 gap-x-5 w-full my-5">
            <p className="inline text-base md:text-[18px] leading-[25px]">
              $ <span>6.00/hr</span>
            </p>
            <p className="text-base md:text-[18px] leading-[25px]">
              $ <span>60k+ earned </span>
            </p>
            <div className="relative w-auto">
              <p
                onMouseEnter={() => setActiveModal("JOB_SUCCESS")}
                onMouseLeave={() => setActiveModal(null)}
                className=" cursor-pointer text-base md:text-[18px] leading-[25px] flex items-center gap-2 "
              >
                <CrownSVG />{" "}
                <span className="text-[#9EAB0C]">98% job sucess</span>
              </p>
              {/* ===== hover modal ======== */}
              <FreelancerProfileHoverDescriptionModal
                active={activeModal === "JOB_SUCCESS"}
                className="w-[270px] top-[180%] left-[-30%]"
              >
                <p className="text-base md:text-[18px] leading-[25px] ">
                  The percentage of this freelancer&apos;s jobs that resulted in
                  a great client experience.
                  <br />
                  <Link href="#" className="text-[#005AFF]">
                    Learn more
                  </Link>
                </p>
              </FreelancerProfileHoverDescriptionModal>
            </div>
          </div>

          <div className="w-full ">
            <MailSVG className="inline float-left mr-[14px]" />
            <span className="">
              Recieved 2 quarters ago: Well noted Dhiraj Thareja
            </span>
          </div>

          <p className="text-base md:text-[18px] leading-[25px] my-5 md:my-[30px]">
            <span className="text-[#005AFF]">Cover letter</span>{" "}
            <span>
              - Already working on a similar project using the GPT-4 Model which
              has access to the website to get statistics. You may check out the
              sample article.
            </span>
            <Link
              className="text-wrap inline-flex flex-wrap"
              target="_blank"
              href="https://docs.google.com/document/d/1JRbwokohV-mWN78ggLOYU62VBU2nLH1cORqdMOLJNEU/edit"
            >
              {" "}
              https://docs.google.com<span>/document/d/</span>
              <span>1JRbwokohV-</span>
              <span>mWN78ggLOY</span>
              <span>U62VBU2n</span>
              <span>LH1cORq</span>
              <span>dMOLJNEU</span>/edit{" "}
            </Link>
            <span>Hi, I hope you are having a good day.</span>
          </p>

          {/* skills container  */}
          <div className="flex items-center gap-[14px] flex-wrap">
            <p className="text-base md:text-[18px] lg:text-[20px] leading-normal md:leading-[25px] py-1.5 md:py-3.5 lg:py-4 px-5 md:px-[35px] lg:px-10  rounded-[15px] md:rounded-[50px] lg:rounded-[100px] bg-[#dde3e766] text-[#525966cc]">
              Application Design
            </p>
            <p className="text-base md:text-[18px] lg:text-[20px] leading-normal md:leading-[25px] py-1.5 md:py-3.5 lg:py-4 px-5 md:px-[35px] lg:px-10  rounded-[15px] md:rounded-[50px] lg:rounded-[100px] bg-[#dde3e766] text-[#525966cc]">
              Website Design
            </p>
            <p className="text-base md:text-[18px] lg:text-[20px] leading-normal md:leading-[25px] py-1.5 md:py-3.5 lg:py-4 px-5 md:px-[35px] lg:px-10  rounded-[15px] md:rounded-[50px] lg:rounded-[100px] bg-[#dde3e766] text-[#525966cc]">
              Prototyping
            </p>
            <p className="text-base md:text-[18px] lg:text-[20px] leading-normal md:leading-[25px] py-1.5 md:py-3.5 lg:py-4 px-5 md:px-[35px] lg:px-10  rounded-[15px] md:rounded-[50px] lg:rounded-[100px] bg-[#dde3e766] text-[#525966cc]">
              Website Copywriting
            </p>
            <p className="text-base md:text-[18px] lg:text-[20px] leading-normal md:leading-[25px] py-1.5 md:py-3.5 lg:py-4 px-5 md:px-[35px] lg:px-10  rounded-[15px] md:rounded-[50px] lg:rounded-[100px] bg-[#dde3e766] text-[#525966cc]">
              Product Description
            </p>
            <RightArrowSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiredFreelancerDetailsCard;
