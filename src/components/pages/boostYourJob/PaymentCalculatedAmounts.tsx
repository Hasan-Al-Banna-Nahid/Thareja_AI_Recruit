const PaymentCalculatedAmounts = () => {
  return (
    <div className="w-full flex flex-col gap-[13px]">
      <div className="w-full flex items-center justify-between">
        <p className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
          Subtotal
        </p>
        <span className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
          $<span>29.99</span>
        </span>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
          Estimated taxes
        </p>
        <span className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
          <span>--</span>
        </span>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
          Estimated total
        </p>
        <span className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
          <span>--</span>
        </span>
      </div>
    </div>
  );
};

export default PaymentCalculatedAmounts;
