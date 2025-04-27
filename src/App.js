import React, { useEffect, useState } from 'react';
import './styles/global.scss';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './reducer/themeSlicer';
import HeroSection from './view/HeroSection';

function App() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const [display, setDisplay] = useState(false);

  function showContent() {
    setDisplay(true);
  }

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    dispatch(toggleTheme(isDarkMode));

    let scrolling = false;
    let targetScroll = window.scrollY;

    const smoothScroll = () => {
      if (!scrolling) return;
      const currentScroll = window.scrollY;
      const diff = targetScroll - currentScroll;
      window.scrollTo(0, currentScroll + diff * 0.1);
      if (Math.abs(diff) > 1) {
        requestAnimationFrame(smoothScroll);
      } else {
        scrolling = false;
      }
    };

    const handleScroll = (e) => {
      e.preventDefault();
      targetScroll += e.deltaY * 1.2; // Adjust
      targetScroll = Math.max(
        0,
        Math.min(document.body.scrollHeight - window.innerHeight, targetScroll)
      );
      if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(smoothScroll);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className='darkMode'>
      <CustomCursor />
      {/* <LoadingScreen showContent={() => showContent()} /> */}
      {!display ? (
        <div>
          <Navbar />
          <HeroSection />
          <div
            className='h-100vh'
            style={{ height: '100vh', backgroundColor: '#000' }}
          ></div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
