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
      // Null check and optional chaining to prevent errors
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
      // Null check and optional chaining to prevent errors
      if (e?.target) {
        const isPointerElement =
          e.target.classList?.contains('pointer') ||
          e.target.closest?.('.pointer');

        if (isPointerElement) {
          setIsHoveringLink(false);
        }
      }
    };

    // Use event delegation on the document
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
    const animateFollower = () => {
      // Create a smoother interpolation
      setFollowerPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
    };

    const animationFrame = requestAnimationFrame(animateFollower);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [position]);

  return (
    <div className='fixed z-50 pointer-events-none'>
      <div
        className={`cursor-dot ${isHoveringLink ? 'cursor-dot-large' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`cursor-follower  `}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
