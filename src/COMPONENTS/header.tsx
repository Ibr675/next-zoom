import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-center items-center p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="flex gap-6">
        <Link href="/" className="footer-link">
          OUR STORY
        </Link>
        <Link href="/HOME" className="footer-link">
          OUR JOURNEY
        </Link>
        <Link href="/CONTACT" className="footer-link">
          GET IN TOUCH
        </Link>
        <Link href="/BUSNESS" className="footer-link">
          OUR BUSINESS
        </Link>
      </div>
    </div>
  );
};

export default Header;
