import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import companyLogo from "../../../assets/company-logo3.png";
import { BiMenu } from "react-icons/bi";
import CompanyLogo from "../../../ui/CompanyLogo";
import BottomSheet from "../../../ui/BottomSheet";
import { sidebarItems } from "../../sidebar/sidebarData";
import SidebarItem from "../../sidebar/components/SidebarItem";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // find the active item by comparing current path
  const activeItem =
    sidebarItems.find((item) =>
      location.pathname.startsWith(`/${item.link}`)
    ) || sidebarItems[0];

  return (
    <div className="w-full bg-[#132450] flex flex-col">
      {/* top row */}
      <div className="py-3 px-5 flex items-center justify-between">
        <CompanyLogo companyLogo={companyLogo} variant="navbar" />
        <button onClick={() => setOpen((prev) => !prev)}>
          <BiMenu className="text-white hover:cursor-pointer" size={22} />
        </button>
      </div>

      {/* bottom row: show currently active item */}
      <div className="px-5 py-3 bg-gray-50 text-black border-b border-gray-300">
        <button
          className="flex  items-center gap-2 px-4 py-2 rounded-lg hover:cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <activeItem.icon className="size-5 sm:size-6" />
          <span className="font-semibold sm:text-[0.94rem] text-[0.8rem]">
            {activeItem.label}
          </span>
          <IoIosArrowDown className="opacity-70 mt-1" size={13} />
        </button>
      </div>

      <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
        <h3 className="text-gray-500 text-sm mb-2">აირჩიე სექცია</h3>
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.label} className="mb-2">
              <SidebarItem
                label={item.label}
                icon={item.icon}
                link={item.link}
                onClick={() => setOpen(false)}
              />
            </li>
          ))}
        </ul>
      </BottomSheet>
    </div>
  );
}
