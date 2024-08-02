import {
  resetAdvancedFilters,
  setExpandAdvancedFilter,
} from "@/Redux/Features/jobpost/InviteFreeLancersActiveStages";
import { useDispatch } from "react-redux";
import { CancelSVG } from "./Icons";

const FiltersConfirmationHandlers = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-full  gap-5 flex items-center mt-[41px]">
      <button
        onClick={() => {
          dispatch(setExpandAdvancedFilter(false));
        }}
        className="bg-[#005AFF] text-white text-[18px] md:text-[20px] leading-normal tracking-[0.4px] py-2.5 md:py-[13px] px-5 rounded-[100px]"
      >
        Apply filters
      </button>
      <button
        onClick={() => {
          dispatch(resetAdvancedFilters("RESET"));
          dispatch(setExpandAdvancedFilter(false));
        }}
        className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px] gap-[14px] py-2.5 md:py-[13px] px-5 rounded-[100px] border border-[#005AFF] flex items-center text-[#005AFF]"
      >
        {" "}
        <CancelSVG /> <span>Clear all filters</span>
      </button>
    </div>
  );
};

export default FiltersConfirmationHandlers;
