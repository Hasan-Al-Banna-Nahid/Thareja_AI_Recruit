import React from "react";
import { IoCloudDownloadSharp } from "react-icons/io5";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onDownload: () => void;
  children: React.ReactNode;
}

const ReportDownloadModal: React.FC<ModalProps> = ({
  isVisible,
  onClose,
  onDownload,
  children,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-6">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4 mt-4">
          <h2 className="text-lg font-bold">Report Preview</h2>
          <button onClick={onClose} className="text-red-500">
            &times;
          </button>
        </div>
        <div className="mb-4 overflow-y-auto max-h-96">{children}</div>
        <div className="flex justify-end">
          <button
            onClick={onDownload}
            className="link link-error no-underline flex justify-center items-center gap-2"
          >
            <IoCloudDownloadSharp />
            <span>Download Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportDownloadModal;
