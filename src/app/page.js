// "use client";
// import React, { useState } from 'react';

// const Home = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const handleSearchTermChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleTaskAdd = () => {
//     if (newTask.trim() !== '') {
//       const newTaskObj = {
//         id: Date.now(),
//         text: newTask,
//         completed: false,
//       };
//       setTasks([...tasks, newTaskObj]);
//       setNewTask('');
//     }
//   };

//   const handleTaskComplete = (taskId) => {
//   const updatedTasks = tasks.map((task) => {
//       if (task.id === taskId) {
//         return {
//           ...task,
//           completed: !task.completed,
//         };
//       }
//       return task;
//     });
//     setTasks(updatedTasks);
//   };

//   const handleTaskDelete = (taskId) => {
//     const updatedTasks = tasks.filter((task) => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   const filteredTasks = tasks.filter((task) =>
//     task.text.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="container mx-auto p-4 bg-gray-100 rounded shadow-md w-full max-w-[700px] ">
//         <div className="header mb-4">
//           <h1 className="text-2xl font-bold mb-2">Todo List</h1>
//           <div className="input-container flex items-center ">
//             <input
//               type="text"
//               value={newTask}
//               onChange={handleInputChange}
//               placeholder="Enter a new task..."
//               className="py-2 px-4 rounded-l border border-gray-300 focus:outline-none "
//             />
//             <button
//               className="add-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
//               onClick={handleTaskAdd}
//             >
//               Add Task
//             </button>
//           </div>
//           <div className="search-container flex items-center mt-2">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchTermChange}
//               placeholder="Search tasks..."
//               className="py-2 px-4 rounded-l border border-gray-300 focus:outline-none"
//             />
//             <button
//               className="clear-btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
//               onClick={() => setSearchTerm('')}
//             >
//               Clear Search
//             </button>
//           </div>
//         </div>
//         <ul className="task-list">
//           {filteredTasks.map((task) => (
//             <li
//               key={task.id}
//               className={`task-item ${
//                 task.completed ? 'bg-gray-200' : 'bg-white'
//               } py-2 px-4 mb-2 rounded shadow`}
//             >
//               <span className="flex-grow mr-2">{task.text}</span>
//               <div className="btn-container">
//                 <button
//                   className={`complete-btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mr-2 transition-colors ${
//                     task.completed && 'bg-gray-500 hover:bg-gray-600'
//                   }`}
//                   onClick={() => handleTaskComplete(task.id)}
//                 >
//                   {task.completed ? 'Undo' : 'Complete'}
//                 </button>
//                 <button
//                   className="delete-btn bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
//                   onClick={() => handleTaskDelete(task.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react'
import Image from 'next/image'
import profile from './profile.png'
import first from './first.png'
import one from './one.png'
import icon from './icon.png'
import logos from './logos.png'
 const Home = () => {
  return (
    <div>
      <div class="grid place-items-center bg-gradient-to-r from-teal-500 to-teal-600">
        <h1 class="text-white text-4xl font-poppins  font-bold leading-normal mt-5">Backed By The Best</h1>
        <p class="text-white text-1xl font-poppins font-normal  leading-normal">Wealthup is backed and supported by</p>
        <Image src={first} height={150} alt="sponsors"></Image>
      </div>
      <div class="bg-blue-900 pt-5 ">
        <h1 class="text-white text-4xl font-poppins font-extrabold text-center relative top-[20px]">Transforming Lives - Financially!</h1>


        <div class="flex items-center justify-center space-x-5 h-350 text-white relative top-[-20px]">
          <figcaption class="flex items-start space-x-3">
            <Image class="rounded-full w-20 h-55" width="200" height="200" src={profile} alt="profile picture" />
            <div class="space-y-0.5 font-medium dark:text-white">
              <div>Simrin Sirur</div>
              <div>Journalist</div>
              <div class="text-sm dark:text-gray-400">The Print, Gurugram</div>
              <div class="w-[450px] text-l relative top-[10px]">`"I was afraid to learn about investments and savings because it seemed to fly over my head, but Ankit was extremely patient and walked me through everything... I now feel more confident to handle my own money."`</div>
            </div>
          </figcaption>
          <Image class="rounded-full w-6 h-7" src={icon} alt="arrow" />
          <Image class="w-150 h-100 " src={one} alt="grid-picture" />
        </div>



      </div>
      <div className="flex justify-center bg-gradient-to-b from-[#1FB3A5] to-[#18A1A7] ">
        <Image className='object-cover h-35 w-98' src={logos} alt="Logos"/>
      </div>
    </div>
  )
}

export default Home;
