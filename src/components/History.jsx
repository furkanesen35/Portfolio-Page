import React from 'react'
import foto from "./foto.jpg"

const History = () => {
 return (
  <div className='flex justify-center'>
   <div className='flex flex-col justify-center items-center w-[60%] md:flex-row m-[40px] mt-[100px]'>
    <div className=''>
     <img className='w-[350px]' src={foto} alt="" />
    </div>
    <div className='flex flex-col md:w-[600px] p-[15px]'>
     <h1 className='text-[40px]'>Hallo! Ich bin</h1>
     <h2 className='text-[60px]'>Furkan Esen</h2>
    </div>
   </div>
  </div>
 )
}

export default History