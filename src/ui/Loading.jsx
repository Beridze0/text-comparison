import React from "react";
import BlueCircle from "./BlueCircle";
import LoadingBar from "./LoadingBar";

export default function Loading() {
  return (
    <div className="mx-auto flex items-center gap-4 border px-5 py-7 rounded-xl border-[#E1E1E1]">
      {/* blue circle */}

      <BlueCircle />

      <div>
        <span className="text-[#383A4899]">
          Converting... Thank you for your patience
        </span>
        <div className="flex items-center gap-2">
          <strong className="text-lg">30%</strong>
          <LoadingBar />
        </div>
      </div>
    </div>
  );
}
