import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormWithValidation from "./components/formWithValidation";
import ImageSlider from "./components/imageSlider";
import ErrorPage from "./components/ErrorPage";
import Conditional from "./components/conditional";
import CounterPage from "./components/counterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormWithValidation />} />
        <Route path="/slider" element={<ImageSlider />} />
        <Route path="/city" element={<Conditional />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
