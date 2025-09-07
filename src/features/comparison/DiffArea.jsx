import React, { useRef } from "react";

export default function DiffArea({ value, onChange, diff, placeholder }) {
  const textareaRef = useRef(null);
  const backdropRef = useRef(null);

  // keep scroll synced
  const handleScroll = () => {
    if (!textareaRef.current || !backdropRef.current) return;
    backdropRef.current.scrollTop = textareaRef.current.scrollTop;
    backdropRef.current.scrollLeft = textareaRef.current.scrollLeft;
  };

  return (
    <div className="relative w-full h-[250px]">
      {/* BACKDROP (shows diff with highlights) */}
      <div
        ref={backdropRef}
        className="absolute inset-0 p-3 rounded-lg border border-gray-300 bg-white font-mono text-sm whitespace-pre-wrap break-words overflow-auto"
      >
        {diff && diff.length > 0
          ? diff.map((item, idx) => (
              <span
                key={idx}
                className={item.same ? "" : "bg-green-300 rounded px-0.5"}
              >
                {item.word + " "}
              </span>
            ))
          : value}
      </div>

      {/* TEXTAREA (transparent text, caret visible) */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={handleScroll}
        placeholder={placeholder}
        className="absolute inset-0 w-full h-full resize-none p-3 rounded-lg border border-gray-300 font-mono text-sm bg-transparent text-transparent caret-black selection:bg-blue-200/60"
        style={{ lineHeight: "1.5" }}
      />
    </div>
  );
}
