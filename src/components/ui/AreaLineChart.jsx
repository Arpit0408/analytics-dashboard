import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const dummyData = [
  { day: "5 July", spend: 27.42 },
  { day: "5 July", spend: 28.1 },
    { day: "5 July", spend: 38.1 },

  { day: "5 July", spend: 30.5 },
  { day: "5 July", spend: 59.2 },
  { day: "5 July", spend: 27.8 },
  { day: "5 July", spend: 26.9 },
  { day: "6 July", spend: 29.3 },
  { day: "4 July", spend: 34.3 },
    { day: "4 July", spend: 44.3 },

];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white border border-gray-300 text-xs p-2 rounded shadow">
        <div>
          <strong>{payload[0].payload.day}</strong>
        </div>
        <div style={{ color: "#FF8C00" }}>${payload[0].value.toFixed(2)}%</div>
      </div>
    );
  }
  return null;
};

// Dummy Card wrapper
const Card = ({ children }) => (
  <div className=" shadow-md rounded-lg p-4">{children}</div>
);

export default function AreaLineChart() {
  return (
        <Card className="h-84 flex items-center justify-center text-sm text-gray-500">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-sm font-medium">
          <div className="h-2 w-2 bg-orange-500 rounded-sm" />
          <span>Spend</span>
        </div>

        <div className="flex gap-3 opacity-50">
          {/* Just icons, no functionality */}
          <div className="h-4 w-4 bg-cyan-300 rounded-sm" />
          <div className="h-4 w-4 bg-gray-300 rounded-sm" />
          <div className="h-4 w-4 bg-gray-300 rounded-sm" />
          <div className="h-4 w-4 bg-gray-300 rounded-sm" />
        </div>
      </div>

      <div className="h-59">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dummyData}>
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(value) => `$${value.toFixed(2)}%`}
              tick={{ fontSize: 12 }}
              width={40}
              axisLine={false}
              tickLine={false}
              tickCount={6}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="spend"
              stroke="#FF8C00"
              fill="#FF8C00"
              strokeWidth={2}
              fillOpacity={0.15}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Label */}
      <div className="mt-3 flex items-center gap-2 text-sm">
        <div className="h-3 w-3 bg-orange-500 rounded-sm" />
        <span className="text-gray-700">India</span>
      </div>
    </Card>
  );
}
