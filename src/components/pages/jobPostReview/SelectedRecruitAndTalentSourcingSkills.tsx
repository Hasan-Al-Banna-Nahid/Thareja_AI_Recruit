"use client";
import { setJobPostIndustrialSkills } from "@/Redux/Features/jobpost/jobPostSlice";
import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import XmarkSVG from "../getStartedWithoutAi/XmarkSVG";

const SelectedRecruitAndTalentSourcingSkills = () => {
  const dispatch = useDispatch();
  const selectedSkills = useSelector(
    (state: RootState) => state.jobPosting.recruitingAndTalendSourcingSkills
  );
  //   const prevSelectedSkills = useSelector(
  //     (state: RootState) => state.jobPosting.recruitingAndTalendSourcingSkills
  //   );
  const handleRemove = (skill: string) => {
    dispatch(
      setJobPostIndustrialSkills(
        selectedSkills.filter((item) => item !== skill)
      )
    );
  };

  if (!selectedSkills.length) return <></>;
  return (
    <>
      <p className="text-xl">Selected skills</p>
      <div className="selected-skills flex gap-[12px] pt-[20px] flex-wrap mb-[28px]">
        {selectedSkills.map((skill) => (
          <button
            onClick={() => handleRemove(skill)}
            key={skill}
            className="skillsBtnActive"
          >
            <span>{skill}</span>
            <XmarkSVG />
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectedRecruitAndTalentSourcingSkills;
