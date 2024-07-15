import Convertor from "./components/Convertor";
import { IstoricProvider } from "./components/IstoricContext";
function App() {
  return (
    <div>
      <IstoricProvider>
        <Convertor/>
      </IstoricProvider>
      
    </div>
  );
}

export default App;
