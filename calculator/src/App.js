import Calculator from "./components/Calculator";
import { ThemeProvider } from "./components/ThemeContext";
import DefaultThemes from "./components/DefaultThemes";
import ColorPicker from "./components/ColorPicker";
function App() {
  return (
    <>
      <ThemeProvider>
        <div className="appContainer">
          <DefaultThemes />
          <Calculator />
          <ColorPicker />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
