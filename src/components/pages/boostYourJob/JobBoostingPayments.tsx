"use client";
import { RoundGradientActiveInactiveSVG } from "@/components/shared/icons/Icons";
import { useState } from "react";
import { PayPalSVG } from "./Icons";

type PaymentMethodsType = "PAYPAL" | "CARD" | null;
const JobBoostingPayments = () => {
  const [paymentMethods, setPaymentMethods] =
    useState<PaymentMethodsType>(null);

  return (
    <div className="w-full">
      <p
        onClick={() => setPaymentMethods("CARD")}
        className="w-full flex mb-2.5 items-center"
      >
        <RoundGradientActiveInactiveSVG
          className="mr-5 min-w-[24px]"
          active={paymentMethods === "CARD"}
        />
        <span>
          <span className="inline mr-5 text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
            Payment card
          </span>
          <span className="inline text-base md:text-[18px] leading-[25px]">
            Visa, Mastercard, American Express, Discover, Diners
          </span>
        </span>
      </p>
      <p onClick={() => setPaymentMethods("PAYPAL")} className="w-full">
        <RoundGradientActiveInactiveSVG
          className="float-left mr-5 mt-[7px] inline-block min-w-[24px]"
          active={paymentMethods === "PAYPAL"}
        />
        <PayPalSVG />
      </p>
    </div>
  );
};

export default JobBoostingPayments;
