import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Avatar from "../../../ui/Avatar";
import { useSidebar } from "../../../context/SidebarContext";

export default function SidebarFooter({ user }) {
  const { isOpen } = useSidebar();
  return (
    <div
      className={`${
        isOpen
          ? "border-t flex items-center justify-between p-3 duration-300 transition-all"
          : "hidden"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <Avatar name={user.firstName} />

        <span
          className={`transition-all duration-300 overflow-hidden whitespace-nowrap text-xs ${
            isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 ml-0"
          }`}
        >{`${user.firstName} ${user.lastName}`}</span>
      </div>

      {isOpen && <HiOutlineDotsHorizontal />}
    </div>
  );
}
