import React from "react";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import Button from "../../ui/Button";

export default function ComparisonForm() {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex items-center justify-between gap-2">
        <div className=" flex-1  ">
          <textarea
            id="textA"
            // value={textA}
            className="p-2 bg-[#7b95b3] w-full rounded-xl h-48 resize-none outline-none"
            placeholder="Enter first text..."
          />
        </div>
        <TfiArrowsHorizontal />
        <div className="flex-1">
          <textarea
            id="textA"
            //   value={textA}
            //   onChange={(e) => setTextA(e.target.value)}
            className="p-2 bg-[#7b95b3] w-full rounded-xl h-48 resize-none outline-none"
            placeholder="Enter first text..."
          />
        </div>
      </div>

      <div className="flex mt-2 items-center justify-center">
        <Button text="შედარება" />
      </div>
    </div>
  );
}
