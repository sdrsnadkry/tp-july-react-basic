import React, { useState } from "react";

const images = [
  "https://images.pexels.com/photos/15574290/pexels-photo-15574290/free-photo-of-magical-equipment-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/17610238/pexels-photo-17610238/free-photo-of-pink-car-and-balloons-flying-over-cappadocia.jpeg",
  "https://images.pexels.com/photos/18422807/pexels-photo-18422807/free-photo-of-couple-in-vintage-cabriolet-in-cappadocia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/13443939/pexels-photo-13443939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/19236080/pexels-photo-19236080/free-photo-of-hot-air-balloon-in-cappadocia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    let newIndex = currentImageIndex + 1;
    if (newIndex > images.length - 1) {
      newIndex = 0;
    }

    setCurrentImageIndex(newIndex);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const generateUniqueNumber = () => {
    const random = Math.floor(Math.random() * 5);

    if (random === currentImageIndex) {
      return generateUniqueNumber();
    }
    return random;
  };

  const handleSelectRandom = () => {
    const random = generateUniqueNumber();
    setCurrentImageIndex(random);
  };

  const styles = { marginTop: 40, height: 400, width: 400, overflow: "hidden" };

  return (
    <>
      <div style={styles}>
        <img
          src={images[currentImageIndex]}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <button onClick={handlePrevious}>Prev</button>
      <button onClick={handleNext}>Next</button>
      <button onClick={handleSelectRandom}>Random</button>
    </>
  );
};

export default ImageSlider;
