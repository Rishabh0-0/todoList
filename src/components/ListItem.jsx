import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const ListItem = ({ task, deleteTask, toggleComplete }) => {
  const [dragAmount, setDragAmount] = useState(0);

  return (
    <div className="relative w-full">
      <motion.div
        className="absolute inset-0 flex items-center justify-end p-3 rounded-md z-0 bg-red"
        style={{
          backgroundColor: `rgb(${255 - dragAmount / 3}, 0, ${
            11 - dragAmount / 3
          })`,
        }}
      >
        <X strokeWidth={4} color="#EEEEEE" />
      </motion.div>

      <motion.li
        className={`relative z-10 flex justify-between items-center p-3 border-b bg-gray-100 rounded-md mb-2 shadow-sm ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        drag="x" // Enables horzontal dragging
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        onDrag={(event, info) => {
          let dragValue = Math.min(Math.abs(info.offset.x), 150);
          setDragAmount(dragValue);
        }}
        onDragEnd={(event, info) => {
          if (info.offset.x < -150) {
            deleteTask(task.id); // Delete when swiped left enough
          }
          setDragAmount(0);
        }}
      >
        <span
          onClick={() => toggleComplete(task.id)}
          className="cursor-pointer flex-1"
        >
          {task.text}
        </span>
      </motion.li>
    </div>
  );
};

export default ListItem;
