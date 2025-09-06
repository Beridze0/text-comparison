import React, { useState } from "react";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import Button from "../../ui/Button";
import ComparisonForm from "./ComparisonForm";
import Loading from "../../ui/Loading";

export default function ComparisonForms() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  async function handleCompare() {
    setIsLoading(true);

    for (let i = 1; i <= 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, 30));
      setProgress(i);
    }

    setIsLoading(false);

    console.log("Compared texts", textA, textB);
  }

  return (
    <div className="flex flex-col mt-10">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-between gap-2">
            <ComparisonForm onChange={setTextA} value={textA} />
            <TfiArrowsHorizontal size={20} />
            <ComparisonForm onChange={setTextB} value={textB} />
          </div>

          <div className="flex mt-2 items-center justify-center">
            <Button text="შედარება" onClick={handleCompare} />
          </div>
        </>
      )}
    </div>
  );
}
