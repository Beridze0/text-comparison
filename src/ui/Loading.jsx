import React from "react";
import BlueCircle from "./BlueCircle";
import LoadingBar from "./LoadingBar";

export default function Loading({ progress }) {
  return (
    <div className="mx-auto flex items-center gap-4 border px-5 py-7 rounded-xl max-w-fit border-[#E1E1E1] w-full">
      <BlueCircle />
      <div className="flex-1">
        <span className="text-[#383A4899] block mb-2">
          Converting... Thank you for your patience
        </span>
        <div className="flex  items-center gap-2">
          <strong className="text-lg">{progress}%</strong>
          <LoadingBar progress={progress} />
        </div>
      </div>
    </div>
  );
}
