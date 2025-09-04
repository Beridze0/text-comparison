import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function SidebarFooter({ user }) {
  return (
    <div className="border-t flex items-center justify-between p-3">
      <span>{`${user.firstName} ${user.lastName}`}</span>
      <HiOutlineDotsHorizontal />
    </div>
  );
}
