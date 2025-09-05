import React from "react";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "../sidebarData";

export default function SidebarNav() {
  return (
    <ul className="flex-1 flex flex-col mt-6  pl-3">
      {sidebarItems.map((item) => (
        <li key={item.label}>
          <SidebarItem label={item.label} icon={item.icon} link={item.link} />
        </li>
      ))}
    </ul>
  );
}
