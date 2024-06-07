import React from 'react'
import Values from "./Values"
import styled from "styled-components"
const ValuesSection = () => {
  return (
    <Container>
    <div className="Container-box1">
      <div className="Title" >
        <h1>Values</h1>
      </div>
      <div className="Paragrph">
        <p>
          Software or hardware, we excel in executing projects, enhancing
          processes, and products through innovative technology at company
          name
        </p>
      </div>
    </div>

    <div className="Container-box2">
      <Values
        img="Vector.svg"
        title="Experience"
        description="At CESON, we curate unparalleled experiences, blending technical expertise with creative solutions. Our commitment to crafting exceptional user experiences defines our approach, driving innovation and client satisfaction."
      />

      <Values
        img="collaboration.svg"
        title="Collaboration"
        description="Collaboration is the heartbeat of CESON. We foster a culture that thrives on teamwork, uniting diverse talents to deliver seamless software solutions and enriching educational experiences for our clients and learners."
      />

      <Values
        img="communication.svg"
        title="Communication"
        description="Clear and effective communication is foundational at  CESON We prioritize transparent and open dialogue, ensuring understanding and alignment within our team, with clients, and throughout our educational programs."
      />

      <Values
        img="open.svg"
        title="Openness"
        description="Openness is ingrained in our culture at  CESON. We embrace diverse perspectives, encourage curiosity, and foster an environment where ideas flow freely. It's the key to our innovative approach and continuous growth."
      />
    </div>
  </Container>
  )
}

export default ValuesSection


const Container = styled.div`
  height: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 150px 165px;
  background-color: white;

  .Container-box1 {
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    gap: 390px;
    border-bottom: 4px solid lightgray;

    .Title {
      height: 100px;
      width: 50%;
    }
    h1 {
      font-size: 55px;
      font-weight: 500;
    }
    p {
      font-size: 16px;
    }
  }
  .Container-box2 {
    height: 1000px;
    width: 100%;
    padding: 100px 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 100px;
  }
`;
