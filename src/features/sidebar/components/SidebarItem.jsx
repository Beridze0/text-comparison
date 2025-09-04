import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarItem({ label, icon: Icon, link }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `flex items-center gap-2 p-4 rounded-l-4xl hover:bg-white hover:text-black duration-300 ${
          isActive ? "bg-white text-black" : ""
        }`
      }
    >
      <Icon size={22} />
      <span>{label}</span>
    </NavLink>
  );
}
