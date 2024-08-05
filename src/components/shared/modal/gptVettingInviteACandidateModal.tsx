import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { closeModal } from "@/Redux/Features/GptVettilngSlice/modalSlice";
import { toast } from "react-toastify";
import { ThickArrowUpIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import tick from "@/app/../../public/svgs/Mask group.svg";
const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modalSlice.isOpen);

  if (!isOpen) return null;
  const handleSendInvitation = () => {
    // Dispatch an action to close the modal
    dispatch(closeModal());

    // Show a success toast notification
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
      icon: <Image src={tick} alt="tick" className="text-[27px] " />,
    });
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-full max-w-lg mx-auto p-8 ">
        <div className="flex justify-between items-center mb-4 rounded-lg bg-[rgba(0,90,255,0.03)] shadow-md p-2">
          <h2 className="text-lg font-semibold">Invite a candidate</h2>
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
              <input type="radio" id="choose" name="skills" className="mr-2" />
              <label htmlFor="choose" className="text-sm">
                No, they can choose
              </label>
            </div>
            <div className="flex items-center ">
              <input type="radio" id="define" name="skills" className="mr-2" />
              <label htmlFor="define" className="text-sm">
                Yes, I will define the skills
              </label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="text-sm">
            Enter the name & email address of the candidates
          </label>
          <div className="flex items-center gap-4">
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="border rounded px-2 py-1 w-full mt-2"
            />
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="border rounded px-2 py-1 w-full mt-2"
            />
          </div>
        </div>
        <button className="text-blue-500 text-sm mb-4">
          + Add another candidate
        </button>
        <button
          type="button"
          onClick={handleSendInvitation}
          className="bg-[#005AFF] text-white  px-4 py-2 w-full rounded-[100px]"
        >
          Send invitation
        </button>
      </div>
    </div>
  );
};

export default Modal;
