import React, { useState, useMemo } from "react";

function ExpensiveComponent({ number }) {
  console.log("Recalculating factorial...");
  
  const factorial = useMemo(() => {
    function computeFactorial(n) {
      if (n <= 1) return 1;
      return n * computeFactorial(n - 1);
    }
    return computeFactorial(number);
  }, [number]); // Only recalculates when "number" changes

  return <h2>Factorial: {factorial}</h2>;
}

export default function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
      <ExpensiveComponent number={number} />
    </div>
  );
}



//          How to Explain useMemo in a Simple Way in an Interview
//          1. What is useMemo?
//          useMemo is a React Hook that memorizes the result of a function.
//          It prevents unnecessary recalculations of values, improving performance.
//          It is used when a heavy computation is needed inside a component.
//          2. Why do we need useMemo?
//          In React, every re-render re-executes functions, even if their result doesn't change.
//          useMemo stores the result and only recomputes it when dependencies change.
//          It helps optimize performance in cases like:
//          Expensive calculations
//          Filtering large lists
//          Avoiding unnecessary object re-creation

// let array = [1,2,3,4,5]
// console.log(array.slice(-1,2))
// console.log(array.splice(-2,2))