"use client";

import React from "react";
import JobCard from "@/components/pages/allJobPost/JobCard";
import Container from "@/components/shared/wrapper/Container";
import BodyTopRightCornerButtons from "@/app/Routes/gptVetting/MainLayout/BodyTopRightCornerButtons";
import ReportTabs from "@/app/Routes/gptVetting/MainLayout/ReportsTabs";
import Table from "@/app/Routes/gptVetting/MainLayout/Table";
import Footer from "@/app/Routes/gptVetting/MainLayout/Footer";
import "../Styles.css";
import MainHeader from "@/components/shared/header/MainHeader";
import InviteACandidateModal from "@/components/shared/modal/gptVettingInviteACandidateModal";
import { ToastContainer } from "react-toastify";

const MainContent: React.FC = () => {
  return (
    <React.Fragment>
      <MainHeader />
      <Container className="mx-auto">
        <ToastContainer />
        <JobCard className="mt-24">
          <div className="flex justify-between items-center">
            <div>gpt-vetting</div>
            <BodyTopRightCornerButtons />
          </div>
          <ReportTabs />
          <Table />
          <Footer />
        </JobCard>
      </Container>
      <InviteACandidateModal />
    </React.Fragment>
  );
};

export default MainContent;
