"use client";
import { SET_EXPAND } from "@/Redux/Features/rootModyfier/Modyfier";
import { RootState } from "@/Redux/store";
import { AllJobPostContractFreelancer } from "@/components/Layout/JobPost";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import ClockSVG from "./ClockSVG";
import JobCard from "./JobCard";
import LocationSVG from "./LocationSVG";
import ThreeDot from "./ThreeDot";

type PropsType = {
  person: AllJobPostContractFreelancer;
  activeKey: string;
};

const ContractCard = ({ person, activeKey }: PropsType) => {
  const ACTIVE_KEY = activeKey;
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);

  const dispatch = useDispatch();

  return (
    <JobCard>
      <div className="flex flex-col lg:flex-row gap-[30px] items-start relative">
        <Image
          src="/img/freelancer-profile.png"
          className="w-[74.276px] h-[74.276px] md:w-[84.276px] md:h-[84.276px]"
          width={84.276}
          height={84.276}
          alt="Profile image"
        />

        {/* ======= freelancer info ========== */}
        <div className="w-full">
          <h3 className="mb-2 text-[22px] md:text-[25px] lg:text-[27px] leading-normal">
            {person.name}
          </h3>
          <div className="flex items-center justify-start gap-5">
            <p className="flex items-center justify-start gap-2 text-base md:text-[18px] leading-[25px]">
              <LocationSVG />
              <span>{person.location}</span>
            </p>
            <p className="my-2 flex items-center justify-start gap-2 text-base md:text-[18px] leading-[25px]">
              <ClockSVG />
              <span>{person.localTime} Local time</span>
            </p>
          </div>
          <p className="text-base md:text-[18px] leading-[25px]">
            {person.contractStartingDate} {person.contractEndingDate}
          </p>
          <div className="flex my-1.5 items-center gap-[14px]">
            <button className="px-[12px] md:px-[14px] py-2 text-base md:text-[18px] leading-[25px] text-[#149E00] border border-[#149E00] rounded-[10px] bg-[#D0EECC] ">
              {person.status}
            </button>
            <p className="text-base md:text-[18px] leading-[25px]">
              {person.totalWorkingTime}hrs, ${person.totalEarning} this week
            </p>
          </div>
          <p className="text-base md:text-[18px] leading-[25px] mb-1.5">
            Last Activity {person.lastActivityDay}
          </p>
          <p className="text-base md:text-[18px] leading-[25px] mb-1.5">
            {person.lastActivityDate} {person.lastActivityMonth}
          </p>
          <p className="text-base md:text-[18px] leading-[25px]">
            Rate: {person.workingRate} /hr, {person.totalWorkingTime} hrs weekly
            limit
          </p>
        </div>

        {/* =========== CTA buttons ========= */}
        <div className="w-full lg:w-auto flex gap-5 items-center mt-2 lg:mt-[0] z-10">
          <Link
            href="#"
            className="md:w-[208px] w-full rounded-[100px] text-[#005AFF] border border-[#005AFF] text-[20px] py-[12px] md:py-[16px] text-center"
          >
            See contract
          </Link>
          <button
            onClick={() => {
              dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
            }}
            className="absolute top-0 right-0 lg:relative rounded-[100px] text-[#005AFF] border border-[#005AFF] p-1.5"
          >
            <ThreeDot />
            {EXPAND === ACTIVE_KEY && (
              <ul className="absolute w-[340px] flex flex-col gap-[14px] bg-white z-40 top-0 right-0 py-5 rounded-[20px] border border-[#0000001a]">
                <li className=" duration-200 text-left text-base md:text-[18px] leading-[25px] py-2 px-5 hover:bg-[#005AFF] hover:text-white ">
                  View proposals
                </li>
                <li className=" duration-200 text-left text-base md:text-[18px] leading-[25px] py-2 px-5 hover:bg-[#005AFF] hover:text-white ">
                  Invite freelancers
                </li>
                <li className=" duration-200 text-left text-base md:text-[18px] leading-[25px] py-2 px-5 hover:bg-[#005AFF] hover:text-white ">
                  Make private
                </li>
                <li className=" duration-200 text-left text-base md:text-[18px] leading-[25px] py-2 px-5 hover:bg-[#005AFF] hover:text-white ">
                  Upgrade to featured
                </li>
              </ul>
            )}
          </button>
        </div>
      </div>
    </JobCard>
  );
};

export default ContractCard;
