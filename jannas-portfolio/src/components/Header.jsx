import { Image } from '@nextui-org/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import Janna1 from '../assets/Janna_1.png';
import Janna2 from '../assets/Janna_2.png';

function Header() {
  const overlayRef = useRef(null);
  const cursorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(overlayRef.current, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.3,
        ease: 'sine.out',
      });

      gsap.to(cursorRef.current, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: 0.6,
        ease: 'sine.out',
      });

      if (e.target.closest('button, a, .navbar')) {
        cursorRef.current.classList.add('hidden');
      } else {
        cursorRef.current.classList.remove('hidden');
      }
    };

    const handleClick = (e) => {
      // Don't toggle if clicking on a button or link
      if (!e.target.closest('button, a')) {
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.getElementById('header')?.addEventListener('click', handleClick);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.getElementById('header')?.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  const handleOverlayToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center relative cursor-none" id="header">
      {/* Primary Image (visible by default) */}
      <div className="is-open flex flex-row items-center justify-center">
        <div className="flex flex-col justify-center items-baseline">
          <h1 className="inline font-gt font-black">
            Hi, it's <span className="text-[#B76D68] inline">Janna</span>
          </h1>
        </div>
        <Image src={Janna1} alt="Janna" width={800} />
      </div>

      {/* Overlay Image (visible on hover or click) */}
      <div
        ref={overlayRef}
        className={`overlay ${
          isOpen ? 'is-open' : ''
        } absolute inset-0 flex flex-row items-center justify-center transition-[clip-path] duration-100`}
      >
        <div className="flex flex-col justify-center items-baseline">
          <h1 className="inline font-gt font-black">
            Hi, it's <span className="text-[#B76D68] inline">Janna</span>
          </h1>
        </div>

        <Image src={Janna2} alt="Janna" width={800} />
      </div>
      {/* Arrow SVG for cursor when hovering over the header */}
      <div ref={cursorRef} className="arrow-svg pointer-events-none z-40">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transform transition duration-500 rounded-full p-4 w-16 h-16 ${isOpen ? 'rotate-180 bg-violet-100 ' : 'text-violet-100'}`}
        >
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
