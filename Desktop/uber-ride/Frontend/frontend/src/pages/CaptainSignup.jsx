import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainSignup = () => {
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
        <img className='w-16 mb-4' src="uberDriver.png" />
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} action="">
        <h3 className='text-xl font-medium mb-2'>What's your Captain's name</h3>
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
        <h3 className='text-xl font-medium mb-2'>What's your Captain's email</h3>
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
      <p className='text-center '>Alredy have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </form>
      </div>
      <div >
       <p className='text-[12px] leading-tight'>This site is protected by reCAPTCHA and the
         <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span></p>
      </div>
      </div>
    </>
  )
}

export default CaptainSignup
