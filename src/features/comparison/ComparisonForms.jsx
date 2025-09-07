import React, { useState } from "react";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import Button from "../../ui/Button";
import { diffTexts } from "../../utils/diffTexts";
import DiffAreaDisplay from "./DiffAreaDisplay";
import Loading from "../../ui/Loading"; // your loading component with progress

export default function ComparisonForms() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [diffs, setDiffs] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleCompare() {
    setIsLoading(true);
    setProgress(0);

    const start = performance.now();
    const duration = 2000; // 2 seconds loading animation

    function animate(now) {
      const elapsed = now - start;
      const percent = Math.min((elapsed / duration) * 100, 100);

      setProgress(Math.floor(percent));

      if (percent < 100) {
        requestAnimationFrame(animate);
      } else {
        const result = diffTexts(textA, textB);
        setDiffs(result);
        setIsLoading(false);
      }
    }

    requestAnimationFrame(animate);
  }

  function resetToEdit() {
    setDiffs(null);
    setProgress(0);
  }

  return (
    <div className="flex flex-col mt-10 w-full gap-4">
      {isLoading ? (
        <Loading progress={progress} />
      ) : (
        <>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
            <div className="min-h-[220px]">
              {diffs ? (
                <DiffAreaDisplay tokens={diffs.resultA} />
              ) : (
                <textarea
                  className="w-full h-[220px] p-3 border border-gray-300 rounded font-mono text-sm resize-none"
                  placeholder="Text A…"
                  value={textA}
                  onChange={(e) => setTextA(e.target.value)}
                />
              )}
            </div>

            <div className="pt-2">
              <TfiArrowsHorizontal size={20} />
            </div>

            <div className="min-h-[220px]">
              {diffs ? (
                <DiffAreaDisplay tokens={diffs.resultA} />
              ) : (
                <textarea
                  className="w-full h-[220px] p-3 border border-gray-300 rounded font-mono text-sm resize-none"
                  placeholder="Text B…"
                  value={textB}
                  onChange={(e) => setTextB(e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="flex gap-2 items-center justify-center">
            {diffs ? (
              <Button text="ჩასწორება" onClick={resetToEdit} />
            ) : (
              <Button text="შედარება" onClick={handleCompare} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
