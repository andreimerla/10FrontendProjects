import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import { SettingsProvider } from "./components/SettingsContext/SettingsContext";

function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
      <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path = "game" element ={<GamePage/>}/>
      </Routes>
    </BrowserRouter>
    </SettingsProvider>
    
  );
}

export default App;
