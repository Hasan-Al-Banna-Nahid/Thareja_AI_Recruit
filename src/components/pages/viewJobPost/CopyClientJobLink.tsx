"use client";

import { toast } from "react-toastify";

const CopyClientJobLink = () => {
  const textToCopy = "https://www.Recruit.com/jobs/~01a6b2754649a76e5d";
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("copy successful");
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        toast.error("couldn't copy the link");
        console.error("Failed to copy text: ", err);
      });
  };
  return (
    <>
      <p
        className={`overflow-hidden mb-2 py-3 md:py-2.5 px-[18px] md:px-5 rounded-[8px] bg-[#dde3e766] text-[#525966cc] text-base md:text-[18px] leading-[25px]`}
      >
        https://www.Recruit.com/jobs/~...
        {/* https://www.Recruit.com/jobs/~01a6b2754649a76e5d */}
      </p>

      <button
        onClick={copyToClipboard}
        className="text-[#005AFF] mb-2 text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px]"
      >
        Copy link
      </button>
    </>
  );
};

export default CopyClientJobLink;
