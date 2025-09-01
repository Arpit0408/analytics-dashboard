import React, { useState } from "react";

// Dummy Card wrapper
const Card = ({ children }) => (
  <div className="h-77 shadow-md rounded-lg p-4">{children}</div>
);

const tabs = ["Campaigns", "Ad Groups", "Keywords", "Ads"];

// 🎯 Tab-specific data
const tabData = {
  Campaigns: [
    {
      name: "Discovery (LOC)",
      country: "India",
      spend: 6109.89,
      change: 27.42,
      barColor: "bg-orange-500",
      barWidth: "w-[80%]"
    },

    {
      name: "Today tab (LOC)",
      country: "India",
      spend: 6109.89,
      change: 27.42,
      barColor: "bg-yellow-400",
      barWidth: "w-[30%]"
    },
    {
      name: "Branding (LOC)",
      country: "India",
      spend: 6109.89,
      change: 27.42,
      barColor: "bg-yellow-300",
      barWidth: "w-[10%]"
    }
  ],
  "Ad Groups": [
    {
      name: "Performance Ad Group",
      country: "India",
      spend: 3200.5,
      change: 12.5,
      barColor: "bg-blue-500",
      barWidth: "w-[70%]"
    },
    {
      name: "Engagement Group",
      country: "India",
      spend: 2900.4,
      change: 8.3,
      barColor: "bg-blue-400",
      barWidth: "w-[50%]"
    }
  ],
  Keywords: [
    {
      name: "Buy Now",
      country: "India",
      spend: 1240.0,
      change: 6.75,
      barColor: "bg-purple-500",
      barWidth: "w-[60%]"
    },
    {
      name: "Best App",
      country: "India",
      spend: 980.75,
      change: 5.1,
      barColor: "bg-purple-300",
      barWidth: "w-[40%]"
    }
  ],
  Ads: [
    {
      name: "Video Ad #1",
      country: "India",
      spend: 450.0,
      change: 3.9,
      barColor: "bg-pink-500",
      barWidth: "w-[60%]"
    },
    {
      name: "Banner Ad #2",
      country: "India",
      spend: 370.5,
      change: 2.5,
      barColor: "bg-pink-300",
      barWidth: "w-[40%]"
    }
  ]
};

export default function BiggestChangesTable() {
  const [activeTab, setActiveTab] = useState("Campaigns");

  return (
        <Card className="h-84 flex items-center justify-center text-sm text-gray-500">

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-sm -mb-[1px] border-b-2 transition-all ${
              activeTab === tab
                ? "border-orange-500 text-orange-600"
                : "border-transparent text-gray-600 hover:text-orange-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Header */}
      <div className="text-sm">
        <div className="grid grid-cols-[1fr_1fr_1fr] text-gray-500 font-medium pb-2">
          <div>Spend</div>
          <div></div>
          <div className="text-right"></div>
        </div>

        {/* Table Rows */}
        <div className="divide-y">
          {tabData[activeTab].map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[1fr_1fr_1fr] py-3 items-center"
            >
              {/* Left Column */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 bg-green-600 rounded-full"></span>
                  <span className="font-medium text-gray-800">{item.name}</span>
                </div>
                <div className="text-gray-400 text-xs pl-5">{item.country}</div>
              </div>

              {/* Middle Column - Progress Bar */}
              <div className="flex items-center">
                <div className="h-3 bg-gray-200 w-full rounded">
                  <div
                    className={`h-3 ${item.barColor} ${item.barWidth} rounded`}
                  ></div>
                </div>
              </div>

              {/* Right Column */}
              <div className="text-right">
                <div className="text-gray-800 font-medium">
                  ${item.spend.toLocaleString()}
                </div>
                <div className="text-green-600 text-xs">+{item.change}%</div>
              </div>
            </div>
          ))}

          {tabData[activeTab].length === 0 && (
            <div className="text-gray-400 text-center py-6">
              No data available
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
