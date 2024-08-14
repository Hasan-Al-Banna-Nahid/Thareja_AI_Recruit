import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { closeModal } from "@/Redux/Features/GptVettilngSlice/modalSlice";
import { toast } from "react-toastify";
import {
  togglePredefinedSkills,
  addSkill,
  updateSkill,
  removeSkill,
  addCandidate,
  updateCandidate,
  removeCandidate,
} from "@/Redux/Features/GptVettilngSlice/candidateFormSlice";
import Image from "next/image";
import tick from "@/../public/svgs/Mask group.svg";
import { BsTrash3 } from "react-icons/bs";
import ReviewJobCategory from "@/components/pages/jobPostReview/ReviewJobCategory";
import Container from "../wrapper/Container";
import { useRouter } from "next/navigation";
import {
  Candidate,
  Skill,
} from "@/Redux/Features/GptVettilngSlice/Types/Types";

const GptVettingInviteACandidateModal: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isOpen, predefinedSkills, skills, candidates } = useSelector(
    (state: RootState) => ({
      isOpen: state.modalSlice.isOpen,
      predefinedSkills: state.candidateForm.predefinedSkills,
      skills: state.candidateForm.skills,
      candidates: state.candidateForm.candidates,
    })
  );

  const [skillOption, setSkillOption] = useState<"existing" | "new">(
    "existing"
  );

  if (!isOpen) return null;

  const handleSendInvitation = () => {
    dispatch(closeModal());
    toast.success("Candidate invited successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toast-center",
      bodyClassName: "toast-body",
      icon: <Image src={tick} alt="tick" className="text-[27px]" />,
    });
    router.push("/Routes/gptVetting/CandidateInterview/Email");
  };

  const handleSkillChange = (
    index: number,
    field: keyof Skill,
    value: string
  ) => {
    dispatch(updateSkill({ index, field, value }));
  };

  const handleCandidateChange = (
    index: number,
    field: keyof Candidate,
    value: string
  ) => {
    dispatch(updateCandidate({ index, field, value }));
  };

  const handleAddSkill = () => {
    if (skills.length < 5) {
      dispatch(addSkill());
    } else {
      toast.error("You can only add up to 5 skills.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "toast-center",
        bodyClassName: "toast-body",
      });
    }
  };

  return (
    <Container>
      <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50  overflow-x-auto p-12">
        <div className="bg-white rounded-lg w-full max-w-lg mx-auto p-8">
          <div className="flex justify-between items-center mb-4 rounded-lg bg-[rgba(0,90,255,0.03)] shadow-md p-2">
            <h2 className="text-lg font-semibold overflow-scroll">
              Invite a candidate
            </h2>
            <button
              onClick={() => dispatch(closeModal())}
              className="text-gray-500 hover:text-gray-700 text-[27px]"
            >
              &times;
            </button>
          </div>
          <div className="mb-4">
            <p className="text-sm mb-2">
              Do you want to predefine the skills to test this candidate on?
            </p>
            <div className="flex items-center mb-2 gap-6">
              <div>
                <input
                  type="radio"
                  id="choose"
                  name="skills"
                  className="mr-2 custom-radio"
                  checked={!predefinedSkills}
                  onChange={() => dispatch(togglePredefinedSkills(false))}
                />
                <label htmlFor="choose" className="text-sm ml-2">
                  No, they can choose
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="define"
                  name="skills"
                  className="mr-2 custom-radio"
                  checked={predefinedSkills}
                  onChange={() => dispatch(togglePredefinedSkills(true))}
                />
                <label htmlFor="define" className="text-sm ml-2">
                  Yes, I will define the skills
                </label>
              </div>
            </div>
          </div>
          {predefinedSkills && (
            <div>
              <h3 className="text-md font-bold">Please define the skills</h3>
              <div className="flex items-center mb-2 gap-6">
                <div>
                  <input
                    type="radio"
                    id="existing"
                    name="skillOption"
                    className="mr-2 custom-radio"
                    checked={skillOption === "existing"}
                    onChange={() => setSkillOption("existing")}
                  />
                  <label htmlFor="existing" className="text-sm ml-2">
                    Choose from existing
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="new"
                    name="skillOption"
                    className="mr-2 custom-radio"
                    checked={skillOption === "new"}
                    onChange={() => setSkillOption("new")}
                  />
                  <label htmlFor="new" className="text-sm ml-2">
                    New skill
                  </label>
                </div>
              </div>
              {skillOption === "existing" && <ReviewJobCategory />}
              {skillOption === "new" && (
                <div>
                  <label className="text-sm" htmlFor="testName">
                    Test name
                  </label>
                  <input
                    type="text"
                    id="testName"
                    placeholder="Test name"
                    className="border rounded p-1 mb-2 w-full"
                  />
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 gap-4"
                    >
                      <input
                        type="text"
                        id={`skillName-${index}`}
                        value={skill.name}
                        onChange={(e) =>
                          handleSkillChange(index, "name", e.target.value)
                        }
                        placeholder="Skill name"
                        className="border rounded p-1 my-2"
                      />

                      <select
                        id={`skillLevel-${index}`}
                        value={skill.level}
                        onChange={(e) =>
                          handleSkillChange(index, "level", e.target.value)
                        }
                        className="border rounded p-1"
                      >
                        <option value={"lod"} className="text-gray-400">
                          Level Of Difficulty
                        </option>
                        <option value={"beginner"}>Beginner</option>
                        <option value={"intermediate"}>Intermediate</option>
                        <option value={"expert"}>Expert</option>
                      </select>
                      <BsTrash3
                        className="text-[#FF0000] cursor-pointer text-[20px]"
                        onClick={() => dispatch(removeSkill(index))}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="text-[#005AFF] my-2"
                  >
                    + Add another skill (up to 4 more)
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="text-sm">
              Enter the name & email address of the candidates
            </label>
            {candidates.map((candidate, index) => (
              <div key={index} className="flex items-center gap-4 mt-2">
                <input
                  type="text"
                  value={candidate.name}
                  onChange={(e) =>
                    handleCandidateChange(index, "name", e.target.value)
                  }
                  placeholder="Name"
                  className="border rounded px-2 py-1 w-full"
                />
                <input
                  type="email"
                  value={candidate.email}
                  onChange={(e) =>
                    handleCandidateChange(index, "email", e.target.value)
                  }
                  placeholder="Email address"
                  className="border rounded px-2 py-1 w-full"
                />
                <BsTrash3
                  type="button"
                  className="text-[#FF0000] text-[60px]"
                  onClick={() => dispatch(removeCandidate(index))}
                >
                  Remove
                </BsTrash3>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="text-blue-500 text-sm mb-4"
            onClick={() => dispatch(addCandidate())}
          >
            + Add another candidate
          </button>
          <button
            type="button"
            onClick={handleSendInvitation}
            className="bg-[#005AFF] text-white px-4 py-2 w-full rounded-[100px]"
          >
            Send invitation
          </button>
        </div>
      </div>
    </Container>
  );
};

export default GptVettingInviteACandidateModal;
