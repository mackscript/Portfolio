import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const Header = () => {
  const rows = 1;
  const columns = 10;

  useEffect(() => {
    // Split the text into characters
    // const typeSplit = new SplitType('.content_main', {
    //   types: 'lines, words, chars',
    // });

    // Animate the characters
    gsap.from('.content_main .char', {
      x: '-110%',
      opacity: 0,
      rotationZ: 10,
      duration: 1,
      ease: 'power1.out',
      stagger: 0.1,
    });
  }, []);
  return (
    <div
      className='grid-container'
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {Array.from({ length: rows * columns }).map((_, index) => (
        <div className='grid-item' key={index}>
          {index === 2 && (
            <div className='content_main'>
              <p>FRONT-END</p>
              <p className='last_title'>DEVELOPER</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;
