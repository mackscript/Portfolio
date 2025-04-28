import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const HeroSection = () => {
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
      delay: 0.4,
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
      );
  }, []);

  return (
    <div className='xxContainer'>
      <div className='line_container'>
        <div className='linex'>
          <div className='line_one'>
            <p className='first'>Ripon</p>
            <p className='second'>Haldar</p>
          </div>
          <div className='first_line line'></div>
        </div>

        <div className='linex'>
          <div className='line_one'>
            <p className='third'>Crafting</p>
            <p className='fourth'>Web &</p>
          </div>
          <div className='second_line line'></div>
        </div>

        <div className='linex'>
          <div className='line_middle'>
            <p className='fifth'>Mobile Apps</p>
          </div>
          <div className='third_line line'></div>
        </div>

        <div className='linex'>
          <div className='line_one'>
            <p className='sixth'>Frontend</p>
            <p className='seven'>Developer</p>
          </div>
          <div className='forth_line line'></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
