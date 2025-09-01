import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Topbar from "./Topbar"; import Sidebar from "./Sidebar";

export default function Layout({ children, routeKey }) {
  return (
    <div className="min-h-screen grid grid-cols-[auto_1fr] font-inter">
      <Sidebar />
      <div className="flex flex-col">
        <Topbar />
        <AnimatePresence mode="wait">
        <motion.main key={routeKey}
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -8 }}
  transition={{ duration: 0.25 }}
  className="p-4 md:p-6 space-y-6 bg-gray-50 dark:bg-gray-900"
>
  {children}
</motion.main>

        </AnimatePresence>
      </div>
    </div>
  );
}
