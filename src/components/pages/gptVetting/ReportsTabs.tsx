"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/../Redux/store";
import { setActiveTab } from "@/Redux/Features/GptVettilngSlice/tabsSlice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { IoCloudDownloadSharp } from "react-icons/io5";
import ReportDownloadModal from "./ReportDownload";

const ReportsTabs: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeTab = useSelector((state: RootState) => state.tabs.activeTab);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTabClick = (tab: string) => {
    dispatch(setActiveTab(tab));
  };

  const handleDownloadReport = () => {
    const reportContent = document.getElementById("reportContent");

    if (reportContent) {
      html2canvas(reportContent, { backgroundColor: null }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("report.pdf");
      });
    }
  };

  const handleArchiveReport = (reportId: string) => {
    console.log(`Archiving report with id: ${reportId}`);
    // Archive logic here
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4 items-center my-4">
        <Link
          href="#report"
          onClick={() => handleTabClick("Report")}
          className={`${
            activeTab === "Report" &&
            "text-[#005AFF] border-b-2 border-[#005AFF]"
          }`}
        >
          Report
        </Link>
        <Link
          href="#connected"
          onClick={() => handleTabClick("Connected")}
          className={`${
            activeTab === "Connected" &&
            "text-[#005AFF] border-b-2 border-[#005AFF]"
          }`}
        >
          Connected(3)
        </Link>
        <Link
          href="#archived"
          onClick={() => handleTabClick("Archived")}
          className={`${
            activeTab === "Archived" &&
            "text-[#005AFF] border-b-2 border-[#005AFF]"
          }`}
        >
          Archived(0)
        </Link>
      </div>
      <hr className="flex-grow" />

      {activeTab === "Connected" && (
        <div>
          <div className="flex flex-wrap justify-end my-4 gap-2">
            <button
              className="link link-primary no-underline flex items-center gap-2"
              onClick={openModal}
            >
              <IoCloudDownloadSharp />
              <span>Preview and Download Report</span>
            </button>
            <button
              className="link link-error no-underline"
              onClick={() => handleArchiveReport("report-id-123")}
            >
              Archive
            </button>
          </div>
          <div id="reportContent" className="hidden">
            {/* Report content for download */}
          </div>
        </div>
      )}

      <ReportDownloadModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onDownload={handleDownloadReport}
      >
        <div id="reportPreview" className="p-4">
          {/* Reuse the report content here for preview */}
          {/* Example content */}
          <div className="border-b border-gray-300 mb-4">
            <h3 className="text-lg font-semibold">Report Title</h3>
            <p>Report details...</p>
          </div>
        </div>
      </ReportDownloadModal>
    </React.Fragment>
  );
};

export default ReportsTabs;
