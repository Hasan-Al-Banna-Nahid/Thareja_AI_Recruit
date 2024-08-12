import Image from "next/image";
import React from "react";
import profile from "@/../public/img/freelancer-profile.png";
const HeaderWithNameAndProfile: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 my-6">
        <div>
          <h2 className="link link-primary text-[22px] no-underline">
            Recruit
          </h2>
        </div>
        <div>
          <Image
            src={profile}
            alt="profile"
            className="rounded-[50px] w-[40px] h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderWithNameAndProfile;
