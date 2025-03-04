import React, { useEffect, useState } from 'react';
import { TimelineLite, gsap, CSSPlugin, Power3, Expo } from 'gsap';
import Hermione from '../assets/img/her.gif';

gsap.registerPlugin(CSSPlugin);

const LoadingScreen = ({ showContent }) => {
  const [counter, setCounter] = useState(0);
  const [displayCounter, setDisplayCounter] = useState('0');

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          // Custom number progression logic
          const newValue = prevCounter + 1;

          // Sequentially display numbers
          setDisplayCounter(newValue);

          if (newValue === 100) {
            clearInterval(count);
            reveal();
          }

          return newValue;
        }
        return prevCounter;
      });
    }, 25);

    // Clean up the interval on component unmount
    return () => clearInterval(count);
  }, []);

  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to('.loading_gif img', {
    opacity: 0.7, // Darken the image
    filter: 'brightness(0.7) contrast(1.2)', // Dark effect with slight contrast
    duration: 0.5,
  }).to('.loading_gif img', {
    x: 'random(-2, 2)', // Small left-right jitter
    y: 'random(-2, 2)', // Small up-down jitter
    rotation: 'random(-1, 1)', // Tiny rotation for shakiness
    duration: 0.1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });

  const reveal = () => {
    const t1 = new TimelineLite({
      onComplete: () => {
        showContent();
      },
    });
    t1.to('#progress_bar', 2, { opacity: 0 })
      .to('#count', 1, { opacity: 0 }, '-=1')
      .to('.loading_text', 1, { opacity: 0 }, '-=1')
      .to('.loading_gif', 1, { opacity: 0 }, '-=1')
      .to('.loading', 1, { y: '-100%', ease: Expo.easeInOut }, '+=0.2') // Loading screen goes up
      .to('main', 0.8, { transform: 'translateY(-100%)' }, '-=0.5') // Delayed effect for main
      .to('main', 0, { display: 'none' });
  };

  return (
    <main>
      <div className='loading  '>
        {/* <div className='progress_two'></div> */}
        <div className='loading_gif'>
          <img src={Hermione} alt='Loading' />
        </div>
        <p className='loading_text'>Wingardium Leviosa</p>
        <div
          className='hide'
          id='progress_bar'
          style={{ width: counter + '%' }}
        ></div>
        <p id='count' className='hide'>
          {displayCounter}%
        </p>
      </div>
    </main>
  );
};

export default LoadingScreen;
