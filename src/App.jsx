import './App.css'
import paragraphs from './componenet/data'
import { useState, useEffect, useRef } from 'react'
import ProgInput from './componenet/ProgInput';
import UserText from './componenet/UserText';
import TestTime from './componenet/TestTime';
import TimeSelection from './componenet/TimeSelection';
import Result from './componenet/Result';
import NavbarDark from './componenet/NavbarDark';
import {Howl,Howler} from 'howler';
import f from './componenet/correct.mp3';
import f1 from './componenet/wrong.mp3';


function App() {
  const [generatedinput, setgeneratedinput] = useState("");
  const [userinput, setuserinput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleText, setVisibleText] = useState([]);
  const [min,setMin]=useState(0)
  const [sec,setSec]=useState(60)
  const [correct,setCorrect]=useState(0)
  const [words,setWords]=useState(0);
  const [disabled,setDisabled]=useState(false)
  const [typing,setTyping]=useState(false)
  const [count,setCount]=useState(0)
  const [showResult,setShowResult]=useState(false)
  const textinput=useRef(null)
  const[ch,setCh] = useState(1);
  const correctSound=new Howl({src:[f]})
  const wrongSound=new Howl({src:[f1]})
    useEffect(() => {
      if((min!=0 && sec===0) ){
        setMin(min-1)
        setSec(60)
      }
      else if(min===0 && sec===0){
        setShowResult(true)
      }
      else if(disabled)
      {setTimeout(() => {
        setSec(sec-1)
      }, 1000);}
    },[min,sec])
    
  
    const playCorrectSound=()=>{
      correctSound.play();
    }
    const playwrongSound=()=>{
      wrongSound.play();
    }
    const handlesumbit=(time)=>{
      textinput.current.focus()
       setMin(time)
       setCh(time)
       setSec(0)
       setDisabled(true)
       setTyping(true)
       
    }
  useEffect(() => {
    const Generate = () => {
      const rand = paragraphs[Math.floor(Math.random() * (paragraphs.length))].text
      setgeneratedinput(rand)
      setuserinput("")
      setCurrentIndex(0)
      setVisibleText(rand.split("").slice(0, 400))
    }
    Generate();
  }, [])
  const HandleUserText = (event) => {
    if(typing)
    {
      const proArray = visibleText
    
    if (event.key === 'Backspace') {
            if (currentIndex > 0 ) {
        setCurrentIndex(currentIndex - 1);
        setuserinput(event.target.value.slice(0, -1));
        // event.target.selectionStart = event.target.value.length;
        // event.target.selectionEnd = event.target.value.length;
        
        }
    }
     else{
      const check = event.target.value.slice(-1)
      if(proArray[currentIndex]===' '){
        setWords(words+1);
      }
     if (check === proArray[currentIndex]) {
      playCorrectSound()
      setCurrentIndex(currentIndex + 1)
      setuserinput(event.target.value)
      setCorrect(correct+1)
      setCount(count+1)
    } 
    else {
      playwrongSound()
      setCount(count+1)
      setuserinput(event.target.value.slice(0,-1));
      //   event.target.value=event.target.value.slice(0,-1)
      // event.target.selectionStart = userinput.length;
      // event.target.selectionEnd = userinput.length;    
   }
  }
  if (currentIndex >= 400) {
    setuserinput('')
    event.target.value = '';
    setVisibleText(generateNewVisibleText());
    event.target.selectionStart = 0;
    event.target.selectionEnd = 0;
    setCurrentIndex(0);  
 }
}
}
const generateNewVisibleText = () => {
  
  const newVisibleText = generatedinput.split("").slice(currentIndex, currentIndex + 400)
  return newVisibleText
}
return (   
    <>
    {showResult?
    (
      <>
      <Result ch={ch} min={min} words={words} count={count} correct={correct}/>
     
    </>):
    ( 
      <>
      <div className='flex'>
      <NavbarDark disabled={disabled} setDisabled={setDisabled} min={min} sec={sec} ch={ch}  handlesumbit={handlesumbit}/>
    </div> 
  <div className="relative m-400 my-40">
    <ProgInput  currentIndex={currentIndex} userinput={userinput} visibleText={visibleText}  />
    <UserText textinput={textinput} userinput={userinput} HandleUserText={HandleUserText} />
  </div>
      </>
    )}
      </>
  )
}

export default App

