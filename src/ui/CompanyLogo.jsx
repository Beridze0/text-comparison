import React from "react";

export default function CompanyLogo({
  companyLogo,
  isOpen,
  variant = "sidebar",
}) {
  const alwaysShowName = variant === "navbar";

  return (
    <div
      className={`flex items-center gap-2 px-5 hover:cursor-pointer ${
        variant === "sidebar" && !isOpen ? "justify-center" : ""
      }`}
    >
      <img
        src={companyLogo}
        alt="Company Logo"
        className={`transition-all duration-300 ${
          variant === "navbar"
            ? "w-10 h-10" // Navbar ყოველთვის
            : isOpen
            ? "w-14 h-14" // Sidebar open
            : "w-8 h-8" // Sidebar collapsed
        }`}
      />
      {(isOpen || alwaysShowName) && (
        <h1 className="uppercase text-sm font-bold text-white">Enagram</h1>
      )}
    </div>
  );
}
