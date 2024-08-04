"use client";
import React, { useState } from "react";
import Link from "next/link";
const ReportsTabs = () => {
  const [activeTab, setActiveTab] = useState("Report");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <React.Fragment>
      <div className="flex gap-4 items-center my-4">
        <hr />
        <Link
          href={"/"}
          onClick={() => handleTabClick("Report")}
          className={`${
            activeTab === "Report" &&
            "text-[#005AFF] underline border-b-2 border-[#005AFF] "
          }`}
        >
          Report
        </Link>
        <Link
          href={"/"}
          onClick={() => handleTabClick("Connected")}
          className={`${
            activeTab === "Connected" &&
            "text-[#005AFF] underline border-b-2 border-[#005AFF] hover:cursor-pointer"
          }`}
        >
          Connected(3)
        </Link>
        <Link
          href={"/"}
          onClick={() => handleTabClick("Archived")}
          className={`${
            activeTab === "Archived" &&
            "text-[#005AFF] underline border-b-2 border-[#005AFF] hover:cursor-pointer"
          }`}
        >
          Archived(0)
        </Link>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default ReportsTabs;
