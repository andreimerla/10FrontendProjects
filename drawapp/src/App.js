import Canvas from "./components/Canvas/Canvas"
import { useState } from "react";
import { ColorProvider } from "./components/Context/ColorContext";
import ColorPalette from "./components/ColorPalette/ColorPalette";
import Pencil from "./components/Pencil/Pencil";
import Eraser from "./components/Eraser/Eraser";

function App() {

  return (
    <div className="container">
      <ColorProvider>
        <Pencil/>
        <Eraser/>
        <Canvas/>
        <ColorPalette/>
      </ColorProvider>  
    </div>
    
   
  )
}

export default App;
