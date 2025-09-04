import React from "react";

export default function Avatar({ src, name }) {
  const initial = name?.[0] ?? "?";

  return (
    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-300 text-[#132450] font-semibold overflow-hidden border-[3px] border-white">
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-xs leading-none flex items-center justify-center">
          {initial}
        </span>
      )}
    </div>
  );
}
