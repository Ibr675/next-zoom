import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-center items-center p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="flex gap-6">
        <Link href="/" className="text-lg font-bold text-white hover:text-gray-200">
          OUR STORY
        </Link>
        <Link href="/HOME" className="text-lg font-bold text-white hover:text-gray-200">
          OUR HOME
        </Link>
        <Link href="/CONTACT" className="text-lg font-bold text-white hover:text-gray-200">
          GET IN TOUCH
        </Link>
        <Link href="/BUSNESS" className="text-lg font-bold text-white hover:text-gray-200">
         OUR BUSNESS
        </Link>
      </div>
    </div>
  );
};

export default Header;