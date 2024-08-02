import JobBoostingPayments from "@/components/pages/boostYourJob/JobBoostingPayments";
import JobPostingTerms from "@/components/pages/boostYourJob/JobPostingTerms";
import PaymentCalculatedAmounts from "@/components/pages/boostYourJob/PaymentCalculatedAmounts";
import PaymentConfirmButton from "@/components/pages/boostYourJob/PaymentConfirmButton";
import Container from "@/components/shared/wrapper/Container";
import Link from "next/link";

// .w-full.flex.items-center.justify-between

const BoostYourJobPage = () => {
  return (
    <main className="relative text-[#30353E] w-full h-[100%] pb-[50px] md:pb-[100px] 2xl:pb-[178px]  pt-[130px] lg:pt-[160px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]">
      <Container className="w-full min-h-[100%] mx-auto">
        <h1 className="mb-5 text-[30px] lg:text-[60px] tracking-[-1.8px] text-[#30353E]">
          Boost your job
        </h1>
        <Link
          href="#"
          className="text-[18px] md:text-[20px] lg:text-[22px] leading_normal underline text-[#005AFF]"
        >
          Back
        </Link>
        <div className="flex flex-col lg:flex-row p-8 2xl:p-10 gap-[30px] w-full mt-6 md:mt-8 lg:mt-10 xl:mt-11 2xl:mt-15 bg-[#005aff05] rounded-[30px] border border-[#005aff1f]">
          <div className="w-full">
            <h3 className="text-[28px] md:text-[30px] lg:text-[34px] leading_normal tracking-[-1.02px] mb-5 md:mb-8 lg:mb-[42px]">
              Add a billing method
            </h3>
            <JobBoostingPayments />
          </div>
          <div className=" w-full lg:pl-10 2xl:pl-[50px] lg:border-l lg:border-[#DDE3E7] ">
            <JobPostingTerms />

            {/* ==== seperator ======== */}
            <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#A8B7C1]"></span>
            <PaymentCalculatedAmounts />
            {/* ==== seperator ======== */}
            <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#A8B7C1]"></span>
            <p className="mb-6 md:mb-7 lg:mb-[30px] px-[23px] text-[18px] md:text-[20px] lg:text-[22px] leading_normal">
              Learn about{" "}
              <Link href="#" className="text-[#005AFF]">
                fees
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#005AFF]">
                estimated taxes
              </Link>
            </p>
            <PaymentConfirmButton />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default BoostYourJobPage;
