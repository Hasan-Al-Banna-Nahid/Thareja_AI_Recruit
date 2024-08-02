import LinearGradientRoundedCheckbox from "@/components/shared/common/LinearGradientRoundedCheckbox";
import { setActiveCategory } from "@/Redux/Features/jobpost/InviteFreeLancersActiveStages";
import { setCategory } from "@/Redux/Features/jobpost/InviteFreeLancersFilteres";
import { RootState } from "@/Redux/store";
import { categoryItems } from "@/components/Layout/InviteFreeLancers";
import { useDispatch, useSelector } from "react-redux";

const Category = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.inviteFreelancersActiveStages.activeCategory
  );

  return (
    <div className="p-5 bg-white w-full md:max-w-[370px] md:p-6 lg:p-7 rounded-[12px] border border-[#005aff24]">
      <h3 className="mb-4 md:mb-5 text-[18px] md:text-[20px] lg:text-[22px] leading-normal">
        Category
      </h3>
      <ul className="flex flex-col gap-[14px]">
        {categoryItems.map((item, indx) => (
          <li
            key={indx}
            onClick={() => {
              dispatch(setActiveCategory(indx + 1));
              dispatch(setCategory(item));
            }}
            className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px] flex items-center gap-2.5 cursor-pointer"
          >
            <LinearGradientRoundedCheckbox
              active={activeCategory === indx + 1}
            />{" "}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
