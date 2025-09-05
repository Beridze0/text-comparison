import React, { useState } from "react";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import Button from "../../ui/Button";
import ComparisonForm from "./ComparisonForm";

export default function ComparisonForms() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  return (
    <div className="flex flex-col mt-10">
      <div className="flex items-center justify-between gap-2">
        <ComparisonForm onChange={setTextA} value={textA} />
        <TfiArrowsHorizontal size={20} />
        <ComparisonForm onChange={setTextB} value={textB} />
      </div>

      <div className="flex mt-2 items-center justify-center">
        <Button text="შედარება" />
      </div>
    </div>
  );
}
