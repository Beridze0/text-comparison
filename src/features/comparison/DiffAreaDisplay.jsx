import React from "react";

export default function DiffAreaDisplay({ tokens }) {
  return (
    <div className="p-3  w-full h-[290px] sm:h-[380px]  rounded font-mono text-sm whitespace-pre-wrap break-words bg-[#F0F7FF]">
      {tokens.map((t, i) => {
        if (t.type === "same") {
          return <span key={i}>{t.text}</span>;
        }
        if (t.type === "removed") {
          return (
            <span
              key={i}
              className="bg-red-200 text-red-700 line-through rounded px-0.5"
            >
              {t.text}
            </span>
          );
        }
        if (t.type === "added") {
          return (
            <span
              key={i}
              className="bg-green-200 text-green-800 rounded px-0.5"
            >
              {t.text}
            </span>
          );
        }
        return null;
      })}
    </div>
  );
}
