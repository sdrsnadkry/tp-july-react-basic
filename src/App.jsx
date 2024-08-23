import { useState } from "react";
import Counter from "./components/counter";
import ImageSlider from "./components/imageSlider";
// const a = [1,2]
// const [b,c] = a

export default function App() {
  //state
  const [counter, setCounter] = useState(1);
  const incrementThisCounter = () => {
    setCounter(counter + 10);
  };

  return (
    <>
      <h1>Hello {counter}</h1>

      <Counter counter={counter} />

      <button onClick={incrementThisCounter}>Click Here</button>

      <ImageSlider />
    </>
  );
}
