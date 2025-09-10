import React, { useState } from "react";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import { diffTexts } from "../../utils/diffTexts";
import Loading from "../../ui/Loading";

import ComparisonArea from "./ComparisonArea";
import CompareActions from "./CompareActions";
import { toast } from "react-toastify";

export default function ComparisonForms() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [diffs, setDiffs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleCompare() {
    if (!textA.trim() || !textB.trim()) {
      toast.error("გთხოვთ შეიყვანოთ ტექსტი");
      return;
    }
    setIsLoading(true);
    setProgress(0);

    const start = performance.now();
    const duration = 2000;

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
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <ComparisonArea
              value={textA}
              onChange={setTextA}
              tokens={diffs?.resultA}
              placeholder="დაიწყე წერა"
            />

            <div className="px-4">
              <TfiArrowsHorizontal className="size-5 rotate-90 sm:rotate-0 my-3" />
            </div>

            <ComparisonArea
              value={textB}
              onChange={setTextB}
              tokens={diffs?.resultB}
              placeholder="დაიწყე წერა"
            />
          </div>

          <CompareActions
            diffs={diffs}
            onCompare={handleCompare}
            onReset={resetToEdit}
          />
        </>
      )}
    </div>
  );
}
