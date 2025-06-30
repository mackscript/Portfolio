import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const titleRef = useRef();
  const svgRef = useRef();
  const skillsRef = useRef();
  const skillCardsRef = useRef([]);
  const skillTagsRef = useRef([]);

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

        gsap.to(svgRef.current, {
          opacity: 1,
          duration: 1,
          delay: finalText.length * 0.1,
        });
      },
    });
  }, []);

  useEffect(() => {
    // Animate skill cards
    gsap.fromTo(
      skillCardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: 45,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
          end: 'bottom top',
        },
      }
    );

    // Animate skill tags with stagger
    gsap.fromTo(
      skillTagsRef.current,
      {
        opacity: 0,
        scale: 0,
        y: 20,
        rotation: 5,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotation: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 70%',
          end: 'bottom top',
        },
      }
    );
  }, []);

  const addToSkillCardsRef = (el) => {
    if (el && !skillCardsRef.current.includes(el)) {
      skillCardsRef.current.push(el);
    }
  };

  const addToSkillTagsRef = (el) => {
    if (el && !skillTagsRef.current.includes(el)) {
      skillTagsRef.current.push(el);
    }
  };

  return (
    <div className='skills_container'>
      <div className='skills min_container'>
        <div className='skills_grid'>
          <div className='skills_grid_item'>
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
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </div>
          <div className='skills_grid_item skills_content'>
            <section ref={skillsRef} className='skills_section'>
              <div className='skills_cards_container'>
                <div className='skill_card' ref={addToSkillCardsRef}>
                  <div className='card_header'>
                    <div className='card_icon'>💻</div>
                    <h3 className='card_title'>Frontend</h3>
                  </div>
                  <div className='skills_list'>
                    {[
                      'React.js',
                      'React Native',
                      'JavaScript',
                      'HTML',
                      'CSS/SCSS',
                      'Tailwind CSS',
                      'Next.js',
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className='skill_tag'
                        ref={addToSkillTagsRef}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='skill_card' ref={addToSkillCardsRef}>
                  <div className='card_header'>
                    <div className='card_icon'>🔄</div>
                    <h3 className='card_title'>State Management</h3>
                  </div>
                  <div className='skills_list'>
                    {['Redux', 'Context API'].map((skill, index) => (
                      <span
                        key={index}
                        className='skill_tag'
                        ref={addToSkillTagsRef}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='skill_card' ref={addToSkillCardsRef}>
                  <div className='card_header'>
                    <div className='card_icon'>⚙️</div>
                    <h3 className='card_title'>Backend</h3>
                  </div>
                  <div className='skills_list'>
                    {[
                      'Node.js',
                      'Express.js',
                      'MongoDB/Mongoose',
                      'Firebase',
                      'JWT Auth',
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className='skill_tag'
                        ref={addToSkillTagsRef}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className='skill_card' ref={addToSkillCardsRef}>
                  <div className='card_header'>
                    <div className='card_icon'>🛠️</div>
                    <h3 className='card_title'>Tools & Other</h3>
                  </div>
                  <div className='skills_list'>
                    {['Git', 'Xcode', 'Android Studio'].map((skill, index) => (
                      <span
                        key={index}
                        className='skill_tag'
                        ref={addToSkillTagsRef}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
