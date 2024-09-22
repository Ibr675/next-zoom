import React from 'react';

const SweetTreats = () => {
  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <div
        className="bg-black bg-opacity-50 h-full p-4"
        style={{
          backgroundImage: `url(image-15.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          backgroundBlendMode: 'overlay',
        }}
      >
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
            // alt="Delicious Cake Image"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 md:ml-4">
            <h1 className="text-3xl font-bold text-white">Sweet Delights Shop</h1>
            <p className="text-lg font-medium leading-relaxed text-white">
              Indulge in our sweet treats!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Ice Cream Flavors</h2>
                <ul>
                  <li>
                    <span className="text-lg font-bold">Vanilla</span>
                    <span className="text-lg"> ($3.99)</span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">Chocolate</span>
                    <span className="text-lg"> ($3.99)</span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">Strawberry</span>
                    <span className="text-lg"> ($4.99)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Cakes & Cupcakes</h2>
                <ul>
                  <li>
                    <span className="text-lg font-bold">Chocolate Lava Cake</span>
                    <span className="text-lg"> ($5.99)</span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">Red Velvet Cupcake</span>
                    <span className="text-lg"> ($4.99)</span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">Custom Cake</span>
                    <span className="text-lg"> (Starting at $29.99)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <h2 className="text-xl font-bold">Special Deals</h2>
                <ul>
                  <li>
                    <span className="text-lg font-bold">Buy 1 Get 1 Free Ice Cream</span>
                    <span className="text-lg"> (Monday only)</span>
                  </li>
                  <li>
                    <span className="text-lg font-bold">Free Cupcake with Cake Purchase</span>
                    <span className="text-lg"> (Tuesday only)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </figure>
        <div className="text-center mt-4">
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
            Order Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SweetTreats;