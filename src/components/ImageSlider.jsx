// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line react/prop-types

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStylse = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // eslint-disable-next-line react/prop-types
    backgroundImage: `url(${slides[currentIndex].d})`,
  };

  const leftArrow = {
    position: "absolute",
    top: "50%",
    transform: " translate(0, -50%",
    left: " 32px",
    fontSize: "45px",
    color: "white",
    textShadow: "1px 1px 10px black",
    zIndex: 1,
    curson: "pointer",
    backgroundColor: "transparent",
  };

  const rightArrow = {
    position: "absolute",
    top: "50%",
    transform: " translate(0, -50%",
    right: " 32px",
    fontSize: "45px",
    color: "white",
    textShadow: "1px 1px 10px black",
    zIndex: 1,
    curson: "pointer",
    backgroundColor: "transparent",
  };

  const dotContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyle = {
    fontSize: "2rem",
    margin: "0 3px",
    cursor: "pointer",
  };

  const goToPrev = () => {
    // const isFirstSlide = currentIndex === 0;
    // console.log(isFirstSlide);
    // eslint-disable-next-line react/prop-types
    // const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    // setCurrentIndex(newIndex);

    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    // const isLastSlide = currentIndex === slides.length - 1;
    // console.log(isLastSlide);
    // eslint-disable-next-line react/prop-types
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    console.log(currentIndex);
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={sliderStyles}>
      <button style={leftArrow} onClick={goToPrev}>
        &larr;
      </button>
      <div style={slideStylse}></div>
      <div style={dotContainerStyles}>
        {slides.map((element, index) => (
          <div key={index} style={dotStyle} onClick={() => goToSlide(index)}>
            &#x2022;
          </div>
        ))}
      </div>
      <button style={rightArrow} onClick={goToNext}>
        &rarr;
      </button>
    </div>
  );
}
