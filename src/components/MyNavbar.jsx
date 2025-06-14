import React, { useState, useRef, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Button } from '@nextui-org/react';
import { useOverlay } from '../hooks/useOverlay';
import gsap from 'gsap';

function MyNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isOverlayOpen } = useOverlay();
  const navLinksRef = useRef([]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'projects', label: 'Projects' },
    { href: 'contact', label: 'Contact' },
  ];

  // Animate links when sidebar expands/collapses
  useEffect(() => {
    if (isExpanded) {
      // Reset and animate in
      navLinksRef.current.forEach((link, index) => {
        if (link) {
          gsap.fromTo(link, 
            {
              opacity: 0,
              x: -30,
              y: 10
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.6,
              delay: index * 0.15,
              ease: "back.out(1.2)"
            }
          );
        }
      });
    } else {
      // Animate out
      navLinksRef.current.forEach((link) => {
        if (link) {
          gsap.to(link, {
            opacity: 0,
            x: -20,
            duration: 0.3,
            ease: "power2.inOut"
          });
        }
      });
    }
  }, [isExpanded]);

  // Determine text color based on overlay state and theme
  const textColor = isOverlayOpen ? 'text-white' : 'text-gray-800 dark:text-white';
  const buttonBg = isOverlayOpen ? 'bg-white/20 backdrop-blur-sm' : 'bg-gray-200 dark:bg-gray-800';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-0 top-0 p-6 sm:p-8 lg:p-10 z-50">
      <Button
        isIconOnly
        onClick={toggleSidebar}
        className={`${buttonBg} rounded-full mb-6 sm:mb-8 lg:mb-10 transition-all duration-300`}
        variant='flat'
      >
        <span className={`text-lg font-bold transition-all duration-300 ${textColor}`}>
          {isExpanded ? '−' : '+'}
        </span>
      </Button>
      
      {/* Always render the container, control visibility with CSS */}
      <div className={`space-y-4 sm:space-y-5 ${isExpanded ? 'block' : 'hidden'}`}>
        {navLinks.map((section, index) => (
          <Link
            key={section.label}
            to={section.href}
            smooth={true}
            duration={800}
            offset={-80}
            spy={true}
            ref={el => {
              if (el) {
                navLinksRef.current[index] = el;
              }
            }}
            className={`block ${textColor} cursor-pointer text-lg sm:text-xl font-medium hover:text-[#B76D68] transition-colors duration-300`}
            onClick={() => {
              scrollToSection(section.href);
              setTimeout(() => setIsExpanded(false), 500);
            }}
          >
            {section.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MyNavbar;
