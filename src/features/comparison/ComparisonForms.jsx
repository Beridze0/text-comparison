import React, { useState } from "react";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import Button from "../../ui/Button";
import ComparisonForm from "./ComparisonForm";
import Loading from "../../ui/Loading";

export default function ComparisonForms() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleCompare() {
    setIsLoading(true);
    setProgress(0);

    const start = performance.now();
    const duration = 2500;

    function animate(now) {
      const elapsed = now - start;
      const percent = Math.min((elapsed / duration) * 100, 100);

      setProgress(Math.floor(percent));

      if (percent < 100) {
        requestAnimationFrame(animate);
      } else {
        setIsLoading(false);
        console.log("Compared texts", textA, textB);
      }
    }

    requestAnimationFrame(animate);
  }

  return (
    <div className="flex flex-col mt-10 w-full">
      {isLoading ? (
        <Loading progress={progress} />
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
