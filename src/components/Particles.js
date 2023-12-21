import React, { useEffect } from 'react';
import Particles from 'particles.js';
const ParticleComponent = () => {
  useEffect(() => {
    const particlesJSConfig = {
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#167bd4',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#65607d',
          },
        },
        opacity: {
          value: 0.5,
          random: true,
        },
        size: {
          value: 5,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      retina_detect: true,
    };

    Particles('particles-js', particlesJSConfig);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div id="particles-js" className="particles-container">
      <div className="count-particles">
        <span className="js-count-particles">--</span> particles
      </div>
    </div>
  );
};

export default ParticleComponent;
