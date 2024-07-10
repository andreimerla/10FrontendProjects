import React from 'react'
import { useContext } from 'react'
import ThemeContext from "./ThemeContext"


const ColorPicker = ()=> {
    const {theme,setTheme} = useContext(ThemeContext)

   
  
    return (
    <div style={{backgroundColor:theme.calculator,color:theme.text}}className="colorPickerContainer">
        <label>calculator</label>
        <input className="colorInput" onChange={(e)=>setTheme({...theme,calculator:e.target.value})}type="color"   />
        <label>button</label>
        <input className="colorInput" onChange={(e)=>setTheme({...theme,button:e.target.value})} type="color"  />
        <label>button hover</label>
        <input className="colorInput" onChange={(e)=>setTheme({...theme,buttonHover:e.target.value})} type="color" />
        <label>text</label>
        <input className="colorInput" onChange={(e)=>setTheme({...theme,text:e.target.value})} type="color" />
        <label>border</label>
        <input className="colorInput" onChange={(e)=>setTheme({...theme,border:`2px solid ${e.target.value}`})} type="color"  />
        <label> display</label>
        <input className="colorInput" onChange={(e)=>setTheme({...theme,display:e.target.value})} type="color" />
    </div>
  )
}

export default ColorPicker;