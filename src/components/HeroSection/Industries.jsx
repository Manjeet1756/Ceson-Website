import React from "react";
import Slider2 from "./Slider2";
import styled from "styled-components";


const Industries = () => {
  return (
    <>
      <Container>

   

        <div className="Container-box1">
          <h1>Industries</h1>
          <p>
            As a versatile service provider, we cater to diverse industries,
            offering tailored solutions to meet specific needs. We ensure
            success across varied business landscapes with
            <br></br>
            Comprehensive and adaptable services.
          </p>
          <button>All Cases</button>
        </div>
        <div className="Container-box2">
          <Slider2/>
        </div>
      </Container>
    </>
  );
};

export default Industries;

const Container = styled.div`
  height: 700px;
  width: 100%;

  display: flex;
  justify-content:center;
align-items:center;
 
  padding: 100px 165px;
 gap:15%;
 position:relative;



  .Container-box1 {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: left;
    

    button {
      height: 70px;
      width: 150px;
      border-radius: 100px;
      border: none;
      color: white;
      padding: 20px 8px;
      background-color: #5e35b1;
      font-size: 20px;
    }
    h1 {
      font-size: 55px;
      font-weight: 500;
    }
    p {
      /* width:59%; */
      font-size: 16px;
    }
  }

  .Container-box2 {
    height: 100%;
    width: 70%;
 
  
  }
`;
