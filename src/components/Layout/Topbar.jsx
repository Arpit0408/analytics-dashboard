import React, { useState } from "react";
import { FiCalendar, FiFilter, FiMenu, FiX } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setDateRange } from "../../features/dashboard/dashboardSlice";
import FilterPanel from "./FilterPanel";
import ControlledDatepicker from "./ControlledDatepicker";
import Sidebar from "./Sidebar"; // import Sidebar here
import { motion, AnimatePresence } from "framer-motion";

export default function Topbar() {
  const dispatch = useDispatch();

  const [pdfOption, setPdfOption] = useState("PDF Name");
  const [showPdfDropdown, setShowPdfDropdown] = useState(false);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [showMobileDatepicker, setShowMobileDatepicker] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false); // sidebar state
  const [dateRange, setDateRangeState] = useState({
    startDate: "2025-07-05",
    endDate: "2025-07-11",
  });

  const handleDateChange = (newValue) => {
    if (newValue?.startDate && newValue?.endDate) {
      setDateRangeState(newValue);
      dispatch(setDateRange({ from: newValue.startDate, to: newValue.endDate }));
    }
  };

  return (
    <>
      <header className="flex items-center justify-between flex-nowrap w-full h-auto px-3 sm:px-8 py-2 bg-white shadow-sm relative z-50">
        {/* Left: Title and subtitle */}
        <div className="min-w-0">
          <h1 className="text-base sm:text-2xl font-semibold text-gray-900 truncate">
            Overview
          </h1>
          <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 hidden sm:block truncate">
            A consolidated view of your app efficiency by storefronts and key metrics.
          </p>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2 sm:gap-4 flex-nowrap">
          {/* PDF Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowPdfDropdown((v) => !v)}
              className="flex items-center border border-gray-300 rounded-md px-2 sm:px-4 py-1 sm:py-2 w-[120px] sm:w-[210px] bg-white text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition truncate"
            >
              <FaFilePdf className="text-red-600 mr-2 text-base sm:text-lg" />
              <span className="truncate">{pdfOption}</span>
            </button>

            {showPdfDropdown && (
              <ul className="absolute top-12 left-0 bg-white border border-gray-300 rounded-lg shadow-lg z-30 w-full text-sm">
                {["Campaign Report", "Performance Summary", "Weekly Trends"].map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setPdfOption(item);
                      setShowPdfDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Datepicker - Desktop */}
          <div className="hidden sm:block">
            <ControlledDatepicker dateRange={dateRange} onChange={handleDateChange} />
          </div>

          {/* Datepicker Icon - Mobile */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setShowMobileDatepicker((v) => !v)}
              className="p-1 text-gray-600 hover:bg-gray-100 rounded-md transition"
              aria-label="Open date filter"
            >
              <FiCalendar className="text-base" />
            </button>

            {showMobileDatepicker && (
              <div className="absolute right-0 top-10 z-50 bg-white shadow-md border rounded-md p-3">
                <ControlledDatepicker
                  dateRange={dateRange}
                  onChange={(val) => {
                    handleDateChange(val);
                    setShowMobileDatepicker(false);
                  }}
                />
              </div>
            )}
          </div>

          {/* Filter Button */}
          <div className="relative">
            <button
              className="rounded-md text-xl p-1 bg-white transition"
              onClick={() => setShowFilterPanel((v) => !v)}
              aria-label="Filter options"
            >
              <FiFilter className="text-gray-600" />
            </button>

            {showFilterPanel && (
              <div className="absolute right-0 top-12 z-40">
                <FilterPanel onClose={() => setShowFilterPanel(false)} />
              </div>
            )}
          </div>

          {/* Hamburger Icon - Mobile only */}
          <button
            onClick={() => setShowMobileSidebar(true)}
            className="sm:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Open sidebar"
          >
            <FiMenu className="text-2xl text-gray-700" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Panel */}
      <AnimatePresence>
        {showMobileSidebar && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileSidebar(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-30 bg-orange-500 shadow-lg z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h2 className="font-semibold text-lg text-white">Menu</h2>
                <button
                  onClick={() => setShowMobileSidebar(false)}
                  aria-label="Close sidebar"
                  className="p-2 text-white rounded-md hover:bg-gray-100 transition"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              {/* Render your Sidebar component */}
              <div className="flex-1 overflow-auto">
                <Sidebar />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
