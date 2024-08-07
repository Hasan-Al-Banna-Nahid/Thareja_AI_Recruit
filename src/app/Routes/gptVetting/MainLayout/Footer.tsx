"use client";

import React, { useState } from "react";
import JobsPagination from "@/components/shared/pagination/JobsPagination";

interface JobsPaginationProps {
  currentPage: number;
  totalPage: number;
  setCurrentPage: (page: number) => void;
}

const Footer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 10; // Example total page count, adjust as needed

  return (
    <React.Fragment>
      <div className=" flex justify-center items-center gap-6">
        <div>
          <JobsPagination
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
