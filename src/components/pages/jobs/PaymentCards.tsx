import Image from "next/image";
import { CreditCardSVG } from "./PaymentIcons";

const PaymentCards = () => {
  return (
    <div className="full flex lg:justify-between gap-5 justify-evenly  gap-y-5 flex-wrap lg:flex-nowrap">
      <div className="w-full rounded-[20px] max-w-[464px] p-[1px]  bg-gradient-to-r to-[#005AFF] from-[#01D18F]">
        <div className="p-5 bg-white md:p-6 rounded-[19px]">
          <CreditCardSVG />
          <div className="w-full mt-5 md:mt-8 lg:mt-10">
            <p className="mb-2.5 text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px] leading_normal">
              Payments
            </p>
            <h3 className="text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]">
              Everything you need to know about payments
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[346px] rounded-[20px] max-w-[464px] p-[1px]  bg-gradient-to-r to-[#005AFF] from-[#01D18F]">
        <div className="p-5 bg-white md:p-6 rounded-[19px] w-full h-full">
          <Image
            src="/svgs/Debit-card.svg"
            alt="payment card icon"
            width={140}
            height={140}
          />

          <div className="w-full mt-5 md:mt-8 lg:mt-10">
            <p className="mb-2.5 text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px] leading_normal">
              Payments
            </p>
          </div>
        </div>
      </div>
      <div className="w-full  min-h-[346px] rounded-[20px] max-w-[464px] p-[1px]  bg-gradient-to-r to-[#005AFF] from-[#01D18F]">
        <div className="p-5 w-full h-full bg-white md:p-6 rounded-[19px]">
          <Image
            src="/svgs/lego-man-site-ground.svg"
            alt="Community  icon"
            width={152}
            height={163}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentCards;
