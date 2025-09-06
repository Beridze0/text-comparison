import React from "react";

export default function LoaderLine() {
  return (
    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
      <div className="h-full bg-blue-500 animate-[grow-line_2s_linear_infinite]"></div>
    </div>
  );
}
