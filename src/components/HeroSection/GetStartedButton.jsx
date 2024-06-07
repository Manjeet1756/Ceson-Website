import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styled from 'styled-components';

const Button = styled.button`
  background-color:purple;
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  overflow: hidden;
  position: relative;
  transition: width 0.3s ease-in-out;

  &:hover {
    width: 200px;
    transform:scaleX(1);
  }

  span {
    display: none;
    white-space: nowrap;
    margin-left: 10px;
  }

  &:hover span {
    display: inline;
  }
  
`;

// const Arrow = styled.div`
//   width: 0; 
//   height: 0; 
//   border-top: 10px solid transparent;
//   border-bottom: 10px solid transparent;
//   border-left: 10px solid white;
//   transition: margin-left 0.3s ease-in-out;

//   ${Button}:hover & {
//     margin-left: 10px;
//   }
// `;

const GetStartedButton = () => {
  return (
    <Button>
      {/* <Arrow /> */}
      <ArrowRightAltIcon style={{ fontSize: "50px" }} />
      <span>Get Started</span>
    </Button>
  );
};

export default GetStartedButton;