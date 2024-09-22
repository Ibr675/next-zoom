import React from 'react';

const Page = () => {
  return (
    <div
      className="container mx-auto p-4 pt-6 mt-10"
      style={{
        backgroundImage: `url(image-14.jpg)`,
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
              backgroundImage: `url(.jpg)`,
            }}
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 md:ml-4">
            <h1 className="text-3xl font-bold text-white">Green Delights</h1>
            <p className="text-lg font-medium leading-relaxed text-white">
              Fresh, healthy salads made daily!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Greek Salad</h2>
                <p className="text-lg">Tomatoes, Cucumber, Feta, Olives</p>
                <p className="text-lg font-bold">$8.99</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Spinach & Avocado</h2>
                <p className="text-lg">Spinach, Avocado, Cherry Tomatoes, Feta</p>
                <p className="text-lg font-bold">$10.99</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Quinoa Salad Bowl</h2>
                <p className="text-lg">Quinoa, Grilled Chicken, Veggies</p>
                <p className="text-lg font-bold">$12.99</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Caprese</h2>
                <p className="text-lg">Tomatoes, Mozzarella, Basil</p>
                <p className="text-lg font-bold">$9.99</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Custom Salad</h2>
                <p className="text-lg">Choose your ingredients!</p>
                <p className="text-lg font-bold">$7.99+</p>
              </div>
            </div>
          </div>
        </figure>
        <div className="text-center mt-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Order Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;