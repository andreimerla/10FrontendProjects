import React from 'react'
import { useState,useEffect } from 'react'


const History=({history,onHistoryItemClicked})=> {
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
    <div className="history">
        <ul>
            {input.map((item,index)=>(
              <li className="history-item">
                <span onClick={()=>onHistoryItemClicked(item)} className="history-element input-element">{item}</span>
                <span className='history-equal'>=</span>
                <span onClick={()=>onHistoryItemClicked(output[index])} className="history-element output-element">{output[index]}</span>
              </li>
            ))}
        </ul>
      
    </div>
  )
}

export default History;