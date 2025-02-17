import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { setJobPostJobDuration } from "@/Redux/Features/jobpost/jobPostSlice";
import {
  setActiveJobDuration,
  setActiveJobScope,
} from "@/Redux/Features/jobpost/jobPostSteps";
import { RootState } from "@/Redux/store";
import { jobDuration } from "@/components/Layout/JobPost";
import { useDispatch, useSelector } from "react-redux";
import ActiveCheckboxSVG from "./ActiveCheckboxSVG";
import InActiveCheckboxSVG from "./InActiveCheckboxSVG";

const JobDuration = () => {
  const activeDropDown = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobScope
  );
  const activeJobDuration = useSelector(
    (state: RootState) => state.jobPostingStages.activeJobDuration
  );
  const filteredItem = jobDuration.find(
    (item) => item.type === activeJobDuration
  );
  const dispatch = useDispatch();
  const expand = activeDropDown === "JOB_DURATION";
  console.log(activeJobDuration);
  return (
    <div className={`job-scope-dropdown ${expand && "bg-[#005aff05]"}`}>
      <div
        onClick={() =>
          dispatch(setActiveJobScope(expand ? null : "JOB_DURATION"))
        }
        className="cursor-pointer flex items-center gap-4 justify-between"
      >
        {
          <h4 className="jobpost-details-label">
            {expand ? "How long will your work take?" : filteredItem?.label}
          </h4>
        }
        <DownArrowSVG className={`  ${expand && "rotate-180"}`} />
      </div>
      <div
        className={` flex flex-col gap-[28px] mt-0 h-auto max-h-0 overflow-hidden ${
          expand && "!max-h-[9999px] pt-[28px]"
        }`}
      >
        {jobDuration.map((item) => (
          <div className="flex items-center gap-[10px]" key={item.type}>
            {activeJobDuration === item.type ? (
              <button>
                <ActiveCheckboxSVG />
              </button>
            ) : (
              <button
                onClick={() => {
                  dispatch(setJobPostJobDuration(item.label));
                  dispatch(setActiveJobDuration(item.type));
                }}
              >
                <InActiveCheckboxSVG />
              </button>
            )}
            <h5 className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px]">
              {item.label}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDuration;
