"use client";
import React, { useState } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTaskAdd = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const handleTaskComplete = (taskId) => {
  const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto p-4 bg-gray-100 rounded shadow-md w-full max-w-[700px] ">
        <div className="header mb-4">
          <h1 className="text-2xl font-bold mb-2">Todo List</h1>
          <div className="input-container flex items-center ">
            <input
              type="text"
              value={newTask}
              onChange={handleInputChange}
              placeholder="Enter a new task..."
              className="py-2 px-4 rounded-l border border-gray-300 focus:outline-none "
            />
            <button
              className="add-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
              onClick={handleTaskAdd}
            >
              Add Task
            </button>
          </div>
          <div className="search-container flex items-center mt-2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchTermChange}
              placeholder="Search tasks..."
              className="py-2 px-4 rounded-l border border-gray-300 focus:outline-none"
            />
            <button
              className="clear-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
              onClick={() => setSearchTerm('')}
            >
              Clear Search
            </button>
          </div>
        </div>
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${
                task.completed ? 'bg-gray-200' : 'bg-white'
              } py-2 px-4 mb-2 rounded shadow`}
            >
              <span className="flex-grow mr-2">{task.text}</span>
              <div className="btn-container">
                <button
                  className={`complete-btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-2 transition-colors ${
                    task.completed && 'bg-gray-500 hover:bg-gray-600'
                  }`}
                  onClick={() => handleTaskComplete(task.id)}
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  className="delete-btn bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  onClick={() => handleTaskDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
