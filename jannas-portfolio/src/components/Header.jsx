import React from 'react';
import { Image } from '@nextui-org/react';
import Janna1 from '../assets/Janna_1.png';
import Janna2 from '../assets/Janna_2.png';

function Header() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="p-20 relative group">
        {/* Primary Image (visible by default) */}
        <div className="flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
          <h1 className="font-bold text-5xl mr-8">Hi, it's Janna</h1>
          <Image src={Janna1} alt="Janna" width={800} />
        </div>

        {/* Secondary Image (visible on hover) */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100">
          <h1 className="font-bold text-5xl mr-8">Hi, it's Janna</h1>
          <Image src={Janna2} alt="Janna" width={800} />
        </div>
      </div>
    </div>
  );
}

export default Header;
