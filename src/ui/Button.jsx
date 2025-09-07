import React from "react";

export default function Button({ icon: Icon, iconSize, text, onClick, style }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 p-3 rounded-lg bg-[#383A4899] hover:cursor-pointer text-sm text-white ${style}`}
    >
      {Icon && <Icon size={iconSize} />}
      <span>{text}</span>
    </button>
  );
}
