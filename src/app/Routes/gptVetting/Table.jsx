"use client";
import React from "react";
import Image from "next/image";
import MoreButtonSVG from "@/app/../../public/svgs/more.svg";
import NextPageButtonText from "@/components/pages/getStartedWithAi/NextPageButton";
import RightArrowButton from "@/app/../../public/svgs/Group .svg";
const Table = () => {
  return (
    <React.Fragment>
      <div className="overflow-x-auto w-full TableLayout">
        <table className="table  TableStyle w-full">
          <thead className="TableHead w-full h-[60px] rounded-md ">
            <tr>
              <th className="text-[#30353E]">Name</th>
              <th className="text-[#30353E]">Title</th>
              <th className="text-[#30353E]">Location</th>
              <th className="text-[#30353E]">Test On</th>
              <th className="text-[#30353E]">Main Tech Stacks</th>
              <th></th>
            </tr>
          </thead>
          <tbody className=" text-center">
            <tr className="TableRow">
              <td>All</td>
              <td>Full Stack Developer</td>
              <td>United States</td>
              <td>Aug 02,2023</td>
              <td>
                <p>Communication (junior)</p>
                <p>
                  Writing{" "}
                  <span className="text-[#A8B7C1]">(Not experienced)</span>
                </p>
                <p>
                  English{" "}
                  <span className="text-[#A8B7C1]">(Not experienced)</span>
                </p>
              </td>
              <td>
                <Image
                  src={MoreButtonSVG}
                  className="w-[50px]  h-[44px] rounded-full bg-gradient-to-r from-[#E1E5FF] to-[#FAFCFF]  mx-auto flex items-start"
                />
              </td>
            </tr>
            <tr className="TableRow">
              <td>Rohit </td>
              <td>React Engineer</td>
              <td>United States</td>
              <td>Aug 02,2023</td>
              <td>
                <p>
                  No <span className="text-[#A8B7C1]">(Not experienced)</span>
                </p>
              </td>
              <td>
                <Image
                  src={MoreButtonSVG}
                  className="w-[50px]  h-[44px] rounded-full bg-gradient-to-r from-[#E1E5FF] to-[#FAFCFF]  mx-auto flex items-start"
                />
              </td>
            </tr>
            <tr className="TableRow">
              <td>Ritik</td>
              <td>
                {" "}
                <p>
                  React{" "}
                  <span className="text-[#A8B7C1]">(Not experienced)</span>
                </p>
              </td>
              <td>
                <p>
                  UX/UI{" "}
                  <span className="text-[#A8B7C1]">(Not experienced)</span>
                </p>
              </td>
              <td>
                {" "}
                <p>
                  Angular <span className="skillsColorOne">(2/10)</span>
                </p>
              </td>
              <td>Aug 02,2023</td>
              <td>
                <Image
                  src={MoreButtonSVG}
                  className="w-[50px]  h-[44px] rounded-full bg-gradient-to-r from-[#E1E5FF] to-[#FAFCFF]  mx-auto flex items-start"
                />
              </td>
            </tr>

            <tr className="TableRow">
              <td>Rivers</td>
              <td></td>
              <td></td>
              <td>Aug 02,2023</td>
              <td>
                <p>
                  React{" "}
                  <span className="text-[#A8B7C1]">(Not experienced)</span>
                </p>
                <p>
                  UX/UI{" "}
                  <span className="text-[#A8B7C1]">(Not experienced)</span>
                </p>
                <p>
                  JavaScript{" "}
                  <span className="text-[#A8B7C1]">(Not experienced)</span>
                </p>
              </td>
              <td>
                <Image
                  src={MoreButtonSVG}
                  className="w-[50px]  h-[44px] rounded-full bg-gradient-to-r from-[#E1E5FF] to-[#FAFCFF]  mx-auto flex items-start"
                />
              </td>
            </tr>

            <tr className="TableRow">
              <td>Maria</td>
              <td>Full Stack Developer</td>
              <td></td>
              <td>Aug 02,2023</td>
              <td>
                <p>
                  React <span className="skillsColorOne">(2/10)</span>
                </p>
                <p>
                  Python <span className="skillsColorTwo">(4/10)</span>
                </p>
                <p>
                  Product Management{" "}
                  <span className="skillsColorTwo">(5/10)</span>
                </p>
              </td>
              <td>
                <Image
                  src={MoreButtonSVG}
                  className="w-[50px]  h-[44px] rounded-full bg-gradient-to-r from-[#E1E5FF] to-[#FAFCFF]  mx-auto flex items-start"
                />
              </td>
            </tr>
            <tr className="TableRow">
              <td>Rivers</td>
              <td>React</td>
              <td>United States</td>
              <td>Aug 02,2023</td>
              <td>
                <p>
                  React.js <span className="skillsColorOne">(5/10)</span>
                </p>
              </td>
              <td>
                <Image
                  src={MoreButtonSVG}
                  className="w-[50px]  h-[44px] rounded-full bg-gradient-to-r from-[#E1E5FF] to-[#FAFCFF]  mx-auto flex items-start"
                />
              </td>
            </tr>
            <tr className="TableRow">
              <td>Test</td>
              <td>React</td>
              <td>United States</td>
              <td>Aug 02,2023</td>
              <td>
                <p>
                  React.js <span className="skillsColorOne">(3/10)</span>
                </p>
                <p>
                  React<span className="skillsColorOne">(2/10)</span>
                </p>
                <p>
                  React.js <span className="skillsColorOne">(2/10)</span>
                </p>
              </td>
              <td>
                <Image
                  src={MoreButtonSVG}
                  className="w-[50px]  h-[44px] rounded-full bg-gradient-to-r from-[#E1E5FF] to-[#FAFCFF]  mx-auto flex items-start"
                />
              </td>
            </tr>
          </tbody>
          <tfoot className="TableFoot">
            <div>
              <div className="table-foot-button mx-auto">
                <button>Next Page</button>
                <Image src={RightArrowButton} className="text-[#ffff]" />
              </div>
            </div>
            {/* <div className="flex-1 flex justify-end">
              <JobsPagination />
            </div> */}
          </tfoot>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Table;
