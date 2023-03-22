import React from 'react';

export const AboutMe = () => {
  return (
    <section className="text-gray-300 body-font">
      <div className="containerMd px-5 py-24 mx-auto flex flex-col md:flex-row">
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden p-4">
          <img alt="feature" className="object-cover object-center rounded-lg w-full h-full" src="assets/mypic.png" />
        </div>
        <div className="w-full lg:w-1/2 mx-auto p-4 flex flex-col justify-center">
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left mb-8">
            Meet Me
          </div>
          <div className="text-lg font-normal sm:text-xl lg:text-2xl xl:text-2-5xl text-text-secondary1 mb-8">
            I'm a front-end developer, which means I'm a master of turning coffee into code. I can code circles around most people, but I also know how to have fun. 
          </div>
          <div className="text-lg font-normal sm:text-xl lg:text-2xl xl:text-2-5xl text-text-secondary1 mb-8">
            When I'm not coding, you might find me at a coffee shop, sipping on something fancy and pretending to know what I'm talking about. Or maybe I'm playing chess, pretending to be a master strategist while secretly hoping my opponent makes a mistake. Either way, I'm having a good time!
          </div>
        </div>
      </div>
    </section>
  );
};
