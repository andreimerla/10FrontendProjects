import React from 'react'
import { useState,useRef,useEffect } from 'react'

const Timer=()=> {
    const [time,setTime] = useState("")
    const [isActive,setIsActive] = useState(false)
    const intervalRef = useRef(null);

    useEffect(()=>{
        if(isActive){
            intervalRef.current = setInterval(()=>{
                setTime(prevTime=>prevTime-1)
            },1000)
        }else if(!isActive && time==0){
            clearInterval(intervalRef.current);
        }

        return ()=>clearInterval(intervalRef.current);
    },[isActive])
    
    const handleInput = (event)=>{
        const newValue = parseInt(event.target.value);

        if(/^\d*$/.test(newValue) && time <86400)
        {
            setTime(newValue);
        }
    }

    const startTimer =()=>{
        if(time!=0){
            setIsActive(true);
        }
    }

    const stopTimer = ()=>{
        if(time!=0){
            setIsActive(false);
        }
    }
    const resetTimer = ()=>{
        if(time!=0){
            setIsActive(false);
            setTime("");
        }
    }

    const formattedTime = `${String(Math.floor(time / 3600)).padStart(2, '0')}:${String(Math.floor((time % 3600) / 60)).padStart(2, '0')}:${String(Math.floor(time % 60)).padStart(2, '0')}`;
    return (
    <div className="timer">
      <div className="display">
        <input className ="inputTime" onChange ={handleInput} type = "text" value={time}/>
        <input className ="formattedInput" type ="text" value = {formattedTime} readOnly/> 
      </div>
      <div className="buttons">
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
     </div>
    </div>
  )
}

export default Timer
