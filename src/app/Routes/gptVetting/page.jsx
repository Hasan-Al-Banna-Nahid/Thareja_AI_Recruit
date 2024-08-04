import JobCard from "@/components/pages/allJobPost/JobCard";
import React from "react";
import Container from "@/components/shared/wrapper/Container";
import "./Styles.css";
import BodyTopRightCornerButtons from "@/app/Routes/gptVetting/BodyTopRightCornerButtons";
import ReportTabs from "@/app/Routes/gptVetting/ReportsTabs";
import Table from "@/app/Routes/gptVetting/Table";
import MainHeader from "@/components/shared/header/MainHeader";
const Page = () => {
  return (
    <React.Fragment>
      <Container className="mx-auto">
        <MainHeader />
        <JobCard>
          <div className="flex justify-between items-center">
            <div>gpt-vetting</div>
            <BodyTopRightCornerButtons />
          </div>
          <ReportTabs />
          <Table />
        </JobCard>
      </Container>
    </React.Fragment>
  );
};

export default Page;
