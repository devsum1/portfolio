import React from 'react';
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaNodeJs,
    FaDatabase,
    FaFire,
    FaJenkins,
    FaServer,
    FaJava,
    FaGit,
    FaGithub,
    FaBoxOpen,
     FaSass, FaVideo, FaMobile, FaTerminal
} from 'react-icons/fa';

const Skills = () => {
    const skills = [
        // { name: 'Redux', icon: <FaRedux /> },
        // { name: 'Material UI', icon: <FaMaterialUi /> },

        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'TypeScript', icon: <FaJs /> }, // Adjust icons as needed
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Next.js', icon: <FaReact /> },
        { name: 'React Native', icon: <FaMobile /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'Tailwind CSS', icon: <FaCss3Alt /> },
        { name: 'Material UI', icon: <FaReact /> }, // Example, adjust icons accordingly
        { name: 'Sass', icon: <FaSass /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        // { name: 'Firebase', icon: <FaFirebase /> }, // Example, adjust icons accordingly
        { name: 'RTC Engine', icon: <FaVideo /> }, // Example, adjust icons accordingly
        { name: 'Git', icon: <FaGit /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Jenkins', icon: <FaJenkins /> }, // Example, adjust icons accordingly
        // { name: 'Figma', icon: <FaFigma /> }, // Example, adjust icons accordingly
        // { name: 'Zeplin', icon: <FaZeplin /> }, // Example, adjust icons accordingly
        { name: 'Node JS', icon: <FaNodeJs /> },
        { name: 'Express JS', icon: <FaServer /> },
        { name: 'MongoDB', icon: <FaDatabase /> },
        { name: 'Firebase', icon: <FaFire /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Postman', icon: <FaBoxOpen /> },


        { name: 'Webstorm', icon: <FaTerminal /> },

    ];

    return (
        <section id="skills" className="bg-gray-800 sm:p-8">
            <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                    <div key={index} className="m-2 px-4 py-2 rounded-lg shadow-xl bg-gray-950 text-green-600 flex items-center">
                        {skill.icon && <span className="mr-2">{skill.icon}</span>}
                        <span className={'text-xl'}>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
