import React, { useContext } from 'react'
import { useState } from 'react'
import toRPN from '../utils/toRPN';
import RPNEvaluator from '../utils/RPNEvaluator';
import History from './History';
import Button from './Button';
import ThemeContext from './ThemeContext';


const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [isInside, setIsInside] = useState(false);
  const [history, setHistory] = useState([]);
  const [historyVisibility, setHistoryVisibility] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [isInvers, setIsInvers] = useState(true);
  const [valueInv, setValueInv] = useState({
    sin: "sin",
    cos: "cos",
    tan: "tan",
    ln: "ln",
    radical: "√",
    log: "log",
    ans: "0.1"
  })

  const handleInv = () => {
    if (isInvers) {
      setIsInvers(false);
      setValueInv({
        sin: "arcsin",
        cos: "arccos",
        tan: "arctan",
        ln: "e^",
        radical: "^2",
        log: "10^",
        ans: "0.7"
      })
    } else {
      setIsInvers(true)
      setValueInv({
        sin: "sin",
        cos: "cos",
        tan: "tan",
        ln: "ln",
        radical: "√",
        log: "log",
        ans: "0.1"
      })

    }
  }
  const handleChange = (event) => {
    setDisplay(event.target.value)
    console.log(display);
  }

  const handleEqual = () => {
    var input = display;
    var output = toRPN(input);
    setHistory(prevHistory => [...prevHistory, `${input}=${RPNEvaluator(output)}`]);

    setDisplay(RPNEvaluator(output));
    console.log(`expresie normala:${input}`);
    console.log(`expresie postfixata:${output}`);
    console.log(`calcul:${RPNEvaluator(output)}`);


  }

  const handleNumber = (number) => {

    console.log(isInside)
    if (isInside) {
      setDisplay(prevDisplay => prevDisplay.slice(0, -1) + number + ")");
      if (!isNaN(parseFloat(number))) {
        setIsInside(true);
      }

    } else {
      setDisplay(prevDisplay => prevDisplay + number);
    }
  }

  const handleInside = (expression) => {
    if (isInside === true) {
      setDisplay(prevDisplay => prevDisplay.slice(0, -1) + `${expression}()`)
    } else if (expression === "10^" || expression === "e^" || expression === "^2" && isInside === true) {
      setDisplay(prevDisplay => prevDisplay + `${expression}`);
    }
    else {
      setDisplay(prevDisplay => prevDisplay + `${expression}()`)
      setIsInside(true);
    }

  }

  const handleHistory = () => {
    if (historyVisibility === false) {
      setHistoryVisibility(true);
    } else {
      setHistoryVisibility(false);
    }

  }

  const handleHistoryItem = (item) => {
    setDisplay(item);

  }

  return (
    <>
      <div style={{ backgroundColor: theme.calculator }} className="calculator">
        <div className='display'>
          <input style={{ backgroundColor: theme.display, color: theme.text }} onChange={handleChange} className='inputDisplay' type="text" value={display} />
          <Button onClick={handleHistory} className='btn-history' >H</Button>
        </div>
        <div className='container'>

          <div className='Button-div'>
            <Button >Rad</Button>
            <Button >Deg</Button>
            <Button onClick={() => { handleNumber("!") }}>x!</Button>
            <Button onClick={() => { handleNumber("(") }}>(</Button>
            <Button onClick={() => { handleNumber(")") }}>)</Button>
            <Button onClick={() => { handleNumber("%") }}>%</Button>
            <Button onClick={() => setDisplay("")} >AC</Button>
          </div >
          <div className='Button-div'>
            <Button onClick={handleInv}>Inv</Button>
            <Button onClick={() => { handleInside(valueInv.sin) }}>{valueInv.sin}</Button>
            <Button onClick={() => { handleInside(valueInv.ln) }}>{valueInv.ln}</Button>
            <Button onClick={() => { handleNumber("7") }}>7</Button>
            <Button onClick={() => { handleNumber("8") }}>8</Button>
            <Button onClick={() => { handleNumber("9") }}>9</Button>
            <Button onClick={() => { handleNumber("/") }}>/</Button>
          </div>
          <div className='Button-div'>
            <Button onClick={() => { handleNumber("π") }}>π</Button>
            <Button onClick={() => { handleInside(valueInv.cos) }}>{valueInv.cos}</Button>
            <Button onClick={() => { handleInside(valueInv.log) }}>{valueInv.log}</Button>
            <Button onClick={() => { handleNumber("4") }}>4</Button>
            <Button onClick={() => { handleNumber("5") }}>5</Button>
            <Button onClick={() => { handleNumber("6") }}>6</Button>
            <Button onClick={() => { handleNumber("*") }}>x</Button>
          </div>
          <div className='Button-div'>
            <Button onClick={() => { handleNumber("e") }}>e</Button>
            <Button onClick={() => { handleInside(valueInv.tan) }}>{valueInv.tan}</Button>
            <Button onClick={() => { handleInside(valueInv.radical) }}>{valueInv.radical}</Button>
            <Button onClick={() => { handleNumber("1") }}>1</Button>
            <Button onClick={() => { handleNumber("2") }}>2</Button>
            <Button onClick={() => { handleNumber("3") }}>3</Button>
            <Button onClick={() => { handleNumber("-") }}>-</Button>
          </div>
          <div className='Button-div'>
            <Button onClick={() => { handleNumber(valueInv.ans) }}>ANS</Button>
            <Button >EXP</Button>
            <Button onClick={() => { handleNumber("^") }}>a^b</Button>
            <Button onClick={() => { handleNumber("0") }}>0</Button>
            <Button onClick={() => { handleNumber(".") }}>.</Button>
            <Button onClick={handleEqual}>=</Button>
            <Button onClick={() => { handleNumber("+") }}>+</Button>
          </div>
        </div>
      </div>
      {historyVisibility && <History onHistoryItemClicked={handleHistoryItem} history={history} theme={theme} />}
    </>
  )
}

export default Calculator
