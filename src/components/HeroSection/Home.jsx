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

import Main from "./Main";
import AboutUs from "./AboutUs";
import Expertise from "./Expertise";
import Services from "./Services";
import Learning from "./Learning";
import ValuesSection from "./ValuesSection";
import Industries from "./Industries";
import Milestone from "./Milestone";
import Future from "./Future";
import ParticleBackground from "./ParticleBackground";
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
    <Container>
      <Main />
      <AboutUs />
      <Expertise />
      <Services />
      <Learning />
      <ValuesSection />
      <div className="pj">
      <ParticleBackground
          style={{
            height: "700px",
            width: "100%",
            position:"absolute",
            zIndex:-1
          
          }}

        />
      <Industries />
      </div>
      <Milestone />

      <Future />
      </Container>
    </>
  );
};

export default Home;
const Container = styled.div`
.pj{


height:700px;
width:100%;
}

  
`