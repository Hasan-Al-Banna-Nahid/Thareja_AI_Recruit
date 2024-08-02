import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveHourlyRate } from "@/Redux/Features/jobpost/InviteFreeLancersActiveStages";
import { setHourlyRate } from "@/Redux/Features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/Redux/store";
import { hourlyRateItems } from "@/components/Layout/InviteFreeLancers";
import { useDispatch, useSelector } from "react-redux";

const HourlyRate = () => {
  const dispatch = useDispatch();
  const activeHourlyRate = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeHourlyRate
  );
  return (
    <div className="p-5 bg-white w-full md:max-w-[249px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
      <h3 className="mb-4 md:mb-5 text-[18px] md:text-[20px] lg:text-[22px] leading-normal">
        Hourly Rate
      </h3>
      <ul className="flex flex-col gap-[14px]">
        {hourlyRateItems.map((item, indx) => (
          <li
            key={indx}
            onClick={() => {
              dispatch(setActiveHourlyRate(indx + 1));
              dispatch(setHourlyRate(item));
            }}
            className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px] flex items-center gap-2.5 cursor-pointer"
          >
            <LinearGradientRoundedCheckbox
              active={activeHourlyRate === indx + 1}
            />{" "}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HourlyRate;
