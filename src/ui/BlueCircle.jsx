import React from "react";

export default function BlueCircle() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* outer circle */}
        <div className="absolute w-full h-full rounded-full border-2 border-blue-500"></div>

        {/* inner circle */}
        <div
          className="w-4 h-4 rounded-full bg-blue-500 
          animate-[pulse-grow_1.5s_infinite_ease-in-out]"
        ></div>
      </div>
    </div>
  );
}
