import React from "react";

type PropsType = {
  className?: string;
  largeText: string;
  smallText: string;
  children: React.ReactNode;
};

const JobScheduleCard = ({
  children,
  largeText,
  smallText,
  className,
}: PropsType) => {
  return (
    <div
      className={`flex gap-[14px] p-3 md:p-4 rounded-[10px] border border-[#DDE3E7]  ${className}`}
    >
      {children}
      <div>
        <h3 className="text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px]">
          {largeText}
        </h3>
        <p className="text-[12px] leading-normal tracking-[0.24px]">
          {smallText}
        </p>
      </div>
    </div>
  );
};

export default JobScheduleCard;
