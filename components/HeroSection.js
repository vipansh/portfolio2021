import React from 'react';

export const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font container mx-auto">
      <div className="containerMd mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hello 👋
            <br className="hidden lg:inline-block" />
            I'm Vipansh Thakur
            <br className="inline-block" />
            A Front End Developer
          </h1>
          <p className="mb-8 leading-relaxed">I specialize in building responsive and interactive web applications using HTML, CSS, and JavaScript. I have experience working with React and other web development frameworks. If you have a project in mind or just want to say hello, feel free to get in touch!</p>
          <div className="flex justify-center relative z-10">
            <a className="cursor-pointer inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href="https://drive.google.com/file/d/1sY2DeFGH8fsa6_bdiQ9EAkxfnbjIosAg/view?usp=sharing" target="_blank">
              My Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="relative object-cover object-center rounded-full border-8 border-cyan-200 cursor-none z-10" alt="hero" src="assets/mypic.png" />
        </div>
      </div>
    </section>
  );
};
