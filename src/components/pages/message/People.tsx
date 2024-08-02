"use client";
import {
  setConversationType,
  setSelectedList,
  setShowPeopleMessage,
} from "@/Redux/Features/message/MessageActiveStages";
import { RootState } from "@/Redux/store";
import { messageLists } from "@/components/Layout/Message";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { FilterSVG, SmallSearchSVG, ThreeDotSVG } from "./Icons";

const SearchBar = () => {
  return (
    <div className="flex items-center  w-full gap-4 md:gap-5 mb-4 md:mb-5 lg:mb-[28px]">
      <div className="flex items-center gap-5 w-full border border-[#A8B7C1] px-5 rounded-[100px] focus:border-[#005AFF]">
        <SmallSearchSVG />
        <input
          type="text"
          placeholder="Search"
          className="w-full text-[18px] md:text-[20px] leading-normal tracking-[0.4px] bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button className="text-[#005AFF] ">
        <FilterSVG />
      </button>
    </div>
  );
};

export type MessageCardPropsType = {
  id: number;
  imgUrl: string | null;
  name: string;
  skill: string;
  lastMessage: string;
  messageDeliveryDate: string; // it could be date. Then have to calculate the day
  imgAlt: string;
  status: "ACTIVE" | "INACTIVE";
  isGrouped: boolean;
};

const MessageCard = ({ list }: { list: MessageCardPropsType }) => {
  const showPeopleMessage = useSelector(
    (state: RootState) => state.messageActiveStages.showPeopleMessage
  );
  const activeList = useSelector(
    (state: RootState) => state.messageActiveStages.selectedList
  );

  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setSelectedList(list.id));
        dispatch(setShowPeopleMessage(true));
        dispatch(setConversationType(list.isGrouped ? "GROUP" : "DUAL"));
      }}
      className={`cursor-pointer w-full rounded-[20px] px-2 md:px-[18px] py-6 flex items-center justify-between gap-2.5 ${
        activeList === list.id && "bg-[#005AFF] text-white"
      }`}
    >
      <div className="relative w-full max-w-[70px] md:max-w-[80px]">
        {list.imgUrl ? (
          <div
            className={`p-1.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] ${
              list.status === "ACTIVE"
                ? "border-[#01D18F] "
                : "border-transparent"
            }`}
          >
            <Image
              src={list.imgUrl}
              width={107}
              height={107}
              alt="Profile"
              className="w-full h-full bg-[#DDE3E7] rounded-full"
            />
          </div>
        ) : (
          <div
            className={`p-1.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] flex items-center justify-center bg-[#DDE3E7] ${
              list.status === "ACTIVE"
                ? "border-[#01D18F] "
                : "border-transparent"
            }`}
          >
            <span className="text-[18px] md:text-[20px] lg:text-[21px] leading_normal text-[#525966]">
              {list.imgAlt}
            </span>
          </div>
        )}

        <span
          className={`absolute z-50 right-1.5 bottom-1.5  lg:right-[5.84px] lg:bottom-[5.84px] w-4 h-4 md:w-[19.31px] md:h-[19.31px] rounded-full border-[1px] border-white ${
            list.status === "ACTIVE" ? "bg-[#01D18F]" : "bg-[#DDE3E7]"
          } `}
        ></span>
      </div>
      <div className="w-full lg:max-w-[306px]">
        <div className="flex items-center gap-1 justify-between">
          <h5 className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
            {list.name}
          </h5>
          <p className="text-base md:text-[18px] leading-[25px] mb-2">9/6/24</p>
        </div>
        <p className="text-base md:text-[18px] leading-[25px] mb-[2px]">
          {list.skill}
        </p>
        <p className="text-base md:text-[18px] leading-[25px] mb-[2px]">
          {list.lastMessage}
        </p>
      </div>
    </div>
  );
};

const PeopleListAndMessage = () => {
  return (
    <div className="w-full flex-grow  py-5 pr-1 bg-[#005aff0a] rounded-[30px] h-full overflow-hidden">
      <div className="custom_scrollbar w-full  px-5 pr-4 rounded-[30px]  h-full overflow-y-auto">
        {messageLists.map((list) => (
          <MessageCard key={list.id} list={list} />
        ))}
      </div>
    </div>
  );
};

const PeopleComponentContent = () => {
  return (
    <div className="w-full lg:max-w-[442px] h-full flex flex-col">
      <div className="w-full h-auto">
        <div className="w-full flex items-center gap-1 justify-between mb-5 md:mb-6 lg:mb-[30px]">
          <h1 className="text-[30px] lg:text-[60px] tracking-[-1.8px] text-[#30353E]">
            Messages
          </h1>
          <button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF] ">
            <ThreeDotSVG />
          </button>
        </div>
        <SearchBar />
      </div>
      <PeopleListAndMessage />
    </div>
  );
};

//  ========== root component =============
const People = () => {
  const showPeopleMessage = useSelector(
    (state: RootState) => state.messageActiveStages.showPeopleMessage
  );

  return (
    <div
      className={` w-full px-5 2xl:px-0 h-full duration-500 flex z-[999]  lg:max-w-[445px] bg-white lg:bg-transparent rounded-[30px] lg:translate-x-0 absolute top-0 right-0  lg:relative ${
        showPeopleMessage && "translate-x-[-110%]"
      }`}
    >
      {/* <div className="w-full max-w-[442px] h-full max-h-[85vh]"> */}
      <PeopleComponentContent />
    </div>
  );
};

export default People;
