import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-green-500  sm:p-8 h-80 pt-10">
            <Fade bottom>
                <div className="container mx-auto text-center">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold">Let's Connect</h2>
                    </div>
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="https://linkedin.com/in/dev-sumit" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition duration-300">
                            LinkedIn
                        </a>
                        <a href="https://www.instagram.com/bhandari_sumit5836/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition duration-300">
                            Instagram
                        </a>
                        <a href="mailto:writeonsumit@gmail.com" className="hover:text-green-300 transition duration-300">
                            Email
                        </a>
                    </div>
                    <div className="text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Sumit Singh. All rights reserved.</p>
                        <p className="mt-2">Made by Sumit Singh</p>
                    </div>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;
