import React from 'react'
import { useState } from 'react'
import toRPN from '../utils/toRPN';
import RPNEvaluator from '../utils/RPNEvaluator';
import History from './History';


const Calculator=() =>{
  const [display,setDisplay] = useState("");
  const [isInside,setIsInside] =useState(false);
  const [history,setHistory] = useState([]);
  const [historyVisibility,setHistoryVisibility] = useState(false);
  const handleChange = (event)=>{
    setDisplay(event.target.value)
    console.log(display);
  }

  const handleEqual=()=>{
    var input = display;
    var output = toRPN(input);
    setHistory(prevHistory=>[...prevHistory,`${input}=${RPNEvaluator(output)}`]);
     
    setDisplay(RPNEvaluator(output));
    console.log(`expresie normala:${input}`);
    console.log(`expresie postfixata:${output}`);
    console.log(`calcul:${RPNEvaluator(output)}`);


  }

  const handleNumber = (number)=>{
    console.log(isInside)
    if(isInside){
        setDisplay(prevDisplay=>prevDisplay.slice(0,-1)+number+")");
        if(!isNaN(parseFloat(number))){
            setIsInside(true);
        }else{
            setIsInside(false);
        }
        
    }else{
        setDisplay(prevDisplay=>prevDisplay+number);
    }
  }

  const handleInside = (expression)=>{
    if(isInside===true){
        setDisplay(prevDisplay=>prevDisplay.slice(0,-1)+`${expression}()`)
    }else{
        setDisplay(prevDisplay=>prevDisplay +`${expression}()`)
        setIsInside(true);
    }
    
  }

  const handleHistory = ()=>{
   if(historyVisibility===false){
    setHistoryVisibility(true);
   }else{
    setHistoryVisibility(false);
   }
    
  }

  const handleHistoryItem = (item)=>{
    setDisplay(item);

  }
 
  return (
    <>
    <div className="calculator">
        <div className='display'>
            <input onChange={handleChange}className='inputDisplay' type="text" value={display}/>
            <button onClick={handleHistory} className='btn-history'>H</button>
        </div>
        <div className='container'>
           
            <div className='button-div'>
                <button>Rad</button>
                <button>Deg</button>
                <button>x!</button>
                <button onClick={()=>{handleNumber("(")}}>(</button>
                <button onClick={()=>{handleNumber(")")}}>)</button>
                <button onClick={()=>{handleNumber("%")}}>%</button>
                <button onClick={()=>{setDisplay("")}}>AC</button>
            </div >
            <div className='button-div'>
                <button>Inv</button>
                <button onClick={()=>{handleInside("sin")}}>sin</button>
                <button onClick={()=>{handleInside("ln")}}>ln</button>
                <button onClick={()=>{handleNumber("7")}}>7</button>
                <button onClick={()=>{handleNumber("8")}}>8</button>
                <button onClick={()=>{handleNumber("9")}}>9</button>
                <button onClick={()=>{handleNumber("/")}}>/</button>
            </div>
            <div className='button-div'>
                <button onClick={()=>{handleNumber("π")}}>π</button>
                <button onClick={()=>{handleInside("cos")}}>cos</button>
                <button onClick={()=>{handleInside("log")}}>log</button>
                <button onClick={()=>{handleNumber("4")}}>4</button>
                <button onClick={()=>{handleNumber("5")}}>5</button>
                <button onClick={()=>{handleNumber("6")}}>6</button>
                <button onClick={()=>{handleNumber("*")}}>x</button>
            </div>
            <div className='button-div'>
                <button onClick={()=>{handleNumber("e")}}>e</button>
                <button onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"tan()")}}>tan</button>
                <button onClick={()=>{handleInside("√")}}>√</button>
                <button onClick={()=>{handleNumber("1")}}>1</button>
                <button onClick={()=>{handleNumber("2")}}>2</button>
                <button onClick={()=>{handleNumber("3")}}>3</button>
                <button onClick={()=>{handleNumber("-")}}>-</button>
            </div>
            <div className='button-div'>
                <button>Ans</button>
                <button>EXP</button>
                <button>a^b</button>
                <button onClick={()=>{handleNumber("0")}}>0</button>
                <button onClick={()=>{handleNumber(".")}}>.</button>
                <button onClick={handleEqual}>=</button>
                <button onClick={()=>{handleNumber("+")}}>+</button>
            </div>
        </div>
    </div>
    {historyVisibility && <History onHistoryItemClicked={handleHistoryItem}history={history}/>}
    </>
  )
}

export default Calculator
