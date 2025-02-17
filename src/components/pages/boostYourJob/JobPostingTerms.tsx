import Image from "next/image";
import Link from "next/link";
import { CheckMarkBlue24 } from "./Icons";

const JobPostingTerms = () => {
  return (
    <>
      <div className="w-full flex items-center gap-6 mb-6 md:mb-7 lg:mb-8 2x:mb-10">
        <Image
          src="/svgs/boost-your-job-document-writing.svg"
          width={114}
          height={114}
          alt="Document Icon"
        />
        <div className="flex-grow">
          <h3 className="mb-2 text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]">
            Boost your job
          </h3>
          <Link
            className="underline text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#005AFF]"
            href="#"
          >
            Learn more
          </Link>
        </div>
      </div>
      <ul className="w-full flex flex-col gap-4">
        <li className="flex items-center gap-5 md:gap-[25px]">
          <CheckMarkBlue24 className="min-w-[20px] md:min-w-[24px]" />{" "}
          <span className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
            Invite more talent. Send extra invites for your featured job.
          </span>
        </li>
        <li className="flex items-center gap-5 md:gap-[25px]">
          <CheckMarkBlue24 className="min-w-[20px] md:min-w-[24px]" />{" "}
          <span className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
            Boost your job post. Talent will see your post at the top of their
            job searches.
          </span>
        </li>
        <li className="flex items-center gap-5 md:gap-[25px]">
          <CheckMarkBlue24 className="min-w-[20px] md:min-w-[24px]" />{" "}
          <span className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
            Attract the best. Top Rated talent get special discounts to work on
            Featured jobs.
          </span>
        </li>
      </ul>
    </>
  );
};

export default JobPostingTerms;
