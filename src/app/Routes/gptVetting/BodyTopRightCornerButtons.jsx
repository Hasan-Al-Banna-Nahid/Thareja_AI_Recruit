import React from "react";
import Image from "next/image";
import InfoCircleSVG from "@/app/../../public/svgs/Info-Circle.svg";
import VideoSquareSVG from "@/app/../../public/svgs/video-square.svg";
import SmsSVG from "@/app/../../public/svgs/sms.svg";
const BodyTopRightCornerButtons = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center">
        <button className="commonButton mx-2 gap-2 flex flex-row-reverse justify-between items-center">
          <Image src={InfoCircleSVG} />
          <h2>Customize Content</h2>
        </button>

        <button className="commonButton mx-2">Manage Access</button>
        <button className="commonButton mx-2 gap-2 flex flex-row-reverse justify-between items-center">
          <Image src={VideoSquareSVG} />
          <h2>Quick Demo</h2>
        </button>
        <button className="commonButtonForInviteCandidate gap-2 flex flex-row-reverse justify-between items-center">
          <Image src={SmsSVG} />
          <h2> Invite A Candidate</h2>
        </button>
      </div>
    </React.Fragment>
  );
};

export default BodyTopRightCornerButtons;
