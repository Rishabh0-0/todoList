import React from "react";
import { motion } from "framer-motion";

const FancyCheckBox = ({ task, toggleComplete }) => {
  return (
    <motion.div
      className={`w-6 h-6 border-2 rounded-md flex items-center justify-center cursor-pointer mr-2 ${
        task.completed ? "bg-red-500 border-red-500" : "border-gray-400"
      }`}
      onClick={() => toggleComplete(task.id)}
      whileTap={{ scale: 0.9 }}
    >
      {task.completed && (
        <motion.svg
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="w-4 h-4 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </motion.svg>
      )}
    </motion.div>
  );
};

export default FancyCheckBox;
