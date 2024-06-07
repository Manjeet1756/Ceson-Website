import React from 'react';
import styled from 'styled-components';



const AnimatedButton = ({ rounded }) => (
    <Button rounded={rounded}>
      <span className="btn-text">Get Started</span>
    </Button>
  );
  

const Button = styled.button`
  margin: 20px auto;
  border: none;
  padding: 10px 44px;
  font-size: 36px;
  position: relative;
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${props => props.rounded ? '50px' : '0'};
  transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &::before {
    content: '';
    width: ${props => props.rounded ? '25%' : '50%'};
    height: 100%;
    background: ${props => props.rounded ? 'transparent' : 'black'};
    position: absolute;
    top: 0;
    left: 0;
    transition: width 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border-radius: ${props => props.rounded ? '50px' : '0'};
    overflow:hidden;
  }



  .btn-text {
    color: white;
    mix-blend-mode: difference;
    
  }

  &:hover::before {
    width: 150px;
  }

`;

export default AnimatedButton;
