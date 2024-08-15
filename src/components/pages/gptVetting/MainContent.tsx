"use client";

import React from "react";
import JobCard from "@/components/pages/allJobPost/JobCard";
import Container from "@/components/shared/wrapper/Container";

import "./Styles.css";
import MainHeader from "@/components/shared/header/MainHeader";
import InviteACandidateModal from "@/components/shared/modal/gptVettingInviteACandidateModal";
import { ToastContainer } from "react-toastify";
import BodyTopRightCornerButtons from "./BodyTopRightCornerButtons";
import ReportsTabs from "./ReportsTabs";
import Table from "./Table";
import Footer from "./Footer";

const MainContent: React.FC = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <Container className="mx-auto px-4 sm:px-6 lg:px-8">
        <ToastContainer />
        <JobCard className="mt-6 sm:mt-12 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-lg font-semibold">gpt-vetting</div>
            <BodyTopRightCornerButtons />
          </div>
          <ReportsTabs />
          <Table />
          <Footer />
        </JobCard>
      </Container>
      <InviteACandidateModal />
    </React.Fragment>
  );
};

export default MainContent;
