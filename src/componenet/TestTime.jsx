import React from 'react'
import {useState,useEffect,useRef} from 'react'

const TestTime = ({min,sec,ch}) => {
  const [col,setCol]= useState(`rgb(0,255,0)`);
  const [r,setR]=useState(0);
  const [g,setG]=useState(255);
  const unit= useRef(0);
   useEffect(()=> {
    unit.current = 255/((min*60)+sec);
   },[ch]);
  useEffect(()=>{
   setR(r+unit.current)
  setG(g-unit.current)
  setCol(`rgb(${r},${g},0)`)
  },[sec]);
  return (
    <div >
        <h1 className="inline font-serif"style={{color:col}}>Time:</h1> {min}:{sec}
    </div>
  )
}
export default TestTime