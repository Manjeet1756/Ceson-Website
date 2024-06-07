import React, { useState } from "react";
import "./Slider2.css";


const Slider2 = () => {
  const [slidess, setSlides] = useState([
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
    <div className="slider-container2" style={{position:"relative"}}>
      <div className="slides2">
        {slidess.map((slide, index) => (
          <div key={index} className="slide2" style={{ zIndex: slidess.length - index }}>
            <div style={{display:"flex",alignItems:"center", gap:"2.5%",height:"60px",width:"300px"}}><h1>{slide}</h1> <img src="ico tech.png" alt="img" style={{height:"45px",width:"45px",objectFit:"cover"}} /></div>
            <p>
              We Propel Tech Advancement Through Bespoke Solutions, Ensuring Seamless
              Integration And Innovation For Businesses. Our Expertise Drives Digital
              Transformation, Providing Customized Strategies To Navigate The Evolving
              Landscape Of Technology. We Are Committed To Delivering Excellence,
              Empowering Our Clients To Thrive In The Ever-Changing World Of Technology.
            </p>
            <button className="next-btn2" onClick={handleNext}>→</button>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Slider2;