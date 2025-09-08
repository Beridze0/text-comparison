import React from "react";

export default function BottomSheet({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* sheet */}
      <div
        className={`relative w-full bg-white rounded-t-2xl p-4 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-3"></div>
        {children}
      </div>
    </div>
  );
}
