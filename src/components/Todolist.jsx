import React, { useState } from "react";
import InputItem from "./InputItem";
import ListItem from "./ListItem";

const Todolist = () => {
  const [tasks, setTasks] = useState([]);

  // Adding Task
  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  // Deleting a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Toggle complete state
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-md w-full mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Todo List
      </h1>
      <InputItem addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
