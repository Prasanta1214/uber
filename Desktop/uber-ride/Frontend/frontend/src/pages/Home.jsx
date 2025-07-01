import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
  <>
  <div className='h-screen bg-cover bg-bottom pt-5 bg-[url(homepage.jpg)]  w-full flex justify-between flex-col '>
        <img className='w-16 ml-8' src="uber1.png" />
        <div className='bg-white py-4 px-4 pb-7'>
             <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
             <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
        </div>
  </div>
  
  </>
  )
}

export default Home
