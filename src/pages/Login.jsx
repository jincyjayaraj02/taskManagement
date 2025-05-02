import React, { useState } from 'react'
import '../css/Login.css'; 
import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'
import apple from '../assets/apple.svg'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginAPI } from '../services/allApi';

const Login = () => {

   const handleSignup =()=>{
      navigate('/register')
    }


      const navigate = useNavigate();
    

    const [inputData,setInputData] = useState({
        email:'',password:''
      })
      console.log(inputData);



    // login
  const handleLogin = async(e)=>{
    e.preventDefault()
    const { email, password } = inputData;

    if(inputData.email && inputData.password){
    //   alert('make api call')
      try{
        const result = await loginAPI(inputData)
        if(result.status===200){
          sessionStorage.setItem('user',JSON.stringify(result.data.user))
          sessionStorage.setItem('token',result.data.token)
          toast.success("Login successful");
            setInputData({email:'',password:''})
          navigate('/dashboard')

        }}catch(err){
          const status = err?.response?.status;
    
          if (status === 404 || status === 401) {
            toast.error(err.response.data?.message || "Invalid email or password");
          } else {
            toast.error("Something went wrong. Try again.");
          }
    
          console.error("Login error:",err);
        }

    }else{
          toast.warn('please fill the form completely !!')
        }
  
  }



  return (
    <div className='login-wrapper'>
        <div
          className='background-lines'></div>
    
        <div className='login-container'>
          <h2 className='title'>Login</h2>
          <p className='subtitle'>
          Welcome back! Sign in using your <br /> social account or email to continue us
          </p>
    
          <div className='social-icons'>
            <img src={facebook} alt='Facebook' />
            <img src={google} alt='Google' />
            <img src={apple} alt='Apple' />
          </div>
    
          <div className='form-container'>
  
      <div className='input-group'>
        <input value={inputData?.email} onChange={e=>setInputData({...inputData,email:e.target.value})} type='email' name='email' placeholder='Email' className='form-input'    />
        <hr />
      </div>
      <div className='input-group'>
        <input  value={inputData?.password} onChange={e=>setInputData({...inputData,password:e.target.value})} type='password' name='password' placeholder='Password' className='form-input'   />
        <hr />
      </div>
    </div>
    <button onClick={handleLogin} className='login-button' >Login</button>
   <p style={{color:'blue', marginTop:'24px'}}>New User? Please Click here to <button onClick={handleSignup} style={{border:'none'}}>Register</button></p>
 
    
        </div>
      </div>
  )
}

export default Login