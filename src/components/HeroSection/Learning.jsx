import React from 'react'
import styled from "styled-components"

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Learning = () => {
  return (
       

    <Container>
    <div className="Container-box1">
      <p>
        Personalized learning with us. Dedicated to your goals and success.
      </p>
    </div>

    <div className="Container-box2">
     
      <div className="btn">
     <a href="#" className="cta">
      <span >
      <ArrowRightAltIcon style={{fontSize:"60px"}}/> 
      </span>
      </a>
  </div>
  
    </div>
  </Container>

  )
}

export default Learning



const Container = styled.div`
  height: 450px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: center;
  background-image: url("P-B Form 1.png");
  padding: 0px 165px;
  color: white;

  .Container-box1 {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 100px;
  }
  .Container-box2 {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
    width: 50%;
  }

  p {
    font-size: 30px;
  }

  .btn{
      height:100px;
      width:400px;
      display:flex;
      text-align:left;
      justify-content:left;
    margin-right:40px;


   
  a{
    text-decoration:none;
    color:inherit;
  
  }

  .cta{
   
  position: relative;
  margin-right:50px;
  padding: 15px 10px;
  transition: all 0.9s ease;
 

}
.cta:before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 55px;
  background-color: rgba(255, 255, 255, 0.2); 
  width: 80px;
  height: 80px;
  transition: all 0.9s ease;
  filter:blur(0.6px);

}
.cta span{
  position: relative;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
  display:flex;
  align-items:center;

  

 
}

.cta:hover:before {
  width: 350px;
  background-color: rgba(255, 255, 255, 0.2);

}

.cta:hover svg{
  transform: translateX(0);
}
.cta:active{
  transform: scale(0.96);
  
}
  
}
`;