import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./features/sidebar/components/Sidebar";

export default function Layout() {
  const user = { firstName: "Davit", lastName: "Beridze" };

  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
