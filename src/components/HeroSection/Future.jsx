import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import styled from "styled-components"
import {Link} from "react-router-dom"
// import GetStartedButton from './GetStartedButton'

const Future = () => {
  return (
     
    <Container>
    <div className="Container-box1">
      <p>Secure the future of your company with CESON</p>
    </div>

    <div className="Container-box2">
      {/* <GetStartedButton/> */}
      <a href="#" className="cta">
      <span >
      <ArrowRightAltIcon style={{fontSize:"60px"}}/> 
      </span>
      </a>
    </div>
  </Container>
  )

}

export default Future


const Container = styled.div`
  height: 395px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: center;
  background-image: url("future -img.png");
  padding: 0px 165px;
  color: white;

  .Container-box1 {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-right: 120px; */
  }
  .Container-box2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
  }

  p {
    font-size: 30px;
  }
  a{
    text-decoration:none;
    color:inherit;
  
  }
  
  .cta {
  position: relative;
  margin: auto;
  padding: 10px 10px;
  transition: all 0.9s ease;
  

}
.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 45px;
  background-color: rgba(255, 255, 255, 0.2); 
  width: 80px;
  height: 80px;
  transition: all 0.9s ease;

}
.cta span {
  position: relative;
  font-size: 16px;
  line-height: 45px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
  display:flex;
  align-items:center;
  

 
}

.cta:hover:before {
  width: 300px;
  background-color: rgba(255, 255, 255, 0.2);

}

.cta:hover svg {
  transform: translateX(0);
}
.cta:active {
  transform: scale(0.96);
  
}


  /* button {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    background-color: rgba(143, 93, 223, 0.7);

    color: white;
    justify-content: center;
    border: none;
  } */
`;
