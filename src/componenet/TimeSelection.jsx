import {
    List,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";   
  const TimeSelection = ({disabled,handlesumbit,setDisabled}) => {
    const [value,setValue]=useState("")
    const[time,setTime]=useState(1)
    const submit=()=>{
        setDisabled(true);
        handlesumbit(time)
    }
    useEffect(()=>{
      setValue(disabled?"disabled":"")
    },[disabled])
    return (
        <div className="flex gap-5 mr-4 h-18">
          <div>
            <List className="flex flex-row gap-5 justify-center ">
            <label><input type="radio" name="radio_button" value="1"  disabled={disabled } defaultChecked  onClick={(e)=>setTime(1)}/>1 MIN</label>
            <label><input type="radio" name="radio_button" value="2" disabled={disabled} onClick={(e)=>setTime(2)}/>2 MIN</label>
            <label><input type="radio"name="radio_button"  value="3" disabled={disabled} onClick={(e)=>setTime(3)}/>3 MIN</label>
            </List>
          </div>
        <div className="flex gap-2">
        <button className="bg-green-600 p-2 rounded-lg m-auto hover:bg-yellow-500 font-serif font-medium" disabled={value}  onClick={submit}>Start Typing...</button>
        <div className='flex-wrap content-center bg-green-500 p-2 rounded-lg hover:bg-red-500 font-serif font-medium '>
        <button onClick={()=>{window.location.href='/'}}>Reset</button>
      </div>
        </div>
        </div>
    )
  }
  
  export default TimeSelection