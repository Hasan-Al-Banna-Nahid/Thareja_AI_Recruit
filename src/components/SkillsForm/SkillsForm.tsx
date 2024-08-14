"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import arrowRight from "@/app/../../public/svgs/vuesax/linear/arrow-right.svg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSkills } from "@/Redux/Features/GptVettilngSlice/examSlice"; // Import the action
import MicTestModal from "../shared/modal/MicTestModal";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const SkillsForm: React.FC = () => {
  const [skills, setSkillsState] = useState<
    { skill: string; expertise: string }[]
  >([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddSkill = () => {
    setSkillsState([...skills, { skill: "", expertise: "" }]);
  };

  const handleChange = (
    index: number,
    field: "skill" | "expertise",
    value: string
  ) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkillsState(newSkills);
  };

  const handleOpenModal = (e: React.FormEvent) => {
    e.preventDefault();
    // Open the modal instead of navigating away
    setModalOpen(true);
  };

  const handleModalSubmit = () => {
    // Dispatch skills data to Redux store
    dispatch(setSkills(skills));
    // Close modal and navigate to the next page
    setModalOpen(false);
    router.push("/Routes/gptVetting/CandidateInterview/Test");
  };

  return (
    <div>
      <div>
        <h2 className="text-center text-[30px] my-6">Add your Top Skills</h2>
        <p className="text-center my-6">
          Add your top skills and make sure to accurately rate yourself on each
          skill. Choose specific skills (e.g., React, Node.js, QuickBooks,
          Project Management, etc.)
        </p>
      </div>
      <form onSubmit={handleOpenModal}>
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

        <div className="flex flex-col w-[900px] mx-auto gap-6">
          <button
            type="button"
            className="btn link link-primary"
            onClick={handleAddSkill}
          >
            Add Skill +
          </button>
          <p className="text-center my-6">
            Please note that this test is timed, with an approximate collection
            of 2 minutes per question and the timer will start as soon as you
            see the question.
          </p>
          {/* */}
          <div className="flex justify-center items-center">
            <Link
              href={"/Routes/gptVetting/CandidateInterview/MicTest"}
              className="flex justify-center items-center gap-2 rounded-[100px] border-[1px] bg-[#005AFF] py-[16px] px-[20px] text-center text-white"
            >
              <button type="submit" className="">
                Start Test
              </button>
              <FaArrowRight />
            </Link>
          </div>
          <p className="text-center text-[20px]">
            Note: please do not refresh the page or you’ll lose the data.
          </p>
          <p className="text-center">
            Powered by{" "}
            <span className="link link-primary no-underline">Recruit</span>
          </p>
        </div>
      </form>

      {isModalOpen && (
        <MicTestModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleModalSubmit}
        />
      )}
    </div>
  );
};

export default SkillsForm;
