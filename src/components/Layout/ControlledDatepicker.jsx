import React, { useState, useRef, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { FiCalendar } from "react-icons/fi";

export default function ControlledDatepicker({ dateRange, onChange }) {
  const [isOpen, setIsOpen] = useState(false);


  // Clicking outside closes datepicker
  const ref = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div ref={ref} className="relative">
      {/* Custom input box */}
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center   rounded-lg px-4 py-2 bg-white  hover:shadow-md transition cursor-pointer focus:outline-none"
      >
        <FiCalendar className="text-2xl mr-3 text-gray-600" />
        <div className="text-left">
          <p className="text-[10px] text-gray-400 leading-none">Select Range</p>
          <span className="text-sm text-gray-800 select-none">
            {dateRange.startDate && dateRange.endDate
              ? `${new Date(dateRange.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })} - ${new Date(dateRange.endDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}`
              : "Pick a date range"}
          </span>
        </div>
      </button>

      {/* Datepicker popup */}
      {isOpen && (
        <div className="absolute z-50 mt-2">
          <Datepicker
            value={dateRange}
            onChange={(newValue) => {
              onChange(newValue);
              // Close on selection
              if (newValue?.startDate && newValue?.endDate) {
                setIsOpen(false);
              }
            }}
            showShortcuts
            primaryColor="blue"
            displayFormat="MMM D, YYYY"
            inputClassName="hidden" // hide default input
            useRange
          />
        </div>
      )}
    </div>
  );
}
