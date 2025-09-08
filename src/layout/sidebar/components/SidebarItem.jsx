import React from "react";
import { NavLink } from "react-router-dom";
import { useSidebar } from "../../../context/SidebarContext";

export default function SidebarItem({
  onClick = null,
  label,
  icon: Icon,
  link,
}) {
  const { isOpen } = useSidebar();
  return (
    <NavLink
      to={link}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-2 p-4 rounded-l-4xl 
      rounded-r-2xl hover:bg-white hover:text-black duration-300 ${
        isActive ? "bg-white text-black rounded-r-none" : ""
      }`
      }
    >
      <Icon size={22} />
      {isOpen && (
        <span
          className={`transition-all duration-300 overflow-hidden whitespace-nowrap ${
            isOpen ? "opacity-100 w-auto ml-2" : "opacity-0 w-0 ml-0"
          }`}
        >
          {label}
        </span>
      )}
    </NavLink>
  );
}
