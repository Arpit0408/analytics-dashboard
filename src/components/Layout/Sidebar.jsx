// Sidebar.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiHome, FiInfo, FiGrid, FiGift, FiSearch } from "react-icons/fi";

const navItems = [
  { icon: <FiHome />, label: "Home" },
  { icon: <FiInfo />, label: "Info" },
  { icon: <FiGrid />, label: "Grid" },
  { icon: <FiGift />, label: "Gift" },
  { icon: <FiSearch />, label: "Search" },
];

export default function Sidebar() {
  return (
    <aside className="w-16 h-screen bg-orange-500 flex flex-col items-center py-4 space-y-6">
      {navItems.map((item, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.2 }}
          className={`w-10 h-10 flex items-center justify-center text-2xl rounded-full text-white ${
            index === 1 ? "bg-orange-300" : ""
          }`}
        >
          {item.icon}
        </motion.button>
      ))}
    </aside>
  );
}
