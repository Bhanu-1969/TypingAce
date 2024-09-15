import React from 'react'
const Result = ({count,min,words,correct,ch}) => {
  return (
    <div className='text-yellow-500 flex flex-wrap justify-center items-center flex-col'>
      <div className='mt-60 '>
      <h className='flex justify-center text-4xl text-white'>Typing Test Completed!</h>
      <br></br>
      <h className='flex justify-center text-4xl'>You typed the {ch} Minutes Typing Test</h>
      </div>
        <div className='mt-5 flex' >
          <h className='flex justify center text-3xl m-4 '>Your speed was </h>
          <h className='flex justify center text-5xl text-green-500 m-1' >{Math.floor(words/(ch))}</h>
          <h className='flex justify center text-2xl mt-5'>wpm </h>
          <h className='flex justify center text-3xl m-4'>with </h>
          <h className='flex justify center text-5xl text-green-500 m-1'>{Math.floor((correct/count)*100)}%</h>
          <h className='flex justify center text-3xl m-4'>accurancy </h>
        </div>
            <button className='bg-black m-5 rounded-md font-semibold text-2xl p-2 text-blue-400' onClick={()=>window.location.href='/'}>Try Again..</button>
    </div>
  )
}
export default Result