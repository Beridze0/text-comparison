import React from "react";
import companyLogo from "../../../assets/company-logo3.png";
import { BiMenu } from "react-icons/bi";
import CompanyLogo from "../../../ui/CompanyLogo";
import { useSidebar } from "../../../context/SidebarContext";

export default function Navbar() {
  const { isOpen, toggle } = useSidebar();

  return (
    <div className="py-3 pr-5 flex items-center justify-between bg-[#132450]">
      <CompanyLogo companyLogo={companyLogo} variant="navbar" />

      <button className="" onClick={toggle}>
        <BiMenu className="text-white hover:cursor-pointer" size={22} />
      </button>
    </div>
  );
}
