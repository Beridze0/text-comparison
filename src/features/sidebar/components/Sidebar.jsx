import React, { useState, createContext, useContext } from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiPerson } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      <div
        className={`bg-[#132450] h-screen flex flex-col text-gray-50 transition-all duration-300 w-64 text-[0.87rem] `}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

// Sub Comp

Sidebar.Header = function Header({ companyLogo, companyName }) {
  return (
    <div className="flex items-center gap-2">
      <img src={companyLogo} alt="Company Logo" className="w-16 h-16" />
      <span className="text-sm uppercase font-bold tracking-wider">
        {companyName}
      </span>
    </div>
  );
};

Sidebar.Item = function Item({ link, icon: Icon, label }) {
  const { isOpen } = useContext(SidebarContext);

  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "text-red-500" : "text-gray-500"
      }
    >
      <Icon size={22} />
      <span className="text-[0.88rem] font-medium">{label}</span>
    </NavLink>
  );
};

Sidebar.Footer = function Footer({ user: { firstName, lastName } }) {
  return (
    <div className="flex items-center p-4 justify-between border-t border-t-[#9EB9FF33]">
      <div className="flex items-center gap-1">
        <PiPerson />
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <BsThreeDots />
    </div>
  );
};
