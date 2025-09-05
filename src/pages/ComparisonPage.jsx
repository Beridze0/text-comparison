import React from "react";
import { BiPlusCircle } from "react-icons/bi";
import ComparisonForm from "../features/comparison/ComparisonForms";
import Button from "../ui/Button";

export default function ComparisonPage() {
  return (
    <div className="p-3 w-full text-sm ">
      {/* Head */}
      <div className="flex items-center justify-between pb-3 border-b ">
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
        <Button text="ახლის გახსნა" icon={BiPlusCircle} iconSize={20} />
      </div>

      <ComparisonForm />
    </div>
  );
}
