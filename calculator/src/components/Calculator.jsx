import React, { useContext } from 'react'
import { useState } from 'react'
import toRPN from '../utils/toRPN';
import RPNEvaluator from '../utils/RPNEvaluator';
import History from './History';
import Button from './Button';
import ThemeContext from './ThemeContext';


const Calculator=() =>{
  const [display,setDisplay] = useState("");
  const [isInside,setIsInside] =useState(false);
  const [history,setHistory] = useState([]);
  const [historyVisibility,setHistoryVisibility] = useState(false);
  const {theme} = useContext(ThemeContext);

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
    <div style={{backgroundColor:theme.calculator}}className="calculator">
        <div className='display'>
            <input  style ={{backgroundColor:theme.display,color:theme.text}}onChange={handleChange}className='inputDisplay' type="text" value={display}/>
            <Button  onClick={handleHistory} className='btn-history' >H</Button>
        </div>
        <div  className='container'>
           
            <div className='Button-div'>
                <Button  >Rad</Button>
                <Button >Deg</Button>
                <Button >x!</Button>
                <Button >(</Button>
                <Button >)</Button>
                <Button >%</Button>
                <Button onClick={()=>setDisplay("")} >AC</Button>
            </div >
            <div className='Button-div'>
                <Button >Inv</Button>
                <Button  onClick={()=>{handleInside("sin")}}>sin</Button>
                <Button  onClick={()=>{handleInside("ln")}}>ln</Button>
                <Button  onClick={()=>{handleNumber("7")}}>7</Button>
                <Button  onClick={()=>{handleNumber("8")}}>8</Button>
                <Button  onClick={()=>{handleNumber("9")}}>9</Button>
                <Button  onClick={()=>{handleNumber("/")}}>/</Button>
            </div>
            <div className='Button-div'>
                <Button  onClick={()=>{handleNumber("π")}}>π</Button>
                <Button  onClick={()=>{handleInside("cos")}}>cos</Button>
                <Button  onClick={()=>{handleInside("log")}}>log</Button>
                <Button  onClick={()=>{handleNumber("4")}}>4</Button>
                <Button  onClick={()=>{handleNumber("5")}}>5</Button>
                <Button  onClick={()=>{handleNumber("6")}}>6</Button>
                <Button  onClick={()=>{handleNumber("*")}}>x</Button>
            </div>
            <div className='Button-div'>
                <Button  onClick={()=>{handleNumber("e")}}>e</Button>
                <Button  onClick={()=>{setDisplay(prevDisplay=>prevDisplay+"tan()")}}>tan</Button>
                <Button  onClick={()=>{handleInside("√")}}>√</Button>
                <Button  onClick={()=>{handleNumber("1")}}>1</Button>
                <Button  onClick={()=>{handleNumber("2")}}>2</Button>
                <Button  onClick={()=>{handleNumber("3")}}>3</Button>
                <Button  onClick={()=>{handleNumber("-")}}>-</Button>
            </div>
            <div className='Button-div'>
                <Button  >Ans</Button>
                <Button >EXP</Button>
                <Button >a^b</Button>
                <Button  onClick={()=>{handleNumber("0")}}>0</Button>
                <Button  onClick={()=>{handleNumber(".")}}>.</Button>
                <Button  onClick={handleEqual}>=</Button>
                <Button  onClick={()=>{handleNumber("+")}}>+</Button>
            </div>
        </div>
    </div>
    {historyVisibility && <History onHistoryItemClicked={handleHistoryItem} history={history} theme={theme}/>}
    </>
  )
}

export default Calculator
