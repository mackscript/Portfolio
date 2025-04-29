import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const titleRef = useRef();
  const svgRef = useRef();

  useEffect(() => {
    const split = new SplitType(titleRef.current, { types: 'chars' });
    const chars = titleRef.current.querySelectorAll('.char');
    const finalText = 'SKILLS';
    const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*';
    gsap.set(chars, { opacity: 0 });
    gsap.set(svgRef.current, { opacity: 0 });

    const animateChar = (el, finalChar, delay) => {
      let iterations = 0;
      const maxIterations = 10;

      const interval = setInterval(() => {
        el.textContent =
          scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        iterations++;
        if (iterations >= maxIterations) {
          clearInterval(interval);
          el.textContent = finalChar;
        }
      }, 30);
    };
    ScrollTrigger.create({
      trigger: titleRef.current,
      start: 'top 80%',
      onEnter: () => {
        chars.forEach((char, i) => {
          setTimeout(() => {
            animateChar(char, finalText[i]);
            gsap.to(char, { opacity: 1, duration: 0.3 });
          }, i * 100);
        });

        // Animate SVG
        gsap.to(svgRef.current, {
          opacity: 1,
          duration: 1,
          delay: finalText.length * 0.1, // after all letters appear
        });
      },
    });
  }, []);
  const skillsRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      skillsRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div className='skills_container'>
      <div className='skills min_container'>
        <div className='skills_grid'>
          <div className='skills_grid_item '>
            <div className='skills_title'>
              <p ref={titleRef}>SKILLS</p>
              <svg
                ref={svgRef}
                className='cursor_arrow'
                width='30'
                height='30'
                viewBox='0 0 10 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 5L5 1M5 1L9 5M5 1V13'
                  stroke='#ffff'
                  slpbbvcxz
                  IOPtroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
          <div className='skills_grid_item br_d'>
            <section id='skills' ref={skillsRef} style={styles.skillsSection}>
              <h2 style={styles.sectionTitle}>My Skills</h2>
              <div style={styles.skillsContainer}>
                <div className='skillCard' style={styles.card}>
                  <h3>Front-End</h3>
                  <ul>
                    <li>React.js</li>
                    <li>React Native</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS, SCSS</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                  </ul>
                </div>
                <div className='skillCard' style={styles.card}>
                  <h3>State Management</h3>
                  <ul>
                    <li>Redux</li>
                    <li>Context API</li>
                  </ul>
                </div>
                <div className='skillCard' style={styles.card}>
                  <h3>Backend</h3>
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB/Mongoose</li>
                    <li>Firebase</li>
                    <li>JWT Authentication</li>
                  </ul>
                </div>
                <div className='skillCard' style={styles.card}>
                  <h3>Other</h3>
                  <ul>
                    <li>Git</li>
                    <li>Xcode</li>
                    <li>Android Studio</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  skillsSection: {
    padding: '50px 20px',
    background: '#f4f4f4',
    color: '#333',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '30px',
  },
  skillsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px',
    justifyItems: 'center',
  },
  card: {
    background: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    width: '100%',
  },
};

export default Skills;
