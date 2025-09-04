import React from "react";
import companyLogo from "../../../assets/company-logo3.png";
import { useSidebar } from "../SidebarContext";

export default function SidebarHeader() {
  const { isOpen } = useSidebar();
  return (
    <div
      className={`flex items-center gap-1 mt-5 px-5 ${
        !isOpen && "justify-center"
      }`}
    >
      <img
        src={companyLogo}
        alt="Company Logo"
        className={` transition-all duration-300 overflow-hidden${
          isOpen ? "w-14 h-14 " : "w-8 h-8"
        }`}
      />
      {isOpen && <h1 className="uppercase text-sm font-bold">Enagram</h1>}
    </div>
  );
}
