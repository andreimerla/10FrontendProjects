const factorial = (number)=>{
  var fact=1;
  if(number ===0){
    return 1;
  }else{
    for(let i =1;i<=number;i++){
      fact = fact*i;
    }

    return fact;
  }
}


const RPNEvaluator = (input) => {
  const stack = [];
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "^": (a, b) => Math.pow(a, b),
    "%": (a) => a / 100,
    "log": (a) => Math.log10(a),
    "ln":(a)=> Math.log(a),
    "sin":(a)=> Math.sin(a),
    "cos":(a)=> Math.cos(a),
    "√":(a)=> Math.sqrt(a),
    "tan":(a)=>Math.tan(a),
    "!":(a)=>factorial(a),
    "arcsin":(a)=>Math.asin(a),
    "arccos":(a)=>Math.acos(a),
    "arctan":(a)=>Math.atan(a),
  };

  for (let token of input.split(" ")) {
    if (token in operators) {
      if (token === "%" || token === "log" || token ==="ln" || token==="sin" || token==="cos" || token==="√" || token==="tan" || token==="!" || token==="arcsin" || token==="arccos" || token==="arctan") {
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
