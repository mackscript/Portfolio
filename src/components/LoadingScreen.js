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
          const newValue = prevCounter + 1;

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

    return () => clearInterval(count);
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite({
      onComplete: () => {
        showContent();
      },
    });
    t1.to('#progress_bar', 2, { opacity: 0 })
      .to('#count', 1, { opacity: 0 }, '-=1')
      .to('.loading', 1, { y: '-100%', ease: Expo.easeInOut }, '-=0.1')
      .to('main', 0.8, { transform: 'translateY(-100%)' }, '-=0.5')
      .to('main', 0, { display: 'none' });
  };

  return (
    <main>
      <div className='loading'>
        {/* <div className='progress_two'></div> */}
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
