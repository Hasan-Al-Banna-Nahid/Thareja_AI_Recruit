"use client";
import { ThreeDotSVG } from "@/components/shared/card/Icons";
import { CurrentUsersMessage, OtherUsersMessage } from "./ConversationMessages";
import {
  CalendarSVG,
  FileAttachmentSVG,
  GallerySVG,
  GearSVG,
  LargeSuitcaseSVG,
  MessageComboSVG,
  SendSVG,
  TextSVG,
  ViedoCameraSVG,
} from "./Icons";

const MessageInput = () => {
  return (
    <div className="w-full px-1">
      <div className="message-input-shadow w-full justify-between py-4 md:py-5 px-6 md:px-[30px] rounded-t-[20px] flex items-center">
        {/* ======= input for text message ===== */}
        <div className="flex items-center gap-[14px] w-full">
          <button className="p-2.5 rounded-full border border-[#A8B7C1]">
            <TextSVG />
          </button>
          <input
            type="text"
            placeholder="Send a message..."
            className="w-full text-[18px] md:text-[20px] leading-normal tracking-[0.4px] bg-transparent py-2 md:py-2.5 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* ========= CTA buttons ======= */}
        <div className="w-auto flex items-center gap-2.5">
          <button>
            <GearSVG />
          </button>
          <button>
            <GallerySVG />
          </button>
          <button>
            <FileAttachmentSVG />
          </button>
          <button>
            <SendSVG />
          </button>
        </div>
      </div>
    </div>
  );
};

// User to User conversation
const UTU_conversation = () => {
  return (
    <>
      <OtherUsersMessage
        imgAlt="Ali D"
        imgUrl="/img/profile/ali-d.svg"
        messageDeliveryDate="Monday 24, 2024"
        messageDeliveryTime="10:45PM"
        messageList={[
          {
            type: "TEXT",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate",
          },
        ]}
        name="Ali D."
        status="ACTIVE"
        key="Ali D."
      />
      <CurrentUsersMessage
        imgAlt="Ali D"
        imgUrl="/img/profile/ali-d.svg"
        messageDeliveryDate="Monday 24, 2024"
        messageDeliveryTime="11:00 PM"
        messageList={[
          {
            type: "TEXT",
            message: "Lorem ipsum dolor sit amet, consectetur",
          },
        ]}
        name="Ali D."
        status="ACTIVE"
        key="Ali D."
      />
      <OtherUsersMessage
        imgAlt="Ali D"
        imgUrl="/img/profile/ali-d.svg"
        messageDeliveryDate="Monday 24, 2024"
        messageDeliveryTime="10:45PM"
        messageList={[
          {
            type: "TEXT",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ]}
        name="Ali D."
        status="ACTIVE"
        key="Ali D."
      />
      <CurrentUsersMessage
        imgAlt="Ali D"
        imgUrl="/img/profile/ali-d.svg"
        messageDeliveryDate="Monday 24, 2024"
        messageDeliveryTime="11:00 PM"
        messageList={[
          {
            type: "TEXT",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ]}
        name="Ali D."
        status="ACTIVE"
        key="Ali D."
      />
      <OtherUsersMessage
        imgAlt="Ali D"
        imgUrl="/img/profile/ali-d.svg"
        messageDeliveryDate="Monday 24, 2024"
        messageDeliveryTime="10:45PM"
        messageList={[
          {
            type: "TEXT",
            message: "Lorem ipsum dolor sit amet,",
          },
        ]}
        name="Ali D."
        status="ACTIVE"
        key="Ali D."
      />
      <CurrentUsersMessage
        imgAlt="Ali D"
        imgUrl="/img/profile/ali-d.svg"
        messageDeliveryDate="Monday 24, 2024"
        messageDeliveryTime="11:00 PM"
        messageList={[
          {
            type: "TEXT",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ]}
        name="Ali D."
        status="ACTIVE"
        key="Ali D."
      />
    </>
  );
};

const GroupedConversation = () => {
  return (
    <>
      <div className="flex items-center gap-10 flex-wrap h-auto px-5 md:px-6 lg:px-[30px] py-3 mb-10 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-[132px]">
        <h2 className="w-auto text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px]">
          Recruit Events
        </h2>
        <div className="inline-flex flex-col md:flex-row gap-3 md:gap-1 items-start flex-grow md:items-center md:justify-between">
          <p className="flex items-center gap-3">
            <LargeSuitcaseSVG />
            <span className="text-[18px] md:text-[20px] lg:text-[22px] leading-[25px]">
              ABC Technologies LLP
            </span>
          </p>
          <div className="flex items-center [9px] justify-end">
            <button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF]">
              <ViedoCameraSVG />
            </button>
            <button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF]">
              <CalendarSVG />
            </button>
            <button className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF]">
              <MessageComboSVG />
            </button>
          </div>
        </div>
      </div>

      {/* ========== group message =========== */}
      <OtherUsersMessage
        imgAlt="Muhammad I"
        imgUrl="/img/profile/muhammad-i.svg"
        messageDeliveryDate="Monday 24, 2024"
        messageDeliveryTime="11:00 PM"
        messageList={[
          {
            type: "TEXT",
            message: "Thanks for the invitation!",
          },
          {
            type: "TEXT",
            message: "",
          },
          {
            type: "TEXT",
            message: " Let’s discuss your requirement in detail!",
          },
          {
            type: "TEXT",
            message: "",
          },
          {
            type: "TEXT",
            message: "Best Regards",
          },
          {
            type: "TEXT",
            message: "Muhammad.",
          },
          {
            type: "FILE",
            name: "20230502_Recruit",
            size: "15kb",
          },
        ]}
        name="Ali D."
        status="ACTIVE"
        key="Ali D."
      />
      <OtherUsersMessage
        imgAlt="AD"
        imgUrl={null}
        messageDeliveryDate="Monday 24, 2024"
        messageDeliveryTime="11:00 PM"
        messageList={[
          {
            type: "TEXT",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
          },
          {
            type: "FILE",
            name: "20230502_Recruit",
            size: "15kb",
          },
        ]}
        name="Ali D."
        status="ACTIVE"
        key="Ali D."
      />
      <CurrentUsersMessage
        imgAlt="Ali D."
        imgUrl="/img/profile/ali-d.svg"
        messageDeliveryDate="Monday 24, 2024"
        messageDeliveryTime="11:00 PM"
        messageList={[
          {
            type: "TEXT",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
        ]}
        name="Ali D."
        status="ACTIVE"
        key="Ali D."
      />
    </>
  );
};

// =============== root component ================

import { BackWardArrowSVG } from "@/components/shared/modal/Icons";
import { setShowPeopleMessage } from "@/Redux/Features/message/MessageActiveStages";
import { SET_EXPAND } from "@/Redux/Features/rootModyfier/Modyfier";
import { RootState } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
const Conversation = () => {
  const dispatch = useDispatch();
  const active = useSelector(
    (state: RootState) => state.messageActiveStages.conversationType
  );
  const showPeopleMessage = useSelector(
    (state: RootState) => state.messageActiveStages.showPeopleMessage
  );
  const userProfileDrawerOpenKey = "OPEN_MESSAGE_USER_PROFILE_DRAWER";
  return (
    <div
      className={`w-full duration-500 px-5 absolute top-0 left-0 translate-x-[110%] lg:translate-x-0 lg:relative flex flex-col 2xl:max-w-[828px] h-full overflow-y-auto ${
        showPeopleMessage && "translate-x-0"
      }`}
    >
      <div className="w-full  mb-5 2xl:hidden flex justify-between lg:justify-end">
        <button
          className="lg:hidden"
          onClick={() => dispatch(setShowPeopleMessage(false))}
        >
          <BackWardArrowSVG className="" />
        </button>
        <button
          onClick={() => dispatch(SET_EXPAND(userProfileDrawerOpenKey))}
          className="p-2.5 rounded-full bg-gradient-to-r to-[#FAFCFF] from-[#E1E5FF]"
        >
          <ThreeDotSVG className="rotate-90" />
        </button>
      </div>
      <div className="custom_scrollbar conversation_message_custom_scrollbar w-full flex-grow overflow-y-auto pb-5 px-5">
        {active === "DUAL" ? <UTU_conversation /> : <GroupedConversation />}
      </div>
      <MessageInput />
    </div>
  );
};

export default Conversation;
