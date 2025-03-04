import React, { useEffect, useState } from 'react';
import './styles/global.scss';
import LoadingScreen from './components/LoadingScreen';
import Header from './pages/Home';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';

function App() {
  const [display, setDisplay] = useState(false);

  function showContent() {
    setDisplay(true);
  }

  useEffect(() => {
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
      <LoadingScreen showContent={() => showContent()} />
      {display ? <div className='container br_c'></div> : null}
    </div>
  );
}

export default App;
