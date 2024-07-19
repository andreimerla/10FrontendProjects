import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import { Route,Routes,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path = "game" element ={<GamePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
