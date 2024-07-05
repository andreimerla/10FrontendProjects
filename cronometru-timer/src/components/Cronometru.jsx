
import { useState,useEffect,useRef } from "react"
import "../index.css"

const Cronometru = ()=>{

    const [time,setTime] = useState(0);
    const [isActive,setIsActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect (()=>{
        if(isActive){
            intervalRef.current = setInterval(()=>{
                setTime(prevTime=>prevTime+1);
            },1000)
        }else if(!isActive && time !=0){
            clearInterval(intervalRef.current);
        }

        return()=>clearInterval(intervalRef.current);
    },[isActive]);
    

    const startTimer = ()=>{
        setIsActive(true);
    }

    const stopTimer = ()=>{
        setIsActive(false);
    }

    const resetTimer = ()=>{
        setIsActive(false);
        setTime(0);
    }
   
    return (
        <div className="cronometru">
            <div className="display">
                <p>{String(Math.floor(time/3600)).padStart(2,'0')}:{String(Math.floor(time/60)%60).padStart(2,'0')}:{String(Math.floor(time%60)).padStart(2,'0')}</p>
            </div>
            <div className="buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}

export default Cronometru