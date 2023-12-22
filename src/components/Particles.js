// ParticleComponent.js
import React, { useEffect } from 'react';
import './Particles.css'; // Assuming you have a separate CSS file

const ParticleComponent = () => {
  useEffect(() => {
    const Particles = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 58,
            density: {
              enable: true,
              value_area: 1183.721462448409,
            },
          },
          color: {
            value: '#020830',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
          },
          opacity: {
            value: 0.5371430403899501,
            random: false,
            anim: {
              enable: false,
              speed: 0.5684540486109415,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 12.02559045649142,
            random: true,
            anim: {
              enable: false,
              speed: 7.308694910712106,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 176.3753266952075,
            color: '#ffffff',
            opacity: 0.5130918594769673,
            width: 0.6413648243462091,
          },
          move: {
            enable: true,
            speed: 4,
            direction: 'left',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: true,
              rotateX: 3367.1653278175977,
              rotateY: 4409.383167380188,
            },
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
            resize: true,
          },
          modes: {
            grab: {
              distance: 155.84415584415586,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 389.7970619046457,
              size: 243.62316369040354,
              duration: 2.9234779642848423,
              opacity: 0.8364395286703855,
              speed: 3,
            },
            repulse: {
              distance: 100, // Adjust the distance as needed
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    };

    Particles(); // Call the Particles function

    // Cleanup function
    return () => {
      // Cleanup code (if necessary)
      const statsElement = document.querySelector('.stats');
      if (statsElement) {
        document.body.removeChild(statsElement);
      }
    };
  }, []);

  return (
    <div>
      {/* Particle.js container */}
      <div id="particles-js"></div>

      {/* Stats - Count particles */}
      <div className="count-particles">
        <span className="js-count-particles"></span>
      </div>
    </div>
  );
};

export default ParticleComponent;
