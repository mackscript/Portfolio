import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';

const TextScroll = () => {
  const textRef = useRef(null);
  const textRefTwo = useRef(null);
  const textRefThree = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const ell = textRefTwo.current;
    const elll = textRefThree.current;

    gsap.to(el, {
      x: '-50%',
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.fromTo(
      ell,
      { x: '-50%' }, // Initial textRefThree side shift
      {
        x: '50%',
        ease: 'none',
        scrollTrigger: {
          trigger: ell,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    gsap.to(elll, {
      x: '-50%',
      ease: 'none',
      scrollTrigger: {
        trigger: elll,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div className='text_scroll_container' style={{ marginTop: '18rem' }}>
        <div
          className='textRefTwo'
          style={{ marginTop: '1rem', padding: '10px 0' }}
        >
          <div
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              fontSize: '2rem',
            }}
          >
            <div
              className='textRefscroll'
              ref={textRefThree}
              style={{
                display: 'inline-block',
                color: '#fff',
                fontSize: '3rem',
                borderTop: '1px solid #fff ',
                borderBottom: '1px solid #fff ',
                padding: '1rem',
                background: '#000',
              }}
            >
              PORTFOLIO | DESIGN | DEVELOPMENT | 2025 | INNOVATION | CREATIVITY
              | PORTFOLIO | DESIGN | DEVELOPMENT | 2025 | INNOVATION |
              CREATIVITY | PORTFOLIO | DESIGN | DEVELOPMENT | 2025 | INNOVATION
              | CREATIVITY |
            </div>
          </div>
        </div>

        <div
          className='textRef'
          style={{
            padding: '10px 0',
          }}
        >
          <div
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              fontSize: '2rem',
            }}
          >
            <div
              className='textRefscroll'
              ref={textRef}
              style={{
                display: 'inline-block',
                color: '#fff',
                fontSize: '3rem',
                borderTop: '1px solid #fff ',
                borderBottom: '1px solid #fff ',
                padding: '1rem',
                background: '#000',
              }}
            >
              PORTFOLIO | SPELLCASTER OF CODES | WIZARD IN DEVELOPMENT |
              FRONT-END MAGIC | 2025 | PORTFOLIO | SPELLCASTER OF CODES | WIZARD
              IN DEVELOPMENT | FRONT-END MAGIC | 2025 | PORTFOLIO | SPELLCASTER
              OF CODES | WIZARD IN DEVELOPMENT | FRONT-END MAGIC | 2025 |
            </div>
          </div>
        </div>

        <div
          className='textRefTwo'
          style={{ marginTop: '1rem', padding: '10px 0' }}
        >
          <div
            style={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              fontSize: '2rem',
            }}
          >
            <div
              className='textRefscroll'
              ref={textRefTwo}
              style={{
                display: 'inline-block',
                color: '#fff',
                fontSize: '3rem',
                borderTop: '1px solid #fff ',
                borderBottom: '1px solid #fff ',
                padding: '1rem',
                background: '#000',
              }}
            >
              PORTFOLIO | 2025 | PORTFOLIO | 2025 | PORTFOLIO | 2025 | PORTFOLIO
              | 2025 | PORTFOLIO | 2025 | PORTFOLIO | 2025 | PORTFOLIO | 2025 |
              PORTFOLIO | 2025 | PORTFOLIO | 2025 | PORTFOLIO | 2025 | PORTFOLIO
              | 2025 | PORTFOLIO | 2025 |
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextScroll;
