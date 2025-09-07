import React from "react";
import Button from "../../ui/Button";

export default function CompareActions({ diffs, onCompare, onReset }) {
  return (
    <div className="flex gap-2 items-center justify-center">
      {diffs ? (
        <Button text="ჩასწორება" onClick={onReset} style="px-9" />
      ) : (
        <Button text="შედარება" onClick={onCompare} style="px-9" />
      )}
    </div>
  );
}
