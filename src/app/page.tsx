import React from 'react';

const Page = () => {
  return (
    <div
      className="container mx-auto p-4 pt-6 mt-10 h-screen"
      style={{
        backgroundImage: `url(image-17.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
     
      {/* Hero Section */}
      <figure className="flex rounded-xl p-8 shadow-md md:flex justify-center">
        <div
          className="md:w-1/2 w-full"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px',
            height: '200px',
            backgroundImage: `url((link unavailable))`,
          }}
        />
        <div className="pt-6 p-8 text-center md:text-left space-y-4 md:ml-4 md:w-1/2 w-full">
          <h1 className="text-3xl font-bold text-yellow-300">PARANORMAL CAFE</h1>
          <blockquote className="border-l-4 border-sky-500 pl-4 md:pl-8">
            <p className="text-xl font-large leading-relaxed text-red-600">
              ""At PARANORMAL CAFE , our legacy is built on a passion for serving delicious, high-quality food that brings people together. our mouthwatering pizzas, fresh salads, and decadent desserts that make every moment special."
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500">Order Now and Get 10% Off!</div>
          </figcaption>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Order Now
          </button>
        </div>
      </figure>

      {/* Menu Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Pizzas */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-bold">Pizzas</h2>
          <ul>
            <li>Margherita ($12.99)</li>
            <li>Pepperoni ($14.99)</li>
            <li>Veggie Delight ($13.99)</li>
            <li>Meat Lover's ($16.99)</li>
          </ul>
        </div>

        {/* Sides */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-bold">Sides</h2>
          <ul>
            <li>Garlic Bread ($4.99)</li>
            <li>Chicken Wings ($6.99)</li>
            <li>Onion Rings ($5.99)</li>
            <li>Salad ($3.99)</li>
          </ul>
        </div>

        {/* Desserts */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-xl font-bold">Desserts</h2>
          <ul>
            <li>Tiramisu ($5.99)</li>
            <li>Cannoli ($6.99)</li>
            <li>Cheesecake ($7.99)</li>
            <li>Ice Cream ($4.99)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
