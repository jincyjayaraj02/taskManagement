import React, { useState } from 'react'
import '../css/TaskForm.css'
import addreaction from '../assets/add_reaction.svg'
import { createAPI } from '../services/allApi';

const colors = [
    '#ADF7B699', '#A817C099', '#FFC09F99', '#B0FFFA99',
    '#FCFF52F0', '#4EFF31', '#5BFFD8FC', '#0038FF99',
    '#622BFF99', '#D21DFFD9', '#B9235099', '#FF0000',
    '#E9E3E899'
  ];

  const tagsList = ['Daily Routine', 'Add More +', 'Study Routine'];

const TaskForm = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        color: colors[0],
        repeat: true,
        cycle: 'Weekly',
        days: ['Sat'],
        tags: tagsList[0],
        status: 'Pending',
      });
   
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedTag, setSelectedTag] = useState(tagsList[0]);
    const [enabled, setEnabled] = useState(true);
    const [cycle, setCycle] = useState('Weekly');
    const [days, setDays] = useState(['Sat']);
    

  
      const toggleDay = (day) => {
        const updatedDays = days.includes(day)
          ? days.filter(d => d !== day)
          : [...days, day];
        setDays(updatedDays);
        setFormData(prev => ({ ...prev, days: updatedDays }));
      };

      const handleChange = (e) => {
        setFormData(prev => ({
          ...prev,
          [e.target.name]: e.target.value
        }));
      };


    
      const handleSubmit = async () => {
        if (formData.name.trim()) {
            try {
                const response = await createAPI(formData); // Call createAPI with formData
                // Handle the response if needed
                console.log('Resource created successfully:', response);
                onSubmit(formData); // Submit to parent
            } catch (error) {
                // Handle error if the API call fails
                console.error('Error creating resource:', error);
            }
        }
    };


       // Fix color  
  const selectColor = (color) => {
    setSelectedColor(color);
    setFormData(prev => ({ ...prev, color }));
  };

//   tag selection
  const selectTag = (tag) => {
    setSelectedTag(tag);
    setFormData(prev => ({ ...prev, tags: tag }));
  }




  return (
    <div className='task-form'>
      <h2>New Task <img src={addreaction} alt='no img' width={'40px'} height={'30px'}  /></h2>
      <div className='task-input-box'>
        <input onChange={handleChange} type='text' name='name' placeholder='Name your new task'  />
      </div>

      <div className='task-input-box mt'>
        <input onChange={handleChange} type='text' name='description' placeholder='Describe your new task'  />
      </div>
      
      <div className='color-selector-container'>
      <label className='color-label'>Card Color</label>
      <div className='color-options'>
      {colors.map((color, index) => (
          <div
            key={index}
            className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => selectColor(color)}
          ></div>
        ))}
      </div>
    </div>

    <div className='repeat-wrapper'>
      <h3 className='repeat-header'>Repeat</h3>

      <div className='repeat-row'>
        {/* Left: Cycle Section */}
        <div className='repeat-section'>
          <div className='toggle-row'>
            <p style={{ fontSize: '14px', color: '#1E1C1CCC', margin: 0 }}>
              Set a cycle for your task
            </p>
            <label className='toggle-switch'>
              <input  type='checkbox'  />
              <span className='slider'></span>
            </label>
          </div>

          {enabled && (
            <>
              <div className='cycle-buttons'>
                {['Daily', 'Weekly', 'Monthly'].map((option) => (
                  <button  className={`cycle-button ${cycle === option ? 'active' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <hr />

              {cycle === 'Weekly' && (
                <>
                  <div className='days-selector'>
                    {'Mon Tue Wed Thu Fri Sat Sun'.split(" ").map((day) => (
                      <button
                        key={day}
                        onClick={() => toggleDay(day)}
                        className={`day-button ${days.includes(day) ? 'selected' : ''}`}
                      >
                        {day.charAt(0)}
                      </button>
                    ))}
                  </div>
                  <hr />
                </>
              )}

              <div className='repeat-text'>
              <span>Repeat</span>
              <span>Every {cycle.toLowerCase()} &gt;</span>
              </div>
              <hr />
            </>
          )}
        </div>

        {/* Right: Tag Section */}
        <div className='repeat-section'>
          <p style={{ fontSize: '14px', color: '#1E1C1CCC' }}>Set a tag for your task</p>
          <div className='tags-container'>
          {tagsList.map((tag, index) => (

           <button  key={index} type='button'onClick={() => selectTag(tag)}
                    className={`tag-button ${selectedTag === tag ? 'selected' : ''}`}
                    >
                     {tag}
            </button>
  ))} 
</div>

{/* {showDailyOptions && selectedTag === 'Daily Routine' && (
    <div className='daily-options'>
      <ul>
        <li>Wake Up</li>
        <li>Exercise</li>
        <li>Breakfast</li>
        <li>Study</li>
      </ul>
    </div> */}
  {/* )} */}
          <hr />
        </div>
      </div>
    </div>

     <div className='fButton'> 
        <button onClick={handleSubmit} className='submit-btn'>✔</button>
        </div>
    </div>
  )
}

export default TaskForm