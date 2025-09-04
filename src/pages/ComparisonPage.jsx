import React from "react";
import { BiPlusCircle } from "react-icons/bi";

export default function ComparisonPage() {
  return (
    <div className="p-3 w-full text-sm">
      {/* Head */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <select
            name="languages"
            className=" border border-[#51555B] p-3  rounded-md"
          >
            <option value="georgian">ქართული</option>
            <option value="english">English</option>
          </select>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" />
            <span>ფორმატის შენარჩუნება</span>
          </label>
        </div>
        <div className="flex items-center gap-2  p-3 rounded-lg bg-[#383A4899] text-white">
          <BiPlusCircle size={20} />
          <span>ახლის გახსნა</span>
        </div>
      </div>
    </div>
  );
}
