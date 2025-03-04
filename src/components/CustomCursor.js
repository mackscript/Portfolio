import React, { useState, useEffect } from 'react';

const Circle = () => {
  const [smallCircleX, setSmallCircleX] = useState(0);
  const [smallCircleY, setSmallCircleY] = useState(0);
  const [largeCircleCenterX, setLargeCircleCenterX] = useState(
    WINDOW_WIDTH / 2
  );
  const [largeCircleCenterY, setLargeCircleCenterY] = useState(
    WINDOW_HEIGHT / 2
  );

  useEffect(() => {
    const handleMouseMove = (event) => {
      setSmallCircleX(event.clientX - 10); // adjust x-coordinate to move small circle around cursor
      setSmallCircleY(event.clientY - 10); // adjust y-coordinate to move small circle around cursor
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      if (smallCircleX < largeCircleCenterX - 25) {
        setSmallCircleX(largeCircleCenterX - 25);
      } else if (smallCircleX > largeCircleCenterX + 25) {
        setSmallCircleX(largeCircleCenterX + 25);
      }

      if (smallCircleY < largeCircleCenterY - 25) {
        setSmallCircleY(largeCircleCenterY - 25);
      } else if (smallCircleY > largeCircleCenterY + 25) {
        setSmallCircleY(largeCircleCenterY + 25);
      }
    };

    const animationDuration = 1000; // adjust duration to your liking
    const animationTimingFunction = 'linear'; // adjust timing function to your liking

    requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animate);
    };
  }, [smallCircleX, smallCircleY]);

  return (
    <div>
      {/* large circle */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 25 * 2,
          height: 25 * 2,
          backgroundColor: '#ccc',
          borderRadius: '50%',
        }}
      />

      {/* small circle */}
      <div
        style={{
          position: 'absolute',
          top: smallCircleY,
          left: smallCircleX,
          width: SMALL_CIRCLE_RADIUS * 2,
          height: SMALL_CIRCLE_RADIUS * 2,
          backgroundColor: '#f00',
          borderRadius: '50%',
          animationDuration,
          animationTimingFunction,
        }}
      />
    </div>
  );
};

export default Circle;
