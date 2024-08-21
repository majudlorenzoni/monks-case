import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;
    if (currentScrollTop > lastScrollTop) {
      setScrollingUp(false); 
    } else {
      setScrollingUp(true); 
    }
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav className={`navbar ${scrollingUp ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-container">
        <a href="https://www.monks.com/pt/home" className="link-title">
          <h1>.monks</h1>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
