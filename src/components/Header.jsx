import React, { useEffect, useRef } from 'react';
import { Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import Janna1 from '../assets/Janna_1.png';
import Janna2 from '../assets/Janna_2.png';
import gsap from 'gsap';
import { useOverlay } from '../hooks/useOverlay';
import '../App.css';

function Header() {
  const overlayRef = useRef(null);
  const { isOverlayOpen, toggleOverlay } = useOverlay();

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

  return (
    <div className="flex flex-col h-screen items-center justify-center relative p-4 sm:p-6 lg:p-8">

        {/* Primary Image (visible by default) */}
        <div className='is-open flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0'>

          {/* Text Section */}
          <div className='flex flex-col justify-center gap-3 sm:gap-4 lg:gap-5 order-2 lg:order-1'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center lg:text-left text-gray-800 dark:text-white">
                Hi, it's <span className="text-[#B76D68]">Janna</span>
            </h1>
            <div className='flex flex-col sm:flex-row w-full max-w-[400px] justify-between items-center gap-3 sm:gap-5'>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left sm:w-3/4 text-gray-800 dark:text-white'>Click to meet the developer</p>
              <Button 
                isIconOnly 
                onClick={toggleOverlay} 
                className="cursor-pointer w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full bg-[#121420] dark:bg-white flex-shrink-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition duration-500 w-[20px] sm:w-[24px] lg:w-[28px] ${isOverlayOpen ? 'rotate-180' : ''} text-white dark:text-[#121420]`}
                >
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>   
            </div>       
          </div>

          {/* Image Section */}
          <div className='order-1 lg:order-2'>
            <Image src={Janna1} alt="Janna" width={800} className="sm:w-[500px] md:w-[600px] lg:w-[2000px]" />
          </div>
        </div>

        {/* Overlay Image (visible on hover or click) */}
        <div
          ref={overlayRef}
          className={`overlay ${isOverlayOpen ? 'is-open' : ''} absolute inset-0 flex flex-col lg:flex-row items-center justify-center transition-[clip-path] duration-100 p-4 sm:p-6 lg:p-8 gap-8 lg:gap-0`}>

          {/* Text Section - NO explicit text colors, inherits from overlay */}
          <div className='flex flex-col justify-center gap-3 sm:gap-4 lg:gap-5 order-2 lg:order-1'>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center lg:text-left">
                Hi, it's <span className="text-[#B76D68]">Janna</span>
            </h1>
            <div className='flex flex-col sm:flex-row w-full max-w-[400px] justify-between items-center gap-3 sm:gap-5'>
              <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left sm:w-3/4'>
                Full-Stack, UI/UX, App-Development
              </p>
              <Button 
                isIconOnly 
                onClick={toggleOverlay} 
                className="cursor-pointer w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[80px] lg:h-[80px] rounded-full bg-[#121420] flex-shrink-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition duration-500 w-[20px] sm:w-[24px] lg:w-[28px] ${isOverlayOpen ? 'rotate-180' : ''} text-violet-100`}
                >
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className='order-1 lg:order-2'>
            <Image src={Janna2} alt="Janna" width={800} className="sm:w-[500px] md:w-[600px] lg:w-[2000px]" />
          </div>
        </div>
    </div>
  );
}

export default Header;
