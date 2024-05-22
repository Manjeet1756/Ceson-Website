import React, { useState } from 'react';
// import './Slider.css';
import styled from 'styled-components'
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: 'Slide 1', description: 'This is the first slide.' },
    { title: 'Slide 2', description: 'This is the second slide.' },
    { title: 'Slide 3', description: 'This is the third slide.' },
    { title: 'Slide 4', description: 'This is the first slide.' },
    { title: 'Slide 5', description: 'This is the second slide.' },
    { title: 'Slide 6', description: 'This is the third slide.' },
    { title: 'Slide 7', description: 'This is the first slide.' },
    { title: 'Slide 8', description: 'This is the second slide.' },
    { title: 'Slide 9', description: 'This is the third slide.' }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
  <Container>
      <div className="slider-content">
        <div className="slide" key={currentIndex}>
          <div className="slide-text">
            <h2>{slides[currentIndex].title}</h2>
            <p>{slides[currentIndex].description}</p>
          </div>
          <button className="next-button" onClick={handleNext}>→</button>
        </div>
      </div>
    </Container>
  );
};

export default Slider;

const Container = styled.div`

width: 100%;
height:500px;

  .slide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  width:100%;
  background: #f5f5f5;
  border: 1px solid #ccc;
}

.slide-content {
  text-align: left;
}

.slick-prev, .slick-next {
  z-index: 1;
}

`