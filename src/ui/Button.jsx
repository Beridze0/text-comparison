import React from "react";

export default function Button({ icon: Icon, text, onClick, style }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full text-center justify-center sm:w-fit mt-4 sm:mt-0 items-center gap-2 p-3 rounded-md bg-[#383A4899] hover:cursor-pointer text-sm text-white ${style}`}
    >
      <span className="flex items-center gap-1">
        {Icon && <Icon className="size-4.5" />}
        <span className="text-[0.88rem] sm:text-[0.9rem]">{text}</span>
      </span>
    </button>
  );
}
