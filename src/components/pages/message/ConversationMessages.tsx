import Image from "next/image";
import { FileSVG } from "./Icons";

type PropsType = {
  messageList: (
    | {
        type: "TEXT";
        message: string;
        name?: undefined;
        size?: undefined;
      }
    | {
        type: "FILE";
        name: string;
        size: string;
        message?: undefined;
      }
  )[];
  imgUrl: string | null;
  name: string;
  messageDeliveryDate: string;
  messageDeliveryTime: string;
  imgAlt: string;
  status: "ACTIVE" | "INACTIVE";
};

export const OtherUsersMessage = (props: PropsType) => {
  return (
    <>
      <div className="w-full flex items-center my-5 gap-2.5">
        <span className="flex-grow h-[1px] bg-[#DDE3E7]"></span>
        <p className="text-[#A8B7C1] text-base md:text-[18px] leading-[25px]">
          {props.messageDeliveryDate}
        </p>
      </div>
      <div
        className={`mr-auto border border-[#005aff1a] cursor-pointer rounded-[20px] p-5 inline-flex items-start justify-between gap-2.5`}
      >
        <div className="relative w-full  max-w-[70px] md:max-w-[80px]">
          {props.imgUrl ? (
            <Image
              src={props.imgUrl}
              width={107}
              height={107}
              alt="Profile"
              className="p-1.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] border-[#01D18F]"
            />
          ) : (
            <div className="flex items-center justify-center bg-white p-1.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] border-[#01D18F]">
              <span className="text-[18px] md:text-[20px] lg:text-[21px] leading_normal text-[#525966]">
                {props.imgAlt}
              </span>
            </div>
          )}

          <span className="absolute z-50 right-1.5 bottom-1.5  lg:right-[5.84px] lg:bottom-[5.84px] w-4 h-4 md:w-[19.31px] md:h-[19.31px] rounded-full border-[1px] border-white bg-[#01D18F] "></span>
        </div>
        <div className="w-full max-w-[648px]">
          <div className="flex items-center gap-5 mb-2">
            <h5 className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
              {props.name}
            </h5>
            <p className="text-[14px] md:text-[16px]  leading_normal">
              {props.messageDeliveryTime}
            </p>
          </div>

          {/* ======  single text / file / emojy etc ====== */}
          <div className="w-full">
            {props.messageList.map((list, indx) => {
              if (list.type === "TEXT") {
                return (
                  <p
                    key={indx}
                    className="text-base md:text-[18px] leading-[25px] mb-2.5"
                  >
                    {list.message}
                  </p>
                );
              }
              // other condition goes here for emojy file image video etc.
              if (list.type === "FILE") {
                return (
                  <div
                    key={indx}
                    className="md:min-w-[300px] inline-flex items-center gap-[14px] p-2.5 rounded-[10px] bg-[#FBFCFF] border border-[#97BCFF]"
                  >
                    <div className="p-2.5 rounded-[6px]">
                      <FileSVG />
                    </div>
                    <div className="w-full">
                      <p className="text-base md:text-[18px] leading-[25px]">
                        {list.name}
                      </p>
                      <p className="text-[12px] md:text-[14px] leading_normal">
                        {list.size}
                      </p>
                    </div>
                  </div>
                );
              }
              return <></>;
            })}
          </div>
          {/* <p className="text-base md:text-[18px] leading-[25px] mb-[2px]">
            {list.lastMessage}
          </p> */}
        </div>
      </div>
    </>
  );
};

export const CurrentUsersMessage = (props: PropsType) => {
  return (
    <>
      <div className="w-full flex items-center gap-2.5 my-5">
        <p className="text-[#A8B7C1] text-base md:text-[18px] leading-[25px]">
          {props.messageDeliveryDate}
        </p>
        <span className="flex-grow h-[1px] bg-[#DDE3E7]"></span>
      </div>

      <div className="w-full flex justify-end">
        <div
          className={`border border-[#005aff1a] cursor-pointer rounded-[20px] p-5 inline-flex items-start justify-between gap-2.5`}
        >
          <div className="w-full flex flex-col items-end max-w-[648px]">
            <div className="flex items-center gap-5 mb-2">
              <p className="text-[14px] md:text-[16px]  leading_normal">
                {props.messageDeliveryTime}
              </p>
              <h5 className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
                {props.name}
              </h5>
            </div>

            {/* ======  single text / file / emojy etc ====== */}
            <div className="w-full flex flex-col items-end">
              {props.messageList.map((list, indx) => {
                if (list.type === "TEXT") {
                  return (
                    <p
                      key={indx}
                      className="text-base md:text-[18px] leading-[25px] mb-2.5"
                    >
                      {list.message}
                    </p>
                  );
                }
                // other condition goes here for emojy file image video etc.
                if (list.type === "FILE") {
                  return (
                    <div
                      key={indx}
                      className="md:min-w-[300px] flex items-center gap-[14px] p-2.5 rounded-[10px] bg-[#FBFCFF] border border-[#97BCFF]"
                    >
                      <div className="p-2.5 rounded-[6px]">
                        <FileSVG />
                      </div>
                      <div className="w-full">
                        <p className="text-base md:text-[18px] leading-[25px]">
                          {list.name}
                        </p>
                        <p className="text-[12px] md:text-[14px] leading_normal">
                          {list.size}
                        </p>
                      </div>
                    </div>
                  );
                }
                return <></>;
              })}
            </div>
            {/* <p className="text-base md:text-[18px] leading-[25px] mb-[2px]">
        {list.lastMessage}
      </p> */}
          </div>
          <div className="relative w-full  max-w-[70px] md:max-w-[80px]">
            {props.imgUrl ? (
              <Image
                src={props.imgUrl}
                width={107}
                height={107}
                alt="Profile"
                className="p-1.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] border-[#01D18F]"
              />
            ) : (
              <div className="flex items-center justify-center bg-white p-1.5 rounded-full w-[70px] md:w-[80px]  h-[70px] md:h-[80px] border-[2px] border-[#01D18F]">
                <span className="text-[18px] md:text-[20px] lg:text-[21px] leading_normal text-[#525966]">
                  {props.imgAlt}
                </span>
              </div>
            )}

            <span className="absolute z-50 right-1.5 bottom-1.5  lg:right-[5.84px] lg:bottom-[5.84px] w-4 h-4 md:w-[19.31px] md:h-[19.31px] rounded-full border-[1px] border-white bg-[#01D18F] "></span>
          </div>
        </div>
      </div>
    </>
  );
};
