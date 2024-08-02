import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveLastActivity } from "@/Redux/Features/jobpost/InviteFreeLancersActiveStages";
import { setLastActivity } from "@/Redux/Features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/Redux/store";
import { lastActivityItems } from "@/components/Layout/InviteFreeLancers";
import { useDispatch, useSelector } from "react-redux";

const LastActivity = () => {
  const dispatch = useDispatch();
  const activeLastActivity = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeLastActivity
  );
  return (
    <div className="w-full">
      {/*  ============= last activity =========== */}
      <div className="p-5 bg-white w-full md:max-w-[245px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
        <h3 className="mb-4 md:mb-5 text-[18px] md:text-[20px] lg:text-[22px] leading-normal">
          Last Activity
        </h3>
        <ul className="flex flex-col gap-[14px]">
          {lastActivityItems.map((item, indx) => (
            <li
              key={indx}
              onClick={() => {
                dispatch(setActiveLastActivity(indx + 1));
                dispatch(setLastActivity(item));
              }}
              className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px] flex items-center gap-2.5 cursor-pointer"
            >
              <LinearGradientRoundedCheckbox
                active={activeLastActivity === indx + 1}
              />{" "}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ============= all category Dropdown  =========== */}
      <div></div>
    </div>
  );
};

export default LastActivity;
