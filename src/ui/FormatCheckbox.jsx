import React from "react";

export default function FormatCheckbox({ checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-gray-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-3 h-3 rounded sm:w-4 sm:h-4 border-gray-400 text-indigo-600 focus:ring-indigo-500"
      />
      <span className="sm:text-[0.9rem] text-[0.85rem]">
        ფორმატის შენარჩუნება
      </span>
    </label>
  );
}
