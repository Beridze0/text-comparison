import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/components/Sidebar";
import Navbar from "./navbar/components/Navbar";
import { ToastContainer } from "react-toastify";

export default function AppLayout() {
  return (
    <div className="flex h-screen">
      <aside className="hidden md:block">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="block md:hidden">
          <Navbar />
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 px-3">
          <Outlet />
        </main>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}
