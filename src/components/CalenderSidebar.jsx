import React from 'react'
import '../css/CalenderSidebar.css'

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dates = [
  "29", "30", "31", "1", "2", "3", "4",
  "5", "6", "7", "8", "9", "10", "11",
  "12", "13", "14", "15", "16", "17", "18",
  "19", "20", "21", "22", "23", "24", "25",
  "26", "27", "28", "29", "1", "2", "3"
];


const CalenderSidebar = ({ onTodayClick }) => {
  return (
    <div className='sidebar'>
      <div className='calendar'>
        <div className='month-year'> 
        <span className='month-text'>February</span>
        <span className='year-text'>2024</span>
        </div>
        <div className='days-grid'>
        {daysOfWeek.map((day) => (
          <span key={day} >{day}</span>
        ))}
          {/* Example days */}
          {dates.map((date, index) => (
            <div className={`day ${date === '15' ? 'active-day' : '} ${date === ' ? 'empty' : ""}`} key={index}>{date}</div>
          ))}
        </div>
      </div>
      <div className='section'>
    <h4>Tasks</h4>
    <div className='item-row' onClick={onTodayClick}>
      <span>Today</span>
      <span>2</span>
    </div>
  </div>

  <div className='section'>
    <h4>Lists</h4>
    <div className='item-row'>
      <span>Daily Routine</span>
      <span>1</span>
    </div>
    <div className='item-row'>
      <span>Study</span>
      <span>0</span>
    </div>
  </div>
    </div>
  )
}

export default CalenderSidebar