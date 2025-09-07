import React from "react";
import DiffAreaDisplay from "./DiffAreaDisplay";

export default function ComparisonArea({
  value,
  onChange,
  tokens,
  placeholder,
}) {
  return (
    <div className="min-h-[380px] flex-1">
      {tokens ? (
        <DiffAreaDisplay tokens={tokens} />
      ) : (
        <textarea
          className="w-full h-[380px] p-4 bg-[#F0F7FF] rounded font-mono text-sm resize-none outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>
  );
}
