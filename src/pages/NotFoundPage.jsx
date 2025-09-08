import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-full flex-col text-center">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-xl font-semibold text-gray-600">Page Not Found</h2>
      <span className="text-sm mt-3 text-gray-500">
        <NavLink to="/comparison" className="text-blue-700 hover:underline">
          Click here
        </NavLink>{" "}
        to go back to the Comparison page
      </span>
    </div>
  );
}
