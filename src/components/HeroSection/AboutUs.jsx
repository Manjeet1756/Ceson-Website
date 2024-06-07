import React from "react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Container>
      <div className="Container-box1">
        <h1 style={{ fontSize: "55px", fontWeight: "420" }}>About Us</h1>
        &nbsp;
        <hr
          style={{ border: "0", height: "3px", backgroundColor: "#eae8e8" }}
        />
      </div>

      <div className="Container-box2">
        <div className="Container-box2-sub-box1">
          <p style={{ fontSize: "18px" }}>
            Welcome to<strong> CESON</strong>, where innovation meets excellence
            in software solutions and education. Established in <b>2022</b> by
            Bharani, our company is dedicated to providing cutting-edge software
            services and empowering individuals through high-quality courses.
          </p>
          <button> More About Us</button>
        </div>
        <div className="Container-box2-sub-box2">
          <div className="Title">
            <h1>Aim</h1>
            <h1>Mission</h1>
            <h1>Progress</h1>
          </div>
          <div className="Description">
            <p>
              Empowering businesses through cutting-edge IT solutions,CESON aims
              to <b>revolutionize Industries</b> . We strive to enhance
              efficiency, foster innovation, and exceed customer expectations.
            </p>
            <p style={{ marginTop: "70px" }}>
              To provide unparalleled software solutions, foster learning
              through <b>top-rated courses</b>, and propel careers. CESON is
              dedicated to shaping a future where technology transforms lives.
            </p>
            <p style={{ marginTop: "68px" }}>
              At CESON , progress is measured in the success stories of our
              clients. With a relentless pursuit of excellence, we continuously
              evolve, pushing boundaries in the IT and education sectors.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  height: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 100px 165px;

  .Container-box1 {
    height: 200px;
    width: 100%;
    background-color: white;
  }
  .Container-box2 {
    height: 500px;
    width: 100%;
    padding-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;

    p {
      font-size: 18px;
    }
    .Container-box2-sub-box1 {
      height: 100%;
      width: 30%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: left;
      gap: 25%;
      button {
        height: 80px;
        width: 220px;
        border-radius: 100px;
        border: none;
        color: white;
        padding: 15px 8px;
        background-color: #5e35b1;
        font-size: 20px;
      }
    }
    .Container-box2-sub-box2 {
      height: 100%;
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5%;

      .Title {
        height: 100%;

        display: flex;
        align-items: left;
        justify-content: space-between;
        flex-direction: column;
        h1 {
          font-weight: normal;
        }
      }
      .Description {
        height: 100%;
        display: flex;
        align-items: left;
        justify-content: space-between;
        flex-direction: column;
      }
    }
  }
`;
