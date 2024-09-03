import { useEffect, useState } from "react";

const Counter = (props) => {
  const [childCount, setChildCount] = useState(0);

  useEffect(() => {
    setChildCount(props.counter + 1);
  }, [props.counter]);

  useEffect(() => {
    console.log("Child changed");
  }, [childCount]);

  return (
    <div>
      <h1>Counter Value Props: {props.counter}</h1>
      <h1>Child Counter State: {childCount}</h1>
    </div>
  );
};

export default Counter;
