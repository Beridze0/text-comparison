// features/comparison/ComparisonForms.jsx
import React, { useState } from "react";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import Button from "../../ui/Button";
import { diffChars } from "../../utils/diffChars";
import { diffWords } from "../../utils/diffWords";
import DiffAreaDisplay from "./DiffAreaDisplay";

export default function ComparisonForms() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  // null means "edit mode"
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState("letters"); // "letters" on 1st click, then "words" afterwards
  const [clickCount, setClickCount] = useState(0);

  function handleCompare() {
    const nextMode = clickCount === 0 ? "letters" : "words";
    setMode(nextMode);

    let diff =
      nextMode === "letters"
        ? diffChars(textA, textB)
        : diffWords(textA, textB);

    // 🔹 after first compare, treat all differences as "added"
    if (clickCount > 0 && nextMode === "words") {
      diff.resultA = diff.resultA.map((t) =>
        t.same ? t : { ...t, added: true, removed: false }
      );
      diff.resultB = diff.resultB.map((t) =>
        t.same ? t : { ...t, added: true, removed: false }
      );
    }

    setResult(diff);
    setClickCount((c) => c + 1);
  }

  function resetToEdit() {
    setResult(null);
    // keep mode progression; if you want to always start from letters again, also reset clickCount:
    // setClickCount(0); setMode("letters");
  }

  const inEdit = result === null;

  return (
    <div className="flex flex-col mt-10 w-full gap-4">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-start">
        {/* Left */}
        <div className="min-h-[220px]">
          {inEdit ? (
            <textarea
              className="w-full h-[220px] p-3 border border-gray-300 rounded font-mono text-sm resize-none"
              placeholder="Text A…"
              value={textA}
              onChange={(e) => setTextA(e.target.value)}
            />
          ) : (
            <DiffAreaDisplay tokens={result.resultA} mode={mode} />
          )}
        </div>

        <div className="pt-2">
          <TfiArrowsHorizontal size={20} />
        </div>

        {/* Right */}
        <div className="min-h-[220px]">
          {inEdit ? (
            <textarea
              className="w-full h-[220px] p-3 border border-gray-300 rounded font-mono text-sm resize-none"
              placeholder="Text B…"
              value={textB}
              onChange={(e) => setTextB(e.target.value)}
            />
          ) : (
            <DiffAreaDisplay tokens={result.resultB} mode={mode} />
          )}
        </div>
      </div>

      <div className="flex gap-2 items-center justify-center">
        {inEdit ? (
          <Button text="შედარება" onClick={handleCompare} />
        ) : (
          <>
            <Button
              text={
                mode === "letters"
                  ? "გაგრძელება (სიტყვებით)"
                  : "თავიდან შედარება"
              }
              onClick={handleCompare}
            />
            <Button
              text="ჩასწორება"
              onClick={resetToEdit}
              variant="secondary"
            />
          </>
        )}
      </div>

      {!inEdit && (
        <p className="text-xs text-center text-gray-500">
          რეჟიმი:{" "}
          {mode === "letters"
            ? "ასოებით განსხვავებები (ლურჯი)"
            : "დამატებული/წაშლილი სიტყვები (მწვანე/წითელი)"}
        </p>
      )}
    </div>
  );
}
