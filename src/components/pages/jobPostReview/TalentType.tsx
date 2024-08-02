import DownArrowSVG from "@/components/shared/header/DownArrowSVG";
import { SET_EXPAND } from "@/Redux/Features/rootModyfier/Modyfier";
import { RootState } from "@/Redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const data: string[] = ["No preference", "Independent", "Agency"];
const TalentType = () => {
  const dispatch = useDispatch();
  const ACTIVE_KEY =
    "JOB_POST_REVIEW_ADVANCED_PREFERENCES_TALEN_TYPE_DROP_DOWN";
  // =============== Initial states ========
  const EXPAND = useSelector((state: RootState) => state.modyfier.EXPAND);
  const [selected, setSelected] = useState<string | null>("No preference");
  return (
    <div className="w-full max-w-[248px]">
      <h4 className="jobpost-details-label">Talent type</h4>
      <div
        onClick={(e) => {
          e.stopPropagation();
          dispatch(SET_EXPAND(EXPAND !== ACTIVE_KEY ? ACTIVE_KEY : null));
        }}
        className={`bg-white border rounded-[8px] py-2 px-2 border-[#0000001a] cursor-pointer flex items-center gap-4 justify-between ${
          EXPAND === ACTIVE_KEY && "pointer-events-none"
        }`}
      >
        {
          <h5 className="text-base w-[80%]">
            {selected ? selected : "Select"}
          </h5>
        }
        <DownArrowSVG
          className={`duration-300 !w-[24px] ${
            EXPAND === ACTIVE_KEY && "rotate-180"
          }`}
        />
      </div>
      <ul
        className={`bg-white rounded-[10px] overflow-hidden  mt-1 h-auto max-h-0 ${
          EXPAND === ACTIVE_KEY &&
          "!max-h-[9999px] my-5 shadow border border-[#0000001a]"
        }`}
      >
        {data.map((item) => (
          <li
            className={`cursor-pointer py-1.5 px-5 block my-0.5 ${
              selected === item && "bg-[#005AFF] text-white"
            }`}
            onClick={() => setSelected(item)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TalentType;
