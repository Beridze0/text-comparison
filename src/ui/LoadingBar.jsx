import React from "react";

export default function LoadingBar({ progress }) {
  return (
    <div className="flex-1 h-2 bg-gray-300 rounded overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-100"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
