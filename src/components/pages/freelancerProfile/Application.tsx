"use client";
import { setActiveInviteModal } from "@/Redux/Features/jobpost/InviteFreeLancersActiveStages";
import { useDispatch } from "react-redux";

// ===== root component =======
const Application = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h3 className="mb-1 text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]">
        Applicant
      </h3>
      <p className="text-base md:text-[18px] leading-[25px]">
        Muhammad has applied to or been invited to your company’s job for UX/UI
        Designer.
      </p>
      {/*  ========= seperator ================  */}
      <span className="w-full h-[1px] block my-6 md:my-8 lg:my-[38px] bg-[#0059ff33]"></span>
      <h3 className="mb-1 text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]">
        Get a second opinion
      </h3>
      <p className="text-base md:text-[18px] leading-[25px] mb-1">
        Invite coworkers to help you review freelancers
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setActiveInviteModal(true));
        }}
        className="text-[18px] md:text-[20px] leading-[25px] py-1.5 px-5 rounded-[100px] border border-[#005AFF] text-[#005AFF]"
      >
        Invite
      </button>

      {/*  ========= seperator ================  */}
      <span className="w-full h-[1px] block my-6 md:my-8 lg:my-[38px] bg-[#0059ff33]"></span>
      <h3 className="mb-1 text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]">
        Rate increases
      </h3>
      <p className="text-base md:text-[18px] leading-[25px] mb-1">None</p>
    </>
  );
};

export default Application;
