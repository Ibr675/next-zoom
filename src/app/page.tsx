import React from 'react';

const Page = () => {
  return (
    <div
      className="container mx-auto p-4 pt-6 mt-10"
      style={{
        backgroundImage: `url(/image-8.jpg)`,
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
                “Hello, I'm Ibrahim, a curious and ambitious learner under the guidance of Sir Asif, a renowned expert in Generative AI. With a strong passion for innovation and technological advancement, I am dedicated to mastering the art of generating intelligent solutions. Through Sir Asif's mentorship, I am gaining expertise in harnessing the potential of AI to create, improve, and transform. I look forward to exploring the vast possibilities of Generative AI and making meaningful contributions to this exciting field."
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