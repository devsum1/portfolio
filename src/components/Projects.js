import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "BFS Visualiser",
            description: "Web-based visualization of Breadth-First Search (BFS) algorithm for graph traversal.",
            liveLink: "https://devsum1.github.io/BFS-VISUALISER/",
        },
        {
            title: "Collective Shopping",
            description: "Built an e-commerce platform with MERN stack, integrating PayPal Rest SDK.",
            liveLink: "https://github.com/Sumit9896926322/Collective-Shopping",
        },
    ];

    return (
        <section id="projects" className="bg-gray-800 text-green-500 p-8">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-4">MY PROJECTS</h1>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                               className="text-green-400 underline hover:text-green-300">View Live</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;


//Update social links
//Add hero bg image
//Add professional photo
//make form work
//bfs live project not working
//https://www.youtube.com/watch?v=-HeadgoqJ7A html form
