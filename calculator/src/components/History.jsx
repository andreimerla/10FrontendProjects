import React from 'react'


const History=({history})=> {
    
  return (
    <div className="history">
        <ul>
            {history.map((item,index)=>{
                return <li key={index}>
                    {item}
                </li>
            })}
        </ul>
      
    </div>
  )
}

export default History;