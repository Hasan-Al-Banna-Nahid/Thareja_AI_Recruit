"use client";
import { setPostReviewActiveEditField } from "@/Redux/Features/jobpost/JobReviewSlice";
import { RootState } from "@/Redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditBudget from "./EditBudget";
import EditPenSVG from "./EditPenSVG";
import ReviewPostFieldModal from "./ReviewPostFieldModal";

const ReviewBudget = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.jobReviews.reviewActiveEditField
  );
  const budgetType = useSelector(
    (state: RootState) => state.jobPosting.jobBudgetType
  );
  const selectedBudget = useSelector(
    (state: RootState) => state.jobPosting.jobBudget
  );
  const [budget, setBudget] = useState<string | null>(null);

  useEffect(() => {
    console.log(selectedBudget, budgetType);
    if (!selectedBudget) return;
    if (budgetType === "FIXED") {
      setBudget(`$${selectedBudget}`);
    } else {
      console.log(selectedBudget);
      const budgetArray = selectedBudget.split(" - ");
      const formatedbudget = `$${budgetArray[0]} - $${budgetArray[1]} /hr`;
      setBudget(formatedbudget);
    }
  }, [selectedBudget, budgetType]);
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div className="">
          <h6 className="text-[22px] text-[#30353E]">Budget</h6>
          <p className="text-lg text-[#525966] ">
            {budget ? budget : "Add budget"}
          </p>
        </div>

        <button
          onClick={() => dispatch(setPostReviewActiveEditField("BUDGET"))}
          className="text-[#005AFF] border border-[#005AFF] rounded-full flex items-center justify-center w-10 h-10"
        >
          <EditPenSVG />
        </button>
      </div>
      {activeModal === "BUDGET" && (
        <ReviewPostFieldModal>
          <EditBudget />
        </ReviewPostFieldModal>
      )}
    </>
  );
};

export default ReviewBudget;
