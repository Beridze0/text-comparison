import React, { useState } from "react";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import Button from "../../ui/Button";
import Loading from "../../ui/Loading";
import { diffTexts } from "../../utils/diffTexts";
import DiffArea from "./DiffArea";

export default function ComparisonForms() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [diffResult, setDiffResult] = useState(null);

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
        const result = diffTexts(textA, textB);
        setDiffResult(result);
        setIsLoading(false);
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
          {/* Text input fields */}
          <div className="flex items-center justify-between gap-2">
            <DiffArea
              value={textA}
              onChange={setTextA}
              diff={diffResult ? diffResult.resultA : null}
              placeholder="Text A…"
            />
            <TfiArrowsHorizontal size={20} />
            <DiffArea
              value={textB}
              onChange={setTextB}
              diff={diffResult ? diffResult.resultB : null}
              placeholder="Text B…"
            />
          </div>

          {/* Action button */}
          <div className="flex mt-2 items-center justify-center">
            <Button text="შედარება" onClick={handleCompare} />
          </div>
        </>
      )}
    </div>
  );
}
