import Link from "next/link";
import EyeSVG from "./EyeSVG";
import HireListSVG from "./HireListSVG";
import RedirectChartSVG from "./RedirectChartSVG";
const ClientsJobsLinks = () => {
  const linkStyle =
    "flex items-center gap-[22px] text-[18px] md:text-[20px] lg:text-[22px] leading-[30px] md:leading-[35px] lg:leading-[40px] text-[#005AFF] ";
  return (
    <div className="w-full mb-6 lg:mb-[30px]">
      {/* ========== important links starts ========== */}
      <Link className={linkStyle} href="/job-post-review">
        <RedirectChartSVG />
        <span>Reuse posting</span>
      </Link>
      <Link className={linkStyle} href="/all-job-post">
        <EyeSVG />
        <span>View posting</span>
      </Link>
      <Link className={linkStyle} href="/all-hire">
        <HireListSVG />
        <span>View hires</span>
      </Link>
      {/* ========== important links starts ========== */}
    </div>
  );
};

export default ClientsJobsLinks;
