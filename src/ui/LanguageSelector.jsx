import React from "react";

export default function LanguageSelector({ value, onChange }) {
  return (
    <div className="flex border border-gray-300 rounded-md items-center justify-center px-3.5">
      <select
        name="languages"
        value={value}
        onChange={onChange}
        className="py-2  pr-5 rounded-lg  text-gray-700 outline-none"
      >
        <option value="georgian">ქართული</option>
        <option value="english">English</option>
      </select>
    </div>
  );
}
