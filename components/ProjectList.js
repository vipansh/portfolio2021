
import React from "react";
const projectData = [
    {
        id: "7",
        imgUrl: "/assets/redflagai.png",
        name: "RedflagAI",
        about: "Revolutionize your legal document review process with -RedFlagAI",
        stack: ["NextTS","Supabase","GPT-3"],
        link: "https://www.redflagai.in/",
    },
    {
        id: "7",
        imgUrl: "/assets/react-doc-gpt.png",
        name: "React doc gpt",
        about: "a project that leverages OpenAI's embedding model to provide the most recent React insights.",
        stack: ["NextTS","Supabase","GPT-3"],
        link: "https://react-doc-gpt.vercel.app/",
        codeUrl: "https://github.com/vipansh/react-doc-gpt",
    },
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
        link : "https://job-listings-git-main-vipansh.vercel.app/",
        codeUrl  : "https://github.com/vipansh/Job-listings",
    },
];





export const ProjectList = () => {
    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="sm:text-4xl text-3xl font-bold title-font text-gray-900 text-center mb-12">
                    Stuff I've Built
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projectData.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => (
    <div className="w-full p-4 my-4 bg-white shadow-lg rounded-lg">
        <div className="block relative rounded-md overflow-hidden">
            <a rel="noopener noreferrer" target="_blank" href={project.link}>
                <img
                    alt={project.name}
                    className="object-cover object-center w-full h-full block max-h-60"
                    src={project.imgUrl}
                />
            </a>
        </div>
        <div className="mt-4">
            <h2 className="text-gray-900 title-font font-bold text-xl">
                {project.name}
            </h2>
            <h2 className="text-gray-800 title-font text-lg font-medium lg:min-h-14">
                {project.about}
            </h2>
            <div className="flex flex-wrap mt-2">
                {project.stack.map((stack, i) => (
                    <span className="m-1 mt-2 text-sm text-gray-700 bg-gray-200 p-1 rounded" key={i}>
                        {stack}
                    </span>
                ))}
            </div>
        </div>
        <div className="flex justify-between my-4">
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={project.link}
                className="no-underline relative m-2 py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-lg text-white font-semibold rounded-lg"
            >
                Live demo
            </a>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={project.codeUrl}
                className="no-underline m-2 py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-lg text-white font-semibold rounded-lg"
            >
                View Code
            </a>
        </div>
    </div>
);
