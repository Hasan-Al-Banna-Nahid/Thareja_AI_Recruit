import { Dispatch, SetStateAction } from "react";
type PropsType = {
  checked: boolean;
  setSendTipsEmails: Dispatch<SetStateAction<boolean>>;
};
const MessageCheckBox = ({ setSendTipsEmails, checked }: PropsType) => {
  return (
    <>
      {checked ? (
        <svg
          onClick={() => setSendTipsEmails(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          className="cursor-pointer w-[20px] min-w-[20px] lg:min-w-[24px] h-[20px] lg:w-[24px] lg:h-[24px]"
        >
          <path
            d="M21 0C9.45 0 0 9.45 0 21C0 32.55 9.45 42 21 42C32.55 42 42 32.55 42 21C42 9.45 32.55 0 21 0ZM30.03 15.96L20.37 28.56C19.95 28.98 19.32 29.4 18.69 29.4C18.06 29.4 17.43 29.19 17.01 28.56L11.97 22.05C11.34 21.21 11.34 19.74 12.39 19.11C13.44 18.48 14.7 18.48 15.33 19.53L18.69 23.94L26.67 13.44C27.3 12.6 28.77 12.39 29.61 13.02C30.66 13.65 30.66 14.91 30.03 15.96Z"
            fill="#005AFF"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          className="cursor-pointer w-[20px] min-w-[20px] lg:min-w-[24px] h-[20px] lg:w-[24px] lg:h-[24px]"
          onClick={() => setSendTipsEmails(true)}
        >
          <circle cx="21" cy="21" r="20" stroke="#A8B7C1" stroke-width="2" />
        </svg>
      )}
    </>
  );
};

export default MessageCheckBox;
