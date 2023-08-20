// eslint-disable-next-line no-unused-vars
import React from "react";
import ImageSlider from "./components/ImageSlider";

function App() {
  const slides = [
    {
      d: `http://localhost:5173/public/image/image1.jpg`,
      title: `natural1`,
    },
    { d: `http://localhost:5173/public/image/image2.jpg`, title: `natural2` },
    { d: `http://localhost:5173/public/image/image3.jpg`, title: `natural3` },
    { d: `http://localhost:5173/public/image/image4.jpg`, title: `natural4` },
    { d: `http://localhost:5173/public/image/image5.jpg`, title: `natural5` },
  ];

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  );
}

export default App;
