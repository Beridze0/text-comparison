import React from "react";

import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarNav from "./SidebarNav";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { useSidebar } from "../SidebarContext";

export default function Sidebar() {
  const user = { firstName: "დავით", lastName: "ბერიძე" };
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div
      className={`flex flex-col justify-between h-screen bg-[#132450] text-[0.87rem] text-gray-100 transition-all duration-300 ${
        isOpen ? "w-[240px]" : "w-[72px]"
      }`}
    >
      <div
        className={`${isOpen ? "justify-end" : "justify-center"}
        flex items-center text-center py-3  `}
        onClick={toggleSidebar}
      >
        <RiArrowLeftDoubleFill
          size={21}
          className={`cursor-pointer  transition-transform duration-300 mx-5 opacity-80 ${
            !isOpen && "rotate-180"
          }`}
        />
      </div>

      <SidebarHeader />

      <SidebarNav />

      <SidebarFooter user={user} />
    </div>
  );
}
