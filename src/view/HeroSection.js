import React, { useEffect, useRef, useState } from 'react';

import avatar from '../assets/img/mac_laptop.png';

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
        <div className='animated-bg'>
          <div className='grid-overlay'></div>
        </div>

        <div className='gradient-overlay'></div>
        <div className='gradient-sides'></div>
        <FloatingParticles />
        <div className='main_content_header '>
          <div className='main_content '>
            <div className='main_content_img'>
              <img src={avatar} alt='Mac Avatar' />
            </div>
            <div className='main_content_title'>
              <p className='main_content_title_h'>
                Creating apps that work, feel, and inspire — while documenting
                every step.
              </p>
              <p className='main_content_title_p'>
                I’m a front-end developer with 3 years of experience, focused on
                building fast, responsive, and accessible web and mobile apps
                using React JS and React Native. I specialize in crafting modern
                UIs that bring design and functionality together with clean,
                scalable code.
              </p>
              <div className='button-group'>
                <button className='btn btn-primary'>Get In Touch</button>
                <button className='btn btn-outline'>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernHero;
