import React, { useEffect, useState } from 'react'
import CalenderSidebar from '../components/CalenderSidebar'
import TaskForm from '../components/TaskForm'
import '../css/Dashboard.css'
import Header from '../components/Header'
import ToDoList from '../components/ToDoList'
const Dashboard = () => {



    const [view, setView] = useState("task");
      // Define tasks state here
      const [tasks, setTasks] = useState(() => {
        // Load from localStorage on initial render
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
        
      });

    




  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);



  // Handle adding a new task
  const handleAddTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setView("task"); // Switch to task view after adding
  };
  return (
    <>
    <Header insideDashboard={true}/>
    <div className="app-container">
   <CalenderSidebar onTodayClick={() => setView("todo")} />
    <div style={{ flex: 1 }}>
        {view === "task" 
        ? <ToDoList tasks={tasks} onAddClick={() => setView("todo")} /> 
        :  <TaskForm onSubmit={handleAddTask} />}
      </div>
    </div> 
    </>
  )
}

export default Dashboard