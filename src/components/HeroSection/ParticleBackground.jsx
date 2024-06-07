// ParticleBackground.js
import React from 'react';
import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import styled from "styled-components"
const ParticleBackground = () => {

  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };

  return (
    
    <Particles
      id="tsparticles"
      // init={particlesInit}
      options={{
        background: {
          color: {
            value: 'blue',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      // style={{
      //   position: 'absolute',
      //   width: '100%',
      //   height: '100%',
      //   zIndex: -1,
      // }}
    />
  
  );
};

export default ParticleBackground;
