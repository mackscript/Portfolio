import React, { useRef, useEffect } from 'react';
import back from '../assets/img/backGround.jpeg';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrixChars = '010100100001010010001010';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns)
      .fill()
      .map(() => Math.floor((Math.random() * canvas.height) / fontSize));

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'purple'; // Green color
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text =
          matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(drawMatrix, 100);

    // Resize canvas when window resizes
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.to('#circleText', {
      rotation: 360, // Rotate the entire group
      transformOrigin: '50% 50%', // Center rotation
      repeat: -1, // Infinite loop
      duration: 10, // Speed of rotation
      ease: 'linear',
    });
    let hero_sec_title1 = new SplitType('.hero_sec_title1', {
      types: 'lines, words, chars',
      tagName: 'span',
    });
    let hero_sec_title2 = new SplitType('.hero_sec_title2', {
      types: 'lines, words, chars',
      tagName: 'span',
    });
    let hero_sec_title3 = new SplitType('.hero_sec_title3', {
      types: 'lines, words, chars',
      tagName: 'span',
    });
    const tl = gsap.timeline();

    tl.from('.hero_sec_title1 .char', {
      y: '110%',
      opacity: 0,
      rotationZ: 10,
      duration: 1,
      ease: 'sine.inOut',
      stagger: 0.05,
    })
      .from(
        '.hero_sec_title2 .char',
        {
          y: '110%',
          opacity: 0,
          rotationZ: -10,
          duration: 1,
          ease: 'sine.inOut',
          stagger: 0.05,
        },
        '-=0.8' // Delay before hero_sec_title2 starts
      )
      .from(
        '.hero_sec_title3 .char',
        {
          y: '110%',
          opacity: 0,
          rotationZ: 10,
          duration: 1,
          ease: 'sine.inOut',
          stagger: 0.05,
        },
        '-=0.8'
      );
  }, []);

  // Split the text into individual <span> elements

  return (
    <div className='hero_section'>
      {/* Background Image with Opacity */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.8)',
          opacity: 0.5,
          filter: 'blur(0.6px)',
        }}
      ></div>
      <canvas ref={canvasRef} id='matrixCanvas'></canvas>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '40%',
          background: 'linear-gradient(to top, black, transparent)',
        }}
      />
      <div className='hero_section_title   '>
        <h1 className='hero_sec_title1'> Let’s build the </h1>
        <h1 className='hero_sec_title2'> future—one</h1>
        <h1 className='hero_sec_title3'> pixel at a time.</h1>
      </div>
      <svg
        id='rotatingText'
        viewBox='0 0 200 200'
        style={{
          width: '15%',
          height: '15%',
          position: 'absolute',
          right: 0,
          bottom: 0,
        }}
      >
        <defs>
          <path
            id='circlePath'
            d='M 100, 100
              m -75, 0
              a 75,75 0 1,1 150,0
              a 75,75 0 1,1 -150,0'
          />
        </defs>
        <text style={{ fontSize: '12px', fill: 'white' }}>
          <textPath
            href='#circlePath'
            id='circleText'
            startOffset='50%'
            textAnchor='middle'
          >
            Portfolio - Frontend Developer • Portfolio - Frontend Developer •
            Portfolio - Frontend Developer •
          </textPath>
        </text>
      </svg>
    </div>
  );
};
export default HeroSection;
