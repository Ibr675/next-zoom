import React from 'react';

const Page = () => {
  return (
    <div
      className="container mx-auto p-4 pt-6 mt-10"
      style={{
        backgroundImage: `url(/image-4.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="bg-black bg-opacity-50 h-full p-4">
        <figure className="md:flex rounded-xl p-8 md:p-0 shadow-md">
          <div
            className="flex justify-center md:justify-start"
            style={{
              backgroundImage: `url(/image-5.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // width: '300px",
              height: "300px",
              borderRadius: "50%",
              margin: "auto"
            }}
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4 md:ml-4">
            <blockquote className="border-l-4 border-sky-500 pl-4 md:pl-8">
              <p className="text-lg font-medium leading-relaxed text-white">
                “As a farmer, I take pride in working the land, nurturing the soil, and cultivating life. With every sunrise, I tend to my crops with care and dedication, watching them grow and flourish under my hands. The rhythms of nature guide my days, from the planting of seeds to the harvest of fruits. I find joy in the simple, yet profound, act of coaxing sustenance from the earth, and I am grateful for the opportunity to live in harmony with the natural world, providing for my community and leaving a lasting legacy on the land I love.”
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