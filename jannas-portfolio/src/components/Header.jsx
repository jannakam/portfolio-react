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

          <div className='flex flex-col justify-center gap-5'>
            <h1 class="inline text-8xl">
                Hi, it's <span class="text-[#B76D68] inline">Janna</span>
            </h1>
            <div className='flex flex-row w-[400px] justify-between items-center gap-5'>
            <p className='text-3xl w-3/4'>Click to meet the developer</p>
            <Button isIconOnly onClick={handleOverlayToggle} className="cursor-pointer w-[80px] h-[80px] rounded-full bg-[#121420]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition duration-500 rounded-full p-4 w-[50px] ${isOpen ? 'rotate-180 bg-violet-100 ' : 'text-violet-100'}`}>
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </Button>   
            
            </div>       
            </div>

          <Image src={Janna1} alt="Janna" width={900} />
        </div>

        {/* Overlay Image (visible on hover or click) */}
        <div
          ref={overlayRef}
          className={`overlay ${isOpen ? 'is-open' : ''} absolute inset-0 flex flex-row items-center justify-center transition-[clip-path] duration-100`}>

          <div className='flex flex-col justify-center gap-5'>
            <h1 class="inline text-8xl">
                Hi, it's <span class="text-[#B76D68] inline">Janna</span>
            </h1>
            <div className='flex flex-row w-[400px] justify-between items-center gap-5'>
            <p className='text-3xl w-3/4'>Full-Stack, UI/UX, App-Development</p>
            <Button isIconOnly onClick={handleOverlayToggle} className="cursor-pointer w-[80px] h-[80px] rounded-full bg-[#121420]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition duration-500 rounded-full p-4 w-[50px] ${isOpen ? 'rotate-180 bg-violet-100 ' : 'text-violet-100'}`}>
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </Button>
            </div>
          </div>

          <Image src={Janna2} alt="Janna" width={900} />
        </div>
    </div>
  );
}

export default Header;
