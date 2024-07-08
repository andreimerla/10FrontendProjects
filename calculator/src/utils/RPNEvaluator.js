const RPNEvaluator = (input) => {
  const stack = [];
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "^": (a, b) => Math.pow(a, b),
    "%": (a) => a / 100,
  };

  for (let token of input.split(" ")) {
    if (token in operators) {
      if (token === "%") {
        const operand = parseFloat(stack.pop());
        stack.push(operators[token](operand));
      } else {
        const b = parseFloat(stack.pop());
        const a = parseFloat(stack.pop());
        stack.push(operators[token](a, b));
      }
    } else {
      stack.push(parseFloat(token));
    }
  }

  return stack.pop();
};

export default RPNEvaluator;
