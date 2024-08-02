import TopWarning from "@/components/shared/common/topWarning";
import Container from "@/components/shared/wrapper/Container";
import Image from "next/image";
import Link from "next/link";

const EmailVerificationPage = () => {
  return (
    <main className="relative w-full h-[100%] pb-[50px] md:pb-[100px] 2xl:pb-[178px] pt-[130px] lg:pt-[149px] px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[120px]">
      <Container className="w-full ai-page min-h-[100%] mx-auto">
        <TopWarning
          className="pb-[50px] md:pb-[60px] lg:pb-[80px]"
          warning="As part of our continued efforts to remain compliant with tax laws globally, please enter your Tax Identification Number here."
        />
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Image
            src="/svgs/verified-email.svg"
            width={140}
            height={144}
            alt="Card image"
            className="w-[100px] md:w-[120px] lg:w-[130px] xl:w-[140px] h-auto"
          />
          <h1 className="text-[30px] lg:text-[60px] tracking-[-1.8px] text-[#30353E]">
            Please verify your email
          </h1>
          <h4 className="mb-10 md:mb-[50px] lg:mb-[60px] w-full max-w-[969px] mx-auto text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]">
            We sent an email to dhiraj.thareja@gmail.com To verify please check
            your inbox and follow the links. For your safety, we may also need
            to verify your phone number.{" "}
          </h4>
          <button className="mb-3 py-2.5 md:py-3 px-5 md:px-8 lg:py-[16px] lg:px-[40px] rounded-[100px] text-white  bg-[#005AFF]">
            Send again
          </button>

          <Link
            href="#"
            className="text-[18px] md:text-[20px] leading-[25px] text-[#005AFF]"
          >
            Did’t receive email?{""}
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default EmailVerificationPage;
