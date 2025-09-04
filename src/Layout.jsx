import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./features/sidebar/components/Sidebar";
import { SidebarProvider } from "./features/sidebar/SidebarContext";

export default function Layout() {
  const user = { firstName: "Davit", lastName: "Beridze" };

  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
