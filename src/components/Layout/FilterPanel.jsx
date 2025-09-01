import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, resetFilters } from "../../features/dashboard/dashboardSlice";
import { MdFilterAlt } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function FilterPanel({ onClose }) {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.dashboard.filters);

  const handleStatusChange = (e) => {
    dispatch(setFilters({ status: e.target.value }));
  };

  const handleKeywordChange = (e) => {
    dispatch(setFilters({ keyword: e.target.value }));
  };

  return (
    <div className="w-80 bg-white shadow-2xl border border-gray-200 rounded-xl p-5 space-y-5 relative animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-3">
        <div className="flex items-center gap-2 text-gray-800 font-semibold text-base">
          <MdFilterAlt className="text-lg text-blue-600" />
          Filters
        </div>
        {onClose && (
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <IoClose className="text-xl" />
          </button>
        )}
      </div>

      {/* Status Filter */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Campaign Status</label>
        <select
          value={filters.status}
          onChange={handleStatusChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Running">Running</option>
          <option value="Paused">Paused</option>
          <option value="Campaign on hold">Campaign on hold</option>
        </select>
      </div>

      {/* Keyword Filter */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Search Keyword</label>
        <input
          type="text"
          value={filters.keyword}
          onChange={handleKeywordChange}
          placeholder="e.g. Summer campaign"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-between pt-2 border-t">
        <button
          onClick={() => dispatch(resetFilters())}
          className="text-sm text-red-500 hover:underline"
        >
          Reset
        </button>
        {onClose && (
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-1.5 text-sm rounded-lg hover:bg-blue-700 transition"
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
}
