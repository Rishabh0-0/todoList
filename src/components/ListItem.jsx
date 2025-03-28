import React, { useState } from "react";
import { Repeat, X } from "lucide-react";
import { Reorder, motion } from "framer-motion";
import FancyCheckBox from "./fancyCheckBox";

const ListItem = ({ task, deleteTask, toggleComplete }) => {
  const [dragAmount, setDragAmount] = useState(0);
  const [shake, setShake] = useState(false);
  const [disableVerticalDrag, setDisableVerticalDrag] = useState(false);

  const shakeAnimation = {
    x: [0, -2, 2, -2, 2, 0],
    transition: { duration: 0.3, repeat: 1 },
  };

  return (
    <Reorder.Item
      value={task}
      className="relative w-full rounded-md"
      whileDrag={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      drag={disableVerticalDrag ? false : "y"}
    >
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
        style={{ touchAction: "none" }}
        drag="x" // Enables horzontal dragging
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        onDragStart={(event, info) => {
          if (Math.abs(info.offset.x) > 10) {
            setDisableVerticalDrag(true);
          }
        }}
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
        animate={{ x: 0 }}
      >
        <FancyCheckBox task={task} toggleComplete={toggleComplete} />
        <span className=" flex-1">{task.text}</span>
      </motion.li>
    </Reorder.Item>
  );
};

export default ListItem;
