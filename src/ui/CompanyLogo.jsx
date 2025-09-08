import React from "react";

export default function CompanyLogo({
  companyLogo,
  isOpen,
  variant = "sidebar",
}) {
  const alwaysShowName = variant === "navbar";

  return (
    <div
      className={`flex items-center gap-2 px-4 hover:cursor-pointer ${
        variant === "sidebar" && !isOpen ? "justify-center" : ""
      }`}
    >
      <img
        src={companyLogo}
        alt="Company Logo"
        className={`transition-all mt-1 duration-300 ${
          variant === "navbar"
            ? "w-9 h-9" // Navbar ყოველთვის
            : isOpen
            ? "w-14 h-14" // Sidebar open
            : "w-8 h-8" // Sidebar collapsed
        }`}
      />
      {(isOpen || alwaysShowName) && (
        <h1 className="uppercase text-[0.85rem] font-bold text-white">
          Enagram
        </h1>
      )}
    </div>
  );
}
