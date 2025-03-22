import React, { useState } from "react";

const InputItem = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 p-2 border rounded-l outline-none focus:ring-1 focus:ring-blue-400 ring-inset"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAdd}
        className="p-2 rounded-r text-white bg-blue-500 hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  );
};

export default InputItem;
