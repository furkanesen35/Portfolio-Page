import React from 'react'
import foto from "./foto.jpg"

const History = () => {
 return (
  <div className='flex justify-center'>
   <div className='flex flex-col justify-center items-center w-[60%] sm:flex-row m-[40px]'>
    <div className=''>
     <img className='w-[350px]' src={foto} alt="" />
    </div>
    <div className='w-[600px] p-[15px]'>Hi</div>
   </div>
  </div>
 )
}

export default History