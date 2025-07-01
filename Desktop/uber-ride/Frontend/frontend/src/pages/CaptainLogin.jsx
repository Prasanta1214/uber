import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainLogin = () => {
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')
  
  const[captainData, setCaptainData]  = useState({})
  
    const submitHandler =(e)=>{
      e.preventDefault()
      setCaptainData({
        email:email,
        password:password
      })
      console.log(captainData)
     setEmail('')
     setEmail('')
    }

  return (
    <>
     <div className='p-7 h-screen flex flex-col justify-between'>
      <div >
        <img className='w-16 mb-4' src="uberDriver.png" />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} action="">
        <h3 className='text-xl font-medium mb-2'>What's your email</h3>
        <input
         required
         value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         className='bg-[#eeeeee] mb-7 rounded border-none px-4 py-2  w-full text-lg placeholder: text-base'
          type="email" 
          placeholder='email@gmail.com'/>
        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
        <input 
        required
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2  w-full text-lg placeholder: text-base'
         type="password" 
         placeholder='Password'/>
        <button className='bg-[#111] text-white mb-7 rounded px-4 py-2  w-full text-lg '>Login</button>
      <p className='text-center '>New here? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </form>
      </div>
      <div >
        <Link to='/login' className='bg-[#c3b03086] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg '>
        Sign in as User</Link>
      </div>
      </div>
      
    </>
  )
}

export default CaptainLogin
