"use client";
import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { SET_EXPAND } from "@/Redux/Features/rootModyfier/Modyfier";
import { RootState } from "@/Redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type ListType = "START_DATE" | "END_DATE";
type ListItemType = {
  label: string;
  type: ListType;
};

const SortByDate = () => {
  const ACTIVE_KEY = "OPEN_ALL_JOB_POST_SHORT_BY_DATE";
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selected, setSelected] = useState<ListType>("START_DATE");

  //   ============= handlers ========
  const dispatch = useDispatch();

  const list: ListItemType[] = [
    {
      label: "Start date",
      type: "START_DATE",
    },
    {
      label: "End date",
      type: "END_DATE",
    },
  ];

  const filteredItem = list.find((item) => item.type === selected);

  return (
    <div className="job-scope-dropdown !p-0 !rounded-[10px] relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
        }}
        className={`flex items-center gap-4 justify-start !py-2 !px-2.5  md:!py-2.5 md:!px-[14px] ${
          EXPAND === ACTIVE_KEY && "pointer-events-none"
        }`}
      >
        <span className="pointer-events-none text-base md:text-[18px] leading-[25px]">
          {filteredItem?.label}
        </span>

        <DownArrowSVG
          className={`pointer-events-none ${
            EXPAND === ACTIVE_KEY && "rotate-180"
          }`}
        />
      </button>
      <ul
        className={`z-40 absolute flex flex-col gap-0.5 justify-between top-full w-full left-0 mt-0 h-auto max-h-0 overflow-hidden ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[9999px] mt-1 border bg-white border-[#0000001a] rounded-[10px] overflow-hidden"
        }`}
      >
        {list.map((item) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              setSelected(item.type);
            }}
            key={item.type}
            // ======== add some style based on selected ==========
            className={`pl-2.5  md:pl-[14px]  duration-200 cursor-pointer py-1.5 text-base md:text-[18px] leading-[25px] ${
              selected === item.type && ""
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortByDate;
