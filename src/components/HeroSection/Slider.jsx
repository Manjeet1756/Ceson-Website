

import React, { useState } from "react";
import "./Slider.css";


const Slider = () => {
  const [slides, setSlides] = useState([
    "Technology  ",
    "Innovation",
    "Integration",
    "Transformation",
    "Excellence"
  ]);
  

  const handleNext = () => {
    setSlides((prevSlides) => {
      const newSlides = [...prevSlides];
      const firstSlide = newSlides.shift();
      newSlides.push(firstSlide);
      return newSlides;
    });
  };

  return (
    <div className="slider-container" style={{position:"relative"}}>
      <div className="slides">
        {slides.map((slide, index) => (
          <div key={index} className="slide" style={{ zIndex: slides.length - index }}>
            <div style={{display:"flex",alignItems:"center", gap:"2.5%",height:"60px",width:"300px"}}><h1>{slide}</h1> <img src="ico tech.png" alt="img" style={{height:"45px",width:"45px",objectFit:"cover"}} /></div>
            <p>
              We Propel Tech Advancement Through Bespoke Solutions, Ensuring Seamless
              Integration And Innovation For Businesses. Our Expertise Drives Digital
              Transformation, Providing Customized Strategies To Navigate The Evolving
              Landscape Of Technology. We Are Committed To Delivering Excellence,
              Empowering Our Clients To Thrive In The Ever-Changing World Of Technology.
            </p>
            <button className="next-btn" onClick={handleNext}>→</button>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Slider;
