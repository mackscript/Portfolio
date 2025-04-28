import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link, Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const arrowRef = useRef(null);

  const [text, setText] = useState(
    'PORTFOLIO | FRONT-END DEVELOPER | PORTFOLIO | FRONT-END | 2025 |'
  );
  const handleScroll = () => {
    window.scrollBy({ top: 200, behavior: 'smooth' });
  };
  useEffect(() => {
    const tl = gsap.timeline();

    const splitClasses = [
      '.first',
      '.second',
      '.third',
      '.fourth',
      '.fifth',
      '.sixth',
      '.seven',
    ];

    splitClasses.forEach((cls) => {
      new SplitType(cls, { types: 'chars', tagName: 'span' });
    });

    tl.from('.first span', {
      y: '100%',
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.05,
    })
      .fromTo(
        '.first_line',
        { width: '0%' },
        { width: '100%', duration: 1 },
        '-=0.4'
      )

      .from(
        '.second span',
        {
          y: '100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.05,
        },
        '-=0.8'
      )
      .fromTo(
        '.second_line',
        { scaleX: 0, transformOrigin: 'right center' },
        { scaleX: 1, duration: 1 },
        '-=0.8'
      )

      .from(
        '.third span',
        {
          y: '100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.05,
        },
        '-=1'
      )
      .from(
        '.fourth span',
        {
          y: '100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.05,
        },
        '-=0.8'
      )
      .fromTo(
        '.third_line',
        { width: '0%' },
        { width: '100%', duration: 1 },
        '-=1.2'
      )

      .from(
        '.fifth span',
        {
          y: '100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.05,
        },
        '-=1'
      )
      .fromTo(
        '.forth_line',
        { scaleX: 0, transformOrigin: 'right center' },
        { scaleX: 1, duration: 1 },
        '-=1.2'
      )

      .from(
        '.sixth span',
        {
          y: '100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.05,
        },
        '-=0.8'
      )
      .from(
        '.seven span',
        {
          y: '100%',
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.05,
        },
        '-=0.8'
      )
      .to('#containerSpin', {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      })
      .to(
        '.scroll_down',
        {
          opacity: 1,
          ease: 'power1.inOut',
          duration: 0.8, // Speed
        },
        '-=1.9'
      )
      .to(arrowRef.current, {
        y: 10, // Move 10px down
        repeat: -1, // Infinite loop
        yoyo: true, // Aane jaane wala effect
        ease: 'power1.inOut',
        duration: 0.8, // Speed
      });
  }, []);

  return (
    <div className='container'>
      <div className='line_container'>
        <div className='linex'>
          <div className='line_one '>
            <p className='first pointer'>Ripon</p>
            <p className='second pointer'>Haldar</p>
          </div>
          <div className='first_line line'></div>
        </div>

        <div className='linex'>
          <div className='line_one cap'>
            <p className='third'>Crafting</p>
            <p className='fourth'>Seamless</p>
          </div>
          <div className='second_line line'></div>
        </div>

        <div className='linex'>
          <div className='line_middle cap'>
            <p className='fifth pointer'>Web & Mobile</p>
          </div>
          <div className='third_line line'></div>
        </div>

        <div className='linex'>
          <div className='line_one cap'>
            <p className='sixth'>Experiences</p>
            <p className='seven'>with Code</p>
          </div>
          <div className='forth_line line'></div>
        </div>
        <div className='scroll_down'>
          <div onClick={handleScroll} className='scroll_container pointer'>
            <svg
              ref={arrowRef}
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
            <p className='scroll'>Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* <div className='container'>
        <div id='containerSpin'>
          <svg
            id='spinText'
            viewBox='0 0 400 400'
            xmlns='http://www.w3.org/2000/svg'
            width='200'
            height='200'
          >
            <defs>
              <path
                id='somePath'
                fill='none'
                stroke='#fff'
                d='M200,50c82.8,0,150,67.2,150,150s-67.2,150-150,150S50,282.8,50,200
	S117.2,50,200,50z'
              />
              <clipPath id='theClipPath'>
                <circle id='masker' r='200' fill='purple' cx='200' cy='200' />
              </clipPath>
            </defs>
            <g id='clipPathReveal' clip-path='url(#theClipPath)'>
              <circle r='0' fill='#42a6e0' cx='200' cy='200' />
              <text>
                <textPath href='#somePath'>{text}</textPath>
              </text>
            </g>
          </svg>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
