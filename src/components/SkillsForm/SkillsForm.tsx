"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSkills } from "@/Redux/Features/GptVettilngSlice/examSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowRight } from "react-icons/fa6";
import MicVideoScreenModal from "../Data-Display/micTestModal";

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
    e.preventDefault(); // Prevent form submission
    setModalOpen(true);
  };

  const handleModalSubmit = () => {
    dispatch(setSkills(skills));
    setModalOpen(false);
    setTimeout(() => {
      router.push("/gpt-vetting/exam"); // Redirect after closing the modal
    }, 300); // Small delay to ensure modal is fully closed
  };

  return (
    <div className={`relative ${isModalOpen ? "opacity-75" : "opacity-100"}`}>
      <div className="container mx-auto px-4 lg:max-w-[1400px]">
        <h2 className="text-center text-2xl sm:text-3xl my-6">
          Add your Top Skills
        </h2>
        <p className="text-center my-6 text-base sm:text-lg">
          Add your top skills and make sure to accurately rate yourself on each
          skill.
        </p>
        <form onSubmit={handleOpenModal}>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex sm:flex-col gap-6 lg:gap-8 mx-auto my-8"
            >
              <div className="flex sm:flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
                <div className="flex flex-col w-full sm:w-80 max-w-lg">
                  <label
                    className="text-lg sm:text-xl mb-2"
                    htmlFor={`skill-${index}`}
                  >
                    Enter Your Main Skills
                  </label>
                  <input
                    type="text"
                    id={`skill-${index}`}
                    placeholder="Skill"
                    className="w-full p-3 rounded border border-gray-300"
                    value={skill.skill}
                    onChange={(e) =>
                      handleChange(index, "skill", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="flex flex-col w-full sm:w-80 max-w-lg">
                  <label
                    htmlFor={`expertise-${index}`}
                    className="text-lg sm:text-xl mb-2"
                  >
                    Rate Yourself
                  </label>
                  <select
                    id={`expertise-${index}`}
                    onChange={(e) =>
                      handleChange(index, "expertise", e.target.value)
                    }
                    className="w-full p-3 rounded border border-gray-300"
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
            </div>
          ))}

          <div className="flex flex-col w-full sm:w-80 mx-auto gap-6">
            <button
              type="button"
              className="btn link link-primary"
              onClick={handleAddSkill}
            >
              Add Skill +
            </button>
            <p className="text-center my-6 text-base sm:text-lg">
              Please note that this test is timed, with an approximate
              collection of 2 minutes per question.
            </p>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 rounded-full border border-blue-600 bg-blue-700 py-2 px-4 text-white text-base sm:text-lg"
              >
                <p>Start Test</p>
                <FaArrowRight />
              </button>
            </div>
            <p className="text-center text-lg sm:text-xl">
              Note: please do not refresh the page or you’ll lose the data.
            </p>
          </div>
        </form>

        {isModalOpen && (
          <MicVideoScreenModal
            onClose={() => setModalOpen(false)}
            onSubmit={handleModalSubmit}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default SkillsForm;
