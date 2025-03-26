import React, { useState } from "react";
import { Repeat, X } from "lucide-react";
import { motion } from "framer-motion";
import FancyCheckBox from "./fancyCheckBox";

const ListItem = ({ task, deleteTask, toggleComplete }) => {
  const [dragAmount, setDragAmount] = useState(0);
  const [shake, setShake] = useState(false);

  const shakeAnimation = {
    x: [0, -2, 2, -2, 2, 0],
    transition: { duration: 0.3, repeat: 1 },
  };

  return (
    <div className="relative w-full rounded-md">
      <motion.div
        className="absolute inset-0 flex items-center justify-end z-0 rounded-lg p-3"
        style={{
          backgroundColor: `rgb(${255 - dragAmount / 2}, 0, 11)`,
        }}
      >
        <motion.div animate={shake ? shakeAnimation : {}}>
          <X strokeWidth={4} color="#EEEEEE" />
        </motion.div>
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

          if (dragValue >= 150 && !shake) {
            setShake(true);
          }
        }}
        onDragEnd={(event, info) => {
          if (info.offset.x < -150) {
            deleteTask(task.id); // Delete when swiped left enough
          }
          setDragAmount(0);
          setShake(false);
        }}
      >
        <FancyCheckBox task={task} toggleComplete={toggleComplete} />
        <span className="cursor-pointer flex-1">{task.text}</span>
      </motion.li>
    </div>
  );
};

export default ListItem;
