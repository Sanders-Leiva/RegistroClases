import React, { useState, useEffect } from "react";
import axios from "axios";

const Tareas = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async () => {
    if (taskInput.trim() !== "") {
      try {
        const response = await axios.post('http://localhost:5000/api/tasks', { text: taskInput, completed: false });
        setTasks([...tasks, response.data]);
        setTaskInput("");
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  const handleToggleTask = async (index) => {
    const task = tasks[index];
    try {
      const response = await axios.put(`http://localhost:5000/api/tasks/${task._id}`, { ...task, completed: !task.completed });
      const newTasks = tasks.map((t, i) => (i === index ? response.data : t));
      setTasks(newTasks);
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  const handleDeleteTask = async (index) => {
    const task = tasks[index];
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
        Tareas
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-8">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nueva tarea"
        />
        <button
          onClick={handleAddTask}
          className="w-full py-3 px-6 mt-4 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Agregar Tarea
        </button>
        <ul className="mt-6 space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg shadow-md flex justify-between items-center ${
                task.completed ? "bg-green-200" : "bg-red-200"
              }`}
            >
              <span
                className={`text-lg ${task.completed ? "line-through" : ""}`}
                onClick={() => handleToggleTask(index)}
              >
                {task.text}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleToggleTask(index)}
                  className={`py-1 px-3 font-semibold rounded-lg transition duration-300 ${
                    task.completed
                      ? "bg-yellow-500 text-white hover:bg-yellow-600"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {task.completed ? "Pendiente" : "Completada"}
                </button>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="py-1 px-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tareas;