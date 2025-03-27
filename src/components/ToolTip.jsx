import React, { useState } from "react";
import { motion } from "framer-motion";
import { Info, ChevronsRight } from "lucide-react";

const ToolTip = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition ${
          isOpen ? "bg-gray-800 hover:bg-gray-600" : ""
        }`}
      >
        <Info size={20} />
      </button>

      {/* Tooltip Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-12 bg-gray-800 text-white p-3 rounded-md shadow-lg w-60"
      >
        {text.map((line, index) => (
          <p key={index} className="text-sm flex items-center">
            <ChevronsRight size={15} />
            {line}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

export default ToolTip;
