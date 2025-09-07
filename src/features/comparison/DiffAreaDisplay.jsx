import React from "react";

export default function DiffAreaDisplay({ tokens }) {
  if (!tokens || tokens.length === 0) {
    return <div className="p-3 text-sm text-gray-400">— empty —</div>;
  }

  return (
    <div className="p-3 border border-gray-300 rounded font-mono text-sm whitespace-pre-wrap break-words bg-white">
      {tokens.map((t, i) => {
        let cls = "";
        if (t.same) cls = "";
        else if (t.added) cls = "bg-green-300 rounded px-0.5";
        else if (t.removed) cls = "bg-red-300 rounded px-0.5";

        return (
          <span key={i} className={cls}>
            {t.text}
          </span>
        );
      })}
    </div>
  );
}
