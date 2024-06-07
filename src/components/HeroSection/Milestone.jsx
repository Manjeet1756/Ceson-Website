import React from 'react'
import styled,{keyframes} from "styled-components"


const Milestone = () => {
  return (
    <Container>
    <div className="Container-box1">
      <h1 style={{ fontSize: "55px", fontWeight: "normal" }}>Milestones</h1>
      <p style={{ fontSize: "18px", fontWeight: "normal" ,width:"70%"}}>
        Explore company name journey, defined by transformative milestones,
        showcasing our unwavering commitment to excellence and innovation.
      </p>
    </div>
    <div className="Container-box2">
      <span>
        <h2>Projects</h2>
        <h1>+69</h1>
        <p>Number of Projects Completed</p>
      </span>
      <span>
        <h2>Customer</h2>
        <h1>+25</h1>
        <p>Happy Customer</p>
      </span>
      <span>
        <h2>Satisfaction</h2>
        <h1>+97%</h1>
        <p>Increased Customersatisfaction</p>
      </span>
      <span>
        <h2>Reports</h2>
        <h1>+3</h1>
        <p>Year of Experiences</p>
      </span>
    </div>
    <div className="Milestone">
      <img src="Milestones.png" alt="" />
    </div>
  </Container>
  )
}

export default Milestone


const moveBackground = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;


const Container = styled.div`
  height: 750px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 165px;
 
  position: relative;
  .Container8-box1 {
    height: 200px;
    width: 100%;
    position: relative;
    z-index: 1;
  }
  .Container-box2 {
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;

    h2 {
      font-size: 30px;
      font-weight: normal;
    }

    h1 {
      font-size: 42px;
    }
    p {
      font-size: 18px;

    }
    span {
      height: 200px;
      width: 230px;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      gap: 0px;
      p{
        font-weight:500;
      }
    }
  }
  .Milestone {
    padding: 150px 0px;
    position: absolute;
    top: 22%;
    left: -0.7%;
    width: 100%;
    transition: background-position 0.85s ease-in-out;

   

  }
  img {
    width: 100%;
    opacity: 0.2;
    animation: ${moveBackground} 10s linear infinite;
   
  }
`;

