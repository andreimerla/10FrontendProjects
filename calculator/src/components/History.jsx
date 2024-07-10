import React from 'react'
import { useState,useEffect } from 'react'


const History=({history,onHistoryItemClicked,theme})=> {
  const [input,setInput] = useState([]);
  const [output,setOutput] = useState([])
  
  
  useEffect(() => {
    const newInput = [];
    const newOutput = [];

    history.forEach(item => {
      const parts = item.split('=');
      newInput.push(parts[0]);
      newOutput.push(parts[1]);
    });

    setInput(newInput);
    setOutput(newOutput);
  }, [history]);
  return (
    <div style={{backgroundColor:theme.calculator}} className="history">
        <ul>
            {input.map((item,index)=>(
              <li  className="history-item">
                <span style={{border:theme.border, color:theme.text}} onClick={()=>onHistoryItemClicked(item)} className="history-element input-element">{item.substring(0,10)+"..."}</span>
                <span className='history-equal'>=</span>
                <span style ={{border:theme.border,color:theme.text}}onClick={()=>onHistoryItemClicked(output[index])} className="history-element output-element">{output[index]}</span>
              </li>
            ))}
        </ul>
      
    </div>
  )
}

export default History;