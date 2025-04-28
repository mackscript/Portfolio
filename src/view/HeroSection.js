import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const [text, setText] = useState(
    'PORTFOLIO | FRONT-END DEVELOPER | PORTFOLIO | FRONT-END | 2025 |'
  );
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
      });
  }, []);

  return (
    <div className='xxContainer'>
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
            <p className='fourth'>Web &</p>
          </div>
          <div className='second_line line'></div>
        </div>

        <div className='linex'>
          <div className='line_middle  cap '>
            <p className='fifth pointer'>Mobile Apps</p>
          </div>
          <div className='third_line line'></div>
        </div>

        <div className='linex'>
          <div className='line_one cap'>
            <p className='sixth  '>Frontend</p>
            <p className='seven '>Developer</p>
          </div>
          <div className='forth_line line'></div>
        </div>
      </div>
      <div className='container'>
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
      </div>
    </div>
  );
};

export default HeroSection;
