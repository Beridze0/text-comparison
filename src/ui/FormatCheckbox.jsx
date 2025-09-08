import React from "react";

export default function FormatCheckbox({ checked, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-gray-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500"
      />
      <span>ფორმატის შენარჩუნება</span>
    </label>
  );
}
