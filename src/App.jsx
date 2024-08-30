import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormWithValidation from "./components/formWithValidation";
import ImageSlider from "./components/imageSlider";
import ErrorPage from "./components/ErrorPage";
import Conditional from "./components/conditional";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormWithValidation />} />
        <Route path="/random-slider" element={<ImageSlider />} />
        <Route path="/city" element={<Conditional />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
