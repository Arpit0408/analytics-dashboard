import React, { useState } from "react";
import { FiCalendar, FiFilter } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";
import Datepicker from "react-tailwindcss-datepicker";
import { useDispatch } from "react-redux";
import { setDateRange } from "../../features/dashboard/dashboardSlice";
import FilterPanel from "./FilterPanel";
import ControlledDatepicker from "./ControlledDatepicker";

export default function Topbar() {
  const dispatch = useDispatch();

  const [pdfOption, setPdfOption] = useState("PDF Name");
  const [showPdfDropdown, setShowPdfDropdown] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [dateRange, setDateRangeState] = useState({
    startDate: "2025-07-05",
    endDate: "2025-07-11",
  });

  // Fix datepicker expects { startDate, endDate }, not { from, to }
  // Make sure the initial state matches what react-tailwindcss-datepicker expects

  const handleDateChange = (newValue) => {
    if (newValue?.startDate && newValue?.endDate) {
      setDateRangeState(newValue);
      dispatch(setDateRange({ from: newValue.startDate, to: newValue.endDate }));
    }
  };

  return (
    <header className="relative flex items-center justify-between h-20 px-8  bg-white shadow-sm">
      {/* Left: Title and subtitle */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Overview dashboard</h1>
        <p className="text-xs text-gray-500 mt-0.5 ">
          A consolidated view of your app efficiency by storefronts and key metrics.
        </p>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-6 relative">
        {/* PDF Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowPdfDropdown((v) => !v)}
            className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-[210px] bg-white text-sm font-medium shadow-sm hover:shadow-md transition"
          >
            <FaFilePdf className="text-red-600 mr-3 text-lg" />
            <span>{pdfOption}</span>
          </button>

          {showPdfDropdown && (
            <ul className="absolute top-14 left-0 bg-white border border-gray-300 rounded-lg shadow-lg z-30 w-full text-sm">
              {["Campaign Report", "Performance Summary", "Weekly Trends"].map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setPdfOption(item);
                    setShowPdfDropdown(false);
                  }}
                  className="px-5 py-3 hover:bg-gray-100 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Date Picker */}
      <ControlledDatepicker
  dateRange={dateRange}
  onChange={(newVal) => {
    setDateRangeState(newVal);
    dispatch(setDateRange({ from: newVal.startDate, to: newVal.endDate }));
  }}
/>

        {/* Filter Button */}
        <div className="relative">
          <button
            className="rounded-lg text-2xl p-2 bg-white  transition"
            onClick={() => setShowFilterPanel((v) => !v)}
            aria-label="Filter options"
          >
            <FiFilter className="text-xl text-gray-600" />
          </button>

          {showFilterPanel && (
            <div className="absolute right-0 top-14 z-40">
              <FilterPanel onClose={() => setShowFilterPanel(false)} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
