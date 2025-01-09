import { useState } from 'react'
import './App.css'
import toast,{ Toaster } from 'react-hot-toast'
import { useAuth } from './config/authContext'

function App() {
  const {isAuthenticated}=useAuth();

  console.log("isAuthenticated ",isAuthenticated);
  

  return (
    <>
      <Toaster/>
      <button onClick={()=>{
        toast.success('success!')
      }}>click me</button>
    </>
  )
}

export default App
