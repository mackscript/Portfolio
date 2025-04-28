import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e?.target) {
        const isPointerElement =
          e.target.classList?.contains('pointer') ||
          e.target.closest?.('.pointer');
        if (isPointerElement) {
          setIsHoveringLink(true);
        }
      }
    };

    const handleMouseLeave = (e) => {
      if (e?.target) {
        const isPointerElement =
          e.target.classList?.contains('pointer') ||
          e.target.closest?.('.pointer');

        if (isPointerElement) {
          setIsHoveringLink(false);
        }
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animateFollower = () => {
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));

      animationFrameId = requestAnimationFrame(animateFollower);
    };
    animateFollower();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  return (
    <div className='fixed z-50 pointer-events-none'>
      <div
        className={`cursor-dot   ${isHoveringLink ? 'cursor-dot-large' : ''}`}
        style={{
          transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {isHoveringLink ? (
          <svg
            className='cursor_arrow'
            width='30'
            height='30'
            viewBox='0 0 10 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 5L5 1M5 1L9 5M5 1V13'
              stroke='#28303F'
              slpbbvcxz
              IOPtroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        ) : null}
      </div>
      <div
        className={` ${
          isHoveringLink ? 'cursor-follower-large' : ''
        } cursor-follower`}
        style={{
          transform: `translate(-50%, -50%) translate(${followerPosition.x}px, ${followerPosition.y}px)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
