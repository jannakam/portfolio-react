import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Button } from '@nextui-org/react';

function MyNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'projects', label: 'Projects' },
    { href: 'contact', label: 'Contact' },
  ];

  return (
    <div className="absolute left-0 top-0 p-10 z-20">
      <Button
        isIconOnly
        onClick={toggleSidebar}
        className="bg-gray-200 rounded-full mb-10"
        variant='flat'
      >
        {isExpanded ? '-' : '+'}
      </Button>
      <div className={`space-y-5 transition-all duration-500 ${isExpanded ? 'block' : 'hidden'}`}>
        {navLinks.map((section, index) => (
          <Link
            key={section.label}
            to={section.href}
            smooth={true}
            duration={500}
            className="block text-gray-800 cursor-pointer"
            style={{
              opacity: isExpanded ? 1 : 0,
              transform: isExpanded ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s`,
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
