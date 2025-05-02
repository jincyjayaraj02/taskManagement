
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify'
import PnotF from './pages/PnotF'
import Landing from './pages/Landing'

function App() {



  return (
    <>

  <ToastContainer position="top-center"/>

    <Routes>
    <Route path='/' element={<Landing/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/*' element={<PnotF/>}/>


        <Route path='/dashboard' element={<Dashboard/>}/>

    </Routes>
  
      
    </>
  )
}

export default App
