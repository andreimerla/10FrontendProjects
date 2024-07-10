import React from 'react'
import ThemeContext from "./ThemeContext"
import  { useContext } from 'react'

function DefaultThemes() {
  const {theme,toggleTheme} =useContext(ThemeContext)
  const themeRed = { 
        calculator:"rgb(235, 64, 52)",
        button:"rgb(171, 14, 14)",
        buttonHover:"rgb(194, 64, 64)",
        text:"rgb(255, 243, 176)",
        border:"2px rgb(255, 243, 176)",
        display:"rgb(163, 9, 7)",
  }
  const themeBlack = { 
    calculator:"rgb(31, 30, 30)",
    button:"rgb(79, 77, 77)",
    buttonHover:"rgb(54, 53, 53)",
    text:"white",
    border:"2px solid black",
    display:"rgb(36, 35, 35)",
  }

  const themeGreen = { 
    calculator:"rgb(45, 168, 3)",
    button:"rgb(103, 230, 60)",
    buttonHover:"rgb(58, 138, 32)",
    text:"aliceblue",
    border:"2px solid black",
    display:"rgb(11, 102, 25)",
  }

  const themePink = { 
    calculator:"rgb(224, 18, 138)",
    button:"rgb(171, 29, 112)",
    buttonHover:"rgb(189, 38, 126)",
    text:"rgb(242, 208, 228)",
    border:"2px solid black",
    display:"rgb(186, 15, 129)",
  }

  const initialTheme = {
    calculator:"rgb(78, 61, 236)",
    button:"rgb(28, 28, 180)",
    buttonHover:"rgb(51, 51, 175)",
    text:"aliceblue",
    border:"2px solid black",
    display:"rgb(44, 71, 176)",
  }

  const changeTeam=(themes)=>{
    toggleTheme(themes);
  }
  return (
    <div style ={{backgroundColor:theme.calculator}}className="themes-container">
      <button onClick={()=>changeTeam(themeRed)} className="themeButtons themeRed"></button>
      <button onClick={()=>changeTeam(themeBlack)} className="themeButtons themeBlack"></button>
      <button onClick={()=>changeTeam(themeGreen)} className="themeButtons themeGreen"></button>
      <button onClick={()=>changeTeam(themePink)} className="themeButtons themePink"></button> 
      <button onClick={()=>changeTeam(initialTheme)} className="themeButtons themeInitial"></button> 
    </div>
  )
}

export default DefaultThemes
