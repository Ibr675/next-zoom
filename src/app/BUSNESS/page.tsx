import React from 'react';

const Page = () => {
  return (
    <div
      className="container mx-auto p-4 pt-6 mt-10 h-screen"
      style={{
        backgroundImage: `url(/image-4.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        animation: 'zoom-in-out 10s infinite',
        // alt: 'Background image',
      }}
    >
      <div className="bg-black bg-opacity-50 h-full p-4">
        <figure className="flex rounded-xl p-8 shadow-md md:flex justify-center">
          <div
            className="md:w-1/2 w-full"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '20px',
              height: '200px',
              backgroundImage: `url(/image-4.jpg)`,
            }}
          />
          <div className="pt-6 p-8 text-center md:text-left space-y-4 md:ml-4 md:w-1/2 w-full">
            <blockquote
              className="border-l-4 border-sky-500 pl-4 md:pl-8"
              aria-label="Quote from Ibrahim Cheema"
            >
              <p className="text-xl font-medium leading-relaxed text-white">
                {"Cotton season is finally here, and our fields are bursting with fluffy white gold. The months of meticulous planning, planting, and nurturing have paid off as the cotton plants stretch towards the sky, their bolls ripe and ready for harvest. The air is filled with the sweet scent of blooming cotton, and the warm sunshine casts a golden glow over our land. Our team works tirelessly to carefully hand-pick the cotton, ensuring every fiber is collected with precision and care. "}
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500">IBRAHIM CHEEMA</div>
              <div className="text-red-400">RAHIMYARKAHN</div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Page;