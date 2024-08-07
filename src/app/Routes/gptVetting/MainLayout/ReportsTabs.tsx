// components/ReportsTabs.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/../Redux/store";
import { setActiveTab } from "@/Redux/Features/GptVettilngSlice/tabsSlice";

const ReportsTabs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeTab = useSelector((state: RootState) => state.tabs.activeTab);

  const handleTabClick = (tab: string) => {
    dispatch(setActiveTab(tab));
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
            "text-[#005AFF]  border-b-2 border-[#005AFF] "
          }`}
        >
          Report
        </Link>
        <Link
          href={"/"}
          onClick={() => handleTabClick("Connected")}
          className={`${
            activeTab === "Connected" &&
            "text-[#005AFF]  border-b-2 border-[#005AFF] hover:cursor-pointer"
          }`}
        >
          Connected(3)
        </Link>
        <Link
          href={"/"}
          onClick={() => handleTabClick("Archived")}
          className={`${
            activeTab === "Archived" &&
            "text-[#005AFF]  border-b-2 border-[#005AFF] hover:cursor-pointer"
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
