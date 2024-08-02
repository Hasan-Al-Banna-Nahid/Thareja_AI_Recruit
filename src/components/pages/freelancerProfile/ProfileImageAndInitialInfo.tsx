"use client";
import {
  CrownSVG,
  HeartSVG,
  ThreeDotSVG,
  TopRatedSVG,
} from "@/components/shared/card/Icons";
import ThunderSVG from "@/components/shared/card/ThunderSVG";
import { FreelancerProfileHoverDescriptionModal } from "@/components/shared/modal/FreelancersCardHoverModals";
import { setActiveInviteModal } from "@/Redux/Features/jobpost/InviteFreeLancersActiveStages";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { DisLikeSVG, LikeSVG } from "./Icons";

const ProfileImageAndInitialInfo = () => {
  const dispatch = useDispatch();
  const [activeModal, setActiveModal] = useState<
    "RATING" | "JOB_SUCCESS" | null
  >(null);

  //  invite modal activator
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [active]);
  return (
    <div className=" md:flex items-center gap-6 mb-[18px]">
      <div className="relative mb-5 md:mb-0 w-full h-auto max-w-[90px] md:max-w-[100px]  lg:max-w-[114px] ">
        <Image
          src="/svgs/freelancer-profile.svg"
          width={102}
          height={102}
          alt="Profile"
          className="w-full p-[3.86px] rounded-full border-[1.96px] border-[#01D18F]"
        />
        <span className="absolute z-50 right-[3.93px] bottom-[3.93px] w-5 h-5 md:w-[25.55px] md:h-[25.55px] rounded-full border-[1.96px] border-white bg-[#01D18F]"></span>
      </div>

      <div className="w-full">
        {/* ===========  top container =========== */}
        <div className="w-full mb-5 flex  items-start justify-between flex-wrap gap-5">
          <div>
            <h2 className="text-[22px] md:text-[25px] lg:text-[27px] leading_normal mb-1.5">
              Muhammad I.
            </h2>
            <p className="text-base md:text-[18px] leading-[25px] mb-1.5">
              Senior UI UX Designer | Product Designer | SaaS | Figma
            </p>
            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap  md:min-w-[440px] w-full">
              <div className="relative w-auto">
                <p
                  onMouseEnter={() => setActiveModal("RATING")}
                  onMouseLeave={() => setActiveModal(null)}
                  className="cursor-pointer text-base md:text-[18px] leading-[25px] flex items-center gap-2 text-[#FF9314]"
                >
                  <TopRatedSVG /> <span>Top rated</span>
                </p>
                {/* ===== hover modal ======== */}
                <FreelancerProfileHoverDescriptionModal
                  active={activeModal === "RATING"}
                  className="w-[270px] top-[180%] left-[-50%]"
                >
                  <p className="text-base md:text-[18px] leading-[25px] ">
                    Top rated talent delivers quality work with stellar
                    feedback.{" "}
                    <Link href="#" className="text-[#005AFF]">
                      Learn more
                    </Link>
                  </p>
                </FreelancerProfileHoverDescriptionModal>
              </div>
              <p className="text-[12px] tracking-[0.24px] leading_normal flex items-center gap-1.5 py-1.5 px-[14px] border border-[#005AFF] rounded-[20px]">
                <ThunderSVG />
                <span>Available Now</span>
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
                    The percentage of this freelancer&apos;s jobs that resulted
                    in a great client experience.
                    <br />
                    <Link href="#" className="text-[#005AFF]">
                      Learn more
                    </Link>
                  </p>
                </FreelancerProfileHoverDescriptionModal>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] ">
              <LikeSVG />
            </button>
            <button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] ">
              <DisLikeSVG />
            </button>
            <button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] ">
              <HeartSVG />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(setActiveInviteModal(true));
              }}
              className="text-[18px] md:text-[20px] leading-[25px] py-2 md:py-3 lg:py-4 px-[20px] md:px-[30px] lg:px-10 rounded-[30px] md:rounded-[100px] text-white bg-[#005AFF]"
            >
              Invite
            </button>

            <button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF]">
              <ThreeDotSVG />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageAndInitialInfo;
