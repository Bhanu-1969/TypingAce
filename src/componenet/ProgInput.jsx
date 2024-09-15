import React from 'react'

const ProgInput = ({currentIndex,visibleText,userinput}) => {
  const getTextColor=(char,index)=>{

      if(index<userinput.length ){
        if(char===userinput[index]){
          return '#a78e03';
        }
        else{
          return '#a78e03';
        }
      }
      else {
        return '#4B5563'; 
      }
      
  }
  return (
    <div>
        <div className="w-full h-40 p-10 tracking-widest border-none rounded-md text-xl ">
          {visibleText.map((char,index)=>(
            <>
            {currentIndex===index?<span className="ring-2 ring-yellow-600 w-[0.5px] h-[0.3px]  m-[3px]"></span>:<span></span>}
            
            <span key={index} style={{color:getTextColor(char,index)}}>
              {char}
            </span>
            </>
          ))}
          </div>
    </div>
  )
}
export default ProgInput