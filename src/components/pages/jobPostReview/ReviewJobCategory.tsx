"use client";
import { setPostReviewActiveEditField } from "@/Redux/Features/jobpost/JobReviewSlice";
import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import EditCategory from "./EditCategory";
import EditPenSVG from "./EditPenSVG";
import ReviewPostFieldModal from "./ReviewPostFieldModal";

const ReviewJobCategory = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.jobReviews.reviewActiveEditField
  );
  const category = useSelector(
    (state: RootState) => state.jobPosting.jobCategory
  );
  return (
    <>
      <div className="flex items-center justify-between w-full flex-wrap gap-2 md:gap-6">
        <div className="w-full max-w-[80%] ">
          <h6 className="text-[22px] text-[#30353E]">Category</h6>
          <p className="text-lg text-[#525966] ">{category}</p>
        </div>

        <button
          onClick={() => dispatch(setPostReviewActiveEditField("CATEGORY"))}
          className="text-[#005AFF]  border border-[#005AFF] rounded-full flex items-center justify-center w-10 h-10"
        >
          <EditPenSVG />
        </button>
      </div>
      {activeModal === "CATEGORY" && (
        <ReviewPostFieldModal>
          <EditCategory />
        </ReviewPostFieldModal>
      )}
    </>
  );
};

export default ReviewJobCategory;
