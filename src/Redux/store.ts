// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import MainHeaderSlice from "./Features/hambergerMenuSlice.ts/mainHeaderSlice";
import AllJobPostActiveStages from "./Features/jobpost/AllJobPostActiveStages";
import allJobPostSlice from "./Features/jobpost/AllJobPostSlice";
import HireFreelancersActiveStages from "./Features/jobpost/HireFreelancersActiveStages";
import InviteFreeLancersActiveStages from "./Features/jobpost/InviteFreeLancersActiveStages";
import jobReviewStepsSlice from "./Features/jobpost/JobReviewSlice";
import ReviewProposalsActiveStages from "./Features/jobpost/ReviewProposalsActiveStages";
import jobPostingSlice from "./Features/jobpost/jobPostSlice";
import jobPostingStepsSlice from "./Features/jobpost/jobPostSteps";
import MessageActiveStages from "./Features/message/MessageActiveStages";
import FreelancerProfileActiveStages from "./Features/profile/FreelancerProfileActiveStages";
import Modyfier from "./Features/rootModyfier/Modyfier";
import tabsSlice from "@/Redux/Features/GptVettilngSlice/tabsSlice";
import modalReducer from "./Features/GptVettilngSlice/modalSlice";
import candidateFormReducer from "./Features/GptVettilngSlice/candidateFormSlice";

export const store = configureStore({
  reducer: {
    jobPosting: jobPostingSlice.reducer,
    allJobPost: allJobPostSlice.reducer,
    allJobPostActiveStages: AllJobPostActiveStages.reducer,
    inviteFreelancersActiveStages: InviteFreeLancersActiveStages.reducer,
    reviewJobProposalsActiveStages: ReviewProposalsActiveStages.reducer,
    jobPostingStages: jobPostingStepsSlice.reducer,
    jobReviews: jobReviewStepsSlice.reducer,
    headerMenus: MainHeaderSlice.reducer,
    modyfier: Modyfier.reducer,
    freelancerProfileActiveStages: FreelancerProfileActiveStages.reducer,
    hireFreelancersActiveStages: HireFreelancersActiveStages.reducer,
    messageActiveStages: MessageActiveStages.reducer,
    tabs: tabsSlice,
    modalSlice: modalReducer,
    candidateForm: candidateFormReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
