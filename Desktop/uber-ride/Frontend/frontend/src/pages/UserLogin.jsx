import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const UserLogin = () => {
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')

  const[userData, setUserData]  = useState({})

  const submitHandler =(e)=>{
    e.preventDefault()
    setUserData({
      email:email,
      password:password
    })
    console.log(userData)
   setEmail('')
   setEmail('')
  }


  return (
    <>
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div >
        <img className='w-16 mb-8' src="uber1.png" />
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
      <p className='text-center '>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </form>
      </div>
      <div >
        <Link to='/captain-login' className='bg-[#74933486] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg '>Sign in as Captain</Link>
      </div>
      </div>
    </>
  )
}

export default UserLogin
