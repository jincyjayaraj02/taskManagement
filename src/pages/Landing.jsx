import React from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom';

const Landing = () => {

    const navigate = useNavigate();

    const handleExplore = ()=>{
       navigate('/register')
    }
  return (
    <div className='container'>

    
        <div className='register-container'>
          <h2 className='title'><img src={logo} alt="" /></h2>
          <p className='subtitle'>
          Your Task Management buddy, <br /> always here to help you stay organized.
          </p>
    
    
      
      
    <button onClick={handleExplore}  class='register-button' >Explore More</button>
    
    
        </div>
      </div>
  )
}

export default Landing