import React, { useEffect, useRef, useState } from 'react';

const ModernHero = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const particlesRef = useRef([]);

  const codeIcons = [
    '<>', // JSX / HTML-like
    '{}', // Blocks / Objects
    '[]', // Arrays
    '()', // Function calls / IIFE
    '/>', // Self-closing tags
    '=>', // Arrow functions
    '/* */', // Multi-line comments
    '//', // Single-line comment
    '#!', // Shebang (Node.js scripts)
    'λ', // Lambda / Functional programming
    '$', // jQuery / DOM selector / variables
    'fn', // Function shorthand (used in other langs too)
    'return', // Return keyword
    '0x', // Hex values (numbers, colors)
    'async', // Async functions
    'await', // Await keyword
    '☁', // Cloud / serverless function
    '⚡️', // Fast / optimization
    'import', // Module import
    'export', // Module export
    'const', // Constant declaration
    'let', // Block-scoped variable
    'var', // Function-scoped variable
    'null', // Null value
    'undefined', // Undefined
    'true', // Boolean true
    'false', // Boolean false
    'NaN', // Not-a-number
    '...', // Spread / rest operator
    '===', // Strict equality
    '!==', // Strict inequality
    '&&', // Logical AND
    '||', // Logical OR
    '!', // NOT operator
    '??', // Nullish coalescing
    '?.', // Optional chaining
    'new', // Constructor keyword
    'class', // ES6 classes
    'super', // Super keyword
    'this', // This keyword
    'try', // Try block
    'catch', // Catch block
    'finally', // Finally block
    'throw', // Throw error
    'typeof', // Type check
    'instanceof', // Instance check
    'debugger', // Pause debugger
    'setTimeout', // Async API
    'setInterval', // Repeated interval
    'console', // Console object
    'log', // Logging
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const initializeElements = () => {
      particlesRef.current = [];

      // Small floating code elements
      for (let i = 0; i < 30; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 10 + 15,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 1.5,
          icon: codeIcons[Math.floor(Math.random() * codeIcons.length)],
          parallaxFactor: Math.random() * 0.02 + 0.01,
          glowIntensity: Math.random() * 0.8 + 0.4,
          // pulseSpeed: Math.random() * 0.03 + 0.02,
          // pulseOffset: Math.random() * Math.PI * 2,
        });
      }

      // Large background elements
      for (let i = 0; i < 10; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 10 + 20,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.1 + 0.03,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.8,
          icon: codeIcons[Math.floor(Math.random() * codeIcons.length)],
          parallaxFactor: Math.random() * 0.025 + 0.01,
          isLarge: true,
          glowIntensity: Math.random() * 0.5 + 0.3,
          // pulseSpeed: Math.random() * 0.02 + 0.01,
          // pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    initializeElements();

    const animate = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        const pulse =
          Math.sin(time * particle.pulseSpeed + particle.pulseOffset) * 0.4 +
          0.6;

        const mouseInfluence = particle.isLarge ? 100 : 80;
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseInfluence) {
          const force = (mouseInfluence - distance) / mouseInfluence;
          particle.x -= dx * particle.parallaxFactor * force * 2;
          particle.y -= dy * particle.parallaxFactor * force * 2;
        }

        if (particle.x < -150) particle.x = canvas.width + 150;
        if (particle.x > canvas.width + 150) particle.x = -150;
        if (particle.y < -150) particle.y = canvas.height + 150;
        if (particle.y > canvas.height + 150) particle.y = -150;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);

        const finalOpacity = particle.opacity * pulse;
        ctx.globalAlpha = finalOpacity;

        const glowColor = particle.isLarge ? '#fff' : '#a4161a';
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = particle.glowIntensity * 30 * pulse;

        ctx.font = `${particle.size}px 'Fira Code', 'Consolas', monospace`;
        ctx.fillStyle = glowColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillText(particle.icon, 0, 0);
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleButtonClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const FloatingParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      particles.push(
        <div
          key={i}
          className='particle'
          style={{
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 10 + 's',
            animationDuration: Math.random() * 10 + 10 + 's',
          }}
        />
      );
    }
    return <div className='particles-container'>{particles}</div>;
  };

  return (
    <>
      <div className='hero-container'>
        {/* Animated Background */}
        <div className='animated-bg'>
          <div className='grid-overlay'></div>
          <div className='floating-shapes'></div>
        </div>

        {/* Floating Canvas */}
        <canvas ref={canvasRef} className='floating-canvas' />

        {/* Gradient Overlays */}
        <div className='gradient-overlay'></div>
        <div className='gradient-sides'></div>

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Main Content */}
        <div className='main-content'>
          <div className='content-wrapper'>
            {/* Name */}

            {/* Title */}
            <div className='title-container'>
              <p className='title'>
                <span className='bracket'>&lt;</span>
                <span className='title-text'>Frontend Developer</span>
                <span className='bracket'>/&gt;</span>
              </p>
            </div>

            {/* Description */}
            <div className='description-container'>
              <p className='description'>
                Crafting immersive digital experiences with modern web
                technologies.
                <span className='code-snippet'>
                  console.log("Let's build something amazing!");
                </span>
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className='scroll-indicator'>
              <span className='scroll-text'>scroll down</span>
              <div className='scroll-mouse'>
                <div className='scroll-wheel'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <button className='fab'>&lt;&gt;</button>
      </div>
    </>
  );
};

export default ModernHero;
