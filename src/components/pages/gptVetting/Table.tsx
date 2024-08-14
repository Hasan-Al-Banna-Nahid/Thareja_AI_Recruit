"use client";

import React from "react";
import Image from "next/image";
import MoreButtonSVG from "@/app/../../public/svgs/more.svg";
import "./Styles.css";
interface Skill {
  name: string;
  experience: string;
}

interface TableRowProps {
  name: string;
  title?: string;
  location?: string;
  testOn: string;
  skills: Skill[];
}

const TableRow: React.FC<TableRowProps> = ({
  name,
  title,
  location,
  testOn,
  skills,
}) => (
  <tr className="TableRow">
    <td>{name}</td>
    <td>{title}</td>
    <td>{location}</td>
    <td>{testOn}</td>
    <td>
      {skills.map((skill, index) => (
        <p key={index}>
          {skill.name}{" "}
          <span className="text-[#A8B7C1]">({skill.experience})</span>
        </p>
      ))}
    </td>
    <td>
      <Image
        src={MoreButtonSVG}
        alt="More options"
        className="w-[50px] h-[44px] rounded-full bg-gradient-to-r from-[#E1E5FF] to-[#FAFCFF] mx-auto flex items-start"
      />
    </td>
  </tr>
);

const Table: React.FC = () => {
  const rows: TableRowProps[] = [
    {
      name: "All",
      title: "Full Stack Developer",
      location: "United States",
      testOn: "Aug 02,2023",
      skills: [
        { name: "Communication", experience: "junior" },
        { name: "Writing", experience: "Not experienced" },
        { name: "English", experience: "Not experienced" },
      ],
    },
    {
      name: "Rohit",
      title: "React Engineer",
      location: "United States",
      testOn: "Aug 02,2023",
      skills: [{ name: "No", experience: "Not experienced" }],
    },
    {
      name: "Ritik",
      title: "React",
      location: "",
      testOn: "Aug 02,2023",
      skills: [
        { name: "UX/UI", experience: "Not experienced" },
        { name: "Angular", experience: "2/10" },
      ],
    },
    {
      name: "Rivers",
      title: "",
      location: "",
      testOn: "Aug 02,2023",
      skills: [
        { name: "React", experience: "Not experienced" },
        { name: "UX/UI", experience: "Not experienced" },
        { name: "JavaScript", experience: "Not experienced" },
      ],
    },
    {
      name: "Maria",
      title: "Full Stack Developer",
      location: "",
      testOn: "Aug 02,2023",
      skills: [
        { name: "React", experience: "2/10" },
        { name: "Python", experience: "4/10" },
        { name: "Product Management", experience: "5/10" },
      ],
    },
    {
      name: "Rivers",
      title: "React",
      location: "United States",
      testOn: "Aug 02,2023",
      skills: [{ name: "React.js", experience: "5/10" }],
    },
    {
      name: "Test",
      title: "React",
      location: "United States",
      testOn: "Aug 02,2023",
      skills: [
        { name: "React.js", experience: "3/10" },
        { name: "React", experience: "2/10" },
        { name: "React.js", experience: "2/10" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="overflow-x-auto w-full TableLayout">
        <table className="table TableStyle w-full">
          <thead className="TableHead w-full h-[60px] rounded-md text-center">
            <tr>
              <th className="text-[#30353E]">Name</th>
              <th className="text-[#30353E]">Title</th>
              <th className="text-[#30353E]">Location</th>
              <th className="text-[#30353E]">Test On</th>
              <th className="text-[#30353E]">Main Tech Stacks</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {rows.map((row, index) => (
              <TableRow key={index} {...row} />
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Table;
