import React from "react";
import companyLogo from "../../../assets/company-logo3.png";

export default function SidebarHeader() {
  return (
    <div className="flex items-center gap-1 px-4">
      <img src={companyLogo} alt="Company Logo" className="w-14 h-14" />
      <h1 className="uppercase text-sm font-bold">Enagram</h1>
    </div>
  );
}
