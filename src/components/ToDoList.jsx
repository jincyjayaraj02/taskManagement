import React, { useEffect, useState } from 'react'
import '../css/ToDoList.css'
import { useNavigate } from 'react-router-dom';
// import { getAllTasksAPI } from '../services/allApi';
// import { useNavigate } from 'react-router-dom';

const ToDoList = ({ tasks, onAddClick }) => {

  
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


  return (
    <div className='container'>
      <h1 className='title'>Today</h1>


      {tasks.map((task, index) => (
      <div key={index} style={{ backgroundColor: task.color || '#FFF' }} className='task ' >
        <input type='checkbox' className='checkbox' />
        <span className='icon'>📖</span>
        <span className='text'>{task.name}</span>
        <div className='spacer'></div>
        <button className='edit-btn'><i class='fa-solid fa-pen-to-square'></i></button>
      </div>
        ))}




     <button  onClick={onAddClick} className="add-button">+</button>

    </div>
  )
}

export default ToDoList