import React from 'react'
import styled from "styled-components"
import Slider from "./Slider"
const Services = () => {
  return (
     <Container>
    <div className="Container-box1">
      <div className="Title" style={{ marginBottom: "25px" }}>
        <h1>Services</h1>
      </div>
      <div className="Paragrph">
        <p>
          At <b>CESON</b>, our services are crafted to empower your business
          and fuel success. We prioritize{" "}
          <b>efficiency, innovation, and customer</b>
          satisfaction in a comprehensive suite that spans crucial business
          functions, ensuring your journey towards success is seamless and
          effective
        </p>
      </div>
    </div>

    <div className="Container-box2">
      <Slider/>
    </div>
  </Container>
  )
}

export default Services


const Container = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 80px 165px 140px 165px;
  background-color: white;

  .Container-box1 {
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    gap: 350px;
    border-bottom: 4px solid lightgray;

    p {
      font-size: 16px;
    }
    .Title {
      height: 100px;
      width: 50%;

      h1 {
        font-size: 55px;
        font-weight: 500;
      }
    }

    .Paragraph {
      height: 100px;
      width: 50%;
    }
  }

  .Container-box2 {
    height: 400px;
    width: 100%;
  
  }
`;