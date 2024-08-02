import Link from "next/link";

type PropsType = {
  label: string;
  listStyle?: string;
  linkStyle?: string;
  href: string;
};
const FooterLink = ({ label, linkStyle, listStyle, href }: PropsType) => {
  return (
    <li className={listStyle}>
      <Link
        className={`text-[18px] md:text-[20px] leading-normal tracking-[0.4px] text-[#F8F9FA] ${linkStyle}`}
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};

export default FooterLink;
