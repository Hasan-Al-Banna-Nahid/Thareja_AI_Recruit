"use client";
import { setPostReviewActiveEditField } from "@/Redux/Features/jobpost/JobReviewSlice";
import { RootState } from "@/Redux/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import EditTitleField from "./EditTitleField";
import ReviewPostFieldModal from "./ReviewPostFieldModal";

const ReviewTitle = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.jobPosting.title);
  const activeModal = useSelector(
    (state: RootState) => state.jobReviews.reviewActiveEditField
  );

  return (
    <>
      <div className="px-3 md:px-12 flex items-center justify-between flex-wrap gap-6">
        <h3 className="text-2xl md:text-4xl tracking-[-1.8px] max-w-[80%]">
          {title ? title : "Add title"}
        </h3>
        <button
          onClick={() => dispatch(setPostReviewActiveEditField("TITLE"))}
          className="text-[#005AFF] border border-[#005AFF] rounded-full flex items-center justify-center w-10 h-10"
        >
          <Image
            className=""
            src={"/svgs/edit-pen.svg"}
            width={21}
            height={21}
            alt=""
          />
        </button>
      </div>
      {activeModal === "TITLE" && (
        <ReviewPostFieldModal>
          <EditTitleField />
        </ReviewPostFieldModal>
      )}
    </>
  );
};

export default ReviewTitle;
