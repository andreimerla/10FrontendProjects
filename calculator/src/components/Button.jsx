import ThemeContext from './ThemeContext'
import React, { useState,useContext,useEffect} from 'react';


const Button = ({ children, onClick, className }) => {

 
  const {theme} =useContext(ThemeContext)
  const [bgColor,setBgColor] = useState(theme.button)

  useEffect(()=>{
    setBgColor(theme.button)

  },[theme])


  const handleMouseEnter = () => {
    setBgColor(theme.buttonHover)
  };

  const handleMouseLeave = () => {
    setBgColor(theme.button);
  };

  return (
    <button
      className={`customButton ${className}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: bgColor,
        color: theme.text,
      }}
    >
      {children}
    </button>
  );
};
export default Button