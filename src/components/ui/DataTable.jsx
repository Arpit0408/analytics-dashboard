import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper
} from "@tanstack/react-table";

// Dummy Card component
const Card = ({ children }) => (
  <div className=" shadow-md rounded p-4">{children}</div>
);

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("name", {
    header: "Campaigns",
    cell: info => <div className="font-medium">{info.getValue()}</div>
  }),
  columnHelper.accessor("spend", {
    header: "Spend",
    cell: info => (
      <div className="bg-orange-100 px-2 py-1 rounded">
        ${info.getValue().toLocaleString()}
      </div>
    )
  }),
  columnHelper.accessor("installs", {
    header: "Installs",
    cell: info => (
      <div className="text-gray-800">
        ${info.getValue()} <span className="text-green-600">+27.42%</span>
      </div>
    )
  }),
  columnHelper.accessor("conv", {
    header: "Conv.",
    cell: info => <span>{info.getValue()}</span>
  })
];

// 👇 Dummy data per tab
const tabData = {
  Campaigns: [
    { name: "Discovery (LOC)", spend: 6109.89, installs: 44, conv: "0.00%" },
    { name: "Competitor (LOC)", spend: 6109.89, installs: 121, conv: "0.00%" },
    { name: "Competitor (LOC)", spend: 6109.89, installs: 121, conv: "0.00%" },
    { name: "Competitor (LOC)", spend: 6109.89, installs: 121, conv: "0.00%" },

  ],
  "Ad Groups": [
    { name: "Ad Group A", spend: 3200.5, installs: 67, conv: "1.25%" },
    { name: "Ad Group B", spend: 2890.4, installs: 33, conv: "0.97%" },
    { name: "Ad Group A", spend: 3200.5, installs: 67, conv: "1.25%" },

  ],
  Keywords: [
    { name: "Keyword Alpha", spend: 1230.0, installs: 12, conv: "2.45%" },
    { name: "Keyword Beta", spend: 987.34, installs: 9, conv: "1.80%" },
    { name: "Keyword Alpha", spend: 1230.0, installs: 12, conv: "2.45%" },
    { name: "Keyword Alpha", spend: 1230.0, installs: 12, conv: "2.45%" },

  ],
  Ads: [
    { name: "Ad #1", spend: 430.5, installs: 8, conv: "3.10%" },
    { name: "Ad #2", spend: 512.9, installs: 6, conv: "2.75%" },
    { name: "Ad #1", spend: 430.5, installs: 8, conv: "3.10%" },
    { name: "Ad #1", spend: 430.5, installs: 8, conv: "3.10%" },

  ]
};

const tabs = Object.keys(tabData);

export default function TabbedDataTable() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const table = useReactTable({
    data: tabData[activeTab],
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
        <Card className="h-84 flex items-center justify-center text-sm text-gray-500">
      <div className="mb-4">
        <div className="flex space-x-4 border-b">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 -mb-[1px] border-b-2 font-medium transition-all ${
                activeTab === tab
                  ? "border-orange-500 text-orange-600"
                  : "border-transparent text-gray-600 hover:text-orange-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <table className="w-full text-sm">
        <thead className="text-left text-gray-500">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="py-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-t">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
