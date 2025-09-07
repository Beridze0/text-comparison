import React, { useState } from "react";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import Button from "../../ui/Button";
import { diffTexts } from "../../utils/diffTexts";
import DiffAreaDisplay from "./DiffAreaDisplay";
import Loading from "../../ui/Loading"; // your loading component

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
    const duration = 2000; // 2s animation

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
          <div className="flex items-center justify-between">
            <div className="min-h-[380px]  flex-1">
              {diffs ? (
                <DiffAreaDisplay tokens={diffs.resultA} />
              ) : (
                <textarea
                  className="w-full h-[380px] p-4  bg-[#F0F7FF]  rounded font-mono text-sm resize-none outline-none"
                  placeholder="დაიწყე წერა"
                  value={textA}
                  onChange={(e) => setTextA(e.target.value)}
                />
              )}
            </div>

            <div className="px-4">
              <TfiArrowsHorizontal size={20} />
            </div>

            <div className="min-h-[380px] flex-1">
              {diffs ? (
                <DiffAreaDisplay tokens={diffs.resultB} />
              ) : (
                <textarea
                  className="w-full h-[380px] p-4  rounded font-mono text-sm bg-[#F0F7FF] resize-none outline-none"
                  placeholder="დაიწყე წერა"
                  value={textB}
                  onChange={(e) => setTextB(e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="flex gap-2 items-center justify-center">
            {diffs ? (
              <Button text="ჩასწორება" onClick={resetToEdit} style="px-3" />
            ) : (
              <Button text="შედარება" onClick={handleCompare} style="px-9" />
            )}
          </div>
        </>
      )}
    </div>
  );
}
