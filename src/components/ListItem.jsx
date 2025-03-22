import React from "react";
import { X } from "lucide-react";

const ListItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <li
      className={`flex justify-between items-center p-3 border-b bg-gray-100 rounded-md mb-2 shadow-sm ${
        task.completed ? "line-through text-gray-400" : ""
      }`}
    >
      <span
        onClick={() => toggleComplete(task.id)}
        className="cursor-pointer flex-1"
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        <X strokeWidth={4} />
      </button>
    </li>
  );
};

export default ListItem;
