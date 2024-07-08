const operators = {
  "^": {
    prec: 4,
    assoc: "right",
  },
  "*": {
    prec: 3,
    assoc: "left",
  },
  "/": {
    prec: 3,
    assoc: "left",
  },
  "%": {
    prec: 3,
    assoc: "left",
  },
  "+": {
    prec: 2,
    assoc: "left",
  },
  "-": {
    prec: 2,
    assoc: "left",
  },
};

const assert = (predicate) => {
  if (predicate) return;
  throw new Error("Assertion failed due to invalid token");
};

const toRPN = (input) => {
  const opSymbols = Object.keys(operators);
  const stack = [];
  let output = "";
  let currentNumber = ""; // Acumulator pentru numere cu mai multe cifre

  const peek = () => stack.at(-1);
  const addToOutput = (token) => (output += " " + token);
  const handlePop = () => stack.pop();

  const handleToken = (token) => {
    if (!isNaN(parseFloat(token)) || token === "." || token === "e") {
      if (token === "e") {
        currentNumber = 2.718;
      } else {
        currentNumber += token; // Adaugă cifra la numărul curent
      }
    } else {
      if (currentNumber !== "") {
        addToOutput(currentNumber); // Adaugă numărul acumulat la output
        currentNumber = ""; // Resetăm acumulatorul pentru următorul număr
      }

      switch (true) {
        case opSymbols.includes(token):
          const o1 = token;
          let o2 = peek();

          while (
            o2 !== undefined &&
            o2 !== "(" &&
            (operators[o2].prec > operators[o1].prec ||
              (operators[o2].prec === operators[o1].prec &&
                operators[o1].assoc === "left"))
          ) {
            addToOutput(handlePop());
            o2 = peek();
          }
          stack.push(o1);
          break;
        case token === "(":
          stack.push(token);
          break;
        case token === ")":
          let topOfStack = peek();
          while (topOfStack !== "(") {
            assert(stack.length !== 0);
            addToOutput(handlePop());
            topOfStack = peek();
          }
          assert(peek() === "(");
          handlePop();
          break;
        default:
          throw new Error(`Invalid token: ${token}`);
      }
    }
  };

  for (let i of input) {
    if (i === " ") continue;

    handleToken(i);
  }

  // Adaugă ultimul număr acumulat (dacă există)
  if (currentNumber !== "") {
    addToOutput(currentNumber);
  }

  while (stack.length !== 0) {
    assert(peek() !== "(");
    addToOutput(stack.pop());
  }

  return output;
};

export default toRPN;
