import React from 'react';
import Skills from "./Skills";
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section id="about" className="bg-gray-800 text-green-500 p-8">
            <div className="container mx-auto  py-12">
                <Fade mirror delay={300}>
                    <div className={'px-4'}>
                        <h1 className="text-4xl font-bold text-center mb-4">ABOUT ME</h1>

                        <p className="text-start text-white mb-12">
                            Hey there! I'm Sumit Singh, a passionate Software Developer-II currently working at Cashify.
                            With over 3.5+ years of professional experience, I specialize in frontend development,
                            particularly proficient in React.js, Next.js, and React Native.
                        </p>

                        <p className="text-start text-white mb-12">
                            At Cashify, I have significantly contributed to enhancing digital experiences through
                            innovative frontend solutions. I spearheaded the development of server-side rendered
                            components in Next.js for crucial e-commerce pages, resulting in improved SEO performance
                            and enhanced user engagement across platforms. Additionally, I led the integration of a
                            template builder, facilitating scalable application development and promoting code
                            reusability within our micro frontend architecture.
                        </p>

                        <p className="text-start text-white mb-12">
                            My notable achievements include the creation of a dynamic post-order journey that
                            effectively reduced support tickets by 40%, demonstrating my ability to streamline processes
                            and enhance user satisfaction. I also played a key role in developing a responsive Next.js
                            dashboard tailored for e-commerce, which has boosted product visibility and sales
                            efficiency.
                        </p>

                        <p className="text-start text-white mb-12">
                            Throughout my career, I have adhered to agile methodologies, consistently meeting sprint
                            deadlines and leveraging tools like JIRA for efficient project management. I am currently
                            focused on migrating React components for native support to further enhance mobile
                            engagement metrics by an anticipated 25%.
                        </p>

                        <p className="text-start text-white mb-12">
                            I hold a Bachelor of Technology in Computer Science from Maharishi Markandeshwar Engineering
                            College, Ambala, Haryana, graduating with a GPA of 8.54/10. I am passionate about continuous
                            learning and hold certifications in MERN Stack Development and Front-End Web Development,
                            underscoring my commitment to staying at the forefront of technological advancements.
                        </p>

                        <p className="text-start text-white mb-12">
                            Driven by a passion for excellence and a proactive approach to problem-solving, I am poised
                            to leverage my technical expertise and leadership skills to drive innovation and deliver
                            impactful solutions in my next role.
                        </p>

                    </div>
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full lg:w-6/12 mb-8 lg:mb-0">
                            <h2 className="text-2xl font-bold mb-4">Get to know me!</h2>
                            <p className="text-white mb-4">
                                I'm passionate about Web Development and love sharing my insights with the Dev
                                Community. Connect with me on <a href="https://linkedin.com/in/dev-sumit"
                                                                 className="text-green-400 underline">LinkedIn</a> and <a
                                href="https://instagram.com/devsum1"
                                className="text-green-400 underline">Instagram</a> to stay updated on my latest projects
                                and musings.
                            </p>
                            <p className="text-white">
                                Let's explore opportunities together! I'm eager to contribute my skills and expertise to
                                new and challenging projects. Drop me a line at <a href="mailto:writeonsumit@gmail.com"
                                                                                   className="text-green-400 underline">writeonsumit@gmail.com</a> if
                                you have an exciting opportunity waiting for someone like me.
                            </p>
                        </div>
                        <div className="w-full lg:w-5/12 text-center">
                            <h2 className="text-2xl font-bold mb-4">My Skills</h2>
                            <Skills/>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default About;
