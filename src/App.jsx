import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Overview from "./pages/Overview";
import Layout from "./components/Layout/Layout";
import './App.css';

export default function App() {
  const loc = useLocation();
  return (
    <Layout routeKey={loc.pathname}>
      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </Layout>
  );
}
