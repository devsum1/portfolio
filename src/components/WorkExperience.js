import React from 'react';
import bitcsLogo from '../assets/images/company-logo/bitcsLogo.png';
import cashifyLogo from '../assets/images/company-logo/cashify-logo.svg';
import collegeLogo from '../assets/images/company-logo/college_logo.png';
import Fade from 'react-reveal/Fade';

const experiences = [
    {
        role: "Software Developer - II",
        company: "Cashify",
        duration: "Apr 2022 – Current",
        description: " Developed server-side rendered components for e-commerce pages (home page, product detail, listing, and cart page) in Next.js, positively impacting SEO.\n Crafted responsive React components from scratch, ensuring cross-browser compatibility for a consistent user experience.\n Continuously integrated a template builder to support micro frontend architecture, facilitating scalable and modular application development.\n Solely developed dynamic post-order journey, reducing support tickets by 40%.\n Fixed production bugs by identifying issues, debugging code, and implementing timely solutions to maintain application uptime and user satisfaction..\n Led Next.js dashboard development for e-commerce, enhancing product visibility and sales efficiency. Implemented role-based authorization in React for the internal team managing sales, banners, and order tracking.\n Migrating React components for native support, expected to boost mobile engagement by 25%.\n Consistently met sprint deadlines and adhered to best practices using JIRA for ticket management, and KANBAN for releasing urgent features.",
        icon: cashifyLogo,
        link:'https://www.cashify.in/'
    },
    {
        role: "Software Developer - I",
        company: "BITCS",
        duration: "Jan 2021 - Apr 2022",
        description: " Developed user engagement features such as user contests and double battle live streaming using RTC engine and Firebase, leveraging React Native and Redux.\n Developed the same app for JioTV and got it deployed in 3 months from scratch.\n Migrated old business websites to new designs with Sass and responsive design, enhancing UI/UX for improved user experience.",
        icon: bitcsLogo,
        link: 'https://www.bitcs.in/'
    },
    {
        "role": "Student",
        "company": "Maharishi Markandeshwar Deemed to be University, Ambala, Haryana",
        "duration": "Jun 2017 - Jun 2021",
        "description": "Studied Bachelor of Technology (CSE) with a focus on developing skills in software development, algorithms, and data structures.",
        "icon": collegeLogo,
        link: 'https://www.mmumullana.org/'
    }

];

const WorkExperience = () => {
    return (
        <section id="work" className="bg-gray-900 text-gray-300 p-8">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-green-500">JOURNEY SO FAR...</h1>
                <ul className="relative">
                    {experiences.map((exp, index) => (
                        <Fade right={index % 2 !== 0} left={index % 2 === 0} key={index}>
                            <li
                                className={`mb-8 ml-12 flex items-center relative ${index % 2 === 0 ? 'justify-normal' : 'justify-end'}`}>
                                {index % 2 !== 0 &&
                                    <div className={`relative ${index % 2 === 0 ? '-left-4 mr-2' : 'left-0 ml-2'}`}>
                                        <div
                                            className={`w-4 h-4 bg-gray-200 transform rotate-45 ${index % 2 === 0 ? '-rotate-225 translate-x-1/2' : 'rotate-45 translate-x-1/2'}`}></div>
                                    </div>}
                                <div className={`w-5/12 p-4 bg-gray-200 rounded-lg shadow-lg text-gray-700`}>
                                    <a className={'flex items-start justify-between'} href={exp.link}>
                                        <div className="flex flex-col">
                                            <h2 className="text-xl font-bold">{exp.role}</h2>
                                            <p className="text-gray-700 hover:scale-200">{exp.company}</p>
                                        </div>
                                        <img className={'w-10 h-10'} src={exp.icon} alt={'work_logo'}/>
                                    </a>
                                    <p className="text-gray-500 mt-2">{exp.duration}</p>
                                    {exp.description && (
                                        <ul className="list-disc list-inside text-gray-600 mt-2">
                                            {exp.description.split('\n').map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                {index % 2 === 0 &&
                                    <div className={`relative ${index % 2 === 0 ? '-left-4 mr-2' : 'left-0 ml-2'}`}>
                                        <div
                                            className={`w-4 h-4 bg-gray-200 transform rotate-45 ${index % 2 === 0 ? '-rotate-225 translate-x-1/2' : 'rotate-45 translate-x-1/2'}`}></div>
                                    </div>}
                            </li>
                        </Fade>
                    ))}
                    <div
                        className="absolute h-full border-l-2 border-gray-200 top-0 left-1/2 transform -translate-x-1/2"></div>
                </ul>
            </div>
        </section>
    );
};

export default WorkExperience;
