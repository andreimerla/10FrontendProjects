import React from 'react'
import { useState } from 'react'

const Calculator=() =>{
  const [display,setDisplay] = useState("");
  const handleChange = (event)=>{
    setDisplay(event.target.value)
    console.log(display);
  }
 
  return (
    <div className="calculator">
        <div className='display'>
            <input onChange={handleChange}className='inputDisplay' type="text" value={display}/>
            
        </div>
        <div className='container'>
            <div className='button-div'>
                <button>Rad</button>
                <button>Deg</button>
                <button>x!</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"(")}}>(</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+")")}}>)</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"%")}}>%</button>
                <button onClick={()=>{setDisplay("")}}>AC</button>
            </div >
            <div className='button-div'>
                <button>Inv</button>
                <button>sin</button>
                <button>ln</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"7")}}>7</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"8")}}>8</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"9")}}>9</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"/")}}>/</button>
            </div>
            <div className='button-div'>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"π")}}>π</button>
                <button>cos</button>
                <button>log</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"4")}}>4</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"5")}}>5</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"6")}}>6</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"x")}}>x</button>
            </div>
            <div className='button-div'>
                <button>e</button>
                <button>tan</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"√")}}>√</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"2")}}>1</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"2")}}>2</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"3")}}>3</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"-")}}>-</button>
            </div>
            <div className='button-div'>
                <button>Ans</button>
                <button>EXP</button>
                <button>a^b</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"0")}}>0</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+".")}}>.</button>
                <button>=</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"+")}}>+</button>
            </div>
        </div>
      
    </div>
  )
}

export default Calculator
