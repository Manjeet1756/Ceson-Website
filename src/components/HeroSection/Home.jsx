import React from "react";
import styled from "styled-components";
// import Cards from "./Cards";
// import CaseStudy from "./Values";
// import SmallCards from "./SmallCards";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import Testimonial from "./Testimonial";
// import Slider from "./Slider"
// import {Link} from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Slider from "./Slider";
import Values from "./Values";

const Home = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     ounce: true,
  //   });
  // }, []);

  return (
    <>
      <Container1>
        <img src="main img.jpg" alt="img" />
        <div className="Container1-box">
          <div className="Titles">
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
            <button>
              Let's started
              <ArrowRightAltIcon style={{ fontSize: "50px" }} />
            </button>
          </div>
        </div>
      </Container1>

      <Container2>
        <div className="Container2-box1">
          <h1>About Us</h1>
          &nbsp;
          <hr
            style={{ border: "0", height: "3px", backgroundColor: "#eae8e8" }}
          />
        </div>

        <div className="Container2-box2">
          <div className="Container2-box2-sub-box1">
            <p>
              Welcome to<strong> CESON</strong>, where innovation meets
              excellence in software solutions and education. Established in{" "}
              <b>2022</b> by Bharani, our company is dedicated to providing
              cutting-edge software services and empowering individuals through
              high-quality courses.
            </p>
            <button> More About Us</button>
          </div>
          <div className="Container2-box2-sub-box2">
            <div className="Title">
              <h1>Aim</h1>
              <h1>Mission</h1>
              <h1>Progress</h1>
            </div>
            <div className="Description">
              <p>
                Empowering businesses through cutting-edge IT solutions,CESON
                aims to <b>revolutionize Industries</b> . We strive to enhance
                efficiency, foster innovation, and exceed customer expectations.
              </p>
              <p style={{ marginTop: "70px" }}>
                To provide unparalleled software solutions, foster learning
                through <b>top-rated courses</b>, and propel careers. CESON is
                dedicated to shaping a future where technology transforms lives.
              </p>
              <p style={{ marginTop: "68px" }}>
                At CESON , progress is measured in the success stories of our
                clients. With a relentless pursuit of excellence, we
                continuously evolve, pushing boundaries in the IT and education
                sectors.
              </p>
            </div>
          </div>
        </div>
      </Container2>
      <Container3>
        <div className="Container3-box1">
          <div className="Title">
            <h1>Expertise</h1>
          </div>
          <div className="Paragrph">
            <p>
              Our clients range from medium-sized businesses to internationally
              traded corporations, encompassing hospitals and care facilities
            </p>
          </div>
        </div>

        <div className="Container3-box2">
          <img src="google.png" alt="img" />
          <img src="fedex.png" alt="img" />
          <img src="microsoft.png" alt="img" />
          <img src="amazon-shopping-app.png" alt="img" />
          <img src="nikon.png" alt="img" />
          <img src="shopee.png" alt="img" />
        </div>
      </Container3>

      <Container4>
        <div className="Container4-box1">
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

        <div className="Container4-box2">
          <Slider />
        </div>
      </Container4>

      <Container5>
        <div className="Container5-box1">
          <p>
            Personalized learning with us. Dedicated to your goals and success.
          </p>
        </div>

        <div className="Container5-box2">
          <button>
            <ArrowRightAltIcon style={{ fontSize: "50px" }} />
          </button>
        </div>
      </Container5>

      <Container6>
        <div className="Container6-box1">
          <div className="Title" style={{ marginBottom: "25px" }}>
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

        <div className="Container6-box2">
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
      </Container6>

      <Container7>
        <div className="JsParticles">
          {/* <Particle /> */}

          <div className="Container7-box1">
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
          <div className="Container7-box2">
            <Slider />
          </div>
        </div>
      </Container7>
      <Container8>
        <div className="Container8-box1">
          <h1 style={{ fontSize: "75px", fontWeight: "normal" }}>Milestones</h1>
          <p style={{ fontSize: "18px", fontWeight: "normal" }}>
            explore company name journey, defined by transformative milestones,
            showcasing our unwavering commitment to excellence and innovation.
          </p>
        </div>
        <div className="Container8-box2">
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
      </Container8>
      <Container9>
        <div className="Container9-box1">
          <p>Secure the future of your company with CESON</p>
        </div>

        <div className="Container9-box2">
          <button>
            {" "}
            <ArrowRightAltIcon style={{ fontSize: "50px" }} />
          </button>
        </div>
      </Container9>
    </>
  );
};

export default Home;

const Container1 = styled.div`
  height: 1080px;
  width: 100%;
  position: relative;
  letter-spacing: 6px;
  z-index: -1;
  img {
    height: 1000px;
    width: 100%;
    object-fit: cover;
    filter: brightness(0.5);
    position: relative;
  }
  .Container1-box {
    position: absolute;
    top: 15%;
    height: 700px;
    width: 1000px;
    color: white;
    padding-left: 165px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 50px;

    h1 {
      font-size: 80px;
      font-weight: bold;
    }
    p {
      font-size: 30px;
      font-weight: normal;
    }
  }
  button {
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
  }
`;

const Container2 = styled.div`
  height: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 100px 165px;

  .Container2-box1 {
    height: 200px;
    width: 100%;
    background-color: white;
    h1 {
      font-size: 70px;
      font-weight: normal;
    }
  }
  .Container2-box2 {
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
    .Container2-box2-sub-box1 {
      height: 100%;
      width: 30%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: left;

      button {
        height: 100px;
        width: 250px;
        border-radius: 100px;
        border: none;
        color: white;
        padding: 30px 8px;
        background-color: #5e35b1;
        font-size: 20px;
      }
    }
    .Container2-box2-sub-box2 {
      height: 100%;
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;

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

const Container3 = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 100px 165px;
  background-color: #d9e2ff;

  .Container3-box1 {
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    gap: 330px;
    border-bottom: 4px solid white;

    p {
      font-size: 18px;
    }
    .Title {
      height: 100px;
      width: 50%;

      h1 {
        font-size: 75px;
        font-weight: normal;
      }
    }

    .Paragraph {
      height: 100px;
      width: 50%;
    }
  }

  .Container3-box2 {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Container4 = styled.div`
  height: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 100px 165px;
  background-color: white;

  .Container4-box1 {
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    gap: 350px;
    border-bottom: 4px solid lightgray;

    p {
      font-size: 18px;
    }
    .Title {
      height: 100px;
      width: 50%;

      h1 {
        font-size: 75px;
        font-weight: normal;
      }
    }

    .Paragraph {
      height: 100px;
      width: 50%;
    }
  }

  .Container4-box2 {
    height: 700px;
    width: 100%;
  }
`;

const Container5 = styled.div`
  height: 495px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: center;
  background-image: url("P-B Form 1.png");
  padding: 0px 165px;
  color: white;

  .Container5-box1 {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 120px;
  }
  .Container5-box2 {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 100%;
    width: 50%;
  }

  p {
    font-size: 40px;
  }

  button {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    background-color: rgba(34, 34, 59, 1);
    color: white;
    justify-content: center;
    border: none;
  }
`;

const Container6 = styled.div`
  height: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 150px 165px;
  background-color: white;

  .Container6-box1 {
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
      font-size: 75px;
      font-weight: normal;
    }
    p {
      font-size: 18px;
    }
  }
  .Container6-box2 {
    height: 1000px;
    width: 100%;
    padding: 100px 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 100px;
  }
`;
const Container7 = styled.div`
  height: 820px;
  width: 100%;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  background-color: "#fdffff";
  /* padding: 150px 165px ; */
  position: relative;
  overflow: hidden;

  .JsParticles {
    height: 820px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #adf3f5;
    padding: 150px 165px;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  .Container7-box1 {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 70px;
    align-items: left;
  }
  .Container7-box2 {
    height: 100%;
    width: 50%;
  }

  h1 {
    font-size: 75px;
    font-weight: normal;
  }
  p {
    font-size: 18px;
  }
  button {
    height: 100px;
    width: 250px;
    border-radius: 100px;
    border: none;
    color: white;
    padding: 30px 8px;
    background-color: #5e35b1;
    font-size: 20px;
  }
`;
const Container8 = styled.div`
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
  .Container8-box2 {
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;

    h2 {
      font-size: 40px;
      font-weight: normal;
    }

    h1 {
      font-size: 52px;
    }
    p {
      font-size: 24px;
    }
    span {
      height: 200px;
      width: 230px;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
    }
  }
  .Milestone {
    padding: 150px 0px;
    position: absolute;
    top: 22%;
    left: -0.7%;
    width: 100%;
  }
  img {
    width: 100%;
    opacity: 0.2;
  }
`;
const Container9 = styled.div`
  height: 395px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: center;
  background-image: url("future -img.png");
  padding: 0px 165px;
  color: white;

  .Container9-box1 {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 120px;
  }
  .Container9-box2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
  }

  p {
    font-size: 40px;
  }

  button {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    background-color: rgba(143, 93, 223, 0.7);

    color: white;
    justify-content: center;
    border: none;
  }
`;
