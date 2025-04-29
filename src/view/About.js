import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const textRefTwo = useRef(null);
  const textRefThree = useRef(null);

  useEffect(() => {
    new SplitType(aboutRef.current, {
      types: 'lines, words, chars',
    });
    const chars = aboutRef.current.querySelectorAll('.char');
    gsap.fromTo(
      chars,
      { color: '#161a1d' },
      {
        color: '#fff',
        direction: 4,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.about_contianer p',
          start: 'top 100%',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

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
    <div id='aboutSection' className='' name='section1'>
      <div ref={aboutRef} className='about_contianer container'>
        <p>
          I'm <span className='pointer'>Ripon Haldar</span>, a passionate
          Frontend Developer with 3 years of experience in building seamless web
          and mobile applications.
        </p>
        <p>
          I specialize in creating beautiful, fast, and intuitive user
          interfaces using React JS, React Native, and JavaScript. I'm also
          familiar with the MERN stack (MongoDB, Express.js, React, Node.js) and
          have explored full-stack development as part of my learning journey.
        </p>
        <p>
          Over the years, I have worked on a variety of projects — from
          designing elegant websites to developing full-fledged Android and iOS
          apps — using technologies like Tailwind CSS, SCSS, Redux, and GSAP for
          powerful animations and enhanced user experiences.
        </p>
        <p>
          My journey started with a love for UI/UX design, which naturally
          evolved into frontend development and full-stack expertise. I strongly
          believe in writing clean, scalable code and building solutions that
          solve real-world problems.
        </p>
        <p>
          Currently, I'm seeking new opportunities where I can contribute,
          learn, and grow while making a meaningful impact through technology.
        </p>
      </div>

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

export default About;
