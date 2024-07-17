import Card from "./components/Card";
import {useContext } from "react";
import CardNumberContext from "./components/CardNumberContext";
import { CardNumberProvider } from "./components/CardNumberContext";


function App() {
 const {cardNumber} = useContext(CardNumberContext);
  return (
    <div className="container">
     
        {Array.from({length:cardNumber}).map((_,index)=>(
            <Card key = {index}/>
          ))}
     
    </div>
   
  );
}

export default App;
