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
        `flex items-center gap-2 p-4 rounded-l-4xl relative 
         rounded-r-2xl border-none 
         
         ${
           isActive
             ? `bg-gray-50 text-black rounded-r-none hover:text-black
                before:opacity-100 after:opacity-100`
             : `before:opacity-0 after:opacity-0 `
         }
      
         before:content-[""] 
         before:bg-transparent
         before:absolute before:right-[0px] before:top-[-16px] 
         before:w-4 before:h-4 before:rounded-full 
         before:shadow-[3px_3px_0_-1px_#f9fafb]
      
         after:content-[""]
         after:bg-transparent
         after:absolute after:right-[0px] after:bottom-[-16px]
         after:w-4 after:h-4 after:rounded-full
         after:shadow-[3px_-3px_0_-1px_#f9fafb]
        `
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
