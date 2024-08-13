import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/../Redux/store";
import { setActiveTab } from "@/Redux/Features/GptVettilngSlice/tabsSlice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { IoCloudDownloadSharp } from "react-icons/io5";
import Modal from "./Modal"; // Import the Modal component
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
      <div className="flex gap-4 items-center my-4">
        <hr />
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
            "text-[#005AFF] border-b-2 border-[#005AFF] hover:cursor-pointer"
          }`}
        >
          Connected(3)
        </Link>
        <Link
          href="#archived"
          onClick={() => handleTabClick("Archived")}
          className={`${
            activeTab === "Archived" &&
            "text-[#005AFF] border-b-2 border-[#005AFF] hover:cursor-pointer"
          }`}
        >
          Archived(0)
        </Link>
      </div>
      <hr />

      {activeTab === "Connected" && (
        <div>
          <div className="flex justify-end my-4">
            <button
              className="link link-primary no-underline mr-2 flex items-center gap-2"
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
          <div id="reportContent" style={{ padding: "20px", display: "none" }}>
            <div
              style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}
            >
              <h1 style={{ color: "#005AFF" }}>Report</h1>
              <p>
                <strong>Report id:</strong> 004559
              </p>
              <p>
                <strong>Date:</strong> 02 Aug, 2023
              </p>
              <p>
                <strong>Name:</strong> Ali
              </p>
              <p>
                <strong>Email:</strong> thareja@recruit.ai
              </p>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <h2 style={{ color: "#005AFF" }}>Node.Js</h2>
              <p>
                <strong>Self rating:</strong> Intermediate
              </p>
              <p>
                <strong>AI assessment:</strong>
              </p>
              <p>Lorem ipsum dolor sit amet...</p>
              <p style={{ color: "red" }}>
                <strong>Rating by AI:</strong> Not experienced
              </p>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <h2 style={{ color: "#005AFF" }}>React.Js</h2>
              <p>
                <strong>Self rating:</strong> Beginner
              </p>
              <p>
                <strong>AI assessment:</strong>
              </p>
              <p>Lorem ipsum dolor sit amet...</p>
              <p style={{ color: "orange" }}>
                <strong>Rating by AI:</strong> Junior
              </p>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <h2 style={{ color: "#005AFF" }}>Python</h2>
              <p>
                <strong>Self rating:</strong> Expert
              </p>
              <p>
                <strong>AI assessment:</strong>
              </p>
              <p>Lorem ipsum dolor sit amet...</p>
              <p style={{ color: "green" }}>
                <strong>Rating by AI:</strong> Expert
              </p>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <h2 style={{ color: "#005AFF" }}>Product Management</h2>
              <p>
                <strong>Self rating:</strong> Beginner
              </p>
              <p>
                <strong>AI assessment:</strong>
              </p>
              <p>Lorem ipsum dolor sit amet...</p>
              <p style={{ color: "orange" }}>
                <strong>Rating by AI:</strong> Junior
              </p>
            </div>

            <div style={{ borderTop: "1px solid #ccc", marginTop: "10px" }}>
              <h2 style={{ color: "#005AFF" }}>Soft Skills Result</h2>
              <div style={{ marginBottom: "10px" }}>
                <h3>Communication</h3>
                <p>Lorem ipsum dolor sit amet...</p>
                <p style={{ color: "orange" }}>
                  <strong>Rating by AI:</strong> Below average
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <ReportDownloadModal
        isVisible={isModalVisible}
        onClose={closeModal}
        onDownload={handleDownloadReport}
      >
        <div id="reportPreview" style={{ padding: "20px" }}>
          {/* Reuse the report content here for preview */}
          <div style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
            <h1 style={{ color: "#005AFF" }}>Report</h1>
            <p>
              <strong>Report id:</strong> 004559
            </p>
            <p>
              <strong>Date:</strong> 02 Aug, 2023
            </p>
            <p>
              <strong>Name:</strong> Ali
            </p>
            <p>
              <strong>Email:</strong> thareja@recruit.ai
            </p>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <h2 style={{ color: "#005AFF" }}>Node.Js</h2>
            <p>
              <strong>Self rating:</strong> Intermediate
            </p>
            <p>
              <strong>AI assessment:</strong>
            </p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p style={{ color: "red" }}>
              <strong>Rating by AI:</strong> Not experienced
            </p>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <h2 style={{ color: "#005AFF" }}>React.Js</h2>
            <p>
              <strong>Self rating:</strong> Beginner
            </p>
            <p>
              <strong>AI assessment:</strong>
            </p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p style={{ color: "orange" }}>
              <strong>Rating by AI:</strong> Junior
            </p>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <h2 style={{ color: "#005AFF" }}>Python</h2>
            <p>
              <strong>Self rating:</strong> Expert
            </p>
            <p>
              <strong>AI assessment:</strong>
            </p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p style={{ color: "green" }}>
              <strong>Rating by AI:</strong> Expert
            </p>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <h2 style={{ color: "#005AFF" }}>Product Management</h2>
            <p>
              <strong>Self rating:</strong> Beginner
            </p>
            <p>
              <strong>AI assessment:</strong>
            </p>
            <p>Lorem ipsum dolor sit amet...</p>
            <p style={{ color: "orange" }}>
              <strong>Rating by AI:</strong> Junior
            </p>
          </div>

          <div style={{ borderTop: "1px solid #ccc", marginTop: "10px" }}>
            <h2 style={{ color: "#005AFF" }}>Soft Skills Result</h2>
            <div style={{ marginBottom: "10px" }}>
              <h3>Communication</h3>
              <p>Lorem ipsum dolor sit amet...</p>
              <p style={{ color: "orange" }}>
                <strong>Rating by AI:</strong> Below average
              </p>
            </div>
          </div>
        </div>
      </ReportDownloadModal>
    </React.Fragment>
  );
};

export default ReportsTabs;
