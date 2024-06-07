import React from 'react'
import styled from "styled-components"

const Expertise = () => {
  return (
    <Container>
    <div className="Container-box1">
      <div className="Title">
        <h1>Expertise</h1>
      </div>
      <div className="Paragrph" >
        <p >
          Our clients range from medium-sized businesses to internationally
          traded corporations, encompassing hospitals and care facilities
        </p>
      </div>
    </div>

    <div className="Container-box2">
      <img src="google.png" alt="img" />
      <img src="fedex.png" alt="img" />
      <img src="microsoft.png" alt="img" />
      <img src="amazon-shopping-app.png" alt="img" />
      <img src="nikon.png" alt="img" />
      <img src="shopee.png" alt="img" />
    </div>
  </Container>
  )
}

export default Expertise


const Container = styled.div`
  height: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10%;
  padding: 50px 165px;
  background-color: #d9e2ff;

  .Container-box1 {
    height: 210px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    gap: 330px;
    border-bottom: 4px solid white;

    p {
      font-size: 16px;
    }
    .Title {
      height: 100px;
      width: 50%;

      h1 {
        font-size: 55px;
        font-weight: 420;
      }
    }

    .Paragraph {
      height: 100px;
      width: 50%;
      
    }
  }

  .Container-box2 {
    height: 210px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    img{
      height:120px;
      width:120px;
      object-fit:cover;
    }
    
  }
`;