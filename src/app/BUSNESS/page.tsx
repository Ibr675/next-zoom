import React from 'react';

const Page = () => {
  return (
    <div
      className="container mx-auto p-4 pt-6 mt-10"
      style={{
        backgroundImage: `url(image-11.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundBlendMode: 'overlay',
        animation: 'zoom-in-out 10s infinite',
      }}
    >
      <div className="bg-black bg-opacity-50 h-full p-4">
        <figure className="md:flex rounded-xl p-8 md:p-0 shadow-md">
          <div
            className="flex justify-center md:justify-start"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              margin: 'auto',
            }}
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 md:ml-4">
            <h1 className="text-3xl font-bold text-white">Pizza Palace</h1>
            <p className="text-lg font-medium leading-relaxed text-white">
              Freshly baked pizzas made with love!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Veggie Delight</h2>
                <p className="text-lg">Mushrooms, Onions, Bell Peppers</p>
                <p className="text-lg font-bold">$15.99</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Meat Lover's</h2>
                <p className="text-lg">Pepperoni, Sausage, Bacon</p>
                <p className="text-lg font-bold">$19.99</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Seafood Extravaganza</h2>
                <p className="text-lg">Shrimp, Calamari, Olives</p>
                <p className="text-lg font-bold">$22.99</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">BBQ Chicken</h2>
                <p className="text-lg">Grilled Chicken, BBQ Sauce, Red Onion</p>
                <p className="text-lg font-bold">$18.99</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Supreme</h2>
                <p className="text-lg">Pepperoni, Mushrooms, Onions, Bell Peppers</p>
                <p className="text-lg font-bold">$20.99</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Custom Pizza</h2>
                <p className="text-lg">Choose your toppings!</p>
                <p className="text-lg font-bold">$14.99+</p>
              </div>
            </div>
          </div>
        </figure>
        <div className="text-center mt-4">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Order Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;