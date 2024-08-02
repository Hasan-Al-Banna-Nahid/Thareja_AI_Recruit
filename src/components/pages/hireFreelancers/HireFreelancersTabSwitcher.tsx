"use client";
import { setActiveTabBtn } from "@/Redux/Features/jobpost/HireFreelancersActiveStages";
import { RootState } from "@/Redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type ItemType = "OFFERS" | "HIRED";
type Item = {
  label: string;
  Key: ItemType;
  notification: number;
};

const dropDownItems: Item[] = [
  {
    label: "Offers",
    Key: "OFFERS",
    notification: 0,
  },
  {
    label: "Hired",
    Key: "HIRED",
    notification: 1,
  },
];

const HireFreelancersTabSwitcher = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.hireFreelancersActiveStages.activeTabBtn
  );

  // drop down toggler
  //   const ACTIVE_KEY = "OPEN_REVIEW_PROPOSALS_TAB_SWITCHER";
  // =============== Initial states ========
  //   const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);

  const [selected, setSelected] = useState<ItemType>("OFFERS");

  //   ======= handelars ========
  return (
    <div className="w-full flex justify-start relative my-5 md:my-6 lg:my-7">
      <div className="w-auto bg-white h-full z-20">
        <button
          onClick={() => dispatch(setActiveTabBtn("OFFERS"))}
          className={` border-b text-[18px] leading-[25px] ${
            active === "OFFERS"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] pr-2.5"
          }`}
        >
          Offers
        </button>
      </div>
      <div className="w-auto bg-white z-20">
        <button
          onClick={() => dispatch(setActiveTabBtn("HIRED"))}
          className={` border-b text-[18px] leading-[25px] ${
            active === "HIRED"
              ? "text-[#005AFF] border-[#005AFF] mx-1"
              : "border-[#A8B7C1] pl-2.5"
          }`}
        >
          Hired (1)
        </button>
      </div>
      <div className="border-b z-10 border-[#A8B7C1] w-full h-1 absolute bottom-0 left-0"></div>
    </div>
  );
};

export default HireFreelancersTabSwitcher;
