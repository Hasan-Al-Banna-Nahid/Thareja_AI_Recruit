"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import arrowRight from "@/app/../../public/svgs/vuesax/linear/arrow-right.svg";
import Image from "next/image";

const SkillsForm = () => {
  const [skills, setSkills] = useState<{ skill: string; expertise: string }[]>(
    []
  );
  const router = useRouter();

  const handleAddSkill = () => {
    setSkills([...skills, { skill: "", expertise: "" }]);
  };

  const handleChange = (
    index: number,
    field: "skill" | "expertise",
    value: string
  ) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can send skills data to an API or handle it as needed
    console.log("Submitted skills:", skills);
    // Navigate to the next page or show a success message
    router.push("/Routes/gptVetting/CandidateInterview/Test"); // Assuming '/test' is the next page
  };

  return (
    <div>
      <div>
        <h2 className="text-center text-[34px]">Add your Top Skills</h2>
        <p className="text-center text-[20px]">
          Add your top skills and make sure to accurately rate yourself on each
          skill. Choose specific skills (e.g., React, Node.js, QuickBooks,
          Project Management, etc.)
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="mx-auto my-8 grid grid-cols-2 justify-center items-center w-[900px] gap-12"
          >
            <div className="flex flex-col">
              <label className="text-[20px]" htmlFor={`skill-${index}`}>
                Enter Your Main Skills
              </label>
              <input
                type="text"
                id={`skill-${index}`}
                placeholder="Skill"
                className="w-[400px] p-[16px] rounded-[8px] border-[#A8B7C1] border-[2px]"
                value={skill.skill}
                onChange={(e) => handleChange(index, "skill", e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor={`expertise-${index}`} className="text-[20px]">
                Rate Yourself
              </label>
              <select
                id={`expertise-${index}`}
                onChange={(e) =>
                  handleChange(index, "expertise", e.target.value)
                }
                className="w-[400px] p-[16px] rounded-[8px] border-[#A8B7C1] border-[2px]"
                value={skill.expertise}
                required
              >
                <option value="">Select Expertise</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>
        ))}
        <p className="text-center text-[20px]">
          Please note that this test is timed, with an approximate collection of
          2 minutes per question and the timer will start as soon as you see the
          question.
        </p>
        <div className="flex flex-col w-[900px] mx-auto gap-6">
          <button
            type="button"
            className="btn link link-primary"
            onClick={handleAddSkill}
          >
            Add Skill +
          </button>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="rounded-[100px] border-[1px] bg-[#005AFF] py-[16px] px-[20px] text-center text-white"
            >
              Start Test
            </button>
            <Image src={arrowRight} alt="arrow" width={10} height={10} />
          </div>
          <p className="text-center text-[20px]">
            Note: please do not refresh the page or you’ll lose the data.
          </p>
        </div>
      </form>
    </div>
  );
};

export default SkillsForm;
