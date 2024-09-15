import React from 'react'
const UserText = ({HandleUserText,userinput,textinput}) => {
  const FunHandleUserText=(event)=>{
    if(event.which!==8){
    HandleUserText(event)
    }
  }
  const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
      HandleUserText(event);
      event.preventDefault();
      // const textarea = event.target;
      // const cursorPosition = textarea.selectionStart;
      // if (cursorPosition > 0) {
      //   textarea.value = textarea.value.substring(0, cursorPosition - 1) + textarea.value.substring(cursorPosition);
      //   textarea.selectionStart = cursorPosition - 1;
      //   textarea.selectionEnd = cursorPosition - 1;
      //   textarea.focus();
      // }
    } 
  }
  return (
    <div>
    <div>
       <textarea ref={textinput} autoComplete='off'value={userinput} onKeyDown={handleKeyDown} onChange={FunHandleUserText}  className={`tracking-widest w-full h-40 p-10 text-transparent  rounded-md absolute top-0 left-0 bg-transparent text-xl border-none outline-none `}   />
    </div>
    </div>
  )
}

export default UserText
