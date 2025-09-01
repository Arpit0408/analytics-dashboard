import React from "react";

import Card from "./Card";
export default function Kpi({ label, value, change }) {
  const pos = change >= 0;
  return (
    <Card className="flex flex-col gap-1">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-xl font-semibold">{typeof value === "number" ? value.toLocaleString() : value}</div>
      <div className={`text-xs ${pos ? "text-green-600" : "text-red-600"}`}>
        {pos ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
      </div>
    </Card>
  );
}
