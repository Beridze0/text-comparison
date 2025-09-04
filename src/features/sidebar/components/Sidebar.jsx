import React from "react";

import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";
import SidebarNav from "./SidebarNav";
import { RiArrowLeftDoubleFill } from "react-icons/ri";

export default function Sidebar() {
  const user = { firstName: "Davit", lastName: "Beridze" };
  return (
    <div className="flex flex-col justify-between h-screen bg-[#132450] text-[0.87rem] text-gray-100 w-[240px]">
      <div className="flex justify-end pt-3 px-5">
        <RiArrowLeftDoubleFill size={21} className="cursor-pointer" />
      </div>

      <SidebarHeader />

      <SidebarNav />

      <SidebarFooter user={user} />
    </div>
  );
}
