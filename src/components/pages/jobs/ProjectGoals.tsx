import { HeartSVG } from "@/components/shared/card/Icons";
import Image from "next/image";
import Link from "next/link";
import TopRatedPlusSVG from "../inviteFreelancers/Icons";
import {
  DollarSVG,
  GraphMonitorSVG,
  RatingStarSVG,
  RightArrowLongSVG,
  RoundedLocationSVG,
  SmallSuitcaseSVG,
  VideoSVG,
  XMarkWhiteSVG,
} from "./Icons";

const GidedTour = () => {
  return (
    <div className=" min-h-[438px] p-5 md:p-6 md:max-w-[340px] w-full flex flex-col gap-1 bg-[#005AFF] rounded-[20px]">
      <div className="w-full flex items-center justify-between mb-[18px]">
        <GraphMonitorSVG /> <XMarkWhiteSVG />
      </div>
      <p className="mb-5 text-white text-base md:text-[18px] leading-[25px]">
        Guided tour
      </p>

      <p className=" text-white  text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px] leading_normal">
        Book a consultation with an expert to review your project’s budget,
        timeline, and scope one-on-one.
      </p>

      <div className="w-full mt-auto mx-auto flex items-center justify-center">
        <button className="py-2.5 md:py-3 px-5 md:px-8 lg:px-[40px] rounded-[100px] bg-white text-white ">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

type ConsultationCardPropsType = {
  className?: string;
  imgUrl: string;
  badgeType?: "TOP_RATED";
  name: string;
  location: string;
  hourlyRate: string;
  jobExperience: string;
  rating: number;
  skills: string;
  children: React.ReactNode;
  showBadge: boolean;
};
const ConsultationCard = ({
  badgeType,
  children,
  hourlyRate,
  imgUrl,
  jobExperience,
  location,
  name,
  rating,
  skills,
  showBadge,
}: ConsultationCardPropsType) => {
  return (
    <div className="h-[438px] p-5 md:p-6 md:max-w-[340px] w-full flex flex-col gap-1 bg-[#FBFCFF] border border-[#005aff33] rounded-[20px]">
      <div className="w-full flex mb-5 items-start">
        <div className="mr-[14px] rounded-full w-[58px] h-[58px] relative p-[3px] border border-[#DDE3E7] flex items-center justify-center">
          <Image src={imgUrl} alt="Profile Image" width={58} height={58} />
          {showBadge ? (
            <span className="absolute -top-[1px] -left-[1px]">
              <TopRatedPlusSVG />
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="flex-grow flex flex-col justify-start">
          <p className="mb-0.5 text-base md:text-[18px] leading-[25px]">
            {name}
          </p>
          <div className="w-full flex ">
            <RoundedLocationSVG />{" "}
            <p className="text-[14px] text-[#525966]">{location}</p>
          </div>
        </div>
        <button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] ">
          <HeartSVG />
        </button>
      </div>

      {/* ====== body ======= */}
      <div className="w-full flex justify-between">
        <p className="flex items-center gap-1.5">
          <DollarSVG />{" "}
          <span className="text-base md:text-[18px] leading-[25px]">
            {hourlyRate}/hr
          </span>
        </p>

        <p className="flex items-center gap-1.5">
          <SmallSuitcaseSVG />{" "}
          <span className="text-base md:text-[18px] leading-[25px] lg:max-w-[270px]">
            {jobExperience}
          </span>
        </p>
        <p className="flex items-center gap-1.5">
          <RatingStarSVG />{" "}
          <span className="text-base md:text-[18px] leading-[25px]">
            {rating}
          </span>
        </p>
      </div>
      {/* ======= seperator ======== */}
      <span className="w-full h-[1px] block my-2.5 md:my-3 bg-[#DDE3E7]"></span>

      <div className="w-full text-[14px] md:text-[16px] leading_normal">
        {skills}
      </div>

      {/* ======= seperator ======== */}
      <span className="w-full h-[1px] block my-2.5 md:my-3 bg-[#DDE3E7]"></span>
      {children}

      <div className="w-full mt-auto">
        <button className="w-full py-2.5 md:py-3 px-5 md:px-8 lg:px-[40px] rounded-[100px] border border-[#005AFF] ">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

// type PropsType = {
//     className?: string;
//   };
const ProjectGoalCards = () => {
  return (
    <div className="w-full flex  gap-1 gap-y-5 flex-wrap 2xl:flex-nowrap items-center justify-between mb-10 xl:mb-11 2xl:mb-[60px]">
      {/* ========= Guided tour card ======== */}
      <GidedTour />
      <ConsultationCard
        showBadge={true}
        hourlyRate="40.00"
        imgUrl="/svgs/Project-goals-freelancer-profile-jobs-page.svg"
        jobExperience="7"
        location="Pakistan"
        name="Muhammad I."
        rating={4.91}
        skills="Senior UI UX Designer | Product Designer | SaaS | Figma"
        badgeType="TOP_RATED"
        className=""
        key="Profile card"
      >
        <p className="w-full text-[14px] md:text-[16px] leading_normal">
          My portfolio: zoie- <br />
          portfolio-2021.webflow.io 👋Hey, my <br /> name is Yicheng or people
          usually call <br /> me Zoie.
        </p>
      </ConsultationCard>
      <ConsultationCard
        showBadge={false}
        hourlyRate="40.00"
        imgUrl="/svgs/Project-goals-freelancer-profile-jobs-page.svg"
        jobExperience="7"
        location="Pakistan"
        name="Muhammad I."
        rating={4.91}
        skills="Senior UI UX Designer | Product Designer | SaaS | Figma"
        badgeType="TOP_RATED"
        className=""
        key="Profile card"
      >
        <p className="h-[74px] w-full text-[14px] md:text-[16px] leading_normal">
          Hi there. Thanks for stopping by! I am an award-winning Graphic
          Designer and Art Director with 5+ year...
        </p>
        {/* ======= seperator ======== */}
        <span className="w-full h-[1px] block my-2.5 md:my-3 bg-[#DDE3E7]"></span>
        <div className="w-full flex items-center gap-1">
          <VideoSVG />{" "}
          <span className="text-[14px] leading_normal text-[#005AFF]">
            100$ per 30minutes Zoom meeting
          </span>
        </div>
      </ConsultationCard>
      <ConsultationCard
        showBadge={true}
        hourlyRate="40.00"
        imgUrl="/svgs/Project-goals-freelancer-profile-jobs-page.svg"
        jobExperience="7"
        location="Pakistan"
        name="Muhammad I."
        rating={4.91}
        skills="Senior UI UX Designer | Product Designer | SaaS | Figma"
        badgeType="TOP_RATED"
        className=""
        key="Profile card"
      >
        I&apos;m a storyteller, designer, and University of
        Pennsylvania-educated, Amazon Web Services-certified
        {/* ======= seperator ======== */}
        <span className="w-full h-[1px] block my-2.5 md:my-3 bg-[#DDE3E7]"></span>
        <div className="w-full flex items-center gap-1">
          <VideoSVG />{" "}
          <span className="text-[14px] leading_normal text-[#005AFF]">
            100$ per 30minutes Zoom meeting
          </span>
        </div>
      </ConsultationCard>
      <button className="p-2.5 py-3 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] ml-2.5">
        <RightArrowLongSVG />
      </button>
    </div>
  );
};

//  ===== root component ======
const ProjectGoals = () => {
  return (
    <div className="w-full">
      <div className="w-full gap-y-5 lg:flex-nowrap flex-wrap flex items-center justify-between mb-10 xl:mb-11 2xl:mb-[60px]">
        <h3 className="text-[#30353E] text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px] ">
          Review your project’s goals with an expert, one-on-one
        </h3>
        <Link href="#" className="flex items-center gap-[18px] ">
          <span className=" text-[22px] md:text-[25px] lg:text-[27px] leading_normal text-[#005AFF]">
            Browse experts
          </span>{" "}
          <RightArrowLongSVG />
        </Link>
      </div>
      <ProjectGoalCards />
    </div>
  );
};

export default ProjectGoals;
