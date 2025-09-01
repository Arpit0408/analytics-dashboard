import React from "react";

export default function Card({ children, className="" }) {
  return (
    <div className={`rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800
                     bg-[rgb(var(--card))] p-4 ${className}`}>
      {children}
    </div>
  );
}
