import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paranormal Cafe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/image-12.jpg)' }}>
        <div className="container mx-auto p-4 pt-6 mt-10 flex flex-col justify-center items-center">
          <h1 className="text-8xl font-bold text-red-600 animate-pulse">PARANORMAL CAFE</h1>
          <p className="text-3xl font-large leading-relaxed text-white opacity-80 animate-fade-in">Experience the Beyond</p>
          <Link href="/BUSNESS" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded animate-bounce">Order Now</Link>
        </div>
      </section>
``"


Chunk 2: pages/index.js (continued)


jsx
      {/* Menu Categories */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto p-4 flex flex-wrap justify-center">
          <div className="md:w-1/2 w-full md:pr-8">
            <h2 className="text-2xl font-bold mb-2">Pizzas</h2>
            <ul className="list-disc pl-4">
              <li>Margherita ($12.99)</li>
              <li>Pepperoni ($14.99)</li>
              <li>Veggie Delight ($13.99)</li>
              <li>Meat Lover's ($16.99)</li>
            </ul>
          </div>
          <div className="md:w-1/2 w-full md:pl-8">
            <h2 className="text-2xl font-bold mb-2">Sides</h2>
            <ul className="list-disc pl-4">
              <li>Garlic Bread ($4.99)</li>
              <li>Chicken Wings ($6.99)</li>
              <li>Onion Rings ($5.99)</li>
              <li>Salad ($3.99)</li>
            </ul>
          </div>
        </div>
      </section>
REVIEWS OF OUR BELOVED ALL
      {/* Testimonials */}
      <section className="bg-gray-900 py-8">
        <div className="container mx-auto p-4 flex flex-wrap justify-center">
          <div className="md:w-1/2 w-full md:pr-8">
            <blockquote className="border-l-4 border-yellow-300 pl-4 md:pl-8 mb-4">
              <p className="text-2xl font-large leading-relaxed text-yellow-300">"Best pizza I've ever had! Highly recommend!"</p>
              <cite className="font-medium text-white">— John D.</cite>
            </blockquote>
          </div>
          <div className="md:w-1/2 w-full md:pl-8">
            <blockquote className="border-l-4 border-yellow-300 pl-4 md:pl-8 mb-4">
              <p className="text-2xl font-large leading-relaxed text-yellow-300">"Love the atmosphere and service!"</p>
              <cite className="font-medium text-white">— Emily K.</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-500 py-4">
        <div className="container mx-auto p-4 flex flex-wrap justify-center">
          <h2 className="text-4xl font-bold text-white">Order Now and Get 10% Off!</h2>
          <Link href="/BUSNESS" className="bg-yellow-300 hover:bg-yellow-500 text-red-600 font-bold py-2 px-4 rounded">ORDER</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto p-4 flex flex-wrap justify-center">
          <p className="text-lg font-medium text-gray-300">&copy; 2024 Paranormal Cafe</p>
          <ul className="flex flex-wrap justify-center">
            <li></li>
              <Link href="/contact" className="text-lg font-medium text-gray-300 hover:text-gray-100">Contact</Link>
              <li>
              <Link href="/about" className="text-lg font-medium text-gray-300 hover:text-gray-100">About</Link>
            </li>
            <li>
              <Link href="/menu" className="text-lg font-medium text-gray-300 hover:text-gray-100">Menu</Link>
            </li>
          </ul>
          <div className="flex flex-wrap justify-center mt-4">
            <Link href="#" className="text-lg font-medium text-gray-300 hover:text-gray-100 mr-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-lg font-medium text-gray-300 hover:text-gray-100 mr-4">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="text-lg font-medium text-gray-300 hover:text-gray-100">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}