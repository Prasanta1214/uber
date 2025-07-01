import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {

  const [email ,setEmail]= useState('')
   const [password ,setPassword]= useState('')
    const [firstname ,setFirstname]= useState('')
    const [lastname ,setLastname] = useState('')
    const [userData, setUserData]=useState({})

  const submitHandler=(e)=>{
    e.preventDefault()
    setUserData({
      fullName:{
        firstName:firstname,
        lastName:lastname
      },
      email:email,
      password:password
    })
   
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }
  return (
    <>
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div >
        <img className='w-16 mb-4' src="uber1.png" />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} action="">
        <h3 className='text-xl font-medium mb-2'>What's your name</h3>
        <div className='flex gap-4 mb-5'>
          <input
         required
         value={firstname}
         onChange={(e)=>{
          setFirstname(e.target.value)
         }}
         className='bg-[#eeeeee]  rounded border-none px-4 py-2  w-1/2 text-lg placeholder: text-base'
          type="text" 
          placeholder='Firstname'/>
          <input
         required
         value={lastname}
         onChange={(e)=>{
          setLastname(e.target.value)
         }}
         className='bg-[#eeeeee]  rounded border-none px-4 py-2  w-1/2 text-lg placeholder: text-base'
          type="text" 
          placeholder='Lastname'/>
        </div>
        <h3 className='text-xl font-medium mb-2'>What's your email</h3>
        <input
         required
         value={email}
         onChange={(e)=>{
          setEmail(e.target.value)
         }}
         className='bg-[#eeeeee] mb-5  rounded border-none px-4 py-2  w-full text-lg placeholder: text-base'
          type="email" 
          placeholder='email@gmail.com'/>
        <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
        <input 
        required
        value={password}
         onChange={(e)=>{
          setPassword(e.target.value)
         }}
        className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder: text-base'
         type="password" 
         placeholder='Password'/>
        <button className='bg-[#111] text-white mb-7 rounded px-4 py-2  w-full text-lg '>Create Account</button>
      <p className='text-center '>Alredy have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      </form>
      </div>
      <div >
       <p className='text-[12px] leading-tight'>By proceeding, you consent to get calls, whatsApp or SMS message, 
        including by automated means , from Uber and its affiliates
         to the number provided</p>
      </div>
      </div>
     
    </>
  )
}

export default UserSignup


