import React from "react";
import Todolist from "./components/Todolist";
import ToolTip from "./components/ToolTip";

const toolTips = ["Swipe left to delete a task.", "Click to complete a task."];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4 space-x-4">
      <ToolTip text={toolTips} />
      <Todolist />
    </div>
  );
};

export default App;
