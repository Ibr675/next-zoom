import React from 'react';

const Page = () => {
  return (
    <div
      className="container mx-auto p-4 pt-6 mt-10"
      style={{
        backgroundImage: `url(/image1.jpg)`,
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
            <blockquote className="border-l-4 border-sky-500 pl-4 md:pl-8">
              <p className="text-lg font-medium leading-relaxed text-white">
                “A good home is more than just a physical structure; it's a sanctuary that nurtures the soul. It's a place where love resides, memories are created, and laughter echoes through the halls. A good home is where warmth and comfort envelop you, making you feel safe and at peace. Its walls bear witness to countless moments of joy, tears, and growth, and its doors open to welcome loved ones and new experiences. With every step inside, you feel a sense of belonging, a sense of being exactly where you're meant to be. A good home is a haven that rejuvenates, inspires, and connects us to ourselves, our loved ones, and the world around us.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500">
                IBRAHIM CHEEMA
              </div>
              <div className="text-red-400">
                RAHIMYARKAHN
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Page;