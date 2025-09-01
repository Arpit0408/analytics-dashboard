import { createSlice } from "@reduxjs/toolkit";
import { seed } from "../../data/seed";

const initialState = {
  dateRange: { from: "2025-07-05", to: "2025-07-11" },
  region: "India",
  kpis: seed.kpis,
  spendTrend: seed.spendTrend,
  campaigns: seed.campaigns,    // table rows

  // NEW: Filters
  filters: {
    status: "All",       
    type: "All",         
    country: "India",    
    goal: "All",         
    keyword: "",         
  }
};

const slice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDateRange: (s, a) => { s.dateRange = a.payload; },
    setRegion: (s, a) => { s.region = a.payload; },
    setCampaigns: (s, a) => { s.campaigns = a.payload; },

    // NEW: Filter-related actions
    setFilters: (s, a) => { s.filters = { ...s.filters, ...a.payload }; },
    resetFilters: (s) => {
      s.filters = {
        status: "All",
        type: "All",
        country: "India",
        goal: "All",
        keyword: "",
      };
    },
  }
});

export const {
  setDateRange,
  setRegion,
  setCampaigns,
  setFilters,
  resetFilters,
} = slice.actions;

export default slice.reducer;
