import React, {createContext,useState} from "react"

const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
   
  const [theme,setTheme] = useState({
        calculator:"rgb(78, 61, 236)",
        button:"rgb(28, 28, 180)",
        buttonHover:"rgb(51, 51, 175)",
        text:"aliceblue",
        border:"2px solid black",
        display:"rgb(44, 71, 176)",
      })

      const toggleTheme = (themes)=>{
        setTheme({
            calculator:themes.calculator,
            button:themes.button,
            buttonHover:themes.buttonHover,
            text:themes.text,
            border:themes.border,
            borderHover:themes.borderHover,
            display:themes.display,
        })

      }

      

      return (
        <ThemeContext.Provider value ={{theme,toggleTheme,setTheme}}>
            {children}
        </ThemeContext.Provider>
      )
}

export default ThemeContext