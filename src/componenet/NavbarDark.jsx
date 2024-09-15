import React from 'react'
import TimeSelection from './TimeSelection'
import TestTime from './TestTime'
const NavbarDark = ({disabled,ch,setDisabled,handlesumbit,min,sec}) => {
  return (
    <nav className='bg-black w-full flex  justify-between flex-wrap content-center text-white'>
      <div className=' ml-7 flex-wrap content-center text-2xl text-blue-400  font-serif font-extrabold'>
      Typing Ace
      </div>
      <div className='flex-wrap content-center ml-20'>
      <TestTime min={min} ch={ch} sec={sec}/>
      </div>
      
    <div className='p-4'>
    <TimeSelection disabled={disabled} setDisabled={setDisabled} handlesumbit={handlesumbit}/>
    </div>  
    
    </nav>
   
    
  )
}

export default NavbarDark
   
