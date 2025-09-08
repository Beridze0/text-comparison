import React from "react";

export default function CompareActions({ diffs, onCompare, onReset }) {
  return (
    <div className="flex gap-2 items-center justify-center">
      {diffs ? (
        <button
          onClick={onReset}
          className="flex text-center justify-center sm:w-fit mt-4 sm:mt-0 items-center gap-2 py-2.5 px-8 sm:px-9 sm:py-3 rounded-lg bg-blue-700 hover:cursor-pointer text-sm text-white"
        >
          ჩასწორება
        </button>
      ) : (
        <button
          text="შედარება"
          onClick={onCompare}
          className="flex text-center justify-center sm:w-fit mt-4 sm:mt-0 items-center gap-2 py-2.5 px-8 sm:px-9 sm:py-3 rounded-lg bg-blue-700 hover:cursor-pointer text-sm text-white"
        >
          შედარება
        </button>
      )}
    </div>
  );
}
