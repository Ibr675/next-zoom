import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex justify-center items-center p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-blue">
      <div className="flex gap-6">
        <Link href="/" className="footer-link">
          HOME PAGE
        </Link>
        <Link href="/HOME" className="footer-link">
          DESSERT SHOP
        </Link>
        <Link href="/CONTACT" className="footer-link">
          SALAD SHOP
        </Link>
        <Link href="/BUSNESS" className="footer-link">
          PIZZA SHOP
        </Link>
      </div>
    </div>
  );
};

export default Header;