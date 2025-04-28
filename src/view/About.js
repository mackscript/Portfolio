import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

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
          // end: 'top 10%',
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div id='aboutSection' name='section1'>
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
    </div>
  );
};

export default About;
