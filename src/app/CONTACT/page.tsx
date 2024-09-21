import React from 'react';

const Page = () => {
  return (
    <div
      className="container mx-auto p-4 pt-6 mt-10"
      style={{
        backgroundImage: `url(/image-6.jpg)`,
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
                “I believe that true strength lies not in prestige or power, but in humility and genuine connection. I strive to remain grounded and approachable, recognizing that every individual has a story worth hearing and a voice worth amplifying. For me, connection is key – it's the thread that weaves communities together, fosters empathy, and sparks meaningful growth. By staying open, listening deeply, and embracing diverse perspectives, I aim to cultivate relationships built on trust, respect, and mutual understanding. Through these connections, I hope to learn, inspire, and make a positive impact, one conversation at a time."
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