import Image from "next/image";
import React from "react";
import profile from "@/../public/img/freelancer-profile.png";

const HeaderWithNameAndProfile: React.FC = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div>
          <h2 className="link link-primary text-lg sm:text-xl lg:text-2xl font-semibold no-underline">
            Recruit
          </h2>
        </div>
        <div>
          <Image
            src={profile}
            alt="profile"
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderWithNameAndProfile;
