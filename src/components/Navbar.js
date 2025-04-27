import gsap from 'gsap';
import React, { useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import { FaBeer } from 'react-icons/fa';
import { CiDark, CiLight } from 'react-icons/ci';

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.x');
    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        gsap.to(link, {
          rotation: 10, // Thoda ghumega
          scale: 1.1, // Thoda bada hoga
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          rotation: 0, // Normal pe wapas aayega
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  return (
    <div className='navbar_container'>
      <div className='container_x'>
        <div className='navbar_logo'>MackScript</div>
        <ul className='navbar_items'>
          <li className='navbar_items_item'>
            <Link to='' smooth={true} duration={500} className='x'>
              Work
            </Link>
          </li>
          <li className='navbar_items_item'>
            <Link to='' smooth={true} duration={500} className='x'>
              about
            </Link>
          </li>
          <li className='navbar_items_item'>
            <Link to='' smooth={true} duration={500} className='x'>
              contact
            </Link>
          </li>
          <li className='navbar_items_item'>
            <div className='navbar_items_item_theme'>
              <CiDark className='navbar_items_item_theme_dark' />
              {/* <CiLight className='navbar_items_item_theme_light' /> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
