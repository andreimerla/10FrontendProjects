import Menu from "./components/Menu";
import MusicPlayer from "./components/MusicPlayer";
import { useState } from "react";
import Game from "./components/Game";
function App() {

  const [menuState,setMenuState] = useState(true);
  const [dificulty, setDificulty] = useState(0);

  const startGame = (dificulty)=>{
    setMenuState(false);
    setDificulty(dificulty);
  }

  const goMenu = () =>{
    setMenuState(true);
    setDificulty(0);
  }
  return (
   <div>
      <MusicPlayer/>
      {menuState ? (
        <Menu startGame = {startGame} />
      ):(
        <Game goMenu = {goMenu} dificulty={dificulty}/>
      )}
      
   </div>
  );
}

export default App;
