import React, { useEffect, useState } from 'react';
import { TimelineLite, gsap, CSSPlugin, Power3, Expo } from 'gsap';
gsap.registerPlugin(CSSPlugin);

const LoadingScreen = ({ showContent }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          reveal();
          return 100;
        }
      });
    }, 25);

    // Clean up the interval on component unmount
    return () => clearInterval(count);
  }, []);

  const reveal = () => {
    const t1 = new TimelineLite({
      onComplete: () => {
        showContent();
      },
    });
    t1.to(
      '.progress_two',
      1.2,
      { width: '100%', ease: Expo.easeInOut },
      '+=0.7'
    )
      .to('.hide', 0.3, { opacity: 0 })
      .to('.hide', 0.1, { display: 'none' })
      .to(
        '.progress_two',
        1.2,
        { width: '100%', ease: Expo.easeInOut },
        '-=2.1'
      )
      // .to('.progress_two', 1.2, { width: 100%, ease: Expo.easeInOut }, '-=1.1')
      .to('.loading', 1, { y: '-100%', ease: Expo.easeInOut }, '-=0.2')
      .to(
        '#shape-overlays path',
        {
          duration: 2,
          attr: { d: 'M -0 -100 V 0 Q 50 0 100 0 V -100 z' },
          ease: Expo.easeInOut,
        },
        '-=0.4'
      )
      .to('main', 0.8, { transform: ' translateY(-100%)' }, '-=1.8141413')
      .to('main', 0, { display: 'none' });
  };

  return (
    <main>
      {/* <svg
        fill='red'
        id='shape-overlays'
        className='overlay h-full w-full'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
      >
        <path
          fill='red'
          className='overlay__path'
          vectorEffect='non-scaling-stroke'
          d='M 0 100 V 0 Q 50 0 100 0 V 100 z'
        ></path>
      </svg> */}
      <div className='loading'>
        <div className='progress_two'></div>
        <div
          className='hide'
          id='progress_bar'
          style={{ width: counter + '%' }}
        ></div>
        <p id='count' className='hide'>
          {counter}%
        </p>
      </div>
    </main>
  );
};

export default LoadingScreen;
