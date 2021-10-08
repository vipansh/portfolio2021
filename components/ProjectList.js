import { data } from "autoprefixer";
import React from "react";

export const ProjectList = () => {
    const data = [
        {
            id: "6",
            imgUrl: "/assets/merngsocialmedia.png",
            name: "Uplode Status",
            about: "An MERN social media app",
            stack: ["ReactJS","Graphql","MongoDB"],
            codeUrl: "https://github.com/vipansh/merng-socialmedia",
            link: "https://merng-socialmedia.vercel.app/",
        },
        {
            id: "1",
            imgUrl: "/assets/dukan.png",
            name: "My Dukan",
            about: "An eCommerce Store",
            stack: ["ReactJS"],
            codeUrl: "https://github.com/vipansh/mydukan",
            link: "https://mydukan-vipansh.vercel.app/",
        },
        {
            id: "2",
            imgUrl: "/assets/socialmedia.png",
            name: "Social Media App",
            about:
                "It's a social media app where you can create an account, post Images, like & comment on other's posts. Did this project to learn about CURD operation.",
            stack: ["ReactJS", "Firebase"],
            codeUrl: "https://github.com/vipansh/social-media-app",
            link: "https://social-media-app-vipansh.vercel.app/",
        },
        {
            id: "3",
            imgUrl: "/assets/meform.png",
            name: "Me Form",
            about:
                "This is a project where users can create and manage the survey. Create an account and start taking surveys ",
            stack: ["ReactJS", "Firebase"],
            link: "https://my-form-one.vercel.app/",
            codeUrl: "https://github.com/vipansh/my-form",
        },
        {
            id: "4",
            imgUrl: "/assets/movieticket.png",
            name: "Movie Booking",
            about: "Users can book a movie ticket and see their bookings.",
            stack: ["ReactJS"],
            codeUrl: "https://github.com/vipansh/movie-ticket-",
            link: "https://movie-ticket-wheat.vercel.app/",
        },
        {
            id: "5",
            imgUrl: "/assets/lightout.png",
            name: "Light out Game",
            about:
                "Lights Out is a puzzle game consisting of a grid of lights. Click on any of them to turn it and the four direct neighbouring lights off or on.",

            stack: ["ReactJS"],
            link: "https://light-out-game-vipansh.vercel.app/",
            codeUrl: "https://github.com/vipansh/light-out-game",
        },
        {
            id: "7",
            imgUrl: "/assets/spacex.png",
            name: "SpaceX Dashbord",
            about: "An Dashbord Made with the help of SpaceX API",
            stack: ["ReactJS"],
            codeUrl: "https://github.com/vipansh/spacex-internship-challenge-for-vipansh",
            link: "https://spacex-internship-challenge-for-vipansh.vercel.app/",
        },
        {
            id: "8",
            imgUrl: "/assets/desktop-design.png",
            name: "Job listings with filtering",
            about: "In this challenge by frontendmentor.io,using JavaScript to filter out jobs based on the categories selected.",
            stack: ["ReactJS"],
            codeUrl: "https://job-listings-git-main-vipansh.vercel.app/",
            link: "https://github.com/vipansh/Job-listings",
        },
    ];

    return (
        <section className="text-gray-300 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900    flex justify-center align-center my-4">
                    Stuff I've Built
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.map((data, i) => {
                        return (
                            <div className="w-full  md:p-4 my-4  " key={i}>
                                <div className="block relative  rounded-md overflow-hidden">
                                    <a rel="noopener noreferrer" target="_blank" href={data.link}>
                                        {" "}
                                        <img
                                            alt={data.name}
                                            className="object-cover object-center w-full h-full block max-h-80"
                                            src={data.imgUrl}
                                        />
                                    </a>
                                </div>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font  font-bold text-xl ">
                                        {data.name}
                                    </h2>
                                    <h2 className="text-gray-800 title-font text-lg font-medium lg:min-h-14">
                                        {data.about}
                                    </h2>
                                    {data.stack.map((stack, i) => {
                                        return (
                                            <span className="m-1 text-sm text-gray-700" key={i}>
                                                {stack}
                                            </span>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-between my-2">
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={data.link}
                                        className="no-underline relative   py-2 px-4 md:px-8 bg-gray-800 text-lg  text-red-100 rounded-lg"
                                    >
                                        <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-purple-400 opacity-75"></span>
                                        Live demo
                                    </a>
                                    <a
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href={data.codeUrl}
                                        className="no-underline  py-2 px-4 md:px-8 bg-gray-800 text-lg  text-red-100 rounded-lg "
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
