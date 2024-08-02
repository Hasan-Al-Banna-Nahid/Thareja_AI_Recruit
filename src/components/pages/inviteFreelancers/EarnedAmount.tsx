import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveEarnedAmount } from "@/Redux/Features/jobpost/InviteFreeLancersActiveStages";
import { setEarnedAmount } from "@/Redux/Features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/Redux/store";
import { earnedAmountItems } from "@/components/Layout/InviteFreeLancers";
import { useDispatch, useSelector } from "react-redux";

const EarnedAmount = () => {
  const dispatch = useDispatch();
  const activeEarnedAmount = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeEarnedAmount
  );
  return (
    <div className="p-5 bg-white w-full lg:max-w-[286px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
      <h3 className="mb-4 md:mb-5 text-[18px] md:text-[20px] lg:text-[22px] leading-normal">
        Earned amount
      </h3>
      <ul className="flex flex-col gap-[14px]">
        {earnedAmountItems.map((item, indx) => (
          <li
            key={indx}
            onClick={() => {
              dispatch(setActiveEarnedAmount(indx + 1));
              dispatch(setEarnedAmount(item));
            }}
            className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px] flex items-center gap-2.5 cursor-pointer"
          >
            <LinearGradientRoundedCheckbox
              active={activeEarnedAmount === indx + 1}
            />{" "}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EarnedAmount;
