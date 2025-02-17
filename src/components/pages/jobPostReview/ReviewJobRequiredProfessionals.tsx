"use client";
import { setPostReviewActiveEditField } from "@/Redux/Features/jobpost/JobReviewSlice";
import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import EditJobRequiredProfessionals from "./EditJobRequiredProfessionals";
import EditPenSVG from "./EditPenSVG";
import ReviewPostFieldModal from "./ReviewPostFieldModal";

const ReviewJobRequiredProfessionals = () => {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.jobReviews.reviewActiveEditField
  );
  const requiredProfessionals = useSelector(
    (state: RootState) => state.jobPosting.requiredProfessionals
  );
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div className="w-full max-w-[70%]">
          <h6 className="text-[22px] text-[#30353E]">
            Professional needed (optional)
          </h6>
          <p className="text-lg text-[#525966] ">{requiredProfessionals}</p>
        </div>

        <button
          onClick={() => {
            dispatch(setPostReviewActiveEditField("REQUIRED_PROFESSIONAL"));
          }}
          className="text-[#005AFF] border border-[#005AFF] rounded-full flex items-center justify-center w-10 h-10"
        >
          <EditPenSVG />
        </button>
      </div>
      {activeModal === "REQUIRED_PROFESSIONAL" && (
        <ReviewPostFieldModal>
          <EditJobRequiredProfessionals />
        </ReviewPostFieldModal>
      )}
    </>
  );
};

export default ReviewJobRequiredProfessionals;
