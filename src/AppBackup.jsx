import { useState } from "react";
import Counter from "./components/counter";
import ImageSlider from "./components/imageSlider";
import Lists from "./components/lists";
import Conditional from "./components/conditional";
import Form from "./components/form";
import FormWithValidation from "./components/formWithValidation";
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
      <FormWithValidation />
      {/* <Form /> */}
      {/* <h1>Hello {counter}</h1> */}

      {/* 
      <Counter counter={counter} />

      <button onClick={incrementThisCounter}>Click Here</button>

      <ImageSlider />

      <Conditional/>

      <Lists/> */}
    </>
  );
}
