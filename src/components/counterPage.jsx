import React, { useState } from "react";
import Counter from "./counter";

const CounterPage = () => {
  const [counterVal, setCounterVal] = useState(1);

  const incrementThisCounter = () => {
    setCounterVal(counterVal + 10);
  };

  return (
    <div>
      <Counter counter={counterVal} />

      <button onClick={incrementThisCounter}>Press to increase</button>
    </div>
  );
};

export default CounterPage;
