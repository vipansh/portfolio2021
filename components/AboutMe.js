import React from 'react'

export const AboutMe = () => {
    return (



        < section className="text-gray-300 body-font" >
            <div className="containerMd px-5 py-24 mx-auto flex flex-col md:flex-row ">
                <div className=" w-full lg:w-1/2 mb-10 lg:mb-0 rounded-lg h-1/2 overflow-hidden p-4">
                    <img alt="feature" className="object-cover object-center rounded-lg  w-full" src="assets/mypic.jpeg" />
                </div>
                <div className=" w-full flex-wrap lg:w-auto mx-4 p-4 flex justify-center align-center m-auto">
                    <div className="w-full text-xl font-medium text-center md:text-left text-text-primary sm:text-2xl md:text-3xl lg:text-4xl">About Me</div>
                    <div >
                        <p className="text-lg my-16 font-normal sm:text-xl lg:text-2xl xl:text-2-5xl text-text-secondary1">  I am a self-taught front-end developer looking for a role in an exciting company.</p>

                        <p className="text-lg my-16 font-normal sm:text-xl lg:text-2xl xl:text-2-5xl text-text-secondary1">      When writing Javscript, I prefer React.       </p>

                        <p className="text-lg my-16 font-normal sm:text-xl lg:text-2xl xl:text-2-5xl text-text-secondary1">      While I'm not coding, you'll find me reading fiction, reading Hindi literatures, or studying maths.           </p>
                    </div>
                </div>
            </div>
        </section>

    )
}
