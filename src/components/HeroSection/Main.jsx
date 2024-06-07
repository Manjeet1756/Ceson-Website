import React from 'react'
import styled from "styled-components"
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Main = () => {
  return (
    
<Container >
<img src="main img.jpg" alt="img" />
<div className="Container-box">
  <div className="Titles" >
    <h1>Implementing</h1>
    <h1>Software </h1>
    <h1>Solutions</h1>
  </div>
  <div className="Para">
    <p>
      Innovating Tomorrow's Solutions, Today. Logo – Your Trusted IT
      Partner
    </p>
  </div>
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

export default Main

const Container = styled.div`
  height: 1080px;
  width: 100%;
  position: relative;
  letter-spacing: 6px;

  img {
    height: 1080px;
    max-width: 100%;
    object-fit: cover;
    filter: brightness(0.5);
    position: relative;
  }
  .Container-box {
    position: absolute;
    top: 10%;
    height: 700px;
    width: 1000px;
    color: white;
    padding-left: 165px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 30px;
    .Titles{
      height:400px;
      width:800px;
      display:flex;
      align-items:left;
      flex-direction:column;
      justify-content:center;

    }
    


    h1 {
      font-size: 80px;
      font-weight:600;
    }
    p {
      font-size: 30px;
      font-weight: normal;
    }
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
  padding: 25px 22px;
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
  width: 100px;
  height: 100px;
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

  /* button {
    height: 80px;
    width: 400px;
    font-size: 25px;
    text-align: center;
    border: none;
    border-radius: 100px;
    position: relative;
    display: inline-block;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    gap: 120px;

    color: #fcfbfb;

    cursor: pointer;
    overflow: hidden;
    z-index: 0;
  }

  button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    backdrop-filter: blur(4px);
    background: rgba(221, 221, 221, 0.213);
    z-index: -1;
  }
  .Titles {
    line-height: 95px;
  } */




`;