"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
      <form onSubmit={handleSubmit}>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Skill"
              value={skill.skill}
              onChange={(e) => handleChange(index, "skill", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Expertise Level"
              value={skill.expertise}
              onChange={(e) => handleChange(index, "expertise", e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddSkill}>
          Add Skill
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SkillsForm;
