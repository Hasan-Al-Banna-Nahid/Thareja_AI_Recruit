const skillLists = [
  "Wireframing",
  "User Experience Design",
  "Web Design",
  "Prototyping",
  "Mockup",
  "User Flow",
  "User Interface Design",
  "Mobile App Design",
  "Interaction Design",
  "Responsive Design",
  "Flinto",
  "Framer",
  "IPhone UI Design",
  "Marvel App",
  "Mobile App Redesign",
  "MockFlow",
  "Principle for Mac",
  "Product Backlog",
  "Product Roadmap",
];

const Skill = ({ text }: { text: string }) => {
  return (
    <p className="border border-[#0000000f] bg-[#005aff08] text-base md:text-[18px] leading-[25px] py-1.5 md:py-2 px-3 md:px-4 rounded-[20px]  ">
      {text}
    </p>
  );
};

// ========== root component ==========
const AllSkills = () => {
  return (
    <div className="w-full">
      <h2 className="text-[28px] md:text-[30px] lg:text-[34px] leading_normal tracking-[-1.02px] text-[#005AFF] mb-5">
        Skills
      </h2>
      <div className="flex items-start gap-[14px] flex-wrap">
        <Skill text="Wireframing" />
        {skillLists.map((skill, indx) => (
          <Skill text={skill} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
