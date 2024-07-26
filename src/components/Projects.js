import React from 'react';
import BFSVisual from '../assets/images/projects/BFS_VISUAL_MAIN.png';
import Codersera from '../assets/images/projects/Codersera_MAIN.png';
import ChangaBiz from '../assets/images/projects/ChangaBiz_MAIN.png';
import ChangaApp from '../assets/images/projects/ChangaApp_MAIN.png';
import CashifyMain from '../assets/images/projects/Cashify_MAIN.png';
import HeadShake from 'react-reveal/HeadShake';


const Projects = () => {
    const projects = [
        {
            title: "Cashify",
            description: "Worked on the buy section of Cashify, from the home page to the post-order journey. Cashify deals with buying, selling, and recycling refurbished devices.",
            liveLink: "https://www.cashify.in/",
            isLive: true,
            image: CashifyMain,
        },
        {
            title: "Changa App ",
            description: "Built customer-engaging features like live contests, double live stream battle, and video-based modules using FFmpeg. Developed the same app for JIO TV from scratch.",
            liveLink: "https://play.google.com/store/apps/details?id=com.bitcs.desitalent&hl=en_IN&pli=1",
            isLive: true,
            image: ChangaApp,
        },
        {
            title: "Business Changa ",
            description: "Migrated old design to new design using NextJS, Tailwind, and Sass. Ensured cross-browser compatibility and responsive UI.",
            liveLink: "https://business.changa.in/",
            isLive: true,
            image: ChangaBiz,
        },
        {
            title: "Codersera",
            description: "Created backend API for Codersera App using NestJS, TypeORM, and MySQL. Worked with route-based authentication and improved API performance.",
            liveLink: "https://codersera.com/",
            isLive: true,
            image: Codersera,
        },


        {
            title: "BFS Visualiser",
            description: "Web-based visualization of Breadth-First Search (BFS) algorithm for graph traversal.",
            liveLink: "https://devsum1.github.io/BFS-VISUALISER/",
            isLive: true,
            image: BFSVisual,
        },
        // {
        //     title: "Collective Shopping",
        //     description: "Built an e-commerce platform with MERN stack, integrating PayPal Rest SDK.",
        //     liveLink: "https://github.com/Sumit9896926322/Collective-Shopping",
        //     isLive: false,
        //     image: CollectiveShopping,
        // },


    ];

    return (
        <section id="projects" className="bg-gray-800 text-green-500 p-8">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-4">Recent Projects & Work</h1>
                <p className="text-center mb-12">Here are a few of the things I've been working on lately.</p>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 ">
                    {projects.map((project, index) => (
                        <HeadShake>
                            <div key={index}
                                 className="bg-gray-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                <div className="h-40 mb-4 flex items-center justify-center">
                                    <img  src={project.image} alt={project.title} loading={'lazy'}
                                         className="h-full w-full object-cover rounded-lg"/>
                                </div>
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                                   className="underline hover:text-blue-400">
                                    {project.isLive ? 'View Live' : 'View Source'}
                                </a>
                            </div>
                        </HeadShake>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
