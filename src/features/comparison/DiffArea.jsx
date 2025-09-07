import React from "react";

export default function DiffArea({ value, onChange, diff, placeholder }) {
  return (
    <div className="flex-1 border rounded p-2 min-h-[200px] whitespace-pre-wrap">
      {diff ? (
        diff.map((part, idx) => (
          <span
            key={idx}
            className={part.same ? "" : "bg-blue-300 text-black rounded px-0.5"}
          >
            {part.text}
            {idx < diff.length - 1 && " "}
          </span>
        ))
      ) : (
        <textarea
          className="w-full h-full outline-none resize-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
