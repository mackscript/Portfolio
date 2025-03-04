import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Scrolltext() {
  useEffect(() => {
    // scroll_text__next;
    gsap.to('.scroll_text__next', {
      x: -1300,
      backgroundPosition: '1300px 0',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        scrub: true,
      },
    });
    gsap.to('.scroll_text__P', {
      x: 1300,
      backgroundPosition: '1300px 0',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className='scroll_text darkMode'>
        <div className='scrolls_text'>
          <div className='scroll_text__next '>
            <span>- Frontend </span> - Developer
            <span>- Frontend </span> - Developer
            <span>- Frontend </span> - Developer
            <span>- Frontend </span> - Developer
            <span>- Frontend </span> - Developer
          </div>
        </div>
        <div className='scrolls_text'>
          <div className='scroll_text__P '>
            <span>- Portfolio </span>-Portfolio
            <span>- Portfolio </span> -Portfolio
            <span>- Portfolio </span>- Portfolio
            <span>- Portfolio </span> -Portfolio
            <span>- Portfolio </span>- Portfolio
          </div>
        </div>
      </div>
    </>
  );
}

export default Scrolltext;
