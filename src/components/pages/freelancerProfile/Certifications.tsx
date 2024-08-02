import { CertificateSVG } from "./Icons";

const Card = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-center gap-3 md:gap-[30px] ">
      <CertificateSVG />
      <div>
        <p className="text-[22px] md:text-[25px] lg:text-[27px] leading-[35px] md:leading-[40px]">
          Foundations of User Experience (UX) Design
        </p>
        <p className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px] my-2.5">
          Provider: Google
        </p>
        <p className="text-[18px] md:text-[20px] leading-normal tracking-[0.4px]">
          Issued: April 2022
        </p>

        <button className="text-[#005AFF] mt-6 md:mt-7 lg:mt-[30px] text-[18px] md:text-[20px] leading-normal tracking-[0.4px]">
          Show description
        </button>
      </div>
    </div>
  );
};

//  ============= root component =================
const Certifications = () => {
  return (
    <div className="mt-10 md:mt-[50px] w-full  p-5 py-6 md:p-[40px] lg:p-[50px] border border-[#005aff08 ] rounded-[20px] ">
      <h2 className="text-[32px] md:text-[text-36px] lg:text-[40px] leading_normal tracking-[-1.2px] ">
        Certifications
      </h2>
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33]"></span>
      <Card />
      {/* ========== seperator ============= */}
      <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33]"></span>
      <Card />
    </div>
  );
};

export default Certifications;
