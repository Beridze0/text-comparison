import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function LanguageSelector({ value, onChange }) {
  return (
    <div className="relative w-full sm:w-fit">
      <select
        name="languages"
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-4 pr-6 text-left text-gray-700 outline-none "
      >
        <option value="" disabled>
          Select language
        </option>
        <option value="georgian">ქართული</option>
        <option value="english">English</option>
      </select>

      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
        <IoIosArrowDown />
      </span>
    </div>
  );
}
