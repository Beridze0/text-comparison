import React from "react";

export default function ComparisonForm({ onChange, value }) {
  return (
    <div className=" flex-1  ">
      <textarea
        id="textA"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          console.log(e.target.value);
        }}
        className="p-2 bg-[#afbfd2] w-full rounded-xl h-48 resize-none outline-none"
        placeholder="Enter first text..."
      />
    </div>
  );
}
