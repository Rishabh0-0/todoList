import React, { useEffect, useState } from "react";
import InputItem from "./InputItem";
import ListItem from "./ListItem";
import { nanoid } from "nanoid";

const Todolist = () => {
  const [tasks, setTasks] = useState([]);

  // Load task from the local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    console.log("Loaded tasks from localStorage:", storedTasks);
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    console.log("Saving tasks to localStorage:", tasks);
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  // Adding Task
  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    const newTask = { id: nanoid(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Deleting a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Toggle complete state
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
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
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
