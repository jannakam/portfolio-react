import React, { useState, useEffect, useRef } from 'react';
import { Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import Janna1 from '../assets/Janna_1.png';
import Janna2 from '../assets/Janna_2.png';
import gsap from 'gsap';
import '../App.css';

function Header() {
  const overlayRef = useRef(null);
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
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleOverlayToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center relative">

        {/* Primary Image (visible by default) */}
        <div className='is-open flex flex-row items-center justify-center'>

          <div className='flex flex-col justify-center items-baseline'>
            <h1 className="inline font-pc text-8xl">
                HI, IT'S <span className="text-[#B76D68] inline font-pc text-8xl">JANNA</span>
            </h1>
            <Button isIconOnly onClick={handleOverlayToggle} className="cursor-pointer w-20 h-20 rounded-full bg-[#121420]">
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>
            </Button>          
            </div>

          <Image src={Janna1} alt="Janna" width={900} />
        </div>

        {/* Overlay Image (visible on hover or click) */}
        <div
          ref={overlayRef}
          className={`overlay ${isOpen ? 'is-open' : ''} absolute inset-0 flex flex-row items-center justify-center transition-[clip-path] duration-100`}>

          <div className='flex flex-col justify-center items-baseline'>
            <h1 class="inline font-pc text-8xl">
                HI, IT'S <span class="text-[#B76D68] inline font-pc text-8xl">JANNA</span>
            </h1>
            <Button isIconOnly onClick={handleOverlayToggle} className="cursor-pointer w-20 h-20 rounded-full bg-[#121420]">
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>
            </Button>
          </div>

          <Image src={Janna2} alt="Janna" width={900} />
        </div>
    </div>
  );
}

export default Header;
