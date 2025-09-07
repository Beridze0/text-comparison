// features/comparison/DiffAreaDisplay.jsx
import React from "react";

// Renders tokens as spans, spacing preserved by adding a space between word tokens
export default function DiffAreaDisplay({ tokens, mode }) {
  if (!tokens || tokens.length === 0)
    return <div className="p-3 text-sm text-gray-400">— empty —</div>;

  return (
    <div className="p-3 border border-gray-300 rounded font-mono text-sm whitespace-pre-wrap break-words bg-white">
      {tokens.map((t, i) => {
        let cls = "";
        if (mode === "letters") {
          cls = t.same ? "" : "bg-blue-300 rounded px-0.5";
        } else {
          if (t.same) cls = "";
          else if (t.added) cls = "bg-green-300 rounded px-0.5";
          else if (t.removed) cls = "bg-red-300 rounded px-0.5";
        }

        const content = t.text;
        const spacer = i < tokens.length - 1 && mode === "words" ? " " : "";

        return (
          <span key={i} className={cls}>
            {content}
            {spacer}
          </span>
        );
      })}
    </div>
  );
}
