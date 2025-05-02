import React, { useState } from 'react'
import '../css/Register.css'; 
import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'

import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../services/allApi';
import { toast } from 'react-toastify';

const Register = () => {  
  const handleSignin=()=>{
    navigate('/login')
  }

 
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: ''
  });


  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("inside handleRegister");

    if (inputData.username && inputData.email && inputData.password) {
    //  alert('make api call')
    try{
      const result = await registerAPI(inputData)
              console.log(result);
              
              if(result.status==200){
                toast.success(`Welcome ${result.data?.username} , Please login to explore more!!`)
                // to go to login page after click on register
                navigate('/login')
                setInputData({username:'', email:'',password:''})
              }
              else{
                if(result.response.status==406){
                  toast(result.response.data)
                  setInputData({username:'', email:'',password:''})
                  navigate('/login')
                }
              }
              
            }catch(err){
              console.log(err);
              
            }
    }else{
      toast.warning("plz fill the form")
 
 
  }
}

 
  return (
    <div className='register-wrapper'>
    <div
      className='background-lines'></div>

    <div className='register-container'>
      <h2 className='title'>Register</h2>
      <p className='subtitle'>
        Welcome ! Sign in using your social <br /> account or email to continue us
      </p>

      <div className='social-icons'>
        <img src={facebook} alt='Facebook' />
        <img src={google} alt='Google' />
        <img src={apple} alt='Apple' />
      </div>

      <div class='form-container'>
  <div class='input-group'>
    <input value={inputData?.username} onChange={e=>setInputData({...inputData,username:e.target.value})}  type='text' name='username' placeholder='UserName' class='form-input' />
    <hr />
  </div>
  <div class='input-group'>
    <input  value={inputData?.email} onChange={e=>setInputData({...inputData,email:e.target.value})}   type='email' name='email' placeholder='Email' class='form-input'  />
    <hr />
  </div>
  <div class='input-group'>
    <input  value={inputData?.password} onChange={e=>setInputData({...inputData,password:e.target.value})}  type='password' name='password' placeholder='Password' class='form-input'  />
    <hr />
  </div>
</div>
<button onClick={handleRegister} class='register-button' >Register</button>
<p style={{color:'blue', marginTop:'24px'}}>Already a user? Please Click here to  <button onClick={handleSignin} style={{border:'none'}}>Login</button></p>


    </div>

  </div>
 
  )
}

export default Register